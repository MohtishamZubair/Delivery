"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var settings_1 = require('../models/settings');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/mergeMap');
var DeliveryService = (function () {
    function DeliveryService(httpClient, settings) {
        this.httpClient = httpClient;
        this.settings = settings;
        //shouldb be configurable
        this.serviceUrl = 'http://localhost:65082/api/Delivery';
        this.url = this.serviceUrl + "/Delivery";
    }
    DeliveryService.prototype.getManageDeliveriesAuth = function () {
        var _this = this;
        if (!(this.settings.isTokenValid())) {
            return this.GetTokenAsync().
                mergeMap(function (t) { return _this.getManageDeliveries(t); });
        }
        else {
            return this.getManageDeliveries();
        }
    };
    DeliveryService.prototype.getManageDeliveries = function (token) {
        if (token === void 0) { token = null; }
        if (token)
            this.settings.setToken(token);
        return this.httpClient.get(this.url, this.getAuthRequestOptions())
            .map(this.extractData);
        // .catch(this.handleError);
    };
    DeliveryService.prototype.getManageDeliveriesAsync = function (dc) {
        var _this = this;
        if (!(this.settings.isTokenValid())) {
            this.GetTokenAsync().subscribe(function (t) {
                _this.settings.setToken(t);
                _this.getManageDeliveries().subscribe(function (dvs) { return dc.deliveries = dvs; }, function (e) { return console.error(e); });
            });
        }
        else {
            this.getManageDeliveries().subscribe(function (dvs) { return dc.deliveries = dvs; }, function (e) { return console.error(e); });
        }
    };
    DeliveryService.prototype.GetTokenAsync = function () {
        if (!this.settings.email)
            return;
        var headers = new http_1.Headers({ 'Content-type': 'application/x-www-form-urlencoded' });
        // not working
        var tokenInfo = {
            "grant_type": "password",
            "username": this.settings.email,
            "password": this.settings.password,
        };
        var tokenArgs = "grant_type=password&username=" + this.settings.email + "&password=" + this.settings.password;
        // working
        //let tokenString = 'grant_type=password&username=agent@shop.com&password=password';
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpClient.post(this.settings.authUrl, tokenArgs, options)
            .map(this.extractTokenData);
        //.catch(this.handleError);        
    };
    DeliveryService.prototype.getDeliveries = function () {
        return this.httpClient.get(this.serviceUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DeliveryService.prototype.addDelivery = function (delivery) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.httpClient.post(this.serviceUrl, delivery, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DeliveryService.prototype.getAuthRequestOptions = function () {
        var tokenValue = "Bearer " + this.settings.token.access_token;
        var headers = new http_1.Headers({ 'Accept': 'application/json' });
        headers.append('Authorization', tokenValue);
        console.log('=----------token is :' + this.settings.token.access_token);
        var options = new http_1.RequestOptions({ headers: headers });
        return options;
    };
    DeliveryService.prototype.extractTokenData = function (res) {
        return res.json() || {};
    };
    DeliveryService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    DeliveryService.prototype.handleError = function (error) {
        // need persistant logging 
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    DeliveryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, settings_1.Settings])
    ], DeliveryService);
    return DeliveryService;
}());
exports.DeliveryService = DeliveryService;
//# sourceMappingURL=delivery.service.js.map