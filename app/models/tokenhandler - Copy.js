"use strict";
var tokenAccess = (function () {
    function tokenAccess() {
        this.last_set = new Date();
        this.expired_at = new Date(this['.expires']);
        this.expired_before_inSeconds = new Date(this['.expires']);
        this.expired_before_inSeconds.setSeconds(this.expired_before_inSeconds.getSeconds() - 5);
    }
    return tokenAccess;
}());
exports.tokenAccess = tokenAccess;
//# sourceMappingURL=tokenhandler - Copy.js.map