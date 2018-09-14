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
    var MainUI;
    (function (MainUI) {
        var UI_HeadImage1 = (function (_super) {
            __extends(UI_HeadImage1, _super);
            function UI_HeadImage1() {
                return _super.call(this) || this;
            }
            UI_HeadImage1.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "HeadImage1"));
            };
            UI_HeadImage1.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_img = (this.getChildAt(0));
            };
            UI_HeadImage1.URL = "ui://s4bbeogyvhx331";
            return UI_HeadImage1;
        }(fairygui.GComponent));
        MainUI.UI_HeadImage1 = UI_HeadImage1;
        __reflect(UI_HeadImage1.prototype, "UI.MainUI.UI_HeadImage1");
    })(MainUI = UI.MainUI || (UI.MainUI = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_HeadImage1.js.map