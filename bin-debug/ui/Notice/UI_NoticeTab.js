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
        var UI_NoticeTab = (function (_super) {
            __extends(UI_NoticeTab, _super);
            function UI_NoticeTab() {
                return _super.call(this) || this;
            }
            UI_NoticeTab.createInstance = function () {
                return (fairygui.UIPackage.createObject("Notice", "NoticeTab"));
            };
            UI_NoticeTab.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_txt_name = (this.getChildAt(2));
            };
            UI_NoticeTab.URL = "ui://ecxcc9h9nxr26";
            return UI_NoticeTab;
        }(fairygui.GButton));
        Notice.UI_NoticeTab = UI_NoticeTab;
        __reflect(UI_NoticeTab.prototype, "UI.Notice.UI_NoticeTab");
    })(Notice = UI.Notice || (UI.Notice = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_NoticeTab.js.map