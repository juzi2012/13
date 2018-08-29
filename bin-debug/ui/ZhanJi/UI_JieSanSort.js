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
        var UI_JieSanSort = (function (_super) {
            __extends(UI_JieSanSort, _super);
            function UI_JieSanSort() {
                return _super.call(this) || this;
            }
            UI_JieSanSort.createInstance = function () {
                return (fairygui.UIPackage.createObject("ZhanJi", "JieSanSort"));
            };
            UI_JieSanSort.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_close = (this.getChildAt(1));
                this.m_list = (this.getChildAt(4));
            };
            UI_JieSanSort.URL = "ui://lxifvkduq3d5m";
            return UI_JieSanSort;
        }(fairygui.GComponent));
        ZhanJi.UI_JieSanSort = UI_JieSanSort;
        __reflect(UI_JieSanSort.prototype, "UI.ZhanJi.UI_JieSanSort");
    })(ZhanJi = UI.ZhanJi || (UI.ZhanJi = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_JieSanSort.js.map