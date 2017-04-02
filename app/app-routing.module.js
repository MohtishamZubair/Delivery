"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var delivery_manage_component_1 = require('./delivery-manage.component');
var add_delivery_component_1 = require('./add-delivery.component');
var settings_component_1 = require('./settings.component');
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot([
                    { path: "", redirectTo: "/manage", pathMatch: "full" },
                    { path: "manage", component: delivery_manage_component_1.DeliveryManageComponent },
                    { path: "settings", component: settings_component_1.SettingsComponent },
                    { path: "adddelivery", component: add_delivery_component_1.AddDeliveryComponent },
                    { path: "**", component: app_component_1.AppComponent },
                ])
            ],
            exports: [router_1.RouterModule],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map