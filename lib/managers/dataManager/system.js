"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemDataManager = void 0;
const utilsManager_1 = require("../utilsManager");
class SystemDataManager {
    constructor(publicIndexingRelay) {
        this._publicIndexingRelay = publicIndexingRelay;
    }
    get privateKey() {
        return this._privateKey;
    }
    set privateKey(privateKey) {
        this._privateKey = privateKey;
    }
    async fetchListOfValues(url) {
        const authHeader = utilsManager_1.SocialUtilsManager.constructAuthHeader(this._privateKey);
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: authHeader
            }
        });
        let result = await response.json();
        if (result.requestId) {
            const { data } = await utilsManager_1.SocialUtilsManager.getPollResult(this._publicIndexingRelay, result.requestId, authHeader);
            if (data)
                result.data = data;
        }
        return result;
    }
    async fetchRegions() {
        let regions = [];
        const url = `${this._publicIndexingRelay}/regions`;
        const result = await this.fetchListOfValues(url);
        if (result.success) {
            regions = result.data;
        }
        return regions;
    }
    async fetchCurrencies() {
        let currencies = [];
        const url = `${this._publicIndexingRelay}/currencies`;
        const result = await this.fetchListOfValues(url);
        if (result.success) {
            currencies = result.data;
            currencies.push({
                name: "Rewards Points",
                code: "POINTS",
                type: "rewards-points"
            });
        }
        return currencies;
    }
    async fetchCryptocurrencies() {
        let cryptocurrencies = [];
        const url = `${this._publicIndexingRelay}/cryptocurrencies`;
        const result = await this.fetchListOfValues(url);
        if (result.success) {
            cryptocurrencies = result.data;
        }
        return cryptocurrencies;
    }
    async getUserStakedAmount(pubkey) {
        let staked = 0;
        const url = `${this._publicIndexingRelay}/user-staked/${pubkey}`;
        const result = await this.fetchListOfValues(url);
        if (result.success) {
            staked = result.data.staked;
        }
        return staked;
    }
}
exports.SystemDataManager = SystemDataManager;
