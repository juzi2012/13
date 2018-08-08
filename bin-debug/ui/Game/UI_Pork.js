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
        var UI_Pork = (function (_super) {
            __extends(UI_Pork, _super);
            function UI_Pork() {
                return _super.call(this) || this;
            }
            UI_Pork.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "Pork"));
            };
            UI_Pork.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_ctrlstate = this.getControllerAt(0);
                this.m_txt1 = (this.getChildAt(2));
                this.m_txt2 = (this.getChildAt(3));
                this.m_txt_type1 = (this.getChildAt(4));
                this.m_txt_type2 = (this.getChildAt(5));
                this.m_img_joke = (this.getChildAt(7));
            };
            UI_Pork.URL = "ui://jow5n9bqmwp41d";
            return UI_Pork;
        }(fairygui.GComponent));
        Game.UI_Pork = UI_Pork;
        __reflect(UI_Pork.prototype, "UI.Game.UI_Pork");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_Pork.js.map