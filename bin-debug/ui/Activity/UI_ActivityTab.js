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
    var Activity;
    (function (Activity) {
        var UI_ActivityTab = (function (_super) {
            __extends(UI_ActivityTab, _super);
            function UI_ActivityTab() {
                return _super.call(this) || this;
            }
            UI_ActivityTab.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "ActivityTab"));
            };
            UI_ActivityTab.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_name = (this.getChildAt(2));
            };
            UI_ActivityTab.URL = "ui://eqi03f83nxr23";
            return UI_ActivityTab;
        }(fairygui.GButton));
        Activity.UI_ActivityTab = UI_ActivityTab;
        __reflect(UI_ActivityTab.prototype, "UI.Activity.UI_ActivityTab");
    })(Activity = UI.Activity || (UI.Activity = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ActivityTab.js.map