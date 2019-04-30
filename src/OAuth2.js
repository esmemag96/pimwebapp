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
            "oauth2": "http://localhost:9000/"
        };
    }

    async onSetRequest(body) {
        return await fetch(`${this.clientAuth.oauth2}oauth2/token`, {
            method: "POST",
            body: body,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(function(response) {
            return response.json();
        }).then(function(myJson) {
            return myJson
        }).catch(error => error);
    }

    async onCheckRequest(token) {
        let status=400;
        return await fetch(`${this.clientAuth.oauth2}oauth2/user`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        }).then(function(response) {
            status = response.status;
            return response.json();
        }).then(function(myJson) {
            return [status, myJson]
        }).catch(error => error);
    }

    async login(email, password, admin=false){

        const parent = this;

        let body = {
            redirect_uri: parent.clientAuth.redirect_uri[0],
            client_id: parent.clientAuth.clientId,
            state: uuid.v4(),
            email: email,
            password: password
        };

        return await parent.apiService.post({
            url: `${this.clientAuth.oauth2}oauth2/auth`,
            params: body,
            headers: {
                "Content-Type": "application/json",
            }
        }).then((respuesta) => {

            if(respuesta.code === 400) {
                return respuesta;
            }

            body = {
                code: respuesta.payload.code,
                grant_type: "authorization_code",
                redirect_uri: parent.clientAuth.redirect_uri[0],
                client_id: parent.clientAuth.clientId,
                client_secret: parent.clientAuth.clientSecret
            };

            if(admin){
                body["scope"] = "ADMIN"
            }

            let time = moment();
            return parent.apiService.post({
                url: `${this.clientAuth.oauth2}oauth2/token`,
                params: body,
                headers: {
                    "Content-Type": "application/json",
                }
            }).then((res) => {
                console.log("Login", res);
                localStorage.setItem('access_token', res.access_token);
                localStorage.setItem('refresh_token', res.refresh_token);
                time=time.add(parseInt(res.expires_in,10)-120, "seconds");
                localStorage.setItem("expires_in",time.format());
                parent.onCheckRequest(res.access_token).then(function (valid){
                    console.log("User", valid);
                    localStorage.setItem("profile", JSON.stringify(valid[1]));
                }).catch((err) => {
                    console.log("Error en user", err)
                });
                return respuesta;
            }).catch((err) => {
                console.log(err)
            })
        }).catch((err) => {
            console.log(err)
        })
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
                            access_token: access_token,
                            profile: JSON.parse(profile)
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

                            return parent.onSetRequest(body).then(function (valid) {
                                if (valid[0] === 200) {
                                    localStorage.setItem("access_token", valid[1]["access_token"]);
                                    return resolve({
                                        access_token: valid[1]["access_token"],
                                        profile: JSON.parse(profile)
                                    });
                                } else {
                                    parent.clearToken();
                                    return resolve({
                                        access_token: null,
                                        profile: null
                                    });
                                }
                            }).catch((err) => {
                                console.log("OAuth:170", err);
                                parent.clearToken();
                                return resolve({
                                    access_token: null,
                                    profile: null
                                });
                            });
                        }
                    }).catch((err) => {
                        console.log("OAuth:179", err);
                        parent.clearToken();
                        return resolve({
                            access_token: null,
                            profile: null
                        });
                    });
                } else {
                    parent.clearToken();
                    return resolve({
                        access_token: null,
                        profile: null
                    });
                }

            } catch (err) {
                console.log("OAuth:195", err);
                parent.clearToken();
                return resolve({
                    access_token: null,
                    profile: null
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