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
        var UI_DissolveHead = (function (_super) {
            __extends(UI_DissolveHead, _super);
            function UI_DissolveHead() {
                return _super.call(this) || this;
            }
            UI_DissolveHead.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "DissolveHead"));
            };
            UI_DissolveHead.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_top = (this.getChildAt(2));
                this.m_txt_name = (this.getChildAt(3));
                this.m_txt_score = (this.getChildAt(5));
            };
            UI_DissolveHead.URL = "ui://jow5n9bqgl8o4i";
            return UI_DissolveHead;
        }(fairygui.GComponent));
        Game.UI_DissolveHead = UI_DissolveHead;
        __reflect(UI_DissolveHead.prototype, "UI.Game.UI_DissolveHead");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_DissolveHead.js.map