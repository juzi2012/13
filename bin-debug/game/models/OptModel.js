var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var OptModel = (function () {
        function OptModel() {
        }
        Object.defineProperty(OptModel, "ins", {
            get: function () {
                if (this._ins == null) {
                    this._ins = new OptModel();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        OptModel.prototype.setKeFu = function () {
            var kefuConfig = RES.getRes("kefuconfig_json");
            this.kefu = kefuConfig[this.channelId.toString()];
        };
        return OptModel;
    }());
    game.OptModel = OptModel;
    __reflect(OptModel.prototype, "game.OptModel");
})(game || (game = {}));
//# sourceMappingURL=OptModel.js.map