var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ws;
(function (ws) {
    var ProtoBufUtil = (function () {
        function ProtoBufUtil() {
            this.basicsArr = ["number", "string", "boolean"];
            this._message = dcodeIO.ProtoBuf.loadProto(RES.getRes("game_proto"));
        }
        Object.defineProperty(ProtoBufUtil, "instance", {
            get: function () {
                if (!this._instance) {
                    this._instance = new ProtoBufUtil();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        ProtoBufUtil.prototype.getReqByteArr = function (pbCls) {
            //proto对象
            var protoCls = this._message.build(pbCls.protobuf_className);
            var protoClsExample = new protoCls();
            this.evaluationObj(pbCls, protoClsExample);
            var sendData = new egret.ByteArray(protoClsExample.toArrayBuffer());
            return sendData;
        };
        ProtoBufUtil.prototype.getResProtobuf = function (cmd, byteArr) {
            var protoClsName = proto.CmdResHash.obj[cmd];
            if (protoClsName == undefined) {
                egret.error("协议类型没有在 proto.CmdResHash 绑定：cmd = " + cmd);
            }
            //proto对象
            var protoCls = this._message.build(protoClsName);
            var protoClsExample = protoCls.decode(byteArr.buffer);
            return protoClsExample;
        };
        ProtoBufUtil.prototype.evaluationObj = function (sourceObj, targetObj) {
            var nameStrArr = Object.getOwnPropertyNames(sourceObj);
            var nameStr;
            var len = nameStrArr.length;
            for (var i = 0; i < len; i++) {
                nameStr = nameStrArr[i];
                if (!nameStr || nameStr === "" || nameStr === "protobuf_className") {
                    continue;
                }
                var type = typeof sourceObj[nameStr];
                egret.log(type);
                if (type === "function") {
                    continue;
                }
                if (targetObj.hasOwnProperty(nameStr)) {
                    targetObj[nameStr] = sourceObj[nameStr];
                    // if(this.basicsArr.indexOf(type) != -1)
                    // {
                    // 	targetObj[nameStr] = sourceObj[nameStr];
                    // }
                    // else
                    // {
                    // 	this.evaluationObj(sourceObj[nameStr], targetObj[nameStr]);
                    // }
                }
            }
        };
        return ProtoBufUtil;
    }());
    ws.ProtoBufUtil = ProtoBufUtil;
    __reflect(ProtoBufUtil.prototype, "ws.ProtoBufUtil");
})(ws || (ws = {}));
//# sourceMappingURL=ProtoBufUtil.js.map