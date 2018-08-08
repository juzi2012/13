var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var CardType;
    (function (CardType) {
        CardType[CardType["WuLong"] = 0] = "WuLong";
        CardType[CardType["DuiZi"] = 1] = "DuiZi";
        CardType[CardType["LiangDui"] = 2] = "LiangDui";
        CardType[CardType["SanTiao"] = 3] = "SanTiao";
        CardType[CardType["ShunZi"] = 4] = "ShunZi";
        CardType[CardType["TongHua"] = 5] = "TongHua";
        CardType[CardType["Hulu"] = 6] = "Hulu";
        CardType[CardType["TieZhi"] = 7] = "TieZhi";
        CardType[CardType["TongHuaShun"] = 8] = "TongHuaShun";
        CardType[CardType["SanJianDao"] = 10] = "SanJianDao";
        CardType[CardType["SanShunZi"] = 11] = "SanShunZi";
        CardType[CardType["SanTongHua"] = 12] = "SanTongHua";
        CardType[CardType["LiuDuiBan"] = 13] = "LiuDuiBan";
        CardType[CardType["WangZheRongYao"] = 14] = "WangZheRongYao";
        CardType[CardType["SanTongHuaAndTongHuaShun"] = 15] = "SanTongHuaAndTongHuaShun";
        CardType[CardType["TieZhiLiuDuiBan"] = 16] = "TieZhiLiuDuiBan";
        CardType[CardType["WuDuiSanChong"] = 17] = "WuDuiSanChong";
        CardType[CardType["CouYiSe"] = 18] = "CouYiSe";
        CardType[CardType["QuanXiao"] = 19] = "QuanXiao";
        CardType[CardType["QuanDa"] = 20] = "QuanDa";
        CardType[CardType["SiTaoSanTiao"] = 21] = "SiTaoSanTiao";
        CardType[CardType["SanFenTianXia"] = 22] = "SanFenTianXia";
        CardType[CardType["YiTiaoLong"] = 23] = "YiTiaoLong";
        CardType[CardType["ZhiZunQingLong"] = 24] = "ZhiZunQingLong";
    })(CardType = game.CardType || (game.CardType = {}));
    var PorkVO = (function () {
        function PorkVO(value) {
            this.parse(value);
        }
        PorkVO.prototype.parse = function (value) {
            this.data = value;
            if (this.data == 501 || this.data == 502) {
                this.type = 5;
                this.point = this.data;
                this.showStr = '';
            }
            else {
                this.type = parseInt(String(value / 100));
                this.point = parseInt(String(value % 100));
                if (this.point == 10) {
                    this.showStr = "0";
                }
                else if (this.point == 11) {
                    this.showStr = "J";
                }
                else if (this.point == 12) {
                    this.showStr = "Q";
                }
                else if (this.point == 13) {
                    this.showStr = "K";
                }
                else if (this.point == 14) {
                    this.showStr = "A";
                }
                else {
                    this.showStr = this.point.toString();
                }
                if (this.type == 4 || this.type == 2) {
                    this.font = 'ui://jow5n9bqrezh2j';
                }
                else {
                    this.font = 'ui://jow5n9bqmwp41e';
                }
            }
        };
        return PorkVO;
    }());
    game.PorkVO = PorkVO;
    __reflect(PorkVO.prototype, "game.PorkVO");
})(game || (game = {}));
//# sourceMappingURL=PorkVO.js.map