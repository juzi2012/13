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
        var UI_UserInfoPosItem = (function (_super) {
            __extends(UI_UserInfoPosItem, _super);
            function UI_UserInfoPosItem() {
                return _super.call(this) || this;
            }
            UI_UserInfoPosItem.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "UserInfoPosItem"));
            };
            UI_UserInfoPosItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_name = (this.getChildAt(0));
                this.m_txt_pos = (this.getChildAt(1));
            };
            UI_UserInfoPosItem.URL = "ui://jow5n9bqf3x27j";
            return UI_UserInfoPosItem;
        }(fairygui.GComponent));
        Game.UI_UserInfoPosItem = UI_UserInfoPosItem;
        __reflect(UI_UserInfoPosItem.prototype, "UI.Game.UI_UserInfoPosItem");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_UserInfoPosItem.js.map