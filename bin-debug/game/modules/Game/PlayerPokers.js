var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    var PlayerPokers = (function (_super) {
        __extends(PlayerPokers, _super);
        function PlayerPokers() {
            return _super.call(this) || this;
        }
        PlayerPokers.prototype.init = function () {
            this.m_qiangyan.visible = false;
            this.m_c1.selectedIndex = 0;
            this.m_porka.visible = false;
            this.m_imt_teshu.visible = false;
            this.m_txt_scoretop.visible = false;
            this.m_txt_score_mid.visible = false;
            this.m_txt_score_down.visible = false;
            for (var i = 0; i < 13; i++) {
                var poker = this['m_pork' + i];
                poker.x = -26;
                poker.m_ctrlstate.selectedIndex = 0;
                egret.Tween.get(poker, { loop: false }).to({ x: -26 + (i * 20) }, 300);
            }
        };
        PlayerPokers.prototype.showResult = function (pos, result) {
            var bipai = game.GameModel.ins.roundModel.getResultBPByUid(result.uid);
            if (game.GameModel.ins.roomModel.rinfo.zz == 1) {
                bipai = game.GameModel.ins.roundModel.result.bipai[0];
            }
            if (result.ty > 0) {
                // this.m_imt_teshu.visible=true;
                return;
            }
            this.m_porka.visible = true;
            var start = 0;
            var end = 0;
            this.m_txt_score_result.text = "";
            if (pos == 0) {
                start = 0;
                end = 3;
                this.m_porka.y = -73;
                this.m_porka1.visible = false;
                this.m_porka5.visible = false;
                for (var i = 2; i < 5; i++) {
                    this.m_porka2.showResult(result.cards[0]);
                    this.m_porka3.showResult(result.cards[1]);
                    this.m_porka4.showResult(result.cards[2]);
                }
                this.findPaiXing(result.ty1);
                this.m_txt_scoretop.visible = true;
                if (bipai.scoretop >= 0) {
                    this.m_txt_scoretop.font = "ui://jow5n9bqx90y46";
                }
                else {
                    this.m_txt_scoretop.font = "ui://jow5n9bqx90y47";
                }
                if (game.GameModel.ins.roomModel.rinfo.zz == 0) {
                    if (result.uid == game.GameModel.ins.uid) {
                        this.m_txt_scoretop.text = bipai.scoretopstr.toString();
                    }
                    else {
                        var win = bipai.getWinById(game.GameModel.ins.uid);
                        if (win.w1 == result.uid) {
                            this.m_txt_scoretop.font = "ui://jow5n9bqx90y46";
                            this.m_txt_scoretop.text = "赢" + bipai.scoretopstr;
                        }
                        else if (win.w1 == "") {
                            this.m_txt_scoretop.text = "" + bipai.scoretopstr;
                        }
                        else {
                            this.m_txt_scoretop.font = "ui://jow5n9bqx90y47";
                            this.m_txt_scoretop.text = "输" + bipai.scoretopstr;
                        }
                    }
                }
                else {
                    if (game.GameModel.ins.roomModel.rinfo.zuid != result.uid) {
                        if (bipai.getWinById(result.uid).w1 == result.uid) {
                            this.m_txt_scoretop.font = "ui://jow5n9bqx90y46";
                            this.m_txt_scoretop.text = "赢";
                        }
                        else if (bipai.getWinById(result.uid).w1 == "") {
                            this.m_txt_scoretop.text = "";
                        }
                        else {
                            this.m_txt_scoretop.font = "ui://jow5n9bqx90y47";
                            this.m_txt_scoretop.text = "输";
                        }
                    }
                    else {
                        this.m_txt_scoretop.text = "";
                    }
                }
            }
            else if (pos == 1) {
                this.m_porka1.visible = true;
                this.m_porka5.visible = true;
                start = 3;
                end = 8;
                this.m_porka.y = -22;
                this.m_porka1.showResult(result.cards[3]);
                this.m_porka2.showResult(result.cards[4]);
                this.m_porka3.showResult(result.cards[5]);
                this.m_porka4.showResult(result.cards[6]);
                this.m_porka5.showResult(result.cards[7]);
                this.findPaiXing(result.ty2);
                this.m_txt_score_mid.visible = true;
                if (bipai.scoremid >= 0) {
                    this.m_txt_score_mid.font = "ui://jow5n9bqx90y46";
                }
                else {
                    this.m_txt_score_mid.font = "ui://jow5n9bqx90y47";
                }
                if (game.GameModel.ins.roomModel.rinfo.zz == 0) {
                    if (result.uid == game.GameModel.ins.uid) {
                        this.m_txt_score_mid.text = bipai.scoremidstr.toString();
                    }
                    else {
                        var win = bipai.getWinById(game.GameModel.ins.uid);
                        if (win.w2 == result.uid) {
                            this.m_txt_score_mid.font = "ui://jow5n9bqx90y46";
                            this.m_txt_score_mid.text = "赢" + bipai.scoremidstr;
                        }
                        else if (win.w2 == '') {
                            this.m_txt_score_mid.text = "" + bipai.scoremidstr;
                        }
                        else {
                            this.m_txt_score_mid.font = "ui://jow5n9bqx90y47";
                            this.m_txt_score_mid.text = "输" + bipai.scoremidstr;
                        }
                    }
                }
                else {
                    if (game.GameModel.ins.roomModel.rinfo.zuid != result.uid) {
                        if (bipai.getWinById(result.uid).w2 == result.uid) {
                            this.m_txt_score_mid.font = "ui://jow5n9bqx90y46";
                            this.m_txt_score_mid.text = "赢";
                        }
                        else if (bipai.getWinById(result.uid).w2 == '') {
                            this.m_txt_score_mid.text = "";
                        }
                        else {
                            this.m_txt_score_mid.font = "ui://jow5n9bqx90y47";
                            this.m_txt_score_mid.text = "输";
                        }
                    }
                    else {
                        this.m_txt_score_mid.text = "";
                    }
                }
            }
            else if (pos == 2) {
                this.m_porka1.visible = true;
                this.m_porka5.visible = true;
                start = 8;
                end = 13;
                this.m_porka.y = 31;
                this.m_porka1.showResult(result.cards[8]);
                this.m_porka2.showResult(result.cards[9]);
                this.m_porka3.showResult(result.cards[10]);
                this.m_porka4.showResult(result.cards[11]);
                this.m_porka5.showResult(result.cards[12]);
                this.findPaiXing(result.ty3);
                this.m_txt_score_down.visible = true;
                if (bipai.scoredown >= 0) {
                    this.m_txt_score_down.font = "ui://jow5n9bqx90y46";
                }
                else {
                    this.m_txt_score_down.font = "ui://jow5n9bqx90y47";
                }
                if (game.GameModel.ins.roomModel.rinfo.zz == 0) {
                    if (result.uid == game.GameModel.ins.uid) {
                        this.m_txt_score_down.text = bipai.scoredownstr.toString();
                    }
                    else {
                        var win = bipai.getWinById(game.GameModel.ins.uid);
                        if (win.w3 == result.uid) {
                            this.m_txt_score_down.font = "ui://jow5n9bqx90y46";
                            this.m_txt_score_down.text = "赢" + bipai.scoredownstr;
                        }
                        else if (win.w3 == "") {
                            this.m_txt_score_down.text = "" + bipai.scoredownstr;
                        }
                        else {
                            this.m_txt_score_down.font = "ui://jow5n9bqx90y47";
                            this.m_txt_score_down.text = "输" + bipai.scoredownstr;
                        }
                    }
                    if (game.GameModel.ins.uid != result.uid) {
                        if (bipai.px > 0) {
                            this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
                            this.m_txt_score_result.text = "翻倍";
                        }
                        else {
                            this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
                            this.m_txt_score_result.text = "不翻倍";
                        }
                    }
                    else {
                        if (result.sc >= 0) {
                            this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
                        }
                        else {
                            this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
                        }
                        var f = "";
                        if (result.sc > 0) {
                            f = "+";
                        }
                        this.m_txt_score_result.text = "总得分：" + f + result.sc;
                    }
                }
                else {
                    if (game.GameModel.ins.roomModel.rinfo.zuid != result.uid) {
                        if (bipai.getWinById(result.uid).w3 == result.uid) {
                            this.m_txt_score_down.font = "ui://jow5n9bqx90y46";
                            this.m_txt_score_down.text = "赢";
                        }
                        else if (bipai.getWinById(result.uid).w3 == "") {
                            this.m_txt_score_down.text = "";
                        }
                        else {
                            this.m_txt_score_down.font = "ui://jow5n9bqx90y47";
                            this.m_txt_score_down.text = "输";
                        }
                    }
                    else {
                        this.m_txt_score_down.text = "";
                    }
                    if (result.sc >= 0) {
                        this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
                    }
                    else {
                        this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
                    }
                    var f = "";
                    if (result.sc > 0) {
                        f = "+";
                    }
                    this.m_txt_score_result.text = f + result.sc;
                }
            }
            this.m_t1.play(this.effectEnd, this);
            for (var i = start; i < end; i++) {
                var poker = this['m_pork' + i];
                poker.showResult(result.cards[i]);
            }
        };
        PlayerPokers.prototype.showResultPlay = function (pos, result) {
            if (result.px > 0) {
                // this.m_imt_teshu.visible=true;
                return;
            }
            var cards = result.topCards.concat(result.midCards.concat(result.downCards));
            this.m_porka.visible = true;
            var start = 0;
            var end = 0;
            if (pos == 0) {
                start = 0;
                end = 3;
                this.m_porka.y = -73;
                this.m_porka1.visible = false;
                this.m_porka5.visible = false;
                for (var i = 2; i < 5; i++) {
                    this.m_porka2.showResult(result.topCards[0]);
                    this.m_porka3.showResult(result.topCards[1]);
                    this.m_porka4.showResult(result.topCards[2]);
                }
                this.findPaiXing(result.topType);
                this.m_txt_scoretop.visible = true;
                this.m_txt_scoretop.text = "";
            }
            else if (pos == 1) {
                this.m_porka1.visible = true;
                this.m_porka5.visible = true;
                start = 3;
                end = 8;
                this.m_porka.y = -22;
                this.m_porka1.showResult(result.midCards[0]);
                this.m_porka2.showResult(result.midCards[1]);
                this.m_porka3.showResult(result.midCards[2]);
                this.m_porka4.showResult(result.midCards[3]);
                this.m_porka5.showResult(result.midCards[4]);
                this.findPaiXing(result.midType);
                this.m_txt_score_mid.visible = true;
                this.m_txt_score_mid.text = "";
            }
            else if (pos == 2) {
                this.m_porka1.visible = true;
                this.m_porka5.visible = true;
                start = 8;
                end = 13;
                this.m_porka.y = 31;
                this.m_porka1.showResult(result.downCards[0]);
                this.m_porka2.showResult(result.downCards[1]);
                this.m_porka3.showResult(result.downCards[2]);
                this.m_porka4.showResult(result.downCards[3]);
                this.m_porka5.showResult(result.downCards[4]);
                this.findPaiXing(result.downType);
                this.m_txt_score_down.visible = true;
                this.m_txt_score_down.text = "";
                if (result.sc >= 0) {
                    this.m_txt_score_result.font = "ui://jow5n9bqx90y46";
                }
                else {
                    this.m_txt_score_result.font = "ui://jow5n9bqx90y47";
                }
                var f = "";
                if (result.sc > 0) {
                    f = "+";
                }
                this.m_txt_score_result.text = "总得分：" + f + result.sc;
            }
            this.m_t1.play(this.effectEnd, this);
            for (var i = start; i < end; i++) {
                var poker = this['m_pork' + i];
                poker.showResult(cards[i]);
            }
        };
        PlayerPokers.prototype.effectEnd = function () {
            this.m_porka.visible = false;
        };
        PlayerPokers.prototype.showQiangYan = function () {
            this.m_qiangyan.visible = true;
            this.m_t0.play(this.daQiangComplete, this);
        };
        PlayerPokers.prototype.daQiangComplete = function () {
            this.m_qiangyan.visible = false;
        };
        PlayerPokers.prototype.findPaiXing = function (paixing) {
            // 乌龙 ui://jow5n9bqfetr4k
            // 一对 ui://jow5n9bqrezh2d
            // 两对ui://jow5n9bqrezh2c
            // 三条ui://jow5n9bqrezh2b
            // 顺子ui://jow5n9bqrezh2a
            // 同花ui://jow5n9bqrezh29
            // 葫芦ui://jow5n9bqrezh28
            // 铁支ui://jow5n9bqrezh27
            // 同花顺 ui://jow5n9bqrezh25
            // 五同 ui://jow5n9bqrezh26
            var imgurl = ['ui://jow5n9bqfetr4k', 'ui://jow5n9bqrezh2d', 'ui://jow5n9bqrezh2c', 'ui://jow5n9bqrezh2b', 'ui://jow5n9bqrezh2a',
                'ui://jow5n9bqrezh29', 'ui://jow5n9bqrezh28', 'ui://jow5n9bqrezh27', 'ui://jow5n9bqrezh25', 'ui://jow5n9bqrezh26'];
            this.m_img_type.url = imgurl[paixing - 1];
            App.SoundUtils.playSound("sg_common" + (paixing - 1).toString() + "_mp3", 0, 1);
        };
        return PlayerPokers;
    }(UI.Game.UI_PlayerPokers));
    game.PlayerPokers = PlayerPokers;
    __reflect(PlayerPokers.prototype, "game.PlayerPokers");
})(game || (game = {}));
//# sourceMappingURL=PlayerPokers.js.map