var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var T2C_Message_Base = (function () {
    function T2C_Message_Base() {
    }
    T2C_Message_Base.prototype.execute = function (msg) {
        for (var prop in msg) {
            if (this.hasOwnProperty(prop) != null) {
                this[prop] = msg[prop];
            }
        }
    };
    return T2C_Message_Base;
}());
__reflect(T2C_Message_Base.prototype, "T2C_Message_Base");
//# sourceMappingURL=T2C_Message_Base.js.map