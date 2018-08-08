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
        var UI_AlertBg1 = (function (_super) {
            __extends(UI_AlertBg1, _super);
            function UI_AlertBg1() {
                return _super.call(this) || this;
            }
            UI_AlertBg1.createInstance = function () {
                return (fairygui.UIPackage.createObject("Base", "AlertBg1"));
            };
            UI_AlertBg1.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_close = (this.getChildAt(2));
                this.m_title = (this.getChildAt(3));
            };
            UI_AlertBg1.URL = "ui://i36kne80rezh17";
            return UI_AlertBg1;
        }(fairygui.GComponent));
        Base.UI_AlertBg1 = UI_AlertBg1;
        __reflect(UI_AlertBg1.prototype, "UI.Base.UI_AlertBg1");
    })(Base = UI.Base || (UI.Base = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_AlertBg1.js.map