var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HttpURLs = (function () {
    function HttpURLs() {
    }
    HttpURLs.rank = "http://121.40.23.6:8883/rank";
    HttpURLs.zhanji = "http://121.40.23.6:8883/zhanji";
    HttpURLs.huifang = "http://121.40.23.6:8883/huifang";
    return HttpURLs;
}());
__reflect(HttpURLs.prototype, "HttpURLs");
//# sourceMappingURL=HttpURLs.js.map