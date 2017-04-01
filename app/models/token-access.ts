
export class TokenAccess {    
    ['.expires']: Date;
    ['.issued']: Date;
    access_token: string;
    expires_in: number;
    token_type: string;
    userName: string;
    last_set = new Date();
    expired_at = new Date();
    expired_before_inSeconds = new Date();
    isFetched: boolean = false;

    configureToken(tokenInjected: TokenAccess): void {
        this['.expires'] = tokenInjected['.expires'];
        this['.issued'] = tokenInjected['.issued'];
        this.access_token = tokenInjected.access_token;
        this.expires_in = tokenInjected.expires_in;
        this.token_type = tokenInjected.token_type;
        this.userName = tokenInjected.userName;
        this.last_set = new Date();
        this.expired_at = new Date(tokenInjected['.expires']);
        this.expired_before_inSeconds = new Date(tokenInjected['.issued']);
        this.expired_before_inSeconds.setSeconds(this.expired_before_inSeconds.getSeconds() + (this.expires_in - 5));
        this.isFetched = true;
    }  
}