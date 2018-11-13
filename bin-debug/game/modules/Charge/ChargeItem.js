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
var game;
(function (game) {
    var ChargeItem = (function (_super) {
        __extends(ChargeItem, _super);
        function ChargeItem() {
            return _super.call(this) || this;
        }
        ChargeItem.prototype.setData = function (id) {
            this.step = id;
            this.m_btn_charge.addClickListener(this.onBuyCard, this);
            switch (id) {
                case 0:
                    this.m_cardnum.url = "ui://n4kjkscxg4m68";
                    this.m_btn_charge.m_num.url = "ui://n4kjkscxg4m6c";
                    break;
                case 1:
                    this.m_cardnum.url = "ui://n4kjkscxg4m6a";
                    this.m_btn_charge.m_num.url = "ui://n4kjkscxg4m67";
                    break;
                case 2:
                    this.m_cardnum.url = "ui://n4kjkscxg4m6b";
                    this.m_btn_charge.m_num.url = "ui://n4kjkscxg4m69";
                    break;
            }
        };
        ChargeItem.prototype.onBuyCard = function () {
            var goodsName = "获得10房卡";
            var money = 6;
            switch (this.step) {
                case 0:
                    goodsName = "获得10张房卡";
                    money = 6;
                    break;
                case 1:
                    goodsName = "获得20张房卡";
                    money = 12;
                    break;
                case 2:
                    goodsName = "获得50张房卡";
                    money = 30;
                    break;
            }
            var appId = 600015; //"appOrderId1111111111";
            var state = game.OptModel.ins.state;
            var userId = game.GameModel.ins.uid;
            var sign = new md5().hex_md5("appId=" + appId + "goodsName=" + goodsName + "money=" + money + "state=" + state + "userId=" + userId + "dq9FR5gBTPdhuVtsdmCbhiKM4ByjGL");
            showPay(appId, goodsName, money, state, userId, sign);
        };
        return ChargeItem;
    }(UI.Charge.UI_ChargeItem));
    game.ChargeItem = ChargeItem;
    __reflect(ChargeItem.prototype, "game.ChargeItem");
})(game || (game = {}));
//# sourceMappingURL=ChargeItem.js.map