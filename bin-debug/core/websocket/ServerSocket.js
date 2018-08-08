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
    var ServerSocket = (function (_super) {
        __extends(ServerSocket, _super);
        function ServerSocket() {
            var _this = _super.call(this) || this;
            _this.TYPE_STRING = "TYPE_STRING";
            _this.TYPE_BINARY = "TYPE_BINARY";
            /**
             * 重连次数
             */
            _this._connectCount = 0;
            _this._setTimeoutIndex = 0;
            /** 是否启用protoBuf传送消息 */
            _this._isUseProtoBuf = false;
            _this.connected = false;
            return _this;
        }
        /**
         * 初始化服务区地址
         * @param host IP
         * @param port 端口
         * @param msg socket是用string byte
         */
        ServerSocket.prototype.initServer = function (host, port, msg) {
            this._host = host;
            this._port = port;
            this._msg = msg;
            // if(this._isUseProtoBuf){
            // 	proto.CmdResHash.setup();
            // }
        };
        /**
         * 开始Socket连接
         */
        ServerSocket.prototype.connect = function (connectSuccessHandle) {
            if (App.DeviceUtils.IsHtml5) {
                if (!window["WebSocket"]) {
                    Log.trace("不支持WebSocket");
                    return;
                }
            }
            this._connectSuccessHandle = connectSuccessHandle;
            this.mainSocket = new egret.WebSocket();
            if (this._msg instanceof ws.ByteArrayMsg) {
                this.mainSocket.type = egret.WebSocket.TYPE_BINARY;
            }
            this.mainSocket.type = egret.WebSocket.TYPE_BINARY;
            this.mainSocket.type = egret.WebSocket.TYPE_STRING;
            this.mainSocket.addEventListener(egret.Event.CONNECT, this.onSocketConnected, this);
            this.mainSocket.connect(this._host, this._port);
            Log.trace("WebSocket connecting: " + this._host + ":" + this._port);
            this._connectCount = 0;
            this._setTimeoutIndex = setInterval(this.reconnect(this), 3000);
        };
        ServerSocket.prototype.reconnect = function (caller) {
            caller._connectCount++;
            if (caller._connectCount <= 5) {
                console.error("websocket连接 --> " + caller._connectCount + " 次！");
                this.mainSocket.connect(caller.host, caller.port);
            }
            else {
                console.error("服务器连接失败！ --> " + caller._host + ":" + caller._port);
                if (caller._setTimeoutIndex)
                    clearInterval(caller._setTimeoutIndex);
                caller.dispatchEvent(new ws.WebSocketEvent(ws.WebSocketEvent.CONNECT_ERR));
            }
        };
        /**
         * socket连接成功
         */
        ServerSocket.prototype.onSocketConnected = function () {
            this.mainSocket.removeEventListener(egret.Event.CONNECT, this.onSocketConnected, this);
            this.addListeners();
            if (this._setTimeoutIndex)
                clearInterval(this._setTimeoutIndex);
            console.log(this._host + ":" + this._port + " 服务器连接上了");
            this.connected = true;
            this._connectSuccessHandle.run();
        };
        ServerSocket.prototype.addListeners = function () {
            this.mainSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onData, this);
            this.mainSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
            this.mainSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        };
        ServerSocket.prototype.removeListeners = function () {
            this.mainSocket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onData, this);
            this.mainSocket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
            this.mainSocket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
        };
        /**
         * 侦听服务器消息
         * @param str
         * @param fun
         *
         */
        ServerSocket.prototype.addCmdListener = function (str, fun) {
            if (fun == null)
                return;
            if (!this.mEventListeners) {
                this.mEventListeners = {};
            }
            var funVec = this.mEventListeners[str];
            if (!funVec) {
                this.mEventListeners[str] = new Array();
                this.mEventListeners[str].push(fun);
            }
            else {
                if (funVec.indexOf(fun) == -1) {
                    funVec.push(fun);
                }
            }
        };
        ServerSocket.prototype.dispatchCmd = function (cmdId, msg) {
            if (msg === void 0) { msg = null; }
            var funVec;
            var i = 0;
            var fun;
            if (this.mEventListeners[cmdId]) {
                funVec = this.mEventListeners[cmdId];
                i = 0;
                while (i < funVec.length) {
                    fun = funVec[i];
                    fun.runWith(msg);
                    i++;
                }
            }
        };
        /**
         * 移除侦听服务器消息
         * @param str
         * @param fun
         *
         */
        ServerSocket.prototype.removeCmdListener = function (cmdID, fun) {
            var funVec1;
            var len;
            var funVec2;
            var i;
            if (this.mEventListeners) {
                funVec1 = this.mEventListeners[cmdID];
                if (funVec1) {
                    len = funVec1.length;
                    funVec2 = new Array();
                    i = 0;
                    while (i < len) {
                        if (funVec1[i].method != fun) {
                            funVec2.push(funVec1[i]);
                        }
                        i++;
                    }
                    if (funVec2.length > 0) {
                        this.mEventListeners[cmdID] = funVec2;
                    }
                    else {
                        delete this.mEventListeners[cmdID];
                    }
                }
            }
        };
        /**
         * 判断是否有此类侦听
         * @param cmdID
         * @return
         *
         */
        ServerSocket.prototype.hasCmdListener = function (cmdID) {
            return this.mEventListeners[cmdID];
        };
        ServerSocket.prototype.onSocketClose = function () {
            console.log("websocket --> 断开连接了！");
            // game.AlertUtil.alert("服务器断开连接，请重新打开游戏")
            this.connected = false;
        };
        ServerSocket.prototype.onSocketError = function () {
            console.error("websocket --> 连接错误了！");
        };
        ServerSocket.prototype.onData = function (event) {
            this._msg.receive(this.mainSocket);
        };
        /**
         * 向服务发送消息
         * @param cmdID
         * @param _args
         *
         */
        ServerSocket.prototype.send = function (msg) {
            this._msg.send(this.mainSocket, msg);
        };
        return ServerSocket;
    }(core.BaseClass));
    ws.ServerSocket = ServerSocket;
    __reflect(ServerSocket.prototype, "ws.ServerSocket");
})(ws || (ws = {}));
//# sourceMappingURL=ServerSocket.js.map