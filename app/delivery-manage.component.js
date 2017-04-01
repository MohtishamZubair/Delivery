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
var delivery_service_1 = require('./services/delivery.service');
var DeliveryManageComponent = (function () {
    function DeliveryManageComponent(service) {
        this.service = service;
        this.deliveries = [];
    }
    DeliveryManageComponent.prototype.ngOnInit = function () {
        //throw new Error('this should be caught red handed!');
        this.getDeliveries();
    };
    DeliveryManageComponent.prototype.getDeliveries = function () {
        var _this = this;
        // this.service.getManageDeliveriesAsync(this);
        this.service.getManageDeliveriesAuth()
            .subscribe(function (ds) { return _this.deliveries = ds; }, function (error) { throw new Error(error); });
    };
    DeliveryManageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "delivery-manage",
            templateUrl: './html/delivery-manage.component.html',
            styleUrls: ['./content/delivery-manage.component.css']
        }), 
        __metadata('design:paramtypes', [delivery_service_1.DeliveryService])
    ], DeliveryManageComponent);
    return DeliveryManageComponent;
}());
exports.DeliveryManageComponent = DeliveryManageComponent;
//# sourceMappingURL=delivery-manage.component.js.map