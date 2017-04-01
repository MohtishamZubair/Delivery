import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DeliveryManageComponent } from './delivery-manage.component';
import { AddDeliveryComponent } from './add-delivery.component';
import { SettingsComponent } from './settings.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: "", redirectTo: "/manage", pathMatch: "full" },            
            { path: "manage", component: DeliveryManageComponent },
            { path: "settings", component: SettingsComponent },
            { path: "adddelivery", component: AddDeliveryComponent },   
            { path: "**", component: AppComponent },
        ])
    ],
    exports:[RouterModule],
})  

export class AppRoutingModule {}