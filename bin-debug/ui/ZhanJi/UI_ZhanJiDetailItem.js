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
        var UI_ZhanJiDetailItem = (function (_super) {
            __extends(UI_ZhanJiDetailItem, _super);
            function UI_ZhanJiDetailItem() {
                return _super.call(this) || this;
            }
            UI_ZhanJiDetailItem.createInstance = function () {
                return (fairygui.UIPackage.createObject("ZhanJi", "ZhanJiDetailItem"));
            };
            UI_ZhanJiDetailItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_0 = (this.getChildAt(1));
                this.m_txt_1 = (this.getChildAt(2));
                this.m_txt_2 = (this.getChildAt(3));
                this.m_txt_3 = (this.getChildAt(4));
                this.m_txt_4 = (this.getChildAt(5));
                this.m_txt_5 = (this.getChildAt(6));
                this.m_txt_6 = (this.getChildAt(7));
            };
            UI_ZhanJiDetailItem.URL = "ui://lxifvkdurezhe";
            return UI_ZhanJiDetailItem;
        }(fairygui.GComponent));
        ZhanJi.UI_ZhanJiDetailItem = UI_ZhanJiDetailItem;
        __reflect(UI_ZhanJiDetailItem.prototype, "UI.ZhanJi.UI_ZhanJiDetailItem");
    })(ZhanJi = UI.ZhanJi || (UI.ZhanJi = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ZhanJiDetailItem.js.map