var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var proto;
(function (proto) {
    var BaseProtoBuf = (function () {
        function BaseProtoBuf($className) {
            this.protobuf_className = "";
            this.protobuf_className = $className;
        }
        return BaseProtoBuf;
    }());
    proto.BaseProtoBuf = BaseProtoBuf;
    __reflect(BaseProtoBuf.prototype, "proto.BaseProtoBuf");
})(proto || (proto = {}));
//# sourceMappingURL=BaseProtoBuf.js.map