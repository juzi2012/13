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
        var UI_DissolveRoom = (function (_super) {
            __extends(UI_DissolveRoom, _super);
            function UI_DissolveRoom() {
                return _super.call(this) || this;
            }
            UI_DissolveRoom.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "DissolveRoom"));
            };
            UI_DissolveRoom.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_panelBg = (this.getChildAt(0));
                this.m_list = (this.getChildAt(1));
                this.m_txt_name = (this.getChildAt(2));
                this.m_btn_refuse = (this.getChildAt(3));
                this.m_btn_accept = (this.getChildAt(4));
                this.m_txt_count = (this.getChildAt(5));
            };
            UI_DissolveRoom.URL = "ui://jow5n9bqgl8o4h";
            return UI_DissolveRoom;
        }(fairygui.GComponent));
        Game.UI_DissolveRoom = UI_DissolveRoom;
        __reflect(UI_DissolveRoom.prototype, "UI.Game.UI_DissolveRoom");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_DissolveRoom.js.map