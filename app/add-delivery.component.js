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
var delivery_manage_1 = require('./models/delivery-manage');
var delivery_service_1 = require('./services/delivery.service');
var AddDeliveryComponent = (function () {
    function AddDeliveryComponent(service) {
        this.service = service;
        this.newDelivery = new delivery_manage_1.DeliveryManage();
        this.actionMessage = 'Delivery added successfully!';
        this.alertClass = 'success';
    }
    AddDeliveryComponent.prototype.addDelivery = function () {
        var _this = this;
        if (this.model) {
            this.newDelivery.deliveryDate = new Date(this.model.year, this.model.month - 1, this.model.day);
            var alertMessage = " Delivery Date is : " + this.newDelivery.deliveryDate + " and selected is  month : " + this.model.month + " & day is " + this.model.day + " ";
        }
        this.service.addDelivery(this.newDelivery)
            .subscribe(function (d) { return _this.successDelivery = d; }, function (e) { _this.successDelivery = e, _this.alertClass = 'danger'; _this.actionMessage = e; });
    };
    AddDeliveryComponent.prototype.closeAlert = function () {
        this.successDelivery = null;
    };
    AddDeliveryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "add-delivery",
            templateUrl: './html/add-delivery.component.html',
            styleUrls: ['./content/add-delivery.component.css']
        }), 
        __metadata('design:paramtypes', [delivery_service_1.DeliveryService])
    ], AddDeliveryComponent);
    return AddDeliveryComponent;
}());
exports.AddDeliveryComponent = AddDeliveryComponent;
//# sourceMappingURL=add-delivery.component.js.map