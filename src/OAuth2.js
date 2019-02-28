let moment = require("moment");


export class OAuth2 {

    constructor(){

        this.clientAuth ={
            "verifiedCEmail": true,
                "clientId": "100000002-TCdM7gkyR0btu6OkZCgF1G6Ee4vyBuqQLYyF4P4JWVfQn.oauth2user.aabo.tech",
                "cEmail": "backend@proindiemusic.mx",
                "fullName": "Backend Connector",
                "clientSecret": "U5MV4wuCfmQ4dQDxQyLRQpdYAUaN7Y",
                "redirect_uri": [
                "https://proindiemusic-backend.mybluemix.net"
            ],
                "status": "true",
                "oauth2": "ttps://proindiemusic-oauth.mybluemix.net/"
        };
    }

    async onSetRequest(body) {
        await fetch(`${this.clientAuth.oauth2}/oauth2/token`, {
            method: "POST",
            body: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then(res => {
                status = res.status;
                return res.json();
            })
            .then(res => [status, res])
            .catch(error => error);
    }

    async onCheckRequest(token) {
        return await fetch(`${this.clientAuth.oauth2}/oauth2/user`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then(res => {
                status = res.status;
                return res.json();
            })
            .then(res => [status, res])
            .catch(error => error);
    }

    async getToken() {
        try {
            const parent = this;
            const access_token = localStorage.getItem('access_token');
            const profile = localStorage.getItem('profile');
            const refresh_token = localStorage.getItem('refresh_token');
            const expires_in = localStorage.getItem('expires_in');

            if (expires_in && access_token && refresh_token && profile) {
                const time = moment(expires_in);
                if (time.isAfter(moment())) {
                    return{
                        access_token,
                        profile: JSON.parse(profile)
                    };
                }
            }

            if (access_token) {

                return parent.onCheckRequest(access_token).then(function (valid) {

                    if (valid[0] === 200) {
                        return {
                            access_token,
                            profile: JSON.parse(profile)
                        };
                    } else if ((valid[0] === 400 || valid[0] === 401) && refresh_token) {
                        const body = {
                            refresh_token: refresh_token,
                            grant_type: "refresh_token",
                            client_id: parent.clientAuth.clientId,
                            client_secret: parent.clientAuth.clientSecret
                        };

                        const searchParams = Object.keys(body).map((key) => {
                            return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]);
                        }).join('&');

                        return parent.onSetRequest(searchParams).then(function (valid) {

                            if (valid[0] === 200) {
                                localStorage.setItem("access_token", valid[1]["access_token"]);

                                return {
                                    access_token: valid[1]["access_token"],
                                    profile: JSON.parse(localStorage.getItem("profile"))
                                };
                            } else {
                                parent.clearToken();
                                return {
                                    access_token: null,
                                    profile: null
                                };
                            }
                        }).catch(() => {
                            parent.clearToken();
                            return {
                                access_token: null,
                                profile: null
                            };
                        });
                    }
                }).catch(() => {
                    parent.clearToken();
                    return {
                        access_token: null,
                        profile: null
                    };
                });
            } else {
                parent.clearToken();
                return {
                    access_token: null,
                    profile: null
                };
            }

        } catch (err) {
            parent.clearToken();
            return {
                access_token: null,
                profile: null
            };
        }
    }

    clearToken() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('profile');
        localStorage.removeItem('expires_in');
    }
}