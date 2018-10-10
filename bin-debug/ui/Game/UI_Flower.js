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
        var UI_Flower = (function (_super) {
            __extends(UI_Flower, _super);
            function UI_Flower() {
                return _super.call(this) || this;
            }
            UI_Flower.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "Flower"));
            };
            UI_Flower.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_flower = (this.getChildAt(0));
                this.m_t0 = this.getTransitionAt(0);
            };
            UI_Flower.URL = "ui://jow5n9bq56g77d";
            return UI_Flower;
        }(fairygui.GComponent));
        Game.UI_Flower = UI_Flower;
        __reflect(UI_Flower.prototype, "UI.Game.UI_Flower");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_Flower.js.map