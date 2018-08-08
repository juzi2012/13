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
var game;
(function (game) {
    var ZhanJiDetailModule = (function (_super) {
        __extends(ZhanJiDetailModule, _super);
        function ZhanJiDetailModule() {
            return _super.call(this) || this;
        }
        ZhanJiDetailModule.prototype.initContent = function () {
            this.content = UI.ZhanJi.UI_ZhanJiDetail.createInstance();
        };
        Object.defineProperty(ZhanJiDetailModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        ZhanJiDetailModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://i36kne80rezhz";
            _super.prototype.preShow.call(this, data);
        };
        ZhanJiDetailModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        return ZhanJiDetailModule;
    }(PopModuleView));
    game.ZhanJiDetailModule = ZhanJiDetailModule;
    __reflect(ZhanJiDetailModule.prototype, "game.ZhanJiDetailModule");
})(game || (game = {}));
//# sourceMappingURL=ZhanJiDetailModule.js.map