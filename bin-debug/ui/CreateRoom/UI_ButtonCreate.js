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
        var UI_ButtonCreate = (function (_super) {
            __extends(UI_ButtonCreate, _super);
            function UI_ButtonCreate() {
                return _super.call(this) || this;
            }
            UI_ButtonCreate.createInstance = function () {
                return (fairygui.UIPackage.createObject("CreateRoom", "ButtonCreate"));
            };
            UI_ButtonCreate.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_cardnum = (this.getChildAt(3));
            };
            UI_ButtonCreate.URL = "ui://83u5vz94h5w5v";
            return UI_ButtonCreate;
        }(fairygui.GButton));
        CreateRoom.UI_ButtonCreate = UI_ButtonCreate;
        __reflect(UI_ButtonCreate.prototype, "UI.CreateRoom.UI_ButtonCreate");
    })(CreateRoom = UI.CreateRoom || (UI.CreateRoom = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ButtonCreate.js.map