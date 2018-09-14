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
            this.arr_his = [];
            if (egret.localStorage.getItem("Thirting_Chat")) {
                var his = JSON.parse(egret.localStorage.getItem("Thirting_Chat"));
                for (var i = 0; i < his.length; i++) {
                    var b = (Number(his[i]["times"]) + 5 * 24 * 60 * 60 * 1000);
                    var n = new Date().getTime();
                    if (b > n) {
                        var t2cChat = new T2C_Chat();
                        t2cChat.str = his[i]["str"];
                        t2cChat.time = his[i]["time"];
                        t2cChat.times = his[i]["times"];
                        t2cChat.type = his[i]["type"];
                        t2cChat.uid = his[i]["uid"];
                        t2cChat.uname = his[i]["uname"];
                        this.arr_his.push(t2cChat);
                    }
                }
            }
        };
        ChatModel.prototype.onReceive = function (msg) {
            this.arr.push(msg);
            this.arr_his.push(msg);
            var str = JSON.stringify(this.arr_his);
            egret.localStorage.setItem("Thirting_Chat", str);
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