/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UI;
(function (UI) {
    var Charge;
    (function (Charge) {
        var ChargeBinder = (function () {
            function ChargeBinder() {
            }
            ChargeBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(Charge.UI_ChargeModule.URL, Charge.UI_ChargeModule);
                fairygui.UIObjectFactory.setPackageItemExtension(Charge.UI_ChargeItem.URL, Charge.UI_ChargeItem);
                fairygui.UIObjectFactory.setPackageItemExtension(Charge.UI_ButtonCharge.URL, Charge.UI_ButtonCharge);
            };
            return ChargeBinder;
        }());
        Charge.ChargeBinder = ChargeBinder;
        __reflect(ChargeBinder.prototype, "UI.Charge.ChargeBinder");
    })(Charge = UI.Charge || (UI.Charge = {}));
})(UI || (UI = {}));
//# sourceMappingURL=ChargeBinder.js.map