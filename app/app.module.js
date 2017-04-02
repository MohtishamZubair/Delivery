"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
//import { AppPopUpComponent, NgbdModalContent } from './app-popup.component';
var app_component_1 = require('./app.component');
var delivery_manage_component_1 = require('./delivery-manage.component');
var add_delivery_component_1 = require('./add-delivery.component');
var settings_component_1 = require('./settings.component');
var loggingerrorhandler_1 = require('./services/loggingerrorhandler');
var delivery_service_1 = require('./services/delivery.service');
var settings_1 = require('./models/settings');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                ng_bootstrap_1.NgbModule.forRoot(),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                delivery_manage_component_1.DeliveryManageComponent,
                add_delivery_component_1.AddDeliveryComponent,
                settings_component_1.SettingsComponent,
            ],
            //entryComponents: [NgbdModalContent],
            bootstrap: [app_component_1.AppComponent],
            providers: [{ provide: core_1.ErrorHandler, useClass: loggingerrorhandler_1.LoggingErrorHandler },
                delivery_service_1.DeliveryService,
                settings_1.Settings,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map