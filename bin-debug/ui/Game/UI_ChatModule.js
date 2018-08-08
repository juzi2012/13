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
        var UI_ChatModule = (function (_super) {
            __extends(UI_ChatModule, _super);
            function UI_ChatModule() {
                return _super.call(this) || this;
            }
            UI_ChatModule.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "ChatModule"));
            };
            UI_ChatModule.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_ctrl = this.getControllerAt(0);
                this.m_panelBg = (this.getChildAt(0));
                this.m_btn_liaotian = (this.getChildAt(1));
                this.m_btn_record = (this.getChildAt(2));
                this.m_btn_biaoq = (this.getChildAt(3));
                this.m_list = (this.getChildAt(4));
                this.m_btn_send = (this.getChildAt(5));
                this.m_btn_input = (this.getChildAt(7));
            };
            UI_ChatModule.URL = "ui://jow5n9bqx90y31";
            return UI_ChatModule;
        }(fairygui.GComponent));
        Game.UI_ChatModule = UI_ChatModule;
        __reflect(UI_ChatModule.prototype, "UI.Game.UI_ChatModule");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ChatModule.js.map