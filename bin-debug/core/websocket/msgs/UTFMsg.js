var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ws;
(function (ws) {
    /**
     * Created by yangsong on 15-2-11.
     */
    var UTFMsg = (function () {
        /**
         * 构造函数
         */
        function UTFMsg() {
            this._ba = new egret.ByteArray();
        }
        /**
         * 接收消息处理
         * @param msg
         */
        UTFMsg.prototype.receive = function (socket) {
            this._ba.clear();
            socket.readBytes(this._ba);
            var msg = this._ba.readUTFBytes(this._ba.length);
            if (msg.indexOf("_Heart") < 0) {
                console.log("recv" + msg);
            }
            this.decode(msg);
        };
        /**
         * 发送消息处理
         * @param msg
         */
        UTFMsg.prototype.send = function (socket, msg) {
            if (socket.connected) {
                var obj = this.encode(msg);
                socket.writeUTF(obj);
                socket.flush();
            }
            else {
                console.log("网络连接已经断开，请刷新重新进入游戏");
                // game.AlertUtil.floatMsg("网络连接已经断开，请刷新重新进入游戏")
            }
        };
        /**
         * 消息解析
         * @param msg
         */
        UTFMsg.prototype.decode = function (msg) {
            Log.trace("decode需要子类重写，根据项目的协议结构解析");
            return null;
        };
        /**
         * 消息封装
         * @param msg
         */
        UTFMsg.prototype.encode = function (msg) {
            Log.trace("encode需要子类重写，根据项目的协议结构解析");
            return null;
        };
        return UTFMsg;
    }());
    ws.UTFMsg = UTFMsg;
    __reflect(UTFMsg.prototype, "ws.UTFMsg", ["ws.BaseMsg"]);
})(ws || (ws = {}));
//# sourceMappingURL=UTFMsg.js.map