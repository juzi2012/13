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
    var Charge;
    (function (Charge) {
        var UI_ChargeModule = (function (_super) {
            __extends(UI_ChargeModule, _super);
            function UI_ChargeModule() {
                return _super.call(this) || this;
            }
            UI_ChargeModule.createInstance = function () {
                return (fairygui.UIPackage.createObject("Charge", "ChargeModule"));
            };
            UI_ChargeModule.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_panelBg = (this.getChildAt(0));
                this.m_list = (this.getChildAt(1));
            };
            UI_ChargeModule.URL = "ui://n4kjkscxkd570";
            return UI_ChargeModule;
        }(fairygui.GComponent));
        Charge.UI_ChargeModule = UI_ChargeModule;
        __reflect(UI_ChargeModule.prototype, "UI.Charge.UI_ChargeModule");
    })(Charge = UI.Charge || (UI.Charge = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ChargeModule.js.map