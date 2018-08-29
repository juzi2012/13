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
        var UI_FloatMsg = (function (_super) {
            __extends(UI_FloatMsg, _super);
            function UI_FloatMsg() {
                return _super.call(this) || this;
            }
            UI_FloatMsg.createInstance = function () {
                return (fairygui.UIPackage.createObject("Base", "FloatMsg"));
            };
            UI_FloatMsg.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt = (this.getChildAt(1));
                this.m_t0 = this.getTransitionAt(0);
            };
            UI_FloatMsg.URL = "ui://i36kne809i991c";
            return UI_FloatMsg;
        }(fairygui.GComponent));
        Base.UI_FloatMsg = UI_FloatMsg;
        __reflect(UI_FloatMsg.prototype, "UI.Base.UI_FloatMsg");
    })(Base = UI.Base || (UI.Base = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_FloatMsg.js.map