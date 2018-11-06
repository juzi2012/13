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
        var UI_ChargeItem = (function (_super) {
            __extends(UI_ChargeItem, _super);
            function UI_ChargeItem() {
                return _super.call(this) || this;
            }
            UI_ChargeItem.createInstance = function () {
                return (fairygui.UIPackage.createObject("Charge", "ChargeItem"));
            };
            UI_ChargeItem.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_charge = (this.getChildAt(1));
                this.m_cardnum = (this.getChildAt(2));
            };
            UI_ChargeItem.URL = "ui://n4kjkscxkd573";
            return UI_ChargeItem;
        }(fairygui.GComponent));
        Charge.UI_ChargeItem = UI_ChargeItem;
        __reflect(UI_ChargeItem.prototype, "UI.Charge.UI_ChargeItem");
    })(Charge = UI.Charge || (UI.Charge = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ChargeItem.js.map