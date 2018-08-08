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
        var UI_SecurityCheck = (function (_super) {
            __extends(UI_SecurityCheck, _super);
            function UI_SecurityCheck() {
                return _super.call(this) || this;
            }
            UI_SecurityCheck.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "SecurityCheck"));
            };
            UI_SecurityCheck.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_t0 = this.getTransitionAt(0);
            };
            UI_SecurityCheck.URL = "ui://jow5n9bqdu502t";
            return UI_SecurityCheck;
        }(fairygui.GComponent));
        Game.UI_SecurityCheck = UI_SecurityCheck;
        __reflect(UI_SecurityCheck.prototype, "UI.Game.UI_SecurityCheck");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_SecurityCheck.js.map