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
    var Game;
    (function (Game) {
        var UI_PlayerPokers = (function (_super) {
            __extends(UI_PlayerPokers, _super);
            function UI_PlayerPokers() {
                return _super.call(this) || this;
            }
            UI_PlayerPokers.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "PlayerPokers"));
            };
            UI_PlayerPokers.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getControllerAt(0);
                this.m_c2 = this.getControllerAt(1);
                this.m_pork0 = (this.getChildAt(0));
                this.m_pork1 = (this.getChildAt(1));
                this.m_pork2 = (this.getChildAt(2));
                this.m_pork3 = (this.getChildAt(3));
                this.m_pork4 = (this.getChildAt(4));
                this.m_pork5 = (this.getChildAt(5));
                this.m_pork6 = (this.getChildAt(6));
                this.m_pork7 = (this.getChildAt(7));
                this.m_pork8 = (this.getChildAt(8));
                this.m_pork9 = (this.getChildAt(9));
                this.m_pork10 = (this.getChildAt(10));
                this.m_pork11 = (this.getChildAt(11));
                this.m_pork12 = (this.getChildAt(12));
                this.m_qiangyan = (this.getChildAt(16));
                this.m_porka1 = (this.getChildAt(17));
                this.m_porka2 = (this.getChildAt(18));
                this.m_porka3 = (this.getChildAt(19));
                this.m_porka4 = (this.getChildAt(20));
                this.m_porka5 = (this.getChildAt(21));
                this.m_img_type = (this.getChildAt(22));
                this.m_porka = (this.getChildAt(23));
                this.m_txt_scoretop = (this.getChildAt(24));
                this.m_txt_score_mid = (this.getChildAt(25));
                this.m_txt_score_down = (this.getChildAt(26));
                this.m_imt_teshu = (this.getChildAt(27));
                this.m_img_fanbei = (this.getChildAt(28));
                this.m_t0 = this.getTransitionAt(0);
                this.m_t1 = this.getTransitionAt(1);
            };
            UI_PlayerPokers.URL = "ui://jow5n9bqdu502u";
            return UI_PlayerPokers;
        }(fairygui.GComponent));
        Game.UI_PlayerPokers = UI_PlayerPokers;
        __reflect(UI_PlayerPokers.prototype, "UI.Game.UI_PlayerPokers");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_PlayerPokers.js.map