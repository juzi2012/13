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
    var CreateRoom;
    (function (CreateRoom) {
        var UI_GameShuoMing = (function (_super) {
            __extends(UI_GameShuoMing, _super);
            function UI_GameShuoMing() {
                return _super.call(this) || this;
            }
            UI_GameShuoMing.createInstance = function () {
                return (fairygui.UIPackage.createObject("CreateRoom", "GameShuoMing"));
            };
            UI_GameShuoMing.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_panelBg = (this.getChildAt(0));
                this.m_txt_content = (this.getChildAt(1));
            };
            UI_GameShuoMing.URL = "ui://83u5vz94mdwm19";
            return UI_GameShuoMing;
        }(fairygui.GComponent));
        CreateRoom.UI_GameShuoMing = UI_GameShuoMing;
        __reflect(UI_GameShuoMing.prototype, "UI.CreateRoom.UI_GameShuoMing");
    })(CreateRoom = UI.CreateRoom || (UI.CreateRoom = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_GameShuoMing.js.map