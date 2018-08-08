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
var C2T_Login_Message = (function () {
    function C2T_Login_Message() {
        /**
         * 用户名称
         */
        this.name = "";
        /**
         * 用户Id
         */
        this.wid = "";
        /**
         * 设备Id
         */
        this.mid = "";
        /**
         * 头像
         */
        this.head = "";
        /**
         * 频道Id
         */
        this.chid = "";
    }
    return C2T_Login_Message;
}());
__reflect(C2T_Login_Message.prototype, "C2T_Login_Message");
var C2T_Login = (function (_super) {
    __extends(C2T_Login, _super);
    function C2T_Login() {
        var _this = _super.call(this) || this;
        _this.Aid = MsgType.Login;
        _this.Msg = new C2T_Login_Message();
        return _this;
    }
    return C2T_Login;
}(C2T_Base));
__reflect(C2T_Login.prototype, "C2T_Login");
//# sourceMappingURL=C2T_Login.js.map