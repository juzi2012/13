var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var T2C_Heart = (function (_super) {
    __extends(T2C_Heart, _super);
    function T2C_Heart() {
        return _super.call(this) || this;
    }
    T2C_Heart.prototype.execute = function (data) {
        _super.prototype.execute.call(this, data);
    };
    return T2C_Heart;
}(T2C_Base));
__reflect(T2C_Heart.prototype, "T2C_Heart");
window["T2C_Heart"] = T2C_Heart;
//# sourceMappingURL=T2C_Heart.js.map