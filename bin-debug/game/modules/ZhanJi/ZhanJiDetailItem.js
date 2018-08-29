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
    var ZhanJiDetailItem = (function (_super) {
        __extends(ZhanJiDetailItem, _super);
        function ZhanJiDetailItem() {
            return _super.call(this) || this;
        }
        ZhanJiDetailItem.prototype.setData = function (ju) {
            this.m_txt_0.text = ju.juNum.toString();
            for (var i = 0; i < 6; i++) {
                if (ju.players[i] != null) {
                    var p = ju.players[i];
                    if (p.sc > 0) {
                        this["m_txt_" + (i + 1)].text = "+" + p.sc.toString();
                    }
                    else {
                        this["m_txt_" + (i + 1)].text = p.sc.toString();
                    }
                }
                else {
                    this["m_txt_" + (i + 1)].text = "";
                }
            }
        };
        return ZhanJiDetailItem;
    }(UI.ZhanJi.UI_ZhanJiDetailItem));
    game.ZhanJiDetailItem = ZhanJiDetailItem;
    __reflect(ZhanJiDetailItem.prototype, "game.ZhanJiDetailItem");
})(game || (game = {}));
//# sourceMappingURL=ZhanJiDetailItem.js.map