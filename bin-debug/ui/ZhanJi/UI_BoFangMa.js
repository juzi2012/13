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
    var ZhanJi;
    (function (ZhanJi) {
        var UI_BoFangMa = (function (_super) {
            __extends(UI_BoFangMa, _super);
            function UI_BoFangMa() {
                return _super.call(this) || this;
            }
            UI_BoFangMa.createInstance = function () {
                return (fairygui.UIPackage.createObject("ZhanJi", "BoFangMa"));
            };
            UI_BoFangMa.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_cancel = (this.getChildAt(7));
                this.m_btn_ok = (this.getChildAt(8));
                this.m_txt_input = (this.getChildAt(10));
                this.m_txt_input1 = (this.getChildAt(11));
                this.m_txt_input2 = (this.getChildAt(12));
                this.m_txt_input3 = (this.getChildAt(13));
                this.m_txt_input4 = (this.getChildAt(14));
                this.m_txt_input5 = (this.getChildAt(15));
                this.m_txt_input6 = (this.getChildAt(16));
            };
            UI_BoFangMa.URL = "ui://lxifvkdunf8ql";
            return UI_BoFangMa;
        }(fairygui.GComponent));
        ZhanJi.UI_BoFangMa = UI_BoFangMa;
        __reflect(UI_BoFangMa.prototype, "UI.ZhanJi.UI_BoFangMa");
    })(ZhanJi = UI.ZhanJi || (UI.ZhanJi = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_BoFangMa.js.map