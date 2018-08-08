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
        var UI_PutPork = (function (_super) {
            __extends(UI_PutPork, _super);
            function UI_PutPork() {
                return _super.call(this) || this;
            }
            UI_PutPork.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "PutPork"));
            };
            UI_PutPork.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_ctrl = this.getControllerAt(0);
                this.m_btn_close1 = (this.getChildAt(4));
                this.m_btn_close2 = (this.getChildAt(5));
                this.m_btn_close3 = (this.getChildAt(6));
                this.m_paixing_2 = (this.getChildAt(7));
                this.m_paixing_0 = (this.getChildAt(9));
                this.m_paixing_1 = (this.getChildAt(10));
                this.m_porkList = (this.getChildAt(12));
                this.m_btn_cancel = (this.getChildAt(13));
                this.m_btn_ok = (this.getChildAt(14));
                this.m_btntype1 = (this.getChildAt(15));
                this.m_btntype2 = (this.getChildAt(16));
                this.m_btntype3 = (this.getChildAt(17));
                this.m_btntype4 = (this.getChildAt(18));
                this.m_btntype5 = (this.getChildAt(19));
                this.m_btntype6 = (this.getChildAt(20));
                this.m_btntype7 = (this.getChildAt(21));
                this.m_btntype8 = (this.getChildAt(22));
                this.m_btntype9 = (this.getChildAt(23));
                this.m_btngroup = (this.getChildAt(24));
                this.m_btn_help = (this.getChildAt(25));
                this.m_area_top = (this.getChildAt(26));
                this.m_area_mid = (this.getChildAt(27));
                this.m_area_down = (this.getChildAt(28));
                this.m_list_top = (this.getChildAt(29));
                this.m_list_mid = (this.getChildAt(30));
                this.m_list_down = (this.getChildAt(31));
            };
            UI_PutPork.URL = "ui://jow5n9bqmwp41g";
            return UI_PutPork;
        }(fairygui.GComponent));
        Game.UI_PutPork = UI_PutPork;
        __reflect(UI_PutPork.prototype, "UI.Game.UI_PutPork");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_PutPork.js.map