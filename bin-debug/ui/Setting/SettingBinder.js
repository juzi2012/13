/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UI;
(function (UI) {
    var Setting;
    (function (Setting) {
        var SettingBinder = (function () {
            function SettingBinder() {
            }
            SettingBinder.bindAll = function () {
                fairygui.UIObjectFactory.setPackageItemExtension(Setting.UI_Setting.URL, Setting.UI_Setting);
            };
            return SettingBinder;
        }());
        Setting.SettingBinder = SettingBinder;
        __reflect(SettingBinder.prototype, "UI.Setting.SettingBinder");
    })(Setting = UI.Setting || (UI.Setting = {}));
})(UI || (UI = {}));
//# sourceMappingURL=SettingBinder.js.map