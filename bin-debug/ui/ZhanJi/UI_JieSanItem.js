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
        var UI_JieSanItem = (function (_super) {
            __extends(UI_JieSanItem, _super);
            function UI_JieSanItem() {
                return _super.call(this) || this;
            }
            UI_JieSanItem.createInstance = function () {
                return (fairygui.UIPackage.createObject("ZhanJi", "JieSanItem"));
            };
            UI_JieSanItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_name = (this.getChildAt(0));
                this.m_txt_sort = (this.getChildAt(1));
            };
            UI_JieSanItem.URL = "ui://lxifvkduq3d5n";
            return UI_JieSanItem;
        }(fairygui.GComponent));
        ZhanJi.UI_JieSanItem = UI_JieSanItem;
        __reflect(UI_JieSanItem.prototype, "UI.ZhanJi.UI_JieSanItem");
    })(ZhanJi = UI.ZhanJi || (UI.ZhanJi = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_JieSanItem.js.map