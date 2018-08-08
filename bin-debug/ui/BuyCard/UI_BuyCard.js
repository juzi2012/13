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
    var BuyCard;
    (function (BuyCard) {
        var UI_BuyCard = (function (_super) {
            __extends(UI_BuyCard, _super);
            function UI_BuyCard() {
                return _super.call(this) || this;
            }
            UI_BuyCard.createInstance = function () {
                return (fairygui.UIPackage.createObject("BuyCard", "BuyCard"));
            };
            UI_BuyCard.prototype.constructFromXML = function (xml) {
                _super.prototype.constructFromXML.call(this, xml);
                this.m_btn_buy = (this.getChildAt(2));
                this.m_btn_get = (this.getChildAt(4));
                this.m_btn_close = (this.getChildAt(8));
                this.m_txt_input = (this.getChildAt(10));
                this.m_txt_input1 = (this.getChildAt(13));
                this.m_txt_input2 = (this.getChildAt(14));
                this.m_txt_input3 = (this.getChildAt(15));
                this.m_txt_input4 = (this.getChildAt(16));
                this.m_txt_input5 = (this.getChildAt(17));
                this.m_txt_input6 = (this.getChildAt(18));
            };
            UI_BuyCard.URL = "ui://ebiec26up0d66";
            return UI_BuyCard;
        }(fairygui.GComponent));
        BuyCard.UI_BuyCard = UI_BuyCard;
        __reflect(UI_BuyCard.prototype, "UI.BuyCard.UI_BuyCard");
    })(BuyCard = UI.BuyCard || (UI.BuyCard = {}));
})(UI || (UI = {}));
//# sourceMappingURL=UI_BuyCard.js.map