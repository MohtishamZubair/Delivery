import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { DeliveryManage } from './models/delivery-manage';
import { DeliveryService } from './services/delivery.service';

@Component({
    moduleId:module.id,
    selector: "add-delivery",
    templateUrl:'./html/add-delivery.component.html',
    styleUrls: ['./content/add-delivery.component.css']
})  

export class AddDeliveryComponent  {
    newDelivery = new DeliveryManage();
    successDelivery: any;
    actionMessage: string = 'Delivery added successfully!';
    alertClass: string = 'success';

    model: NgbDateStruct;

    constructor(private service: DeliveryService) {}    

    addDelivery(): void  {
        if (this.model) {
            this.newDelivery.deliveryDate = new Date(this.model.year, this.model.month - 1, this.model.day);
            let alertMessage = ` Delivery Date is : ${this.newDelivery.deliveryDate} and selected is  month : ${this.model.month} & day is ${this.model.day} `;
            // alert(alertMessage);
        }
        this.service.addDelivery(this.newDelivery)
            .subscribe(
            d => this.successDelivery = d,
            e => { this.successDelivery = e, this.alertClass = 'danger'; this.actionMessage = <any>e;}
            ); 
    }
    closeAlert():void {
        this.successDelivery = null;
    }

}