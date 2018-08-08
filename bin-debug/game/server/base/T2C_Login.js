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
var T2C_Login_Message = (function (_super) {
    __extends(T2C_Login_Message, _super);
    function T2C_Login_Message() {
        return _super.call(this) || this;
    }
    return T2C_Login_Message;
}(T2C_Message_Base));
__reflect(T2C_Login_Message.prototype, "T2C_Login_Message");
var T2C_Login = (function (_super) {
    __extends(T2C_Login, _super);
    function T2C_Login() {
        var _this = _super.call(this) || this;
        _this.Msg = new T2C_Login_Message();
        return _this;
    }
    T2C_Login.prototype.execute = function (data) {
        _super.prototype.execute.call(this, data);
        this.Msg.execute(data.Msg);
        game.GameModel.ins.setLoginData(this.Msg);
        App.Socket.dispatchCmd(this.Aid, this.Msg);
    };
    return T2C_Login;
}(T2C_Base));
__reflect(T2C_Login.prototype, "T2C_Login");
window["T2C_Login"] = T2C_Login;
//# sourceMappingURL=T2C_Login.js.map