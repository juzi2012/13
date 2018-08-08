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
    var MainUI;
    (function (MainUI) {
        var UI_ButtonCreateRoom = (function (_super) {
            __extends(UI_ButtonCreateRoom, _super);
            function UI_ButtonCreateRoom() {
                return _super.call(this) || this;
            }
            UI_ButtonCreateRoom.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "ButtonCreateRoom"));
            };
            UI_ButtonCreateRoom.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_img = (this.getChildAt(0));
            };
            UI_ButtonCreateRoom.URL = "ui://s4bbeogyrv2q2x";
            return UI_ButtonCreateRoom;
        }(fairygui.GButton));
        MainUI.UI_ButtonCreateRoom = UI_ButtonCreateRoom;
        __reflect(UI_ButtonCreateRoom.prototype, "UI.MainUI.UI_ButtonCreateRoom");
    })(MainUI = UI.MainUI || (UI.MainUI = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ButtonCreateRoom.js.map