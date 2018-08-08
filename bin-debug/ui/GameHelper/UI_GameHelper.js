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
    var GameHelper;
    (function (GameHelper) {
        var UI_GameHelper = (function (_super) {
            __extends(UI_GameHelper, _super);
            function UI_GameHelper() {
                return _super.call(this) || this;
            }
            UI_GameHelper.createInstance = function () {
                return (fairygui.UIPackage.createObject("GameHelper", "GameHelper"));
            };
            UI_GameHelper.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_panelBg = (this.getChildAt(0));
                this.m_shuoming = (this.getChildAt(1));
            };
            UI_GameHelper.URL = "ui://gxctr1midu500";
            return UI_GameHelper;
        }(fairygui.GComponent));
        GameHelper.UI_GameHelper = UI_GameHelper;
        __reflect(UI_GameHelper.prototype, "UI.GameHelper.UI_GameHelper");
    })(GameHelper = UI.GameHelper || (UI.GameHelper = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_GameHelper.js.map