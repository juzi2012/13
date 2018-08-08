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
    var ShuoMing;
    (function (ShuoMing) {
        var UI_ShuoMing = (function (_super) {
            __extends(UI_ShuoMing, _super);
            function UI_ShuoMing() {
                return _super.call(this) || this;
            }
            UI_ShuoMing.createInstance = function () {
                return (fairygui.UIPackage.createObject("ShuoMing", "ShuoMing"));
            };
            UI_ShuoMing.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_tabCtl = this.getControllerAt(0);
                this.m_panelBg = (this.getChildAt(0));
                this.m_list = (this.getChildAt(4));
                this.m_txt_num = (this.getChildAt(9));
                this.m_txtcontent = (this.getChildAt(10));
            };
            UI_ShuoMing.URL = "ui://ksvi7x7crv2q0";
            return UI_ShuoMing;
        }(fairygui.GComponent));
        ShuoMing.UI_ShuoMing = UI_ShuoMing;
        __reflect(UI_ShuoMing.prototype, "UI.ShuoMing.UI_ShuoMing");
    })(ShuoMing = UI.ShuoMing || (UI.ShuoMing = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ShuoMing.js.map