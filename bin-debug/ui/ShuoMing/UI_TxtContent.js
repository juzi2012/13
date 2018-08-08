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
        var UI_TxtContent = (function (_super) {
            __extends(UI_TxtContent, _super);
            function UI_TxtContent() {
                return _super.call(this) || this;
            }
            UI_TxtContent.createInstance = function () {
                return (fairygui.UIPackage.createObject("ShuoMing", "TxtContent"));
            };
            UI_TxtContent.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_content = (this.getChildAt(0));
            };
            UI_TxtContent.URL = "ui://ksvi7x7cdowqa";
            return UI_TxtContent;
        }(fairygui.GComponent));
        ShuoMing.UI_TxtContent = UI_TxtContent;
        __reflect(UI_TxtContent.prototype, "UI.ShuoMing.UI_TxtContent");
    })(ShuoMing = UI.ShuoMing || (UI.ShuoMing = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_TxtContent.js.map