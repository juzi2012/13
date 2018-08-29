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
    var PreLoadingModule = (function (_super) {
        __extends(PreLoadingModule, _super);
        function PreLoadingModule() {
            var _this = _super.call(this) || this;
            _this.nowPer = 0;
            return _this;
        }
        PreLoadingModule.prototype.initContent = function () {
            this.content = UI.PreLoading.UI_PreLoading.createInstance();
        };
        Object.defineProperty(PreLoadingModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        PreLoadingModule.prototype.preShow = function (data) {
            this.preShowCpl();
        };
        PreLoadingModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
            App.TimerManager.doFrame(1, 0, this.updateBar, this);
        };
        PreLoadingModule.prototype.updateBar = function () {
            this.nowPer += 2;
            if (this.nowPer >= 50) {
                this.nowPer = 50;
            }
            this.mContent.m_img.x = this.mContent.m_bar.x - 5 + (this.nowPer / 50) * (this.mContent.m_bar.width - 80);
            this.mContent.m_bar.max = 50;
            this.mContent.m_bar.value = this.nowPer;
        };
        PreLoadingModule.prototype.preClose = function (data) {
            App.TimerManager.remove(this.updateBar, this);
            this.preCloseCpl();
        };
        return PreLoadingModule;
    }(Module));
    game.PreLoadingModule = PreLoadingModule;
    __reflect(PreLoadingModule.prototype, "game.PreLoadingModule");
})(game || (game = {}));
//# sourceMappingURL=PreLoadingModule.js.map