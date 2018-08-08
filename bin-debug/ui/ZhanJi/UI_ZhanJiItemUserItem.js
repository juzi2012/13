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
        var UI_ZhanJiItemUserItem = (function (_super) {
            __extends(UI_ZhanJiItemUserItem, _super);
            function UI_ZhanJiItemUserItem() {
                return _super.call(this) || this;
            }
            UI_ZhanJiItemUserItem.createInstance = function () {
                return (fairygui.UIPackage.createObject("ZhanJi", "ZhanJiItemUserItem"));
            };
            UI_ZhanJiItemUserItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_name = (this.getChildAt(0));
                this.m_txt_score = (this.getChildAt(1));
                this.m_img_win = (this.getChildAt(2));
            };
            UI_ZhanJiItemUserItem.URL = "ui://lxifvkdumqtaj";
            return UI_ZhanJiItemUserItem;
        }(fairygui.GComponent));
        ZhanJi.UI_ZhanJiItemUserItem = UI_ZhanJiItemUserItem;
        __reflect(UI_ZhanJiItemUserItem.prototype, "UI.ZhanJi.UI_ZhanJiItemUserItem");
    })(ZhanJi = UI.ZhanJi || (UI.ZhanJi = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ZhanJiItemUserItem.js.map