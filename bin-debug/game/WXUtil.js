var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var WXUtil = (function () {
        function WXUtil() {
        }
        Object.defineProperty(WXUtil, "ins", {
            get: function () {
                if (this._ins == null) {
                    this._ins = new WXUtil();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        WXUtil.prototype.invit = function (shareData) {
            invit(shareData);
        };
        WXUtil.prototype.share = function (shareData) {
            share(shareData);
        };
        WXUtil.prototype.shareRePlay = function (shareData) {
            shareRePlay(shareData);
        };
        return WXUtil;
    }());
    game.WXUtil = WXUtil;
    __reflect(WXUtil.prototype, "game.WXUtil");
})(game || (game = {}));
//# sourceMappingURL=WXUtil.js.map