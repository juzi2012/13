var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var DeckTypeEnum;
    (function (DeckTypeEnum) {
        DeckTypeEnum[DeckTypeEnum["Error"] = 255] = "Error";
        DeckTypeEnum[DeckTypeEnum["None"] = 0] = "None";
        DeckTypeEnum[DeckTypeEnum["Single"] = 1] = "Single";
        DeckTypeEnum[DeckTypeEnum["Double"] = 2] = "Double";
        DeckTypeEnum[DeckTypeEnum["TwoDouble"] = 3] = "TwoDouble";
        DeckTypeEnum[DeckTypeEnum["Three"] = 4] = "Three";
        DeckTypeEnum[DeckTypeEnum["ShunZi"] = 5] = "ShunZi";
        DeckTypeEnum[DeckTypeEnum["TongHua"] = 6] = "TongHua";
        DeckTypeEnum[DeckTypeEnum["Gourd"] = 7] = "Gourd";
        DeckTypeEnum[DeckTypeEnum["Bomb"] = 8] = "Bomb";
        DeckTypeEnum[DeckTypeEnum["TongHuaShun"] = 9] = "TongHuaShun";
        DeckTypeEnum[DeckTypeEnum["FiveBomb"] = 10] = "FiveBomb"; //五炸10
    })(DeckTypeEnum || (DeckTypeEnum = {}));
    var Result = (function () {
        function Result() {
        }
        return Result;
    }());
    game.Result = Result;
    __reflect(Result.prototype, "game.Result");
    var ResultCard = (function () {
        function ResultCard() {
        }
        return ResultCard;
    }());
    game.ResultCard = ResultCard;
    __reflect(ResultCard.prototype, "game.ResultCard");
    var DaQiang = (function () {
        function DaQiang() {
            this.tarIds = [];
        }
        return DaQiang;
    }());
    game.DaQiang = DaQiang;
    __reflect(DaQiang.prototype, "game.DaQiang");
    var Win = (function () {
        function Win() {
        }
        return Win;
    }());
    game.Win = Win;
    __reflect(Win.prototype, "game.Win");
    var ResultBP = (function () {
        function ResultBP() {
        }
        ResultBP.prototype.initRS = function () {
            this.scoretop = 0;
            this.scoremid = 0;
            this.scoredown = 0;
            this.dq = new DaQiang();
            this.dq.uid = this.uid;
            this.wins = [];
            for (var i = 0; i < this.rs.length; i++) {
                var bp = this.rs[i];
                if (game.GameModel.ins.roomModel.rinfo.zz == 0) {
                    if (this.uid == game.GameModel.ins.uid) {
                        this.scoretop += bp['sc1'];
                        this.scoremid += bp['sc2'];
                        this.scoredown += bp['sc3'];
                    }
                    else {
                        if (bp['uid'] == game.GameModel.ins.uid) {
                            this.scoretop = bp['sc1'];
                            this.scoremid = bp['sc2'];
                            this.scoredown = bp['sc3'];
                        }
                    }
                }
                else {
                    this.scoretop += bp['sc1'];
                    this.scoremid += bp['sc2'];
                    this.scoredown += bp['sc3'];
                }
                if (bp['dq'] == 1) {
                    if (this.dq.tarIds.indexOf(bp['uid']) == -1) {
                        this.dq.tarIds.push(bp['uid']);
                    }
                }
                var win = new Win();
                win.uid = bp['uid'];
                win.w1 = bp['w1'];
                win.w2 = bp['w2'];
                win.w3 = bp['w3'];
                this.wins.push(win);
            }
            this.scoretop *= -1;
            this.scoremid *= -1;
            this.scoredown *= -1;
            this.scoretopstr = this.scoretop > 0 ? ("+" + this.scoretop) : this.scoretop.toString();
            this.scoremidstr = this.scoremid > 0 ? ("+" + this.scoremid) : this.scoremid.toString();
            this.scoredownstr = this.scoredown > 0 ? ("+" + this.scoredown) : this.scoredown.toString();
        };
        ResultBP.prototype.getWinById = function (uid) {
            for (var i = 0; i < this.wins.length; i++) {
                if (this.wins[i].uid == uid) {
                    return this.wins[i];
                }
            }
            return null;
        };
        return ResultBP;
    }());
    game.ResultBP = ResultBP;
    __reflect(ResultBP.prototype, "game.ResultBP");
    var RoundModel = (function () {
        function RoundModel() {
            this.cardStr = "";
            this.typeClickCount1 = 0;
            this.typeClickCount2 = 0;
            this.typeClickCount3 = 0;
            this.typeClickCount4 = 0;
            this.typeClickCount5 = 0;
            this.typeClickCount6 = 0;
            this.typeClickCount7 = 0;
            this.typeClickCount8 = 0;
            this.typeClickCount9 = 0;
        }
        Object.defineProperty(RoundModel.prototype, "listCard", {
            get: function () {
                return this._listCard;
            },
            set: function (value) {
                this._listCard = value;
                this.setAllType();
                this.typeClickCount1 = 0;
                this.typeClickCount2 = 0;
                this.typeClickCount3 = 0;
                this.typeClickCount4 = 0;
                this.typeClickCount5 = 0;
                this.typeClickCount6 = 0;
                this.typeClickCount7 = 0;
                this.typeClickCount8 = 0;
                this.typeClickCount9 = 0;
                game.PorkUtil.SortCard(this._listCard);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RoundModel.prototype, "myCard", {
            get: function () {
                return this._myCard;
            },
            set: function (value) {
                this._myCard = value;
                this.listCard = value;
                this.cardStr = "";
                for (var i = 0; i < this._myCard.length; i++) {
                    this.cardStr += this._myCard[i].point + ",";
                }
            },
            enumerable: true,
            configurable: true
        });
        RoundModel.prototype.jieSuanSingle = function (msg) {
            this.result = new Result();
            this.result.cards = new Array();
            this.result.bipai = new Array();
            for (var _i = 0, _a = msg.sc; _i < _a.length; _i++) {
                var item = _a[_i];
                var resultCard = new ResultCard();
                resultCard.cards = new Array();
                var c1 = [];
                var c2 = [];
                var c3 = [];
                for (var i = 0; i < item['cds'].length; i++) {
                    var vo = new game.PorkVO(game.PorkUtil.ChangeServerCardToClient(item['cds'][i]));
                    if (i >= 0 && i < 3) {
                        c1.push(vo);
                    }
                    if (i >= 3 && i < 8) {
                        c2.push(vo);
                    }
                    if (i >= 8 && i < 13) {
                        c3.push(vo);
                    }
                }
                c1 = game.PorkUtil.SortCard(c1);
                c2 = game.PorkUtil.SortCard(c2);
                c3 = game.PorkUtil.SortCard(c3);
                resultCard.cards = c1.concat(c2).concat(c3);
                resultCard.uid = item["uid"];
                resultCard.sc = item["sc"];
                resultCard.ty = item["ty"];
                resultCard.ty1 = item["ty1"];
                resultCard.ty2 = item["ty2"];
                resultCard.ty3 = item["ty3"];
                resultCard.tid = game.GameModel.ins.roomModel.getTidByUid(resultCard.uid);
                this.result.cards.push(resultCard);
                this.setUserScore(resultCard.uid, resultCard.sc);
            }
            this.result.cards.sort(function (a, b) {
                return a.tid - b.tid;
            });
            for (var _b = 0, _c = msg.bp; _b < _c.length; _b++) {
                var bpItem = _c[_b];
                var bp = new ResultBP();
                bp.px = bpItem['px'];
                bp.ql = bpItem['ql'];
                bp.rs = bpItem['rs'];
                bp.uid = bpItem['uid'];
                bp.initRS();
                this.result.bipai.push(bp);
            }
            App.MessageCenter.dispatch(game.MsgEnum.GAME_SINGLE_RESULT);
        };
        RoundModel.prototype.setUserScore = function (uid, score) {
            game.GameModel.ins.roomModel.getUserById(uid).sc += score;
        };
        //获取用户是不是有特殊牌型
        // public getPaiXing(uid:number):number
        // {
        // }
        RoundModel.prototype.setAllType = function () {
            this.duizi = game.PorkUtil.findDuiZi(this._listCard);
            this.santiao = game.PorkUtil.findSanTiao(this._listCard);
            this.liadui = game.PorkUtil.findLiaDui(this._listCard);
            this.shunzi = game.PorkUtil.findShunZi(this._listCard);
            this.tonghua = game.PorkUtil.findTongHua(this._listCard);
            this.hulu = game.PorkUtil.findHuLu(this._listCard);
            this.tiezhi = game.PorkUtil.findTieZhi(this._listCard);
            this.tonghuashun = game.PorkUtil.findTongHuaShun(this._listCard);
            this.wutong = game.PorkUtil.findWuTong(this._listCard);
        };
        RoundModel.prototype.getTypeByClick = function (chooseType) {
            var ary = [];
            switch (chooseType) {
                case "btntype1":
                    if (this.typeClickCount1 == this.duizi.length) {
                        ary = [];
                        this.typeClickCount1 = 0;
                    }
                    else {
                        ary = this.duizi[this.typeClickCount1 % this.duizi.length].concat();
                        var res = this.getResetSingleThree(ary);
                        ary = ary.concat(res);
                        this.typeClickCount1 += 1;
                    }
                    break;
                case "btntype2":
                    if (this.typeClickCount2 == this.liadui.length) {
                        ary = [];
                        this.typeClickCount2 = 0;
                    }
                    else {
                        ary = this.liadui[this.typeClickCount2 % this.liadui.length].concat();
                        this.typeClickCount2 += 1;
                        ary.push(this.getResetSingle(ary));
                    }
                    break;
                case "btntype3":
                    if (this.typeClickCount3 == this.santiao.length) {
                        ary = [];
                        this.typeClickCount3 = 0;
                    }
                    else {
                        ary = this.santiao[this.typeClickCount3 % this.santiao.length].concat();
                        var res = this.getResetSingleTwo(ary);
                        ary = ary.concat(res);
                        this.typeClickCount3++;
                    }
                    break;
                case "btntype4":
                    if (this.typeClickCount4 == this.shunzi.length) {
                        ary = [];
                        this.typeClickCount4 = 0;
                    }
                    else {
                        ary = this.shunzi[this.typeClickCount4 % this.shunzi.length].concat();
                        this.typeClickCount4++;
                    }
                    break;
                case "btntype5":
                    if (this.typeClickCount5 == this.tonghua.length) {
                        ary = [];
                        this.typeClickCount5 = 0;
                    }
                    else {
                        ary = this.tonghua[this.typeClickCount5 % this.tonghua.length].concat();
                        this.typeClickCount5++;
                    }
                    break;
                case "btntype6":
                    if (this.typeClickCount6 == this.hulu.length) {
                        ary = [];
                        this.typeClickCount6 = 0;
                    }
                    else {
                        ary = this.hulu[this.typeClickCount6 % this.hulu.length].concat();
                        this.typeClickCount6++;
                    }
                    break;
                case "btntype7":
                    if (this.typeClickCount7 == this.tiezhi.length) {
                        ary = [];
                        this.typeClickCount7 = 0;
                    }
                    else {
                        ary = this.tiezhi[this.typeClickCount7 % this.tiezhi.length].concat();
                        this.typeClickCount7++;
                        ary.push(this.getResetSingle(ary));
                    }
                    break;
                case "btntype8":
                    if (this.typeClickCount8 == this.tonghuashun.length) {
                        ary = [];
                        this.typeClickCount8 = 0;
                    }
                    else {
                        ary = this.tonghuashun[this.typeClickCount8 % this.tonghuashun.length].concat();
                        this.typeClickCount8++;
                    }
                    break;
                case "btntype9":
                    if (this.typeClickCount9 == this.wutong.length) {
                        ary = [];
                        this.typeClickCount9 = 0;
                    }
                    else {
                        ary = this.wutong[this.typeClickCount9 % this.wutong.length].concat();
                        this.typeClickCount9++;
                    }
                    break;
            }
            return ary;
        };
        //当拿到的是两对或者是铁支等四张牌型的时候，获取剩下的一个单张牌，补齐5张
        RoundModel.prototype.getResetSingle = function (ary) {
            var restAry = [];
            for (var i = 0; i < this._listCard.length; i++) {
                var p = this._listCard[i];
                if (ary.indexOf(p) < 0) {
                    restAry.push(p);
                }
            }
            for (var i = restAry.length - 1; i > 0; i--) {
                if (this.checkHasSameNum(restAry[i].point, restAry, 1) == false && this.checkHasSameNum(restAry[i].point, ary, 0) == false) {
                    return restAry[i];
                }
            }
            return restAry[restAry.length - 1];
        };
        //拿到只有一对的剩下三张牌
        RoundModel.prototype.getResetSingleThree = function (ary) {
            var restAry = [];
            var resultAry = [];
            for (var i = 0; i < this._listCard.length; i++) {
                var p = this._listCard[i];
                if (ary.indexOf(p) < 0) {
                    restAry.push(p);
                }
            }
            for (var i = restAry.length - 1; i > 0; i--) {
                if (this.checkHasSameNum(restAry[i].point, restAry, 1) == false && this.checkHasSameNum(restAry[i].point, ary, 0) == false) {
                    resultAry.push(restAry[i]);
                }
            }
            if (resultAry.length > 2) {
                return resultAry.slice(0, 3);
            }
            else {
                return resultAry;
            }
        };
        //拿到只有一对的剩下两张牌
        RoundModel.prototype.getResetSingleTwo = function (ary) {
            var restAry = [];
            var resultAry = [];
            for (var i = 0; i < this._listCard.length; i++) {
                var p = this._listCard[i];
                if (ary.indexOf(p) < 0) {
                    restAry.push(p);
                }
            }
            for (var i = restAry.length - 1; i > 0; i--) {
                if (this.checkHasSameNum(restAry[i].point, restAry, 1) == false && this.checkHasSameNum(restAry[i].point, ary, 0) == false) {
                    resultAry.push(restAry[i]);
                }
            }
            if (resultAry.length > 1) {
                return resultAry.slice(0, 2);
            }
            else {
                return resultAry;
            }
        };
        RoundModel.prototype.getResultBPByUid = function (uid) {
            for (var i = 0; i < this.result.bipai.length; i++) {
                if (this.result.bipai[i].uid == uid) {
                    return this.result.bipai[i];
                }
            }
            return null;
        };
        //数组里面是否有重复的num的
        RoundModel.prototype.checkHasSameNum = function (num, arr, min) {
            var len = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].point == num) {
                    len += 1;
                }
            }
            if (len > min) {
                return true;
            }
            else {
                return false;
            }
        };
        return RoundModel;
    }());
    game.RoundModel = RoundModel;
    __reflect(RoundModel.prototype, "game.RoundModel");
})(game || (game = {}));
//# sourceMappingURL=RoundModel.js.map