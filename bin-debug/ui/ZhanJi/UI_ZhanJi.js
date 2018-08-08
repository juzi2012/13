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
    var ZhanJi;
    (function (ZhanJi) {
        var UI_ZhanJi = (function (_super) {
            __extends(UI_ZhanJi, _super);
            function UI_ZhanJi() {
                return _super.call(this) || this;
            }
            UI_ZhanJi.createInstance = function () {
                return (fairygui.UIPackage.createObject("ZhanJi", "ZhanJi"));
            };
            UI_ZhanJi.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_panelBg = (this.getChildAt(0));
                this.m_list = (this.getChildAt(1));
            };
            UI_ZhanJi.URL = "ui://lxifvkdup0d61";
            return UI_ZhanJi;
        }(fairygui.GComponent));
        ZhanJi.UI_ZhanJi = UI_ZhanJi;
        __reflect(UI_ZhanJi.prototype, "UI.ZhanJi.UI_ZhanJi");
    })(ZhanJi = UI.ZhanJi || (UI.ZhanJi = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ZhanJi.js.map