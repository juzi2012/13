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
        var UI_Game = (function (_super) {
            __extends(UI_Game, _super);
            function UI_Game() {
                return _super.call(this) || this;
            }
            UI_Game.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "Game"));
            };
            UI_Game.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_playerNumCtrl = this.getControllerAt(0);
                this.m_bg = (this.getChildAt(0));
                this.m_btn_quit = (this.getChildAt(2));
                this.m_btn_setting = (this.getChildAt(3));
                this.m_btn_help = (this.getChildAt(4));
                this.m_btn_talk = (this.getChildAt(6));
                this.m_btn_invite = (this.getChildAt(7));
                this.m_btn_chat = (this.getChildAt(8));
                this.m_sharetips = (this.getChildAt(11));
                this.m_txt_room = (this.getChildAt(13));
                this.m_txt_jushu = (this.getChildAt(14));
                this.m_txt_roomtype = (this.getChildAt(15));
                this.m_btn_start = (this.getChildAt(17));
                this.m_head5 = (this.getChildAt(18));
                this.m_head4 = (this.getChildAt(19));
                this.m_head2 = (this.getChildAt(20));
                this.m_head3 = (this.getChildAt(21));
                this.m_head6 = (this.getChildAt(22));
                this.m_head1 = (this.getChildAt(23));
                this.m_btn_check = (this.getChildAt(25));
                this.m_btn_ready = (this.getChildAt(26));
                this.m_img_start = (this.getChildAt(27));
                this.m_btn_continue = (this.getChildAt(28));
                this.m_qld = (this.getChildAt(29));
                this.m_t1 = this.getTransitionAt(0);
                this.m_t3 = this.getTransitionAt(1);
            };
            UI_Game.URL = "ui://jow5n9bqmwp40";
            return UI_Game;
        }(fairygui.GComponent));
        Game.UI_Game = UI_Game;
        __reflect(UI_Game.prototype, "UI.Game.UI_Game");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_Game.js.map