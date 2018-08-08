/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
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
var UI;
(function (UI) {
    var Mail;
    (function (Mail) {
        var UI_MailItem = (function (_super) {
            __extends(UI_MailItem, _super);
            function UI_MailItem() {
                return _super.call(this) || this;
            }
            UI_MailItem.createInstance = function () {
                return (fairygui.UIPackage.createObject("Mail", "MailItem"));
            };
            UI_MailItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_read = (this.getChildAt(1));
            };
            UI_MailItem.URL = "ui://tebyebzgnl0pz";
            return UI_MailItem;
        }(fairygui.GComponent));
        Mail.UI_MailItem = UI_MailItem;
        __reflect(UI_MailItem.prototype, "UI.Mail.UI_MailItem");
    })(Mail = UI.Mail || (UI.Mail = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_MailItem.js.map