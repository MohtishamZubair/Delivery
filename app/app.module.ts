import { NgModule,ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import { AppPopUpComponent, NgbdModalContent } from './app-popup.component';
import { AppComponent } from './app.component';
import { DeliveryManageComponent } from './delivery-manage.component';
import { AddDeliveryComponent } from './add-delivery.component';
import { SettingsComponent } from './settings.component';

import { LoggingErrorHandler } from './services/loggingerrorhandler';
import { DeliveryService } from './services/delivery.service';
import { Settings} from './models/settings';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DeliveryManageComponent,
        AddDeliveryComponent,
        SettingsComponent,
        //NgbdModalContent,
        //AppPopUpComponent,
    ],
    //entryComponents: [NgbdModalContent],
    bootstrap: [AppComponent],
    providers: [{ provide: ErrorHandler, useClass: LoggingErrorHandler },        
        DeliveryService,
        Settings,        
    ]
})  

export class AppModule {}