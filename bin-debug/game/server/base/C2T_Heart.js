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
var C2T_Heart = (function (_super) {
    __extends(C2T_Heart, _super);
    function C2T_Heart() {
        var _this = _super.call(this) || this;
        _this.Aid = 1;
        return _this;
    }
    return C2T_Heart;
}(C2T_Base));
__reflect(C2T_Heart.prototype, "C2T_Heart");
//# sourceMappingURL=C2T_Heart.js.map