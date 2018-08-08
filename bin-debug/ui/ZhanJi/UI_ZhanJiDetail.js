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
        var UI_ZhanJiDetail = (function (_super) {
            __extends(UI_ZhanJiDetail, _super);
            function UI_ZhanJiDetail() {
                return _super.call(this) || this;
            }
            UI_ZhanJiDetail.createInstance = function () {
                return (fairygui.UIPackage.createObject("ZhanJi", "ZhanJiDetail"));
            };
            UI_ZhanJiDetail.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_panelBg = (this.getChildAt(0));
            };
            UI_ZhanJiDetail.URL = "ui://lxifvkdurezhd";
            return UI_ZhanJiDetail;
        }(fairygui.GComponent));
        ZhanJi.UI_ZhanJiDetail = UI_ZhanJiDetail;
        __reflect(UI_ZhanJiDetail.prototype, "UI.ZhanJi.UI_ZhanJiDetail");
    })(ZhanJi = UI.ZhanJi || (UI.ZhanJi = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ZhanJiDetail.js.map