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
    var Rank;
    (function (Rank) {
        var UI_RankItem = (function (_super) {
            __extends(UI_RankItem, _super);
            function UI_RankItem() {
                return _super.call(this) || this;
            }
            UI_RankItem.createInstance = function () {
                return (fairygui.UIPackage.createObject("Rank", "RankItem"));
            };
            UI_RankItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getControllerAt(0);
                this.m_txt_score = (this.getChildAt(1));
                this.m_txt_name = (this.getChildAt(2));
                this.m_txt_rank = (this.getChildAt(4));
                this.m_img_rank = (this.getChildAt(5));
                this.m_head = (this.getChildAt(6));
            };
            UI_RankItem.URL = "ui://ljka2qsxdu50d";
            return UI_RankItem;
        }(fairygui.GComponent));
        Rank.UI_RankItem = UI_RankItem;
        __reflect(UI_RankItem.prototype, "UI.Rank.UI_RankItem");
    })(Rank = UI.Rank || (UI.Rank = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_RankItem.js.map