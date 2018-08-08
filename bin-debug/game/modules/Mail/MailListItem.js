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
    var MailListItem = (function (_super) {
        __extends(MailListItem, _super);
        function MailListItem() {
            return _super.call(this) || this;
        }
        MailListItem.prototype.setData = function () {
            this.m_btn_read.addClickListener(this.OpenDetail, this);
        };
        MailListItem.prototype.OpenDetail = function () {
            ModuleMgr.ins.showModule(ModuleEnum.MAIL_DETAIL);
        };
        return MailListItem;
    }(UI.Mail.UI_MailItem));
    game.MailListItem = MailListItem;
    __reflect(MailListItem.prototype, "game.MailListItem");
})(game || (game = {}));
//# sourceMappingURL=MailListItem.js.map