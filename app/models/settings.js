"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var token_access_1 = require('./token-access');
var APP_CONSTANTS = require('./app-helper');
var Settings = (function () {
    function Settings() {
        this.email = 'agent@shop.com';
        this.password = 'password';
        this.authUrl = 'http://dev-api.somee.com/api/tkn';
    }
    Settings.prototype.setToken = function (tokenToSet) {
        if (!this.token)
            this.token = new token_access_1.TokenAccess();
        localStorage.setItem(APP_CONSTANTS.TOKEN_KEY, JSON.stringify(tokenToSet));
        this.token.configureToken(tokenToSet);
    };
    Settings.prototype.isTokenValid = function () {
        var isValid = false;
        if (!this.token) {
            var savedToken = JSON.parse(localStorage.getItem(APP_CONSTANTS.TOKEN_KEY));
            if (savedToken) {
                this.setToken(savedToken);
            }
        }
        if (this.token && this.token.expired_before_inSeconds > new Date())
            isValid = true;
        return isValid;
    };
    Settings = __decorate([
        core_1.Injectable()
    ], Settings);
    return Settings;
}());
exports.Settings = Settings;
//# sourceMappingURL=settings.js.map