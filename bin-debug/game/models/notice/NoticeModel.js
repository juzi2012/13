var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var NoticeModel = (function () {
        function NoticeModel() {
        }
        Object.defineProperty(NoticeModel, "ins", {
            get: function () {
                if (this._ins == null) {
                    this._ins = new NoticeModel();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        NoticeModel.prototype.setData = function (value) {
        };
        return NoticeModel;
    }());
    game.NoticeModel = NoticeModel;
    __reflect(NoticeModel.prototype, "game.NoticeModel");
})(game || (game = {}));
//# sourceMappingURL=NoticeModel.js.map