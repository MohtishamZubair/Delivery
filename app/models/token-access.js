"use strict";
var TokenAccess = (function () {
    function TokenAccess() {
        this.last_set = new Date();
        this.expired_at = new Date();
        this.expired_before_inSeconds = new Date();
        this.isFetched = false;
    }
    TokenAccess.prototype.configureToken = function (tokenInjected) {
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
    };
    return TokenAccess;
}());
exports.TokenAccess = TokenAccess;
//# sourceMappingURL=token-access.js.map