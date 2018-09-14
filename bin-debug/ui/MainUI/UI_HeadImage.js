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
        var UI_HeadImage = (function (_super) {
            __extends(UI_HeadImage, _super);
            function UI_HeadImage() {
                return _super.call(this) || this;
            }
            UI_HeadImage.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "HeadImage"));
            };
            UI_HeadImage.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_img = (this.getChildAt(0));
            };
            UI_HeadImage.URL = "ui://s4bbeogyvhx330";
            return UI_HeadImage;
        }(fairygui.GComponent));
        MainUI.UI_HeadImage = UI_HeadImage;
        __reflect(UI_HeadImage.prototype, "UI.MainUI.UI_HeadImage");
    })(MainUI = UI.MainUI || (UI.MainUI = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_HeadImage.js.map