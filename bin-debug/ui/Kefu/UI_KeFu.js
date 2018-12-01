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
    var Kefu;
    (function (Kefu) {
        var UI_KeFu = (function (_super) {
            __extends(UI_KeFu, _super);
            function UI_KeFu() {
                return _super.call(this) || this;
            }
            UI_KeFu.createInstance = function () {
                return (fairygui.UIPackage.createObject("Kefu", "KeFu"));
            };
            UI_KeFu.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_panelBg = (this.getChildAt(0));
                this.m_btn_copy = (this.getChildAt(3));
                this.m_btn_ok = (this.getChildAt(4));
                this.m_txt_kefu = (this.getChildAt(8));
            };
            UI_KeFu.URL = "ui://j0afz4iznl0p1";
            return UI_KeFu;
        }(fairygui.GComponent));
        Kefu.UI_KeFu = UI_KeFu;
        __reflect(UI_KeFu.prototype, "UI.Kefu.UI_KeFu");
    })(Kefu = UI.Kefu || (UI.Kefu = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_KeFu.js.map