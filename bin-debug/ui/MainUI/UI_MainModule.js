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
        var UI_MainModule = (function (_super) {
            __extends(UI_MainModule, _super);
            function UI_MainModule() {
                return _super.call(this) || this;
            }
            UI_MainModule.createInstance = function () {
                return (fairygui.UIPackage.createObject("MainUI", "MainModule"));
            };
            UI_MainModule.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_notice = (this.getChildAt(3));
                this.m_btn_kefu = (this.getChildAt(4));
                this.m_btn_mail = (this.getChildAt(5));
                this.m_btn_shuoming = (this.getChildAt(6));
                this.m_btn_setting = (this.getChildAt(7));
                this.m_btn_add = (this.getChildAt(12));
                this.m_txt_card = (this.getChildAt(13));
                this.m_txt_name = (this.getChildAt(16));
                this.m_txt_id = (this.getChildAt(17));
                this.m_btn_activity = (this.getChildAt(19));
                this.m_btn_join = (this.getChildAt(20));
                this.m_btn_quan = (this.getChildAt(21));
                this.m_btn_rank = (this.getChildAt(23));
                this.m_btn_zhanji = (this.getChildAt(26));
                this.m_btn_buyCard = (this.getChildAt(27));
                this.m_btn_createRoom = (this.getChildAt(29));
                this.m_sp_create = (this.getChildAt(30));
                this.m_sp_add = (this.getChildAt(31));
                this.m_sp_quan = (this.getChildAt(32));
                this.m_sp_jj = (this.getChildAt(33));
            };
            UI_MainModule.URL = "ui://s4bbeogyvzrt1j";
            return UI_MainModule;
        }(fairygui.GComponent));
        MainUI.UI_MainModule = UI_MainModule;
        __reflect(UI_MainModule.prototype, "UI.MainUI.UI_MainModule");
    })(MainUI = UI.MainUI || (UI.MainUI = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_MainModule.js.map