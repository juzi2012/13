var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var PorkUtil = (function () {
        function PorkUtil() {
        }
        /**
         * 临时测试，获取一组牌型
         */
        PorkUtil.RuffleCard = function (IsCheat, AddColor) {
            var idArr = [];
            if (IsCheat) {
                if (AddColor == 1) {
                    idArr = [102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
                        202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214,
                        302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314,
                        402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
                        404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
                        501,
                        502];
                }
                else if (AddColor == 2) {
                    idArr = [102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
                        202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214,
                        302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314,
                        302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314,
                        402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
                        404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
                        501,
                        502];
                }
                else {
                    idArr = [102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
                        202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214,
                        302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314,
                        404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
                        501,
                        502];
                }
            }
            else {
                if (AddColor == 1) {
                    idArr = [102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
                        202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214,
                        302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314,
                        402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
                        402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414
                    ];
                }
                else if (AddColor == 2) {
                    idArr = [102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
                        202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214,
                        302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314,
                        302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314,
                        402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414,
                        402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414
                    ];
                }
                else {
                    idArr = [102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
                        202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214,
                        302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314,
                        402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414
                    ];
                }
            }
            var idIndexArr = App.MathUtils.randomNoRepeat(13, 0, idArr.length);
            // let idIndexArr:Array<number> = [32,4,25,46,10,51,19,15,36,22,20,27,7];//3,13,1,14,26,39,6,7,8,21,34,47,12
            console.log(idIndexArr);
            var myCardAry = new Array();
            for (var i = 0; i < idIndexArr.length; i++) {
                myCardAry.push(new game.PorkVO(idArr[idIndexArr[i]]));
            }
            return myCardAry;
        };
        PorkUtil.RuffleCard1 = function () {
            var serverArr = [6, 30, 27, 21, 51, 24, 8, 9, 11, 13, 59, 62, 26]; //[61,58,9,5,46,30,57,14,27,20,28,62,34];
            var resultArr = [];
            for (var i = 0; i < serverArr.length; i++) {
                resultArr.push(new game.PorkVO(this.ChangeServerCardToClient(serverArr[i])));
            }
            return resultArr;
        };
        PorkUtil.prototype.getCardType = function (cards) {
            // if(this.is){
            // }
            return 0;
        };
        /**
         * 是否包含对子
         */
        PorkUtil.containDuiZi = function (cards) {
            var length = 2;
            if (cards.length < length) {
                return false;
            }
            var pointHelper = new game.CardPointHelper(cards);
            for (var w in pointHelper.pointNumbers) {
                var maxNumber = pointHelper.pointNumbers[w];
                if (maxNumber >= length) {
                    return true;
                }
            }
            return false;
        };
        /**
         * 是否包含两对
         */
        PorkUtil.containLiaDui = function (cards) {
            if (cards.length < 4) {
                return false;
            }
            return false;
        };
        PorkUtil.findDuiZi = function (cards) {
            //先找到三条，因为三条也包涵对子
            var sDuiZiIndexs = this.findSanTiao(cards) || [];
            //找到所有对子的组合
            var result = this.findPointByLength(cards, 2) || [];
            if (result.length < 2) {
                if (sDuiZiIndexs.length > 0) {
                    sDuiZiIndexs.forEach(function (pointsAry) {
                        var s1 = [pointsAry[0], pointsAry[1]];
                        result.push(s1);
                    });
                }
                var tresult = this.findByGuiPai(cards, 2);
                for (var i = 0; i < tresult.length; i++) {
                    result.push(tresult[i]);
                }
            }
            return result.length > 0 ? result : [];
        };
        /**
         * 是否包涵三条
         */
        PorkUtil.containSanTiao = function (cards) {
            if (this.findSanTiao(cards).length > 0) {
                return true;
            }
            return false;
        };
        /**
         * 是否包涵顺子
         */
        PorkUtil.containShunZi = function (cards) {
            if (this.findShunZi(cards).length > 0) {
                return true;
            }
            return false;
        };
        /**
         * 是否包涵同花
         */
        PorkUtil.containTonghua = function (cards) {
            if (this.findTongHua(cards).length > 0) {
                return true;
            }
            return false;
        };
        /**
         * 是否包涵葫芦
         */
        PorkUtil.containHulu = function (cards) {
            if (this.findHuLu(cards).length > 0) {
                return true;
            }
            return false;
        };
        /**
         * 是否包涵铁支
         */
        PorkUtil.containTieZhi = function (cards) {
            if (this.findTieZhi(cards).length > 0) {
                return true;
            }
            return false;
        };
        /**
         * 是否包涵同花顺
         */
        PorkUtil.containTonghuaShun = function (cards) {
            if (this.findTongHuaShun(cards).length > 0) {
                return true;
            }
            return false;
        };
        /**
         * 查找两对
         */
        PorkUtil.findLiaDui = function (cards) {
            var duiZiIndexs = this.findDuiZi(cards) || [];
            var duiZiIndex = this.findByGuiPai(cards, 2) || [];
            if (duiZiIndexs.length < 1 && duiZiIndex.length > 0) {
                duiZiIndex.forEach(function (indexs) {
                    duiZiIndexs.unshift(indexs);
                });
            }
            if (duiZiIndexs.length < 2) {
                return [];
            }
            var result = [];
            for (var i = 0; i < duiZiIndexs.length; i++) {
                for (var j = i + 1; j < duiZiIndexs.length; j++) {
                    if (result.length < 10) {
                        var pre = duiZiIndexs[i];
                        var next = duiZiIndexs[j];
                        var s = pre.concat(next);
                        var newS = new Array();
                        for (var q = 0; q < s.length; q++) {
                            if (newS.indexOf(s[q]) == -1) {
                                newS.push(s[q]);
                            }
                            else {
                                break;
                            }
                        }
                        if (newS.length == 4) {
                            newS.sort(function (n1, n2) {
                                return n1.point - n1.point;
                            });
                            result.unshift(newS);
                        }
                    }
                    else {
                        break;
                    }
                }
            }
            if (result.length > 6) {
                result = result.slice(0, 6);
            }
            return result;
        };
        PorkUtil.findSanTiao = function (cards) {
            if (cards.length < 3) {
                return [];
            }
            var result = this.findPointByLength(cards, 3) || [];
            if (result.length < 2) {
                var tieZhiPointsArray = this.findTieZhi(cards);
                if (tieZhiPointsArray.length > 0) {
                    tieZhiPointsArray.forEach(function (pointsAry) {
                        var sanTiaoPoints0 = [pointsAry[0], pointsAry[1], pointsAry[2]];
                        result.push(sanTiaoPoints0);
                    });
                }
                var tresult = this.findByGuiPai(cards, 3);
                for (var i = 0; i < tresult.length; i++) {
                    result.push(tresult[i]);
                }
            }
            return result.length > 0 ? result : [];
        };
        PorkUtil.findTieZhi = function (cards) {
            var result = this.findPointByLength(cards, 4);
            if (result.length > 0) {
                return result;
            }
            result = [];
            var wuTongIndexsArray = this.findWuTong(cards);
            wuTongIndexsArray.forEach(function (indexs) {
                var tieZhiPoints0 = [indexs[0], indexs[1], indexs[2], indexs[3]];
                var tieZhiPoints1 = [indexs[0], indexs[1], indexs[2], indexs[4]];
                var tieZhiPoints2 = [indexs[0], indexs[1], indexs[3], indexs[4]];
                var tieZhiPoints3 = [indexs[0], indexs[2], indexs[3], indexs[4]];
                var tieZhiPoints4 = [indexs[1], indexs[1], indexs[2], indexs[4]];
                result.push(tieZhiPoints0);
                result.push(tieZhiPoints1);
                result.push(tieZhiPoints2);
                result.push(tieZhiPoints3);
                result.push(tieZhiPoints4);
            });
            if (result.length > 10) {
                result = result.slice(0, 10);
            }
            return result.length > 0 ? result : this.findByGuiPai(cards, 4);
        };
        PorkUtil.findWuTong = function (cards) {
            if (cards.length < 5) {
                return [];
            }
            var result = this.findPointByLength(cards, 5) || [];
            return result.length > 0 ? result : this.findByGuiPai(cards, 5);
        };
        PorkUtil.findShunZi = function (cards, length) {
            if (length === void 0) { length = 5; }
            if (cards.length < 5) {
                return [];
            }
            var newCards = [];
            var pointAry = [];
            //先去重
            cards.forEach(function (card) {
                if (pointAry.indexOf(card.point) == -1) {
                    newCards.push(card);
                    pointAry.push(card.point);
                }
            });
            newCards.sort(function (a, b) {
                return a.point - b.point;
            });
            var result = [];
            for (var start = 0; (start + length) <= newCards.length; start++) {
                var subCard = newCards.slice(start, start + length);
                if (this.isShunZi(subCard, length)) {
                    result.unshift(subCard);
                }
            }
            return result.length > 0 ? result : this.findShunZiGuiPai(cards);
        };
        /**
         * 查找同花
         */
        PorkUtil.findTongHua = function (cards, length) {
            if (length === void 0) { length = 5; }
            if (cards.length < 5) {
                return [];
            }
            var result = [];
            cards.sort(this.sortByColor);
            for (var start = 0; (start + length) <= cards.length; ++start) {
                var subCard = cards.slice(start, start + length);
                if (this.isTongHua(subCard, length)) {
                    result.unshift(subCard);
                }
            }
            return result.length > 0 ? result : this.findTongHuaGuiPai(cards);
        };
        /**
         * 查找葫芦
         */
        PorkUtil.findHuLu = function (cardAry) {
            if (cardAry.length < 5) {
                return [];
            }
            var p_3 = this.findSanTiao(cardAry);
            var p_4 = this.findTieZhi(cardAry);
            var p2 = this.findDuiZi(cardAry) || [];
            if (p2.length <= 0) {
                if (p_3.length > 0) {
                    p_3.forEach(function (pointAry) {
                        var sanTiaoIndexs0 = [pointAry[0], pointAry[1]];
                        var sanTiaoIndexs1 = [pointAry[1], pointAry[2]];
                        p2.push(sanTiaoIndexs0);
                        p2.push(sanTiaoIndexs1);
                    });
                }
                if (p_4.length >= 0) {
                    p_4.forEach(function (pointAry) {
                        var siTiaoIndexs0 = [pointAry[0], pointAry[1]];
                        var siTiaoIndexs1 = [pointAry[2], pointAry[3]];
                        p2.push(siTiaoIndexs0);
                        p2.push(siTiaoIndexs1);
                    });
                }
            }
            if (p2.length <= 0 || p_3.length <= 0) {
                return [];
            }
            var result = [];
            for (var a = 0; a < p2.length; a++) {
                var subResult = [];
                var peace2 = p2[a];
                for (var b = 0; b < p_3.length; b++) {
                    var peace3 = p_3[b];
                    subResult = peace2.concat(peace3);
                    for (var i = 0; i < subResult.length - 1; i++) {
                        var aa = subResult[i];
                        for (var j = i + 1; j < subResult.length; j++) {
                            if (aa == subResult[j]) {
                                subResult = null;
                                break;
                            }
                        }
                        if (subResult == null) {
                            break;
                        }
                    }
                    if (subResult != null)
                        result.unshift(subResult);
                }
            }
            if (result.length > 10) {
                result = result.slice(0, 10);
            }
            return result.length > 0 ? result : this.findHuLuGuiPai(cardAry);
        };
        PorkUtil.findTongHuaShun = function (cards, length) {
            if (length === void 0) { length = 5; }
            if (cards.length < length) {
                return [];
            }
            var color1 = []; //方块
            var color2 = []; //梅花
            var color3 = []; //红心
            var color4 = []; //黑桃
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].type == 4) {
                    if (color4.indexOf(cards[i].point) == -1) {
                        color4.push(cards[i]);
                    }
                }
                if (cards[i].type == 3) {
                    if (color3.indexOf(cards[i].point) == -1) {
                        color3.push(cards[i]);
                    }
                }
                if (cards[i].type == 2) {
                    if (color2.indexOf(cards[i].point) == -1) {
                        color2.push(cards[i]);
                    }
                }
                if (cards[i].type == 1) {
                    if (color1.indexOf(cards[i].point) == -1) {
                        color1.push(cards[i]);
                    }
                }
            }
            var colorSum = [];
            if (color4.length >= 5) {
                color4.sort(this.sortByPoint);
                colorSum.push(color4);
            }
            if (color3.length >= 5) {
                color3.sort(this.sortByPoint);
                colorSum.push(color3);
            }
            if (color2.length >= 5) {
                color2.sort(this.sortByPoint);
                colorSum.push(color2);
            }
            if (color1.length >= 5) {
                color1.sort(this.sortByPoint);
                colorSum.push(color1);
            }
            var result = [];
            for (var j = 0; j < colorSum.length; j++) {
                var s = colorSum[j];
                for (var start = 0; (start + 5) <= s.length; start++) {
                    var subCards = s.slice(start, start + 5);
                    if (this.isTongHuaShun(subCards)) {
                        subCards.sort(this.sortByPoint);
                        result.unshift(subCards);
                    }
                }
            }
            return result.length > 0 ? result : this.findTongHuaShunGuiPai(cards, 5);
        };
        PorkUtil.sortByColor = function (card1, card2, pointAsc) {
            if (pointAsc === void 0) { pointAsc = true; }
            if (card2.type == card1.type) {
                return (card1.point - card2.point) * (pointAsc ? 1 : -1);
            }
            return card2.type - card1.type;
        };
        PorkUtil.sortByPoint = function (card1, card2) {
            return card1.point - card2.point;
        };
        /**
         * 查找带鬼牌的牌型，仅限于对子，3，4个
         * 65 66
         */
        PorkUtil.findByGuiPai = function (cardAry, numBer) {
            if (numBer === void 0) { numBer = 1; }
            var cards = cardAry.concat([]);
            var gAry = this.filtGuiPai(cards);
            if (gAry.length <= 0) {
                return [];
            }
            var result = [];
            for (var j = 1; j <= gAry.length; ++j) {
                var num = numBer - j;
                var indexs = this.findPointByLength(cards, num) || [];
                for (var t = 0; t < indexs.length; t++) {
                    if (numBer == 2) {
                        for (var o = 0; o < gAry.length; o++) {
                            var s = indexs[t].concat(gAry[o]);
                            if (s.length == numBer) {
                                result.push(s);
                            }
                        }
                    }
                    else {
                        var s = indexs[t].concat(gAry.slice(0, j));
                        if (s.length == numBer) {
                            result.push(s);
                        }
                    }
                }
            }
            return result.length > 0 ? result : [];
        };
        PorkUtil.findShunZiGuiPai = function (cardsAry, length) {
            if (length === void 0) { length = 5; }
            if (cardsAry.length < length) {
                return [];
            }
            var cards1 = cardsAry.concat([]);
            var gAry = this.filtGuiPai(cards1);
            cards1 = this.deleteAryFormAry(cards1, gAry);
            var cards = [];
            var cardsPoint = [];
            for (var i = 0; i < cards1.length; i++) {
                if (cardsPoint.indexOf(cards1[i].point) == -1) {
                    cards.push(cards1[i]);
                    cardsPoint.push(cards1[i].point);
                }
            }
            cards.sort(function (n1, n2) {
                return n1.point - n2.point;
            });
            var result = [];
            for (var j = 1; j <= gAry.length; ++j) {
                var num = length - j;
                var _loop_1 = function (start) {
                    subCards = cards.slice(start, start + num);
                    bool = subCards[num - 1].point - subCards[0].point < length;
                    if (bool) {
                        var indexs_1 = [];
                        var newCard20 = gAry.slice(0, j);
                        subCards = subCards.concat(newCard20);
                        subCards.forEach(function (card) {
                            for (var q = 0; q < cardsAry.length; q++) {
                                var r = cardsAry[q];
                                if (r === card) {
                                    indexs_1.push(card);
                                    break;
                                }
                            }
                        });
                        indexs_1.sort(function (a, b) {
                            return a.point - b.point;
                        });
                        result.unshift(indexs_1);
                    }
                };
                var subCards, bool;
                for (var start = 0; (start + num) <= cards.length; ++start) {
                    _loop_1(start);
                }
            }
            return result;
        };
        /**
         * 带鬼牌的同花顺
         */
        PorkUtil.findTongHuaShunGuiPai = function (cardsAry, length) {
            if (cardsAry.length < length) {
                return [];
            }
            var cards = cardsAry.concat([]);
            var gAry = this.filtGuiPai(cards);
            if (gAry.length <= 0) {
                return [];
            }
            cards = this.deleteAryFormAry(cards, gAry);
            var colorS = []; //黑桃
            var colorH = []; //红心
            var colorC = []; //梅花
            var colorD = []; //方块
            var pointS = []; //黑桃
            var pointH = []; //红心
            var pointC = []; //梅花
            var pointD = []; //方块
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].type == 4) {
                    if (pointS.indexOf(cards[i].point) == -1) {
                        pointS.push(cards[i].point);
                        colorS.push(cards[i]);
                    }
                }
                else if (cards[i].type == 3) {
                    if (pointH.indexOf(cards[i].point) == -1) {
                        pointH.push(cards[i].point);
                        colorH.push(cards[i]);
                    }
                }
                else if (cards[i].type == 2) {
                    if (pointC.indexOf(cards[i].point) == -1) {
                        pointC.push(cards[i].point);
                        colorC.push(cards[i]);
                    }
                }
                else if (cards[i].type == 1) {
                    if (pointD.indexOf(cards[i].point) == -1) {
                        pointD.push(cards[i].point);
                        colorD.push(cards[i]);
                    }
                }
            }
            var color = [colorS, colorH, colorC, colorD];
            var colorSum = []; //总共有几种花色 [5,3,0....]
            for (var i = 0; i < color.length; i++) {
                if (color[i].length >= (5 - gAry.length)) {
                    color[i].sort(function (a1, a2) {
                        return a1.point - a2.point;
                    });
                    colorSum.push(color[i]);
                }
            }
            var result = [];
            for (var i = 0; i < colorSum.length; i++) {
                var s = colorSum[i];
                for (var j = 1; j <= gAry.length; ++j) {
                    var num = 5 - j;
                    var _loop_2 = function (start) {
                        var subCards = s.slice(start, start + num);
                        console.log(num);
                        var bool = subCards[num - 1].point - subCards[0].point < 5;
                        if (bool) {
                            var indexs_2 = [];
                            var newCard20 = gAry.slice(0, j);
                            subCards = subCards.concat(newCard20);
                            subCards.forEach(function (ca) {
                                for (var q = 0; q < cardsAry.length; q++) {
                                    var r = cardsAry[q];
                                    if (r === ca) {
                                        indexs_2.push(ca);
                                        break;
                                    }
                                }
                            });
                            indexs_2.sort(function (a, b) {
                                return a.point - b.point;
                            });
                            result.unshift(indexs_2);
                        }
                    };
                    for (var start = 0; (start + num) <= s.length; ++start) {
                        _loop_2(start);
                    }
                }
            }
            return result;
        };
        /**
         * 带鬼牌的同花
         */
        PorkUtil.findTongHuaGuiPai = function (cardsAry) {
            if (cardsAry.length < 5) {
                return [];
            }
            var cards = cardsAry.concat([]);
            var gAry = this.filtGuiPai(cards);
            if (gAry.length <= 0) {
                return [];
            }
            cards = this.deleteAryFormAry(cards, gAry);
            // 先根据点数去重
            cards.sort(this.sortByColor);
            var result = [];
            for (var j = 1; j <= gAry.length; ++j) {
                var num = 5 - j;
                var _loop_3 = function (start) {
                    var subCards = cards.slice(start, start + num);
                    if (this_1.isTongHua(subCards, num)) {
                        var indexs_3 = [];
                        var newCard20 = gAry.slice(0, j);
                        subCards = subCards.concat(newCard20);
                        subCards.forEach(function (card) {
                            for (var q = 0; q < cardsAry.length; q++) {
                                var r = cardsAry[q];
                                if (r === card) {
                                    indexs_3.push(card);
                                    break;
                                }
                            }
                        });
                        indexs_3.sort(function (a, b) {
                            return a.point - b.point;
                        });
                        result.unshift(indexs_3);
                    }
                };
                var this_1 = this;
                for (var start = 0; (start + num) <= cards.length; ++start) {
                    _loop_3(start);
                }
            }
            return result.length > 0 ? result : [];
        };
        /**
         * 带鬼牌的葫芦
         */
        PorkUtil.findHuLuGuiPai = function (cardsAry) {
            var length = 5;
            if (cardsAry.length < length) {
                return [];
            }
            var cards = cardsAry.concat([]);
            var gAry = this.filtGuiPai(cards);
            if (gAry.length <= 0) {
                return [];
            }
            var p_3 = this.findByGuiPai(cardsAry, 3);
            var p_4 = this.findByGuiPai(cardsAry, 4);
            var p_2 = this.findByGuiPai(cardsAry, 2);
            if (p_2 == null) {
                p_2 = [];
            }
            if (p_3) {
                p_3.forEach(function (indexs) {
                    var sanTiaoIndexs0 = [indexs[0], indexs[1]];
                    var sanTiaoIndexs3 = [indexs[1], indexs[2]];
                    p_2.unshift(sanTiaoIndexs0);
                    p_2.unshift(sanTiaoIndexs3);
                });
            }
            if (p_4) {
                p_4.forEach(function (indexs) {
                    var sanTiaoIndexs0 = [indexs[0], indexs[1]];
                    var sanTiaoIndexs6 = [indexs[2], indexs[3]];
                    p_2.unshift(sanTiaoIndexs0);
                    p_2.unshift(sanTiaoIndexs6);
                });
            }
            if ((p_2 == null) || (p_3 == null)) {
                return [];
            }
            var tresult = [];
            p_2.forEach(function (i_3) {
                var s = i_3;
                p_3.forEach(function (i_2) {
                    s = i_3.concat(i_2);
                    for (var i = 0; i < s.length - 1; i++) {
                        var index = s[i];
                        for (var j = i + 1; j < s.length; j++) {
                            if (index == s[j]) {
                                s = null;
                                break;
                            }
                        }
                        if (s == null) {
                            break;
                        }
                    }
                    if (s !== null) {
                        tresult.unshift(s);
                    }
                });
            });
            if (tresult.length > 10) {
                tresult = tresult.slice(0, 10);
            }
            return tresult.length > 0 ? tresult : [];
        };
        //过滤鬼牌
        PorkUtil.filtGuiPai = function (cardsAry) {
            if (cardsAry.length <= 0) {
                return [];
            }
            var newCards = cardsAry.filter(function (card) {
                if (card.point >= 65) {
                    return card;
                }
            });
            return newCards || [];
        };
        PorkUtil.isDuiZi = function (cardAry) {
            if (this.findDuiZi(cardAry).length > 0) {
                return true;
            }
            return false;
        };
        PorkUtil.isLiangDui = function (cardAry) {
            if (this.findLiaDui(cardAry).length > 0) {
                return true;
            }
            return false;
        };
        PorkUtil.isSanTiao = function (cardAry) {
            if (this.findSanTiao(cardAry).length > 0) {
                return true;
            }
            return false;
        };
        PorkUtil.isHulu = function (cardAry) {
            if (this.findHuLu(cardAry).length > 0) {
                return true;
            }
            return false;
        };
        PorkUtil.isTieZhi = function (cardAry) {
            if (this.findTieZhi(cardAry).length > 0) {
                return true;
            }
            return false;
        };
        /**
         * 是否是顺子
         */
        PorkUtil.isShunZi = function (cardAry, minLength) {
            if (minLength === void 0) { minLength = 5; }
            if (cardAry.length < minLength) {
                return false;
            }
            cardAry.sort(function (a, b) {
                return a.point - b.point;
            });
            var point0 = cardAry[0].point;
            for (var i = 1; i < cardAry.length; i++) {
                if (cardAry[i].point != (point0 + 1)) {
                    return false;
                }
                point0 += 1;
            }
            return true;
        };
        PorkUtil.isTongHua = function (cardAry, minLength) {
            if (minLength === void 0) { minLength = 5; }
            if (cardAry.length < minLength) {
                return false;
            }
            var type = cardAry[0].type;
            for (var i = 1; i < cardAry.length; i++) {
                if (cardAry[i].type != type) {
                    return false;
                }
            }
            return true;
        };
        PorkUtil.isTongHuaShun = function (cardAry) {
            return this.isTongHua(cardAry) && this.isShunZi(cardAry);
        };
        PorkUtil.isWuTong = function (cardAry) {
            return this.findWuTong(cardAry).length > 0;
        };
        /**
         * 查找牌型中长度为length的牌
         */
        PorkUtil.findPointByLength = function (cardAry, length) {
            if (cardAry.length < length) {
                return [];
            }
            var obj = new Object();
            cardAry.forEach(function (card) {
                var pointAry = obj[card.point] || [];
                obj[card.point] = pointAry;
                pointAry.push(card);
            });
            var result = [];
            for (var prop in obj) {
                var pointAry = obj[prop];
                while (pointAry.length >= length && length != 0) {
                    var splices = pointAry.splice(0, length);
                    if (splices.length >= length) {
                        splices.sort(function (n1, n2) {
                            return (n1.type - n2.type);
                        });
                        result.push(splices);
                    }
                }
            }
            result.sort(function (arr1, arr2) {
                var n1 = arr1[0];
                var n2 = arr2[0];
                return n1.point - n2.point;
            });
            return result.length > 0 ? result : [];
        };
        /**
         * 从大到小排序
         */
        PorkUtil.SortCard = function (cardAry) {
            cardAry.sort(function (a, b) {
                var result = b.point - a.point;
                if (result == 0) {
                    result = b.type - a.type;
                }
                return result;
            });
            return cardAry;
        };
        /**
         * 由小到大排序s
         */
        PorkUtil.SortCardMinToMax = function (cardAry) {
            cardAry.sort(function (a, b) {
                var result = a.point - b.point;
                if (result == 0) {
                    result = a.type - b.type;
                }
                return result;
            });
            return cardAry;
        };
        /**
         * 从某个数组中去除相关的元素
         */
        PorkUtil.deleteAryFormAry = function (oriAry, delAry) {
            var result = [];
            oriAry.forEach(function (item) {
                if (delAry.indexOf(item) == -1) {
                    result.push(item);
                }
            });
            return result;
        };
        PorkUtil.ChangeServerCardToClient = function (num) {
            return (parseInt((num / 16).toString()) + 1) * 100 + num % 16;
        };
        PorkUtil.ChangeClientToServer = function (num) {
            return (parseInt(String(num / 100)) - 1) * 16 + parseInt(String(num % 100));
        };
        PorkUtil.ChangeClientArrToServer = function ($arr) {
            var arr = new Array();
            for (var i = 0; i < $arr.length; i++) {
                arr.push(this.ChangeClientToServer($arr[i].data));
            }
            return arr;
        };
        PorkUtil.checkCanPutDown = function (nowArr, otherArr) {
            var paixing1 = this.getPorkPaiXing(nowArr);
            var paixing2 = this.getPorkPaiXing(otherArr);
            if (paixing1 > paixing2) {
                return true;
            }
            else if (paixing1 == paixing2) {
                this.SortCard(nowArr);
                this.SortCard(otherArr);
                if (paixing1 == 1) {
                    return this.checkWulong(nowArr, otherArr);
                }
                else if (paixing1 == 2) {
                    return this.checkDuizi(nowArr, otherArr);
                }
                else if (paixing1 == 3) {
                    return this.checkLiangDui(nowArr, otherArr);
                }
                else if (paixing1 == 4) {
                    return this.checkSantiao(nowArr, otherArr);
                }
                else if (paixing1 == 5) {
                    return this.checkShunzi(nowArr, otherArr);
                }
                else if (paixing1 == 6) {
                    return this.checkTonghua(nowArr, otherArr);
                }
                else if (paixing1 == 7) {
                    return this.checkHulu(nowArr, otherArr);
                }
                else if (paixing1 == 8) {
                    return this.checkTiezhi(nowArr, otherArr);
                }
                else if (paixing1 == 9) {
                    return this.checkTonghuashun(nowArr, otherArr);
                }
                else if (paixing1 == 10) {
                    return this.checkWutong(nowArr, otherArr);
                }
            }
            return false;
        };
        PorkUtil.checkWutong = function (nowArr, otherArr) {
            if (nowArr[0].point > otherArr[0].point) {
                return true;
            }
            return false;
        };
        PorkUtil.checkTonghuashun = function (nowArr, otherArr) {
            if (nowArr[0].point > otherArr[0].point) {
                return true;
            }
            else if (nowArr[0].point == otherArr[0].point) {
                if (nowArr[0].type >= otherArr[0].type) {
                    return true;
                }
                else {
                    return false;
                }
            }
            return false;
        };
        PorkUtil.checkTiezhi = function (nowArr, otherArr) {
            var now = this.findPointByLength(nowArr, 4)[0];
            var other = this.findPointByLength(otherArr, 4)[0];
            if (now[0].point > other[0].point) {
                return true;
            }
            else if (now[0].point < other[0].point) {
                return false;
            }
            return false;
        };
        PorkUtil.checkHulu = function (nowArr, otherArr) {
            var nowSantiao = this.findSanTiao(nowArr);
            var nowduizi = game.PorkUtilExtends.getRestCard1(nowSantiao, nowArr);
            var otherSantiao = this.findSanTiao(nowArr);
            var otherduizi = game.PorkUtilExtends.getRestCard1(otherSantiao, otherArr);
            if (nowSantiao[0].point > otherSantiao[0].point) {
                return true;
            }
            else if (nowSantiao[0].point < otherSantiao[0].point) {
                return false;
            }
            else {
                if (nowduizi[0].point > otherduizi[0].point) {
                    return true;
                }
                else if (nowduizi[0].point < otherduizi[0].point) {
                    return false;
                }
                else {
                    return false;
                }
            }
            // return false;
        };
        PorkUtil.checkTonghua = function (nowArr, otherArr) {
            for (var i = 0; i < nowArr.length; i++) {
                if (nowArr[i].point > otherArr[i].point) {
                    return true;
                }
                else if (nowArr[i].point < otherArr[i].point) {
                    return false;
                }
                else {
                    break;
                }
            }
            return false;
        };
        PorkUtil.checkShunzi = function (nowArr, otherArr) {
            if (nowArr[0].point > otherArr[0].point) {
                return true;
            }
            else if (nowArr[0].point == otherArr[0].point) {
                if (nowArr[0].type >= otherArr[0].type) {
                    return true;
                }
                else {
                    return false;
                }
            }
            return false;
        };
        PorkUtil.checkSantiao = function (nowArr, otherArr) {
            var nowsantiao = this.findSanTiao(nowArr)[0];
            var othersantiao = this.findSanTiao(otherArr)[0];
            var nowPt = nowsantiao[0].point;
            var otherPt = othersantiao[0].point;
            if (nowPt > otherPt) {
                return true;
            }
            else if (nowPt == otherPt) {
                return this.checkWulong(game.PorkUtilExtends.getRestCard1(nowsantiao, nowArr), game.PorkUtilExtends.getRestCard1(othersantiao, otherArr));
            }
            return false;
        };
        PorkUtil.checkLiangDui = function (nowArr, otherArr) {
            var nowDuis = this.findDuiZi(nowArr);
            var otherDuis = this.findDuiZi(otherArr);
            var nowPtAry = [nowDuis[0][0].point, nowDuis[1][0].point];
            var otherPtAry = [otherDuis[0][0].point, otherDuis[1][0].point];
            nowPtAry.sort(function (a, b) {
                return b - a;
            });
            otherPtAry.sort(function (a, b) {
                return b - a;
            });
            if (nowPtAry[0] > otherPtAry[0]) {
                return true;
            }
            else if (nowPtAry[0] == otherPtAry[0]) {
                if (nowPtAry[1] > otherPtAry[1]) {
                    return true;
                }
                else if (nowPtAry[1] == otherPtAry[1]) {
                    return true;
                }
            }
            return false;
        };
        PorkUtil.checkDuizi = function (nowArr, otherArr) {
            var nowDui = this.findDuiZi(nowArr)[0];
            var otherDui = this.findDuiZi(otherArr)[0];
            var nowDuiPoint = nowDui[0].point;
            var otherPoint = otherDui[0].point;
            if (nowDuiPoint > otherPoint) {
                return true;
            }
            else if (nowDuiPoint < otherPoint) {
                return false;
            }
            else {
                return this.checkWulong(game.PorkUtilExtends.getRestCard1(nowDui, nowArr), game.PorkUtilExtends.getRestCard1(otherDui, otherArr));
            }
            // return true;
        };
        PorkUtil.checkWulong = function (nowArr, otherArr) {
            for (var i = 0; i < nowArr.length; i++) {
                if (nowArr[i].point > otherArr[i].point) {
                    return true;
                }
                else if (nowArr[i].point < otherArr[i].point) {
                    return false;
                }
                else {
                    break;
                }
            }
            for (var i = 0; i < nowArr.length; i++) {
                if (nowArr[i].type > otherArr[i].type) {
                    return true;
                }
                else if (nowArr[i].type < otherArr[i].type) {
                    return false;
                }
                else {
                    break;
                }
            }
            return true;
        };
        //获取单
        // public static getSingBigger():boolean{
        // }
        PorkUtil.getPorkPaiXing = function (arr) {
            if (this.findWuTong(arr).length > 0) {
                return 10;
            }
            if (this.findTongHuaShun(arr).length > 0) {
                return 9;
            }
            if (this.findTieZhi(arr).length > 0) {
                return 8;
            }
            if (this.findHuLu(arr).length > 0) {
                return 7;
            }
            if (this.findTongHua(arr).length > 0) {
                return 6;
            }
            if (this.findShunZi(arr).length > 0) {
                return 5;
            }
            if (this.findSanTiao(arr).length > 0) {
                return 4;
            }
            if (this.findLiaDui(arr).length > 0) {
                return 3;
            }
            if (this.findDuiZi(arr).length > 0) {
                return 2;
            }
            return 1;
        };
        return PorkUtil;
    }());
    game.PorkUtil = PorkUtil;
    __reflect(PorkUtil.prototype, "game.PorkUtil");
})(game || (game = {}));
//# sourceMappingURL=PorkUtil.js.map