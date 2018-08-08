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
    /**
     * Created by yangsong on 15-3-20.
     */
    var UTFMsgByString = (function (_super) {
        __extends(UTFMsgByString, _super);
        /**
         * 构造函数
         */
        function UTFMsgByString() {
            return _super.call(this) || this;
        }
        /**
         * 消息解析
         * @param msg
         */
        UTFMsgByString.prototype.decode = function (msg) {
            Log.trace(String(msg));
            return String(msg);
        };
        /**
         * 消息封装
         * @param msg
         */
        UTFMsgByString.prototype.encode = function (msg) {
            return String(msg);
        };
        return UTFMsgByString;
    }(ws.UTFMsg));
    ws.UTFMsgByString = UTFMsgByString;
    __reflect(UTFMsgByString.prototype, "ws.UTFMsgByString");
})(ws || (ws = {}));
//# sourceMappingURL=UTFMsgByString.js.map