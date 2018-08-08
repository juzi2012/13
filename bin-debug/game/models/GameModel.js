var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var GameModel = (function () {
        function GameModel() {
            this.uname = "Jack";
            this.uid = "383928393";
            this.card = 0;
            this.gold = 0;
        }
        Object.defineProperty(GameModel, "ins", {
            get: function () {
                if (this._ins == null) {
                    this._ins = new GameModel();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        GameModel.prototype.setLoginData = function (msg) {
            this.uid = msg.uid;
            this.card = msg.card;
            this.gold = msg.gold;
            this.uname = msg.name;
        };
        GameModel.prototype.setRoomInfo = function (msg) {
            if (this.roomModel == null) {
                this.roomModel = new game.RoomModel();
            }
            this.roomModel.setRoomInfo(msg);
        };
        GameModel.prototype.setReConnectInfo = function (msg) {
            if (this.roomModel == null) {
                this.roomModel = new game.RoomModel();
            }
            this.roomModel.isReConnectInRoom = true;
            this.roomModel.reConnectSetRoomInfo(msg);
        };
        //解散房间
        GameModel.prototype.disMissRoom = function () {
            game.AlertUtil.floatMsg("房间已经解散");
            this.roomModel = null;
        };
        GameModel.prototype.createRound = function (msg) {
            this.roomModel.addRound(msg.card);
        };
        GameModel.prototype.createRoundTest = function () {
            this.roundModel = new game.RoundModel();
            // this.roundModel.myCard = PorkUtil.RuffleCard(true,0);
            this.roundModel.myCard = game.PorkUtil.RuffleCard1();
            this.roundModel.setAllType();
            this.roundModel.myCard = game.PorkUtil.SortCard(this.roundModel.myCard);
            console.log(this.roundModel.cardStr);
        };
        return GameModel;
    }());
    game.GameModel = GameModel;
    __reflect(GameModel.prototype, "game.GameModel");
})(game || (game = {}));
//# sourceMappingURL=GameModel.js.map