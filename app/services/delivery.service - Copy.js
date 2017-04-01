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
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/mergeMap');
var LoggingExceptionHandler = (function () {
    function LoggingExceptionHandler() {
    }
    LoggingExceptionHandler.prototype.handleError = function (error) {
        // do something with the exception
    };
    return LoggingExceptionHandler;
}());
var MyModule = (function () {
    function MyModule() {
    }
    MyModule = __decorate([
        NgModule({
            providers: [{ provide: ErrorHandler, useClass: MyErrorHandler }]
        }), 
        __metadata('design:paramtypes', [])
    ], MyModule);
    return MyModule;
}());
//# sourceMappingURL=delivery.service - Copy.js.map