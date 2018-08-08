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
        var UI_CreateRoom = (function (_super) {
            __extends(UI_CreateRoom, _super);
            function UI_CreateRoom() {
                return _super.call(this) || this;
            }
            UI_CreateRoom.createInstance = function () {
                return (fairygui.UIPackage.createObject("CreateRoom", "CreateRoom"));
            };
            UI_CreateRoom.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_typeCtrl = this.getControllerAt(0);
                this.m_payCtrl = this.getControllerAt(1);
                this.m_JuShuCtrl = this.getControllerAt(2);
                this.m_NumCtrl = this.getControllerAt(3);
                this.m_NumCtrl1 = this.getControllerAt(4);
                this.m_panelBg = (this.getChildAt(0));
                this.m_btn_type0 = (this.getChildAt(4));
                this.m_btn_type1 = (this.getChildAt(5));
                this.m_btn_type2 = (this.getChildAt(6));
                this.m_btn_type3 = (this.getChildAt(7));
                this.m_btn_type4 = (this.getChildAt(8));
                this.m_check_2 = (this.getChildAt(15));
                this.m_check_3 = (this.getChildAt(16));
                this.m_check_4 = (this.getChildAt(17));
                this.m_checkbox_zhuang = (this.getChildAt(18));
                this.m_num1 = (this.getChildAt(28));
                this.m_num2 = (this.getChildAt(29));
                this.m_num3 = (this.getChildAt(30));
                this.m_btn_create = (this.getChildAt(32));
                this.m_btn_buy = (this.getChildAt(33));
                this.m_check_5 = (this.getChildAt(35));
                this.m_num4 = (this.getChildAt(36));
                this.m_radio_huase1 = (this.getChildAt(37));
                this.m_radio_huase2 = (this.getChildAt(38));
                this.m_radio_huase3 = (this.getChildAt(39));
                this.m_radio_huase4 = (this.getChildAt(40));
                this.m_huase = (this.getChildAt(46));
                this.m_checkbox_mapai = (this.getChildAt(47));
                this.m_jiama = (this.getChildAt(49));
                this.m_checkbox_jiayise = (this.getChildAt(50));
                this.m_jiayise = (this.getChildAt(52));
            };
            UI_CreateRoom.URL = "ui://83u5vz94sej48";
            return UI_CreateRoom;
        }(fairygui.GComponent));
        CreateRoom.UI_CreateRoom = UI_CreateRoom;
        __reflect(UI_CreateRoom.prototype, "UI.CreateRoom.UI_CreateRoom");
    })(CreateRoom = UI.CreateRoom || (UI.CreateRoom = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_CreateRoom.js.map