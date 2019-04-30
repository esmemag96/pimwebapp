/* eslint-disable */
let axios = require("axios");

export class ApiService {

    constructor() {
        this.axiosClient = axios.default.create({});
    }

    // I perform a GET request with the given options.
    async get(options) {
        return await this.axiosClient.request({
            method: 'get',
            url: options.url,
            params: options.params,
            headers: options.headers
        }).then((response) => {
            return response.data;
        }).catch((err) => {
            console.log("Error", options, err);
            return err.message.response.data
        });
    }

    // I perform a PUT request with the given options.
    async put(options) {
        return await this.axiosClient.request({
            method: 'put',
            url: options.url,
            data: options.params,
            headers: options.headers
        }).then((response) => {
            return response.data;
        }).catch((err) => {
            console.log("Error", options, err);
            return err.message.response.data
        });
    }

    // I perform a POST request with the given options.
    async post(options) {
        return await this.axiosClient.request({
            method: 'post',
            url: options.url,
            data: options.params,
            headers: options.headers
        }).then((response) => {
            return response.data;
        }).catch((err) => {
            console.log("Error", options, err);
            return err.response.data;
        });
    }


    // I perform a POST request with the given options.
    async delete(options) {
        return await this.axiosClient.request({
            method: 'delete',
            url: options.url,
            data: options.params,
            headers: options.headers
        }).then((response) => {
            return response.data;
        }).catch((err) => {
            console.log("Error", options, err);
            return err.response.data;
        });
    }
}
