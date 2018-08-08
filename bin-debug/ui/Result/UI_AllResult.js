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
        var UI_AllResult = (function (_super) {
            __extends(UI_AllResult, _super);
            function UI_AllResult() {
                return _super.call(this) || this;
            }
            UI_AllResult.createInstance = function () {
                return (fairygui.UIPackage.createObject("Result", "AllResult"));
            };
            UI_AllResult.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_check = (this.getChildAt(3));
                this.m_btn_back = (this.getChildAt(4));
                this.m_txt_time = (this.getChildAt(5));
                this.m_txt_info = (this.getChildAt(6));
                this.m_list = (this.getChildAt(7));
                this.m_txt_roomid = (this.getChildAt(8));
            };
            UI_AllResult.URL = "ui://25mni52osl2ku";
            return UI_AllResult;
        }(fairygui.GComponent));
        Result.UI_AllResult = UI_AllResult;
        __reflect(UI_AllResult.prototype, "UI.Result.UI_AllResult");
    })(Result = UI.Result || (UI.Result = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_AllResult.js.map