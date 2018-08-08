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
        var UI_ChatItem = (function (_super) {
            __extends(UI_ChatItem, _super);
            function UI_ChatItem() {
                return _super.call(this) || this;
            }
            UI_ChatItem.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "ChatItem"));
            };
            UI_ChatItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_content = (this.getChildAt(1));
                this.m_txt_time = (this.getChildAt(2));
            };
            UI_ChatItem.URL = "ui://jow5n9bqx90y38";
            return UI_ChatItem;
        }(fairygui.GComponent));
        Game.UI_ChatItem = UI_ChatItem;
        __reflect(UI_ChatItem.prototype, "UI.Game.UI_ChatItem");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ChatItem.js.map