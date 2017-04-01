import { Component } from '@angular/core';
import { Settings } from './models/settings';

@Component({
    moduleId:module.id,
    selector: "settings",
    templateUrl:'./html/settings.component.html',
    styleUrls: ['./content/settings.component.css']
})  

export class SettingsComponent  {
    settings : Settings;
    errorMessage: string
    mydate = new Date();    
    tokenExpiryDate: Date = new Date();
    tokenExpiryLessTime: Date = new Date();
    expiryDateCheck: Boolean = false;    

    
        //< div > {{new Date(appSettings.token.['.expires']) }}</div>
        //    < div > {{new Date(appSettings.token.['.expires']) > new Date() }}</div>

    ////////////////////////
    // to do's            // 
    //____________________//
    // if not set then go  __done
    // if set then prompt for password then to update
    // encryption or hashing
    ////////////////////////

    constructor(private appSettings: Settings) {
        if (this.appSettings.token) {
            
            this.tokenExpiryDate = new Date(this.appSettings.token['.expires']);
            this.expiryDateCheck = new Date(this.tokenExpiryDate) > new Date();
            this.tokenExpiryLessTime = new Date(this.appSettings.token['.expires']);
            this.tokenExpiryLessTime.setSeconds(this.tokenExpiryDate.getSeconds() - 5);

        }
    }    

    save(): void{
        this.settings = this.appSettings
    }
}