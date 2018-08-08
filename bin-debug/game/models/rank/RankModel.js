var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var RankModel = (function () {
        function RankModel() {
        }
        Object.defineProperty(RankModel, "ins", {
            get: function () {
                if (this._ins == null) {
                    this._ins = new RankModel();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        return RankModel;
    }());
    game.RankModel = RankModel;
    __reflect(RankModel.prototype, "game.RankModel");
})(game || (game = {}));
//# sourceMappingURL=RankModel.js.map