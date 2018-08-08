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
var ws;
(function (ws) {
    var WebSocketEvent = (function (_super) {
        __extends(WebSocketEvent, _super);
        function WebSocketEvent(type, bubbles, cancelable, data) {
            return _super.call(this, type, bubbles, cancelable, data) || this;
        }
        /**
         * 连接成功
         */
        WebSocketEvent.CONNECT_CPL = "CONNECT_CPL";
        /**
         * 连接失败
         */
        WebSocketEvent.CONNECT_ERR = "CONNECT_ERR";
        /**
         * 断开连接
         */
        WebSocketEvent.CLOSE = "CLOSE";
        /**
         * 连接错误
         */
        WebSocketEvent.ERROR = "ERROR";
        return WebSocketEvent;
    }(egret.Event));
    ws.WebSocketEvent = WebSocketEvent;
    __reflect(WebSocketEvent.prototype, "ws.WebSocketEvent");
})(ws || (ws = {}));
//# sourceMappingURL=WebSocketEvent.js.map