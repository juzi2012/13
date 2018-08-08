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
    var Notice;
    (function (Notice) {
        var UI_Notice = (function (_super) {
            __extends(UI_Notice, _super);
            function UI_Notice() {
                return _super.call(this) || this;
            }
            UI_Notice.createInstance = function () {
                return (fairygui.UIPackage.createObject("Notice", "Notice"));
            };
            UI_Notice.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_tabCtl = this.getControllerAt(0);
                this.m_panelBg = (this.getChildAt(0));
            };
            UI_Notice.URL = "ui://ecxcc9h9nxr24";
            return UI_Notice;
        }(fairygui.GComponent));
        Notice.UI_Notice = UI_Notice;
        __reflect(UI_Notice.prototype, "UI.Notice.UI_Notice");
    })(Notice = UI.Notice || (UI.Notice = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_Notice.js.map