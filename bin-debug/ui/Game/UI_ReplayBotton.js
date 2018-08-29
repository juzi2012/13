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
        var UI_ReplayBotton = (function (_super) {
            __extends(UI_ReplayBotton, _super);
            function UI_ReplayBotton() {
                return _super.call(this) || this;
            }
            UI_ReplayBotton.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "ReplayBotton"));
            };
            UI_ReplayBotton.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getControllerAt(0);
                this.m_btn_start = (this.getChildAt(2));
                this.m_btn_pre = (this.getChildAt(3));
                this.m_btn_next = (this.getChildAt(4));
                this.m_btn_stop = (this.getChildAt(5));
                this.m_btn_pause = (this.getChildAt(6));
                this.m_txt_huifangma = (this.getChildAt(7));
            };
            UI_ReplayBotton.URL = "ui://jow5n9bqy9mu5t";
            return UI_ReplayBotton;
        }(fairygui.GComponent));
        Game.UI_ReplayBotton = UI_ReplayBotton;
        __reflect(UI_ReplayBotton.prototype, "UI.Game.UI_ReplayBotton");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ReplayBotton.js.map