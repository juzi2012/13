var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var RankVO = (function () {
        function RankVO() {
        }
        return RankVO;
    }());
    game.RankVO = RankVO;
    __reflect(RankVO.prototype, "game.RankVO");
})(game || (game = {}));
//# sourceMappingURL=RankVO.js.map