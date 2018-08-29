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
    var ZhanJi;
    (function (ZhanJi) {
        var UI_ZhanJiDetail = (function (_super) {
            __extends(UI_ZhanJiDetail, _super);
            function UI_ZhanJiDetail() {
                return _super.call(this) || this;
            }
            UI_ZhanJiDetail.createInstance = function () {
                return (fairygui.UIPackage.createObject("ZhanJi", "ZhanJiDetail"));
            };
            UI_ZhanJiDetail.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_panelBg = (this.getChildAt(0));
                this.m_txt_rid = (this.getChildAt(2));
                this.m_txt_jid = (this.getChildAt(3));
                this.m_txt_time = (this.getChildAt(4));
                this.m_txt_name1 = (this.getChildAt(5));
                this.m_txt_score1 = (this.getChildAt(6));
                this.m_txt_name2 = (this.getChildAt(7));
                this.m_txt_score2 = (this.getChildAt(8));
                this.m_txt_name3 = (this.getChildAt(9));
                this.m_txt_score3 = (this.getChildAt(10));
                this.m_txt_name4 = (this.getChildAt(11));
                this.m_txt_score4 = (this.getChildAt(12));
                this.m_txt_name5 = (this.getChildAt(13));
                this.m_txt_score5 = (this.getChildAt(14));
                this.m_txt_name6 = (this.getChildAt(15));
                this.m_txt_score6 = (this.getChildAt(16));
                this.m_img_win = (this.getChildAt(18));
                this.m_list = (this.getChildAt(21));
                this.m_btn_close = (this.getChildAt(22));
                this.m_btn_sort = (this.getChildAt(23));
            };
            UI_ZhanJiDetail.URL = "ui://lxifvkdurezhd";
            return UI_ZhanJiDetail;
        }(fairygui.GComponent));
        ZhanJi.UI_ZhanJiDetail = UI_ZhanJiDetail;
        __reflect(UI_ZhanJiDetail.prototype, "UI.ZhanJi.UI_ZhanJiDetail");
    })(ZhanJi = UI.ZhanJi || (UI.ZhanJi = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_ZhanJiDetail.js.map