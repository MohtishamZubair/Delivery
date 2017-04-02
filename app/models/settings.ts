import { Injectable } from '@angular/core';
import { TokenAccess } from './token-access';
import APP_CONSTANTS = require('./app-helper');

@Injectable()
export class Settings {
    email: string = 'agent@shop.com';  
    password: string = 'password';    
    expirytime: Date;
    authUrl: string = 'http://dev-api.somee.com/api/tkn';
    token: TokenAccess;

    setToken(tokenToSet: any): void {
        if (!this.token)
            this.token = new TokenAccess();
        localStorage.setItem(APP_CONSTANTS.TOKEN_KEY, JSON.stringify(tokenToSet));
        this.token.configureToken(tokenToSet);
    }

    isTokenValid(): boolean {
        let isValid = false;
        
        if (!this.token)
        {
            let savedToken = JSON.parse(localStorage.getItem(APP_CONSTANTS.TOKEN_KEY));
            if (savedToken) {
                this.setToken(savedToken);
            }
        }

        if (this.token && this.token.expired_before_inSeconds > new Date())
            isValid = true;
        return isValid;
    }
}