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
    var PreLoading;
    (function (PreLoading) {
        var UI_PreLoading = (function (_super) {
            __extends(UI_PreLoading, _super);
            function UI_PreLoading() {
                return _super.call(this) || this;
            }
            UI_PreLoading.createInstance = function () {
                return (fairygui.UIPackage.createObject("PreLoading", "PreLoading"));
            };
            UI_PreLoading.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChildAt(0));
                this.m_img = (this.getChildAt(2));
            };
            UI_PreLoading.URL = "ui://0rnt8u4yrqsr4";
            return UI_PreLoading;
        }(fairygui.GComponent));
        PreLoading.UI_PreLoading = UI_PreLoading;
        __reflect(UI_PreLoading.prototype, "UI.PreLoading.UI_PreLoading");
    })(PreLoading = UI.PreLoading || (UI.PreLoading = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_PreLoading.js.map