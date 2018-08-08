/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UI;
(function (UI) {
    var Mail;
    (function (Mail) {
        var MailBinder = (function () {
            function MailBinder() {
            }
            MailBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(Mail.UI_MailModule.URL, Mail.UI_MailModule);
                fairygui.UIObjectFactory.setPackageItemExtension(Mail.UI_MailDetail.URL, Mail.UI_MailDetail);
                fairygui.UIObjectFactory.setPackageItemExtension(Mail.UI_MailItem.URL, Mail.UI_MailItem);
            };
            return MailBinder;
        }());
        Mail.MailBinder = MailBinder;
        __reflect(MailBinder.prototype, "UI.Mail.MailBinder");
    })(Mail = UI.Mail || (UI.Mail = {}));
})(UI || (UI = {}));
//# sourceMappingURL=MailBinder.js.map