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
        var UI_GameReplay = (function (_super) {
            __extends(UI_GameReplay, _super);
            function UI_GameReplay() {
                return _super.call(this) || this;
            }
            UI_GameReplay.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "GameReplay"));
            };
            UI_GameReplay.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_playerNumCtrl = this.getControllerAt(0);
                this.m_btn_quit = (this.getChildAt(1));
                this.m_head5 = (this.getChildAt(3));
                this.m_head4 = (this.getChildAt(4));
                this.m_head3 = (this.getChildAt(5));
                this.m_head2 = (this.getChildAt(6));
                this.m_head6 = (this.getChildAt(7));
                this.m_head1 = (this.getChildAt(8));
                this.m_playerPoke6 = (this.getChildAt(10));
                this.m_img_start = (this.getChildAt(11));
                this.m_txt_fid = (this.getChildAt(12));
                this.m_btn_start = (this.getChildAt(13));
                this.m_t1 = this.getTransitionAt(0);
            };
            UI_GameReplay.URL = "ui://jow5n9bqijgv4x";
            return UI_GameReplay;
        }(fairygui.GComponent));
        Game.UI_GameReplay = UI_GameReplay;
        __reflect(UI_GameReplay.prototype, "UI.Game.UI_GameReplay");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_GameReplay.js.map