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
    var Result;
    (function (Result) {
        var UI_SingleResult = (function (_super) {
            __extends(UI_SingleResult, _super);
            function UI_SingleResult() {
                return _super.call(this) || this;
            }
            UI_SingleResult.createInstance = function () {
                return (fairygui.UIPackage.createObject("Result", "SingleResult"));
            };
            UI_SingleResult.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_list = (this.getChildAt(3));
                this.m_btn_check = (this.getChildAt(4));
                this.m_btn_continue = (this.getChildAt(5));
                this.m_txt_time = (this.getChildAt(11));
                this.m_txt_roominfo = (this.getChildAt(12));
            };
            UI_SingleResult.URL = "ui://25mni52osl2k0";
            return UI_SingleResult;
        }(fairygui.GComponent));
        Result.UI_SingleResult = UI_SingleResult;
        __reflect(UI_SingleResult.prototype, "UI.Result.UI_SingleResult");
    })(Result = UI.Result || (UI.Result = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_SingleResult.js.map