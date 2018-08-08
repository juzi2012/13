var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ws;
(function (ws) {
    /**
     * 封装  - 请求数据包
     * @author liujia
     *
     */
    var RequestPacker = (function () {
        function RequestPacker() {
        }
        RequestPacker.getIndex = function () {
            var num = this.index;
            this.index++;
            return num;
        };
        /**
         * 创建包体
         * @param arr
         * @param str
         * @return
         *
         */
        RequestPacker.createBody = function (arr) {
            var byteArr = new egret.ByteArray();
            var obj;
            for (var i = 0; i < arr.length; i++) {
                obj = arr[i];
                if (typeof obj === "string") {
                    byteArr.writeUTFBytes(String(obj));
                }
                else {
                    if (obj instanceof egret.ByteArray) {
                        byteArr.writeBytes(obj);
                        obj.length = 0;
                    }
                    else {
                        byteArr.writeUnsignedInt(obj);
                    }
                }
            }
            return byteArr;
        };
        RequestPacker.index = 0;
        return RequestPacker;
    }());
    ws.RequestPacker = RequestPacker;
    __reflect(RequestPacker.prototype, "ws.RequestPacker");
})(ws || (ws = {}));
//# sourceMappingURL=RequestPacker.js.map