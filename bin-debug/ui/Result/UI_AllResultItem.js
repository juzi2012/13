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
    var Result;
    (function (Result) {
        var UI_AllResultItem = (function (_super) {
            __extends(UI_AllResultItem, _super);
            function UI_AllResultItem() {
                return _super.call(this) || this;
            }
            UI_AllResultItem.createInstance = function () {
                return (fairygui.UIPackage.createObject("Result", "AllResultItem"));
            };
            UI_AllResultItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_name = (this.getChildAt(3));
                this.m_txt_id = (this.getChildAt(4));
                this.m_txt_ju0 = (this.getChildAt(7));
                this.m_txt_ju1 = (this.getChildAt(8));
                this.m_txt_ju2 = (this.getChildAt(9));
                this.m_txt_ju3 = (this.getChildAt(10));
                this.m_txt_ju4 = (this.getChildAt(11));
                this.m_txt_ju5 = (this.getChildAt(13));
                this.m_winner = (this.getChildAt(16));
                this.m_txt_score = (this.getChildAt(17));
            };
            UI_AllResultItem.URL = "ui://25mni52osl2kw";
            return UI_AllResultItem;
        }(fairygui.GComponent));
        Result.UI_AllResultItem = UI_AllResultItem;
        __reflect(UI_AllResultItem.prototype, "UI.Result.UI_AllResultItem");
    })(Result = UI.Result || (UI.Result = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_AllResultItem.js.map