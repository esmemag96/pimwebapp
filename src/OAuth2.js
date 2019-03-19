/* eslint-disable */
let moment = require("moment");
let apiservice = require("./ApiService");
let uuid = require("uuid");

export class OAuth2 {

    constructor(){

        this.apiService = new apiservice.ApiService();

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
            "oauth2": "https://proindiemusic-oauth.mybluemix.net/"
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

    async login(email, password){

        const parent = this;

        let body = {
            redirect_uri: parent.clientAuth.redirect_uri[0],
            client_id: parent.clientAuth.clientId,
            state: uuid.v4(),
            email: email,
            password: password
        };

        let searchParams = Object.keys(body).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]);
        }).join('&');

        return parent.apiService.post({
            url: `https://proindiemusic-oauth.mybluemix.net/oauth2/auth`,
            params: searchParams,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        }).then((respuesta) => {
            body = {
                code: respuesta.payload.code,
                grant_type: "authorization_code",
                redirect_uri: parent.clientAuth.redirect_uri[0],
                client_id: parent.clientAuth.clientId,
                client_secret: parent.clientAuth.clientSecret
            };

            searchParams = Object.keys(body).map((key) => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]);
            }).join('&');


            

            return parent.apiService.post({
                url: `https://proindiemusic-oauth.mybluemix.net/oauth2/token`,
                params: searchParams,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            }).then((respuesta) => {
                console.log("Login", respuesta);
                localStorage.setItem('access_token', respuesta.access_token);
                localStorage.setItem('refresh_token', respuesta.refresh_token);
                localStorage.setItem('profile', JSON.stringify(respuesta.profile));
                localStorage.setItem('expires_in', respuesta.expires_in);
                return respuesta;
            });
        });
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
        const parent = this;
        return new Promise(function(resolve, reject) {
            try {
                const access_token = localStorage.getItem('access_token');
                const profile = localStorage.getItem('profile');
                const refresh_token = localStorage.getItem('refresh_token');
                const expires_in = localStorage.getItem('expires_in');

                if (expires_in && access_token && refresh_token && profile) {
                    const time = moment(expires_in);
                    if (time.isAfter(moment())) {
                        return resolve({
                            access_token
                        });
                    }
                }

                if (access_token) {

                    return parent.onCheckRequest(access_token).then(function (valid) {

                        if (valid[0] === 200) {
                            return resolve({
                                access_token
                            });
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

                                    return resolve({
                                        access_token: valid[1]["access_token"]
                                    });
                                } else {
                                    parent.clearToken();
                                    return resolve({
                                        access_token: null
                                    });
                                }
                            }).catch(() => {
                                parent.clearToken();
                                return resolve({
                                    access_token: null
                                });
                            });
                        }
                    }).catch(() => {
                        parent.clearToken();
                        return resolve({
                            access_token: null
                        });
                    });
                } else {
                    parent.clearToken();
                    return resolve({
                        access_token: null
                    });
                }

            } catch (err) {
                console.log(err);
                parent.clearToken();
                return resolve({
                    access_token: null
                });
            }
        });
    }

    clearToken() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('profile');
        localStorage.removeItem('expires_in');
    }
}