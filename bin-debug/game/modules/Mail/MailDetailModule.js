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
    var MailDetailModule = (function (_super) {
        __extends(MailDetailModule, _super);
        function MailDetailModule() {
            return _super.call(this) || this;
        }
        MailDetailModule.prototype.initContent = function () {
            this.content = UI.Mail.UI_MailDetail.createInstance();
        };
        Object.defineProperty(MailDetailModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        MailDetailModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://i36kne80j5fao";
            _super.prototype.preShow.call(this, data);
        };
        MailDetailModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        return MailDetailModule;
    }(PopModuleView));
    game.MailDetailModule = MailDetailModule;
    __reflect(MailDetailModule.prototype, "game.MailDetailModule");
})(game || (game = {}));
//# sourceMappingURL=MailDetailModule.js.map