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
        var UI_UserInfo = (function (_super) {
            __extends(UI_UserInfo, _super);
            function UI_UserInfo() {
                return _super.call(this) || this;
            }
            UI_UserInfo.createInstance = function () {
                return (fairygui.UIPackage.createObject("Game", "UserInfo"));
            };
            UI_UserInfo.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_zadan = (this.getChildAt(3));
                this.m_btn_flower = (this.getChildAt(4));
                this.m_txt_name = (this.getChildAt(7));
                this.m_txt_score = (this.getChildAt(8));
                this.m_txt_id = (this.getChildAt(9));
                this.m_txt_pos = (this.getChildAt(10));
                this.m_txt_pos0 = (this.getChildAt(11));
                this.m_txt_pos0_2 = (this.getChildAt(12));
                this.m_txt_pos0_3 = (this.getChildAt(13));
                this.m_txt_pos0_4 = (this.getChildAt(14));
                this.m_txt_pos0_5 = (this.getChildAt(15));
                this.m_btn_close = (this.getChildAt(16));
                this.m_head = (this.getChildAt(17));
            };
            UI_UserInfo.URL = "ui://jow5n9bqwigp4o";
            return UI_UserInfo;
        }(fairygui.GComponent));
        Game.UI_UserInfo = UI_UserInfo;
        __reflect(UI_UserInfo.prototype, "UI.Game.UI_UserInfo");
    })(Game = UI.Game || (UI.Game = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_UserInfo.js.map