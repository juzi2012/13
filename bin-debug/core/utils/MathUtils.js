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
var core;
(function (core) {
    var MathUtils = (function (_super) {
        __extends(MathUtils, _super);
        function MathUtils() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MathUtils.prototype.ceil = function (value) {
            if (value % 1 == 0) {
                return value;
            }
            if (value > 0) {
                return (value + 1) << 0;
            }
            else {
                return value << 0;
            }
        };
        /**
         * 得到 [min,max] 范围内的随机数
         */
        MathUtils.prototype.random = function (min, max) {
            return Math.random() * (max - min + 1) + min << 0;
        };
        /**
         * 弧度制转换为角度值
         * @param radian 弧度制
         * @returns {number}
         */
        MathUtils.prototype.getAngle = function (radian) {
            return 180 * radian / Math.PI;
        };
        /**
         * 角度值转换为弧度制
         * @param angle
         */
        MathUtils.prototype.getRadian = function (angle) {
            return angle / 180 * Math.PI;
        };
        /**
         * 获取两点间弧度
         * @param p1X
         * @param p1Y
         * @param p2X
         * @param p2Y
         * @returns {number}
         */
        MathUtils.prototype.getRadian2 = function (p1X, p1Y, p2X, p2Y) {
            var xdis = p2X - p1X;
            var ydis = p2Y - p1Y;
            return Math.atan2(ydis, xdis);
        };
        /**
         * 获取两点间距离
         * @param p1X
         * @param p1Y
         * @param p2X
         * @param p2Y
         * @returns {number}
         */
        MathUtils.prototype.getDistance = function (p1X, p1Y, p2X, p2Y) {
            var disX = p2X - p1X;
            var disY = p2Y - p1Y;
            var disQ = disX * disX + disY * disY;
            return Math.sqrt(disQ);
        };
        /**
         * 求1-100的和
         */
        MathUtils.prototype.getSum = function (startNum, endNum) {
            var sum = 0;
            for (var i = startNum; i <= endNum; i++) {
                sum += i;
            }
            return sum;
        };
        /**
         * len 获取数据的个数
         * startNum 开始的数
         * endNum 结束的数
         */
        MathUtils.prototype.randomNoRepeat = function (len, startNum, endNum) {
            var arr = new Array();
            function _inner(start, end) {
                var span = end - start;
                return parseInt(Math.random() * span + start);
            }
            while (arr.length < len) {
                var num = _inner(startNum, endNum);
                if (arr.indexOf(num) == -1) {
                    arr.push(num);
                }
            }
            return arr;
        };
        /*求两点间连线角度
        */
        MathUtils.prototype.towPointGetAngle = function (x1, y1, x2, y2) {
            var dx = x2 - x1; //求出x轴方向距离
            var dy = y2 - y1; //求出Y轴方向距离
            var radian = Math.atan2(dy, dx); //反正切函数求出弧度值
            return this.getAngle(radian); //返回角度值。
        };
        return MathUtils;
    }(core.BaseClass));
    core.MathUtils = MathUtils;
    __reflect(MathUtils.prototype, "core.MathUtils");
})(core || (core = {}));
//# sourceMappingURL=MathUtils.js.map