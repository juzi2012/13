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
        var UI_RankModule = (function (_super) {
            __extends(UI_RankModule, _super);
            function UI_RankModule() {
                return _super.call(this) || this;
            }
            UI_RankModule.createInstance = function () {
                return (fairygui.UIPackage.createObject("Rank", "RankModule"));
            };
            UI_RankModule.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_panelBg = (this.getChildAt(0));
                this.m_list = (this.getChildAt(8));
                this.m_img_outrank = (this.getChildAt(10));
                this.m_txt_score = (this.getChildAt(11));
                this.m_txt_name = (this.getChildAt(12));
                this.m_txt_rank = (this.getChildAt(13));
                this.m_head = (this.getChildAt(15));
            };
            UI_RankModule.URL = "ui://ljka2qsxdu50b";
            return UI_RankModule;
        }(fairygui.GComponent));
        Rank.UI_RankModule = UI_RankModule;
        __reflect(UI_RankModule.prototype, "UI.Rank.UI_RankModule");
    })(Rank = UI.Rank || (UI.Rank = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_RankModule.js.map