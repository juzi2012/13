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
    var Loading;
    (function (Loading) {
        var UI_LoadingModule = (function (_super) {
            __extends(UI_LoadingModule, _super);
            function UI_LoadingModule() {
                return _super.call(this) || this;
            }
            UI_LoadingModule.createInstance = function () {
                return (fairygui.UIPackage.createObject("Loading", "LoadingModule"));
            };
            UI_LoadingModule.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_bar = (this.getChildAt(1));
                this.m_txt_name = (this.getChildAt(3));
                this.m_btn_start = (this.getChildAt(5));
            };
            UI_LoadingModule.URL = "ui://icciepj5kyt83";
            return UI_LoadingModule;
        }(fairygui.GComponent));
        Loading.UI_LoadingModule = UI_LoadingModule;
        __reflect(UI_LoadingModule.prototype, "UI.Loading.UI_LoadingModule");
    })(Loading = UI.Loading || (UI.Loading = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_LoadingModule.js.map