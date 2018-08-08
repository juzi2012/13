var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var ChatModel = (function () {
        function ChatModel() {
        }
        Object.defineProperty(ChatModel, "ins", {
            get: function () {
                if (this._ins == null) {
                    this._ins = new ChatModel();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        ChatModel.prototype.init = function () {
            this.arr = [];
        };
        ChatModel.prototype.onReceive = function (msg) {
            this.arr.push(msg);
        };
        ChatModel.prototype.dispose = function () {
            this.arr = [];
        };
        return ChatModel;
    }());
    game.ChatModel = ChatModel;
    __reflect(ChatModel.prototype, "game.ChatModel");
})(game || (game = {}));
//# sourceMappingURL=ChatModel.js.map