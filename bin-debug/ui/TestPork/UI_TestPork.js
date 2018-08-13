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
    var TestPork;
    (function (TestPork) {
        var UI_TestPork = (function (_super) {
            __extends(UI_TestPork, _super);
            function UI_TestPork() {
                return _super.call(this) || this;
            }
            UI_TestPork.createInstance = function () {
                return (fairygui.UIPackage.createObject("TestPork", "TestPork"));
            };
            UI_TestPork.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list1 = (this.getChildAt(0));
                this.m_list2 = (this.getChildAt(1));
                this.m_btn_ok = (this.getChildAt(2));
            };
            UI_TestPork.URL = "ui://bmcgtqfdk8tg0";
            return UI_TestPork;
        }(fairygui.GComponent));
        TestPork.UI_TestPork = UI_TestPork;
        __reflect(UI_TestPork.prototype, "UI.TestPork.UI_TestPork");
    })(TestPork = UI.TestPork || (UI.TestPork = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_TestPork.js.map