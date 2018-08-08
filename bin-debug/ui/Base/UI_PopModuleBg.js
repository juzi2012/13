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
    var Base;
    (function (Base) {
        var UI_PopModuleBg = (function (_super) {
            __extends(UI_PopModuleBg, _super);
            function UI_PopModuleBg() {
                return _super.call(this) || this;
            }
            UI_PopModuleBg.createInstance = function () {
                return (fairygui.UIPackage.createObject("Base", "PopModuleBg"));
            };
            UI_PopModuleBg.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_close = (this.getChildAt(3));
                this.m_title = (this.getChildAt(4));
            };
            UI_PopModuleBg.URL = "ui://i36kne80nl0p9";
            return UI_PopModuleBg;
        }(fairygui.GComponent));
        Base.UI_PopModuleBg = UI_PopModuleBg;
        __reflect(UI_PopModuleBg.prototype, "UI.Base.UI_PopModuleBg");
    })(Base = UI.Base || (UI.Base = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_PopModuleBg.js.map