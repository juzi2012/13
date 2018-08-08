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
    var Base;
    (function (Base) {
        var UI_SimpleAlert = (function (_super) {
            __extends(UI_SimpleAlert, _super);
            function UI_SimpleAlert() {
                return _super.call(this) || this;
            }
            UI_SimpleAlert.createInstance = function () {
                return (fairygui.UIPackage.createObject("Base", "SimpleAlert"));
            };
            UI_SimpleAlert.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_type = this.getControllerAt(0);
                this.m_panelBg = (this.getChildAt(0));
                this.m_btn_ok = (this.getChildAt(1));
                this.m_btn_cancel = (this.getChildAt(2));
                this.m_content = (this.getChildAt(3));
            };
            UI_SimpleAlert.URL = "ui://i36kne80r2oa1b";
            return UI_SimpleAlert;
        }(fairygui.GComponent));
        Base.UI_SimpleAlert = UI_SimpleAlert;
        __reflect(UI_SimpleAlert.prototype, "UI.Base.UI_SimpleAlert");
    })(Base = UI.Base || (UI.Base = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_SimpleAlert.js.map