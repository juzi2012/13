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
    var MailModule = (function (_super) {
        __extends(MailModule, _super);
        function MailModule() {
            return _super.call(this) || this;
        }
        MailModule.prototype.initContent = function () {
            this.content = UI.Mail.UI_MailModule.createInstance();
        };
        Object.defineProperty(MailModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        MailModule.prototype.preShow = function (data) {
            this.mContent.m_panelBg.m_title.url = "ui://i36kne80j5fao";
            this.mContent.m_list.itemRenderer = this.RenderListItem;
            this.mContent.m_list.callbackThisObj = this;
            this.mContent.m_list.numItems = 5;
            _super.prototype.preShow.call(this, data);
        };
        MailModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        MailModule.prototype.RenderListItem = function (index, _item) {
            var mailItem = _item;
            mailItem.setData();
        };
        return MailModule;
    }(PopModuleView));
    game.MailModule = MailModule;
    __reflect(MailModule.prototype, "game.MailModule");
})(game || (game = {}));
//# sourceMappingURL=MailModule.js.map