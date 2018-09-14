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
        var UI_EmojiItem = (function (_super) {
            __extends(UI_EmojiItem, _super);
            function UI_EmojiItem() {
                return _super.call(this) || this;
            }
            UI_EmojiItem.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "EmojiItem"));
            };
            UI_EmojiItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_img = (this.getChildAt(0));
            };
            UI_EmojiItem.URL = "ui://jow5n9bqt3zq77";
            return UI_EmojiItem;
        }(fairygui.GComponent));
        Game.UI_EmojiItem = UI_EmojiItem;
        __reflect(UI_EmojiItem.prototype, "UI.Game.UI_EmojiItem");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_EmojiItem.js.map