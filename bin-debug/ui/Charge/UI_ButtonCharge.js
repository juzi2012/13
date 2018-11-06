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
        var UI_ButtonCharge = (function (_super) {
            __extends(UI_ButtonCharge, _super);
            function UI_ButtonCharge() {
                return _super.call(this) || this;
            }
            UI_ButtonCharge.createInstance = function () {
                return (fairygui.UIPackage.createObject("Charge", "ButtonCharge"));
            };
            UI_ButtonCharge.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_num = (this.getChildAt(1));
            };
            UI_ButtonCharge.URL = "ui://n4kjkscxkd575";
            return UI_ButtonCharge;
        }(fairygui.GButton));
        Charge.UI_ButtonCharge = UI_ButtonCharge;
        __reflect(UI_ButtonCharge.prototype, "UI.Charge.UI_ButtonCharge");
    })(Charge = UI.Charge || (UI.Charge = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ButtonCharge.js.map