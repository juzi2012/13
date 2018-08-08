var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var CardPointHelper = (function () {
        function CardPointHelper(cardAry) {
            var _this = this;
            this.pointNumbers = {};
            cardAry.forEach(function (card) {
                var point = card.point;
                var num = _this.pointNumbers[point] || 0;
                _this.pointNumbers[point] = num + 1;
            });
        }
        Object.defineProperty(CardPointHelper.prototype, "maxNumber", {
            get: function () {
                var result = 0;
                for (var prop in this.pointNumbers) {
                    var num = this.pointNumbers[prop];
                    result = Math.max(num, result);
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        return CardPointHelper;
    }());
    game.CardPointHelper = CardPointHelper;
    __reflect(CardPointHelper.prototype, "game.CardPointHelper");
})(game || (game = {}));
//# sourceMappingURL=CardPointHelper.js.map