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
    var UTFMsgByJson = (function (_super) {
        __extends(UTFMsgByJson, _super);
        /**
         * 构造函数
         */
        function UTFMsgByJson() {
            var _this = _super.call(this) || this;
            _this._protoMap = {};
            return _this;
        }
        /**
         * 消息解析
         * @param msg
         */
        UTFMsgByJson.prototype.decode = function (msg) {
            var obj = JSON.parse(msg);
            for (var s in obj) {
                var c;
                if (this._protoMap[s] == null) {
                    c = egret.getDefinitionByName(s);
                    if (c != null) {
                        this._protoMap[s] = new c();
                    }
                }
                if (this._protoMap[s] != null) {
                    var baseMsg = this._protoMap[s];
                    baseMsg.execute(obj[s]);
                    return baseMsg;
                }
                else {
                    console.log(this, "未处理的消息" + msg);
                }
            }
            return null;
            // if (obj) {
            //     App.MessageCenter.dispatch(obj.key, obj.body);
            // }
        };
        /**
         * 消息封装
         * @param msg
         */
        UTFMsgByJson.prototype.encode = function (msg) {
            var temp = "{\"" + egret.getQualifiedClassName(msg) + "\":" + JSON.stringify(msg) + "}";
            return temp;
        };
        return UTFMsgByJson;
    }(ws.UTFMsg));
    ws.UTFMsgByJson = UTFMsgByJson;
    __reflect(UTFMsgByJson.prototype, "ws.UTFMsgByJson");
})(ws || (ws = {}));
//# sourceMappingURL=UTFMsgByJson.js.map