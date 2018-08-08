/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UI;
(function (UI) {
    var Base;
    (function (Base) {
        var BaseBinder = (function () {
            function BaseBinder() {
            }
            BaseBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(Base.UI_FloatMsg.URL, Base.UI_FloatMsg);
                fairygui.UIObjectFactory.setPackageItemExtension(Base.UI_PopModuleBg.URL, Base.UI_PopModuleBg);
                fairygui.UIObjectFactory.setPackageItemExtension(Base.UI_SimpleAlert.URL, Base.UI_SimpleAlert);
                fairygui.UIObjectFactory.setPackageItemExtension(Base.UI_AlertBg.URL, Base.UI_AlertBg);
                fairygui.UIObjectFactory.setPackageItemExtension(Base.UI_AlertBg1.URL, Base.UI_AlertBg1);
            };
            return BaseBinder;
        }());
        Base.BaseBinder = BaseBinder;
        __reflect(BaseBinder.prototype, "UI.Base.BaseBinder");
    })(Base = UI.Base || (UI.Base = {}));
})(UI || (UI = {}));
//# sourceMappingURL=BaseBinder.js.map