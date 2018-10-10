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
        var UI_ChatYuSheItem = (function (_super) {
            __extends(UI_ChatYuSheItem, _super);
            function UI_ChatYuSheItem() {
                return _super.call(this) || this;
            }
            UI_ChatYuSheItem.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "ChatYuSheItem"));
            };
            UI_ChatYuSheItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_content = (this.getChildAt(2));
            };
            UI_ChatYuSheItem.URL = "ui://jow5n9bq56g77h";
            return UI_ChatYuSheItem;
        }(fairygui.GComponent));
        Game.UI_ChatYuSheItem = UI_ChatYuSheItem;
        __reflect(UI_ChatYuSheItem.prototype, "UI.Game.UI_ChatYuSheItem");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ChatYuSheItem.js.map