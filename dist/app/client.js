"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class StreetManagerGeoJSONClient {
    constructor(config) {
        this.config = config;
        this.axios = axios_1.default.create({
            baseURL: this.config.baseURL,
            timeout: this.config.timeout
        });
    }
    status() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpHandler(() => this.axios.get('/status'));
        });
    }
    getWorks(requestConfig, getWorksRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.generateRequestConfig(requestConfig);
            config.params = getWorksRequest;
            return this.httpHandler(() => this.axios.get(`/works`, config));
        });
    }
    getActivities(requestConfig, getActivitiesRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.generateRequestConfig(requestConfig);
            config.params = getActivitiesRequest;
            return this.httpHandler(() => this.axios.get(`/activities`, config));
        });
    }
    getForwardPlans(requestConfig, getForwardPlansRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.generateRequestConfig(requestConfig);
            config.params = getForwardPlansRequest;
            return this.httpHandler(() => this.axios.get(`/forward-plans`, config));
        });
    }
    getHs2ActLimits(requestConfig, getHs2ActLimitsRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.generateRequestConfig(requestConfig);
            config.params = getHs2ActLimitsRequest;
            return this.httpHandler(() => this.axios.get(`/hs2-act-limits`, config));
        });
    }
    httpHandler(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield request();
                if (response.data) {
                    return response.data;
                }
            }
            catch (err) {
                if (err && err.response && err.response.status) {
                    err.status = err.response.status;
                }
                return Promise.reject(err);
            }
        });
    }
    generateRequestConfig(config) {
        let headers = {};
        if (config.token) {
            headers['token'] = config.token;
        }
        if (config.frontendToken) {
            headers['frontendToken'] = config.frontendToken;
        }
        headers['request-id'] = config.requestId;
        return { headers: headers, params: {} };
    }
}
exports.StreetManagerGeoJSONClient = StreetManagerGeoJSONClient;
