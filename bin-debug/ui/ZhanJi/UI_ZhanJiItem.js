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
        var UI_ZhanJiItem = (function (_super) {
            __extends(UI_ZhanJiItem, _super);
            function UI_ZhanJiItem() {
                return _super.call(this) || this;
            }
            UI_ZhanJiItem.createInstance = function () {
                return (fairygui.UIPackage.createObject("ZhanJi", "ZhanJiItem"));
            };
            UI_ZhanJiItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_rid = (this.getChildAt(1));
                this.m_txt_jushu = (this.getChildAt(2));
                this.m_txt_time = (this.getChildAt(3));
                this.m_list = (this.getChildAt(4));
                this.m_btn_check = (this.getChildAt(5));
                this.m_img_result = (this.getChildAt(6));
            };
            UI_ZhanJiItem.URL = "ui://lxifvkdup0d62";
            return UI_ZhanJiItem;
        }(fairygui.GComponent));
        ZhanJi.UI_ZhanJiItem = UI_ZhanJiItem;
        __reflect(UI_ZhanJiItem.prototype, "UI.ZhanJi.UI_ZhanJiItem");
    })(ZhanJi = UI.ZhanJi || (UI.ZhanJi = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ZhanJiItem.js.map