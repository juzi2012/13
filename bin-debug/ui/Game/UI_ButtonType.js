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
        var UI_ButtonType = (function (_super) {
            __extends(UI_ButtonType, _super);
            function UI_ButtonType() {
                return _super.call(this) || this;
            }
            UI_ButtonType.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "ButtonType"));
            };
            UI_ButtonType.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt = (this.getChildAt(1));
            };
            UI_ButtonType.URL = "ui://jow5n9bqmwp41o";
            return UI_ButtonType;
        }(fairygui.GButton));
        Game.UI_ButtonType = UI_ButtonType;
        __reflect(UI_ButtonType.prototype, "UI.Game.UI_ButtonType");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ButtonType.js.map