import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { TokenAccess } from '../models/token-access';
import { DeliveryManage } from '../models/delivery-manage';
import { Settings } from '../models/settings';
import { Delivery } from '../models/delivery';

import { DeliveryManageComponent } from '../delivery-manage.component';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';


@Injectable()
export class DeliveryService {
    //shouldb be configurable
    private serviceUrl = 'http://localhost:65082/api/Delivery';
    private url = `${this.serviceUrl}/Delivery`;    
    deliveries: Observable<DeliveryManage[]>;

    constructor(
        private httpClient: Http,
        private settings: Settings) {}

    getManageDeliveriesAuth(): Observable<any[]> {       

        if (!(this.settings.isTokenValid())) {                      
           return this.GetTokenAsync().
               mergeMap((t) => this.getManageDeliveries(t));
       }
       else {
           return this.getManageDeliveries();
       }
    }    

    getManageDeliveries(token: TokenAccess = null): Observable<any[]> {

        if (token)
            this.settings.setToken(token);

        return this.httpClient.get(this.url, this.getAuthRequestOptions())
            .map(this.extractData);
           // .catch(this.handleError);
    }

    getManageDeliveriesAsync(dc: DeliveryManageComponent): void {

        if (!(this.settings.isTokenValid())) {
            this.GetTokenAsync().subscribe(
                t => {
                    this.settings.setToken(t);
                    this.getManageDeliveries().subscribe(
                        dvs => dc.deliveries = dvs,
                        e => console.error(<any>e)
                    );
                });
        }
        else {
            this.getManageDeliveries().subscribe(
                dvs => dc.deliveries = dvs,
                e => console.error(<any>e)
            );
        }    
    }

    GetTokenAsync(): Observable<TokenAccess> {
        if (!this.settings.email)
            return;
        let headers = new Headers(
            { 'Content-type': 'application/x-www-form-urlencoded' }
        );
        // not working
        let tokenInfo = {
            "grant_type": "password",
            "username": this.settings.email,
            "password": this.settings.password,
        };

        let tokenArgs = `grant_type=password&username=${this.settings.email}&password=${this.settings.password}`;
        // working
        //let tokenString = 'grant_type=password&username=agent@shop.com&password=password';
        let options = new RequestOptions({ headers: headers });
        
        return this.httpClient.post(this.settings.authUrl, tokenArgs, options)
            .map(this.extractTokenData);
            //.catch(this.handleError);        
    }

    getDeliveries(): Observable<Delivery[]> {
        return this.httpClient.get(this.serviceUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addDelivery(delivery: any): Observable<any> {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.httpClient.post(this.serviceUrl, delivery, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private getAuthRequestOptions(): RequestOptions {
       
        let tokenValue = `Bearer ${this.settings.token.access_token}`;
        let headers = new Headers({ 'Accept': 'application/json' });
        headers.append('Authorization', tokenValue );

        console.log('=----------token is :' + this.settings.token.access_token);
        let options = new RequestOptions({ headers: headers });
        return options;
    }

    private extractTokenData(res: Response) {        
        return res.json() || {};
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        // need persistant logging 
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}