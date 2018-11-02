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
        var UI_Activity = (function (_super) {
            __extends(UI_Activity, _super);
            function UI_Activity() {
                return _super.call(this) || this;
            }
            UI_Activity.createInstance = function () {
                return (fairygui.UIPackage.createObject("Activity", "Activity"));
            };
            UI_Activity.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_c1 = this.getControllerAt(0);
                this.m_panelBg = (this.getChildAt(0));
                this.m_list = (this.getChildAt(5));
                this.m_mcontent = (this.getChildAt(6));
            };
            UI_Activity.URL = "ui://eqi03f83nxr20";
            return UI_Activity;
        }(fairygui.GComponent));
        Activity.UI_Activity = UI_Activity;
        __reflect(UI_Activity.prototype, "UI.Activity.UI_Activity");
    })(Activity = UI.Activity || (UI.Activity = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_Activity.js.map