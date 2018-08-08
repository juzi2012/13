var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var T2C_Base = (function () {
    function T2C_Base() {
    }
    T2C_Base.prototype.execute = function (data) {
        this.Aid = data.Aid;
        this.Err = data.Err;
    };
    return T2C_Base;
}());
__reflect(T2C_Base.prototype, "T2C_Base");
//# sourceMappingURL=T2C_Base.js.map