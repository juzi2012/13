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
        var UI_MailModule = (function (_super) {
            __extends(UI_MailModule, _super);
            function UI_MailModule() {
                return _super.call(this) || this;
            }
            UI_MailModule.createInstance = function () {
                return (fairygui.UIPackage.createObject("Mail", "MailModule"));
            };
            UI_MailModule.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getControllerAt(0);
                this.m_panelBg = (this.getChildAt(0));
                this.m_list = (this.getChildAt(1));
                this.m_mcontent = (this.getChildAt(3));
            };
            UI_MailModule.URL = "ui://tebyebzgnl0p10";
            return UI_MailModule;
        }(fairygui.GComponent));
        Mail.UI_MailModule = UI_MailModule;
        __reflect(UI_MailModule.prototype, "UI.Mail.UI_MailModule");
    })(Mail = UI.Mail || (UI.Mail = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_MailModule.js.map