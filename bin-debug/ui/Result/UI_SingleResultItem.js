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
        var UI_SingleResultItem = (function (_super) {
            __extends(UI_SingleResultItem, _super);
            function UI_SingleResultItem() {
                return _super.call(this) || this;
            }
            UI_SingleResultItem.createInstance = function () {
                return (fairygui.UIPackage.createObject("Result", "SingleResultItem"));
            };
            UI_SingleResultItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_score = (this.getChildAt(1));
                this.m_txt_name = (this.getChildAt(3));
                this.m_txt_id = (this.getChildAt(4));
                this.m_list_top = (this.getChildAt(5));
                this.m_head = (this.getChildAt(6));
                this.m_list_mid = (this.getChildAt(7));
                this.m_list_down = (this.getChildAt(8));
            };
            UI_SingleResultItem.URL = "ui://25mni52osl2k8";
            return UI_SingleResultItem;
        }(fairygui.GComponent));
        Result.UI_SingleResultItem = UI_SingleResultItem;
        __reflect(UI_SingleResultItem.prototype, "UI.Result.UI_SingleResultItem");
    })(Result = UI.Result || (UI.Result = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_SingleResultItem.js.map