"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SettingsComponent = (function () {
    //< div > {{new Date(appSettings.token.['.expires']) }}</div>
    //    < div > {{new Date(appSettings.token.['.expires']) > new Date() }}</div>
    ////////////////////////
    // to do's            // 
    //____________________//
    // if not set then go  __done
    // if set then prompt for password then to update
    // encryption or hashing
    ////////////////////////
    function SettingsComponent(appSettings) {
        this.appSettings = appSettings;
        this.mydate = new Date();
        this.tokenExpiryDate = new Date();
        this.tokenExpiryLessTime = new Date();
        this.expiryDateCheck = false;
        if (this.appSettings.token) {
            this.tokenExpiryDate = new Date(this.appSettings.token['.expires']);
            this.expiryDateCheck = new Date(this.tokenExpiryDate) > new Date();
            this.tokenExpiryLessTime = new Date(this.appSettings.token['.expires']);
            this.tokenExpiryLessTime.setSeconds(this.tokenExpiryDate.getSeconds() - 5);
        }
    }
    SettingsComponent.prototype.save = function () {
        this.settings = this.appSettings;
    };
    SettingsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "settings",
            templateUrl: './html/settings.component.html',
            styleUrls: ['./content/settings.component.css']
        })
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=settings.component.js.map