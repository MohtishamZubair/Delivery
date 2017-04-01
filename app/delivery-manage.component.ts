import { Component, OnInit } from '@angular/core';


import { DeliveryManage } from './models/delivery-manage';
import { DeliveryService } from './services/delivery.service';

@Component({
    moduleId: module.id,
    selector: "delivery-manage",
    templateUrl: './html/delivery-manage.component.html',
    styleUrls: ['./content/delivery-manage.component.css']
})

export class DeliveryManageComponent implements OnInit {
    deliveries: DeliveryManage[] = [];
    errorMessage: string;

    constructor(private service: DeliveryService) { }

    ngOnInit(): void {
        //throw new Error('this should be caught red handed!');
        this.getDeliveries();       
    }

    getDeliveries() {
        // this.service.getManageDeliveriesAsync(this);
        this.service.getManageDeliveriesAuth()
            .subscribe(
            ds => this.deliveries = ds,
            error => { throw new Error(<any>error); });
    }
}
