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
    var ActivityModule = (function (_super) {
        __extends(ActivityModule, _super);
        function ActivityModule() {
            return _super.call(this) || this;
        }
        ActivityModule.prototype.initContent = function () {
            this.content = UI.Activity.UI_Activity.createInstance();
        };
        Object.defineProperty(ActivityModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        ActivityModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://i36kne80j5fak";
            this.mContent.m_c1.selectedIndex = 1;
            _super.prototype.preShow.call(this, data);
        };
        ActivityModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        return ActivityModule;
    }(PopModuleView));
    game.ActivityModule = ActivityModule;
    __reflect(ActivityModule.prototype, "game.ActivityModule");
})(game || (game = {}));
//# sourceMappingURL=ActivityModule.js.map