var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var JuModel = (function () {
        function JuModel() {
        }
        return JuModel;
    }());
    game.JuModel = JuModel;
    __reflect(JuModel.prototype, "game.JuModel");
    var JuPlayer = (function () {
        function JuPlayer() {
        }
        return JuPlayer;
    }());
    game.JuPlayer = JuPlayer;
    __reflect(JuPlayer.prototype, "game.JuPlayer");
    var JieSanPlayer = (function () {
        function JieSanPlayer() {
        }
        return JieSanPlayer;
    }());
    game.JieSanPlayer = JieSanPlayer;
    __reflect(JieSanPlayer.prototype, "game.JieSanPlayer");
    var Round = (function () {
        function Round() {
            this.cur = 0; // 当前播放到第几局
        }
        Round.prototype.init = function (data) {
            this.Tm = data['Tm'];
            this.Rd = data['Rd'];
            this.Fc = data['Fc'];
            this.Jn = data['Jn'];
            this.jus = [];
            this.playerFinalData = [];
            for (var item in data['Us']) {
                this.playerFinalData.push(data['Us'][item]);
            }
            this.jiesanId = data["Js"];
            if (this.jiesanId != "") {
                this.jesanArr = [];
                var tou = new JieSanPlayer();
                tou.name = this.jiesanId;
                tou.order = 0;
                this.jesanArr.push(tou);
                var noworder = 1;
                for (var item in data["Jc"]) {
                    if (item != this.jiesanId) {
                        var tou_1 = new JieSanPlayer();
                        tou_1.name = item;
                        tou_1.order = noworder;
                        this.jesanArr.push(tou_1);
                        noworder++;
                    }
                }
            }
            this.playerFinalData.sort(function (a, b) {
                return b['sc'] - a['sc'];
            });
            var judata = data['Pl'];
            for (var i = 0; i < judata.length; i++) {
                var ju = new JuModel();
                ju.juNum = judata[i]['Js'];
                ju.players = [];
                for (var id in judata[i]['Us']) {
                    var player = new JuPlayer();
                    player.id = id;
                    player.name = judata[i]['Us'][id].name;
                    player.px = judata[i]['Us'][id]['px'];
                    player.sc = judata[i]['Us'][id]['sc'];
                    player.topCards = [];
                    for (var a = 0; a < judata[i]['Us'][id]['tc'].length; a++) {
                        var pk = new game.PorkVO(game.PorkUtil.ChangeServerCardToClient(judata[i]['Us'][id]['tc'][a]));
                        player.topCards.push(pk);
                    }
                    player.topCards = game.PorkUtil.SortCard(player.topCards);
                    player.midCards = [];
                    for (var a = 0; a < judata[i]['Us'][id]['zc'].length; a++) {
                        var pk = new game.PorkVO(game.PorkUtil.ChangeServerCardToClient(judata[i]['Us'][id]['zc'][a]));
                        player.midCards.push(pk);
                    }
                    player.midCards = game.PorkUtil.SortCard(player.midCards);
                    player.downCards = [];
                    for (var a = 0; a < judata[i]['Us'][id]['wc'].length; a++) {
                        var pk = new game.PorkVO(game.PorkUtil.ChangeServerCardToClient(judata[i]['Us'][id]['wc'][a]));
                        player.downCards.push(pk);
                    }
                    player.downCards = game.PorkUtil.SortCard(player.downCards);
                    player.topType = judata[i]['Us'][id]['tt'];
                    player.midType = judata[i]['Us'][id]['zt'];
                    player.downType = judata[i]['Us'][id]['wt'];
                    ju.players.push(player);
                }
                this.jus.push(ju);
                this.jus.sort(function (a, b) {
                    return a.juNum - b.juNum;
                });
            }
        };
        Round.prototype.getScoreById = function (id) {
            var result = [];
            for (var i = 0; i < this.jus.length; i++) {
                var ju = this.jus[i];
                for (var j = 0; j < ju.players.length; j++) {
                    if (ju.players[j].id == id) {
                        result.push(ju.players[j].sc);
                        break;
                    }
                }
            }
            return result;
        };
        return Round;
    }());
    game.Round = Round;
    __reflect(Round.prototype, "game.Round");
    var ZhanJiModel = (function () {
        function ZhanJiModel() {
        }
        Object.defineProperty(ZhanJiModel, "ins", {
            get: function () {
                if (this._ins == null) {
                    this._ins = new ZhanJiModel();
                }
                return this._ins;
            },
            enumerable: true,
            configurable: true
        });
        ZhanJiModel.prototype.init = function (value) {
            this.rounds = [];
            for (var p = 0; p < value.length; p++) {
                var data = JSON.parse(value[p]['msg']);
                var round = new Round();
                round.init(data);
                this.rounds.push(round);
            }
        };
        return ZhanJiModel;
    }());
    game.ZhanJiModel = ZhanJiModel;
    __reflect(ZhanJiModel.prototype, "game.ZhanJiModel");
})(game || (game = {}));
//# sourceMappingURL=ZhanJiModel.js.map