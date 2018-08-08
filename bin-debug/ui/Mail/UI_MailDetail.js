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
        var UI_MailDetail = (function (_super) {
            __extends(UI_MailDetail, _super);
            function UI_MailDetail() {
                return _super.call(this) || this;
            }
            UI_MailDetail.createInstance = function () {
                return (fairygui.UIPackage.createObject("Mail", "MailDetail"));
            };
            UI_MailDetail.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_panelBg = (this.getChildAt(0));
            };
            UI_MailDetail.URL = "ui://tebyebzgnl0p11";
            return UI_MailDetail;
        }(fairygui.GComponent));
        Mail.UI_MailDetail = UI_MailDetail;
        __reflect(UI_MailDetail.prototype, "UI.Mail.UI_MailDetail");
    })(Mail = UI.Mail || (UI.Mail = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_MailDetail.js.map