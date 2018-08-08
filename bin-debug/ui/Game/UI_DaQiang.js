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
        var UI_DaQiang = (function (_super) {
            __extends(UI_DaQiang, _super);
            function UI_DaQiang() {
                return _super.call(this) || this;
            }
            UI_DaQiang.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "DaQiang"));
            };
            UI_DaQiang.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_qiang = (this.getChildAt(0));
                this.m_t0 = this.getTransitionAt(0);
            };
            UI_DaQiang.URL = "ui://jow5n9bqist44g";
            return UI_DaQiang;
        }(fairygui.GComponent));
        Game.UI_DaQiang = UI_DaQiang;
        __reflect(UI_DaQiang.prototype, "UI.Game.UI_DaQiang");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_DaQiang.js.map