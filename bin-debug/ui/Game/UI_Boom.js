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
        var UI_Boom = (function (_super) {
            __extends(UI_Boom, _super);
            function UI_Boom() {
                return _super.call(this) || this;
            }
            UI_Boom.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "Boom"));
            };
            UI_Boom.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_boom1 = (this.getChildAt(0));
                this.m_boom2 = (this.getChildAt(1));
                this.m_t0 = this.getTransitionAt(0);
            };
            UI_Boom.URL = "ui://jow5n9bq56g77e";
            return UI_Boom;
        }(fairygui.GComponent));
        Game.UI_Boom = UI_Boom;
        __reflect(UI_Boom.prototype, "UI.Game.UI_Boom");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_Boom.js.map