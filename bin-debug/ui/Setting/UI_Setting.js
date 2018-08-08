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
    var Setting;
    (function (Setting) {
        var UI_Setting = (function (_super) {
            __extends(UI_Setting, _super);
            function UI_Setting() {
                return _super.call(this) || this;
            }
            UI_Setting.createInstance = function () {
                return (fairygui.UIPackage.createObject("Setting", "Setting"));
            };
            UI_Setting.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_DeskChooseCtrl = this.getControllerAt(0);
                this.m_panelBg = (this.getChildAt(0));
                this.m_btn_bg1 = (this.getChildAt(7));
                this.m_btn_bg2 = (this.getChildAt(8));
                this.m_btn_bg3 = (this.getChildAt(9));
                this.m_btn_music = (this.getChildAt(11));
                this.m_btn_sound = (this.getChildAt(12));
                this.m_btn_help = (this.getChildAt(13));
            };
            UI_Setting.URL = "ui://1p6eu6xmj34rb";
            return UI_Setting;
        }(fairygui.GComponent));
        Setting.UI_Setting = UI_Setting;
        __reflect(UI_Setting.prototype, "UI.Setting.UI_Setting");
    })(Setting = UI.Setting || (UI.Setting = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_Setting.js.map