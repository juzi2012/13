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
        var UI_AlertBg = (function (_super) {
            __extends(UI_AlertBg, _super);
            function UI_AlertBg() {
                return _super.call(this) || this;
            }
            UI_AlertBg.createInstance = function () {
                return (fairygui.UIPackage.createObject("Base", "AlertBg"));
            };
            UI_AlertBg.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_close = (this.getChildAt(1));
                this.m_title = (this.getChildAt(2));
            };
            UI_AlertBg.URL = "ui://i36kne80rezh13";
            return UI_AlertBg;
        }(fairygui.GComponent));
        Base.UI_AlertBg = UI_AlertBg;
        __reflect(UI_AlertBg.prototype, "UI.Base.UI_AlertBg");
    })(Base = UI.Base || (UI.Base = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_AlertBg.js.map