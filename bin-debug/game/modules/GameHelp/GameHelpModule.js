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
    var GameHelpModule = (function (_super) {
        __extends(GameHelpModule, _super);
        function GameHelpModule() {
            return _super.call(this) || this;
        }
        GameHelpModule.prototype.initContent = function () {
            this.content = UI.GameHelper.UI_GameHelper.createInstance();
        };
        Object.defineProperty(GameHelpModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        GameHelpModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://i36kne80rezh18";
            _super.prototype.preShow.call(this, data);
        };
        GameHelpModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        return GameHelpModule;
    }(PopModuleView));
    game.GameHelpModule = GameHelpModule;
    __reflect(GameHelpModule.prototype, "game.GameHelpModule");
})(game || (game = {}));
//# sourceMappingURL=GameHelpModule.js.map