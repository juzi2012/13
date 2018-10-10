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
        var UI_PlayerHead = (function (_super) {
            __extends(UI_PlayerHead, _super);
            function UI_PlayerHead() {
                return _super.call(this) || this;
            }
            UI_PlayerHead.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "PlayerHead"));
            };
            UI_PlayerHead.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_ctrlPos = this.getControllerAt(0);
                this.m_ctrlState = this.getControllerAt(1);
                this.m_name = (this.getChildAt(1));
                this.m_score = (this.getChildAt(3));
                this.m_pokers = (this.getChildAt(4));
                this.m_head = (this.getChildAt(5));
                this.m_img_ready = (this.getChildAt(6));
                this.m_img_finish = (this.getChildAt(8));
                this.m_lixian = (this.getChildAt(9));
                this.m_img_special = (this.getChildAt(10));
                this.m_img_fz = (this.getChildAt(11));
                this.m_chat_txt = (this.getChildAt(14));
                this.m_chat_txt_emoji = (this.getChildAt(15));
                this.m_chat = (this.getChildAt(16));
                this.m_flower = (this.getChildAt(17));
                this.m_boom1 = (this.getChildAt(18));
                this.m_boom2 = (this.getChildAt(19));
                this.m_t0 = this.getTransitionAt(0);
                this.m_t1 = this.getTransitionAt(1);
            };
            UI_PlayerHead.URL = "ui://jow5n9bqmwp42";
            return UI_PlayerHead;
        }(fairygui.GComponent));
        Game.UI_PlayerHead = UI_PlayerHead;
        __reflect(UI_PlayerHead.prototype, "UI.Game.UI_PlayerHead");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_PlayerHead.js.map