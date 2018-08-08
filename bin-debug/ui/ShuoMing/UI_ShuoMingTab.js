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
        var UI_ShuoMingTab = (function (_super) {
            __extends(UI_ShuoMingTab, _super);
            function UI_ShuoMingTab() {
                return _super.call(this) || this;
            }
            UI_ShuoMingTab.createInstance = function () {
                return (fairygui.UIPackage.createObject("ShuoMing", "ShuoMingTab"));
            };
            UI_ShuoMingTab.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_name = (this.getChildAt(2));
            };
            UI_ShuoMingTab.URL = "ui://ksvi7x7crv2q4";
            return UI_ShuoMingTab;
        }(fairygui.GButton));
        ShuoMing.UI_ShuoMingTab = UI_ShuoMingTab;
        __reflect(UI_ShuoMingTab.prototype, "UI.ShuoMing.UI_ShuoMingTab");
    })(ShuoMing = UI.ShuoMing || (UI.ShuoMing = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ShuoMingTab.js.map