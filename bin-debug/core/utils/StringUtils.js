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
/**
 * Created by yangsong on 14/12/18.
 * 字符串操作工具类
 */
var core;
(function (core) {
    var StringUtils = (function (_super) {
        __extends(StringUtils, _super);
        /**
         * 构造函数
         */
        function StringUtils() {
            return _super.call(this) || this;
        }
        /**
         * 去掉前后空格
         * @param str
         * @returns {string}
         */
        StringUtils.prototype.trimSpace = function (str) {
            return str.replace(/^\s*(.*?)[\s\n]*$/g, '$1');
        };
        /**
         * 获取字符串长度，中文为2
         * @param str
         */
        StringUtils.prototype.getStringLength = function (str) {
            var strArr = str.split("");
            var length = 0;
            for (var i = 0; i < strArr.length; i++) {
                var s = strArr[i];
                if (this.isChinese(s)) {
                    length += 2;
                }
                else {
                    length += 1;
                }
            }
            return length;
        };
        /**
         * 判断一个字符串是否包含中文
         * @param str
         * @returns {boolean}
         */
        StringUtils.prototype.isChinese = function (str) {
            var reg = /^.*[\u4E00-\u9FA5]+.*$/;
            return reg.test(str);
        };
        /**
         * aaaa@param0bbbb
         * 将字符串中的param替换成具体的值
         */
        StringUtils.prototype.strParams = function (str, params) {
            if (params != null) {
                for (var i = 0; i < params.length; i++) {
                    str = str.replace("@param" + i.toString(), params[i]);
                }
            }
            return str;
        };
        return StringUtils;
    }(core.BaseClass));
    core.StringUtils = StringUtils;
    __reflect(StringUtils.prototype, "core.StringUtils");
})(core || (core = {}));
//# sourceMappingURL=StringUtils.js.map