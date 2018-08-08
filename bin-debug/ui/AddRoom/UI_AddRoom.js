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
    var AddRoom;
    (function (AddRoom) {
        var UI_AddRoom = (function (_super) {
            __extends(UI_AddRoom, _super);
            function UI_AddRoom() {
                return _super.call(this) || this;
            }
            UI_AddRoom.createInstance = function () {
                return (fairygui.UIPackage.createObject("AddRoom", "AddRoom"));
            };
            UI_AddRoom.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_panelBg = (this.getChildAt(0));
                this.m_btn1 = (this.getChildAt(8));
                this.m_btn2 = (this.getChildAt(9));
                this.m_btn3 = (this.getChildAt(10));
                this.m_btn4 = (this.getChildAt(11));
                this.m_btn5 = (this.getChildAt(12));
                this.m_btn6 = (this.getChildAt(13));
                this.m_btn7 = (this.getChildAt(14));
                this.m_btn8 = (this.getChildAt(15));
                this.m_btn9 = (this.getChildAt(16));
                this.m_btn0 = (this.getChildAt(17));
                this.m_btndel = (this.getChildAt(18));
                this.m_btnreset = (this.getChildAt(19));
                this.m_txt1 = (this.getChildAt(20));
                this.m_txt2 = (this.getChildAt(21));
                this.m_txt3 = (this.getChildAt(22));
                this.m_txt4 = (this.getChildAt(23));
                this.m_txt5 = (this.getChildAt(24));
                this.m_txt6 = (this.getChildAt(25));
            };
            UI_AddRoom.URL = "ui://8vvi1zrysej4h";
            return UI_AddRoom;
        }(fairygui.GComponent));
        AddRoom.UI_AddRoom = UI_AddRoom;
        __reflect(UI_AddRoom.prototype, "UI.AddRoom.UI_AddRoom");
    })(AddRoom = UI.AddRoom || (UI.AddRoom = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_AddRoom.js.map