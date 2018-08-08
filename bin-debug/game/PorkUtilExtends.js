var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var PorkUtilExtends = (function () {
        function PorkUtilExtends() {
        }
        PorkUtilExtends.getTeShuPai = function (id) {
            switch (id) {
                case 1:
                    return "三尖刀";
                case 2:
                    return "三顺子";
                case 3:
                    return "三同花";
                case 4:
                    return "六对半";
                case 5:
                    return "王者荣耀";
                case 6:
                    return "带同花顺三同花";
                case 7:
                    return "带同花顺三顺子";
                case 8:
                    return "带铁支六对半";
                case 9:
                    return "五对冲三";
                case 10:
                    return "凑一色";
                case 11:
                    return "全小";
                case 12:
                    return "全大";
                case 13:
                    return "四套三条";
                case 14:
                    return "三分天下（三炸弹）";
                case 15:
                    return "一条龙";
                case 16:
                    return "至尊清龙";
            }
        };
        // 是否是特殊牌
        PorkUtilExtends.isTeShuPai = function (cards) {
            if (cards.length < 13) {
                return -1;
            }
            if (this.isQingLong(cards)) {
                return 16;
            }
            if (this.isYiTiaoLong(cards)) {
                return 15;
            }
            if (this.isSanFenTianXia(cards)) {
                return 14;
            }
            if (this.isSiTaoSanTiao(cards)) {
                return 13;
            }
            if (this.QuanDa(cards)) {
                return 12;
            }
            if (this.QuanXiao(cards)) {
                return 11;
            }
            if (this.isCouYiSe(cards)) {
                return 10;
            }
            if (this.isWuDuiSanTiao(cards)) {
                return 9;
            }
            if (this.isTieZhiLiuDuiBan(cards)) {
                return 8;
            }
            if (this.isSanShunAndHasTongHua(cards)) {
                return 7;
            }
            if (this.isSanTongHuaTongHuaShun(cards)) {
                return 6;
            }
            if (this.isWangZhe(cards)) {
                return 5;
            }
            if (this.isLiuDuiBan(cards)) {
                return 4;
            }
            if (this.isSanTongHua(cards)) {
                return 3;
            }
            if (this.isSanShunZi(cards)) {
                return 2;
            }
            if (this.isSanJianDao(cards)) {
                return 1;
            }
            // return this.isQingLong(cards)
            // 	|| this.isYiTiaoLong(cards)
            // 	|| this.isSanFenTianXia(cards)
            // 	|| this.isSiTaoSanTiao(cards)
            // 	|| this.QuanDa(cards)
            // 	|| this.QuanXiao(cards)
            // 	|| this.isCouYiSe(cards)
            // 	|| this.isWuDuiSanTiao(cards)
            // 	|| this.isTieZhiLiuDuiBan(cards)
            // 	|| this.isSanTongHuaShun(cards)
            // 	|| this.isSanTongHuaTongHuaShun(cards)
            // 	|| this.isWangZhe(cards)
            // 	|| this.isLiuDuiBan(cards)
            // 	|| this.isSanTongHua(cards)
            // 	|| this.isSanShunZi(cards)
            // 	|| this.isSanJianDao(cards);
        };
        ;
        // 是否是清龙
        PorkUtilExtends.isQingLong = function (cards) {
            var length = 13;
            if (cards.length != length) {
                return false;
            }
            // var card20 = KQCard.contain20(cards);
            // if(card20.length > 0) {
            // 	return false;
            // }
            /**
             *
             */
            var colorS = []; //黑桃
            var colorH = []; //红心
            var colorC = []; //梅花
            var colorD = []; //方块
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].type == 4) {
                    colorS.push(cards[i]);
                }
                else if (cards[i].type == 3) {
                    colorH.push(cards[i]);
                }
                else if (cards[i].type == 2) {
                    colorC.push(cards[i]);
                }
                else if (cards[i].type == 1) {
                    colorD.push(cards[i]);
                }
            }
            var ls = colorS.length; //黑桃个数
            var lh = colorH.length; //红桃个数
            var lc = colorC.length; //梅花个数
            var ld = colorD.length; //方块个数
            var color = [ls, lh, lc, ld];
            var colorSum = []; //总共有几种花色 [5,3,0....]
            for (var i = 0; i < color.length; i++) {
                if (color[i] != 0) {
                    colorSum.push(color[i]);
                }
            }
            if (colorSum.length == 1) {
                if (colorSum[0] == 13) {
                    if (this.isYiTiaoLong(cards)) {
                        // var teShuCard = cards.filter(function(i){return i});
                        // teShuCard = this.cardsFromArray(teShuCard);
                        // teShuCard.sort(function(a,b){
                        // 	return b.point - a.point;
                        // });
                        // teShuCard = KQCard.convertToServerCards(teShuCard);
                        // var a1 = teShuCard.splice(0,5);
                        // var a2 = teShuCard.splice(0,5);
                        // cc.teShuPaiCards = [teShuCard, a2, a1];
                        return true;
                    }
                }
            }
            return false;
        };
        ;
        /*是否一条龙*/
        PorkUtilExtends.isYiTiaoLong = function (cards) {
            var length = 13;
            if (cards.length != length) {
                return false;
            }
            // var card20 = KQCard.contain20(cards);
            // if(card20.length > 0) {
            // 	return false;
            // }
            var number = cards.map(function (card) {
                return card.point;
            }).sort(function (n1, n2) {
                return n1 - n2;
            });
            for (var i = 0; i < cards.length - 1; i++) {
                if (number[i] != number[i + 1] - 1) {
                    return false;
                }
            }
            // var teShuCard = cards.filter(function(i){return i});
            // teShuCard = KQCard.cardsFromArray(teShuCard);
            // teShuCard.forEach(function(a){
            // 	if(a.scores == 1) a.scores = 14;
            // });
            // teShuCard.sort(function(a,b){
            // 	return b.scores - a.scores;
            // });
            // teShuCard = KQCard.convertToServerCards(teShuCard);
            // var a1 = teShuCard.splice(0,5);
            // var a2 = teShuCard.splice(0,5);
            // cc.teShuPaiCards = [teShuCard, a2, a1];
            //cc.log(cc.teShuPaiCards )
            //cc.log('--------728')
            return true;
        };
        ;
        // 是否是 “三分天下”
        PorkUtilExtends.isSanFenTianXia = function (cards) {
            var length = 13;
            if (cards.length < length) {
                return false;
            }
            var tieZhiLength = 4;
            var pointHelper = new CardPointsHelper(cards);
            var numberOfTieZhi = 0;
            for (var prop in pointHelper.pointNumbers) {
                var value = pointHelper.pointNumbers[prop];
                if (value == tieZhiLength) {
                    numberOfTieZhi = numberOfTieZhi + 1;
                }
            }
            return numberOfTieZhi === 3;
        };
        ;
        // 是否是 “四套三条”
        PorkUtilExtends.isSiTaoSanTiao = function (cards) {
            var length = 13;
            if (cards.length < length) {
                return false;
            }
            var sanTiaoLength = 3;
            var pointHelper = new CardPointsHelper(cards);
            var numberOfSanTiao = 0;
            for (var prop in pointHelper.pointNumbers) {
                var value = pointHelper.pointNumbers[prop];
                if (value == sanTiaoLength) {
                    numberOfSanTiao = numberOfSanTiao + 1;
                }
            }
            return numberOfSanTiao == 4;
        };
        ;
        PorkUtilExtends.QuanDa = function (cards) {
            var result = true;
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].point < 8) {
                    result = false;
                    break;
                }
            }
            return result;
        };
        PorkUtilExtends.QuanXiao = function (cards) {
            var result = true;
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].point > 8) {
                    result = false;
                    break;
                }
            }
            return result;
        };
        /*是否凑一色*/
        PorkUtilExtends.isCouYiSe = function (cards) {
            var length = 13;
            if (cards.length != length) {
                return false;
            }
            // var card20 = KQCard.contain20(cards);
            // if(card20.length > 0) {
            // 	return false;
            // }
            var colorS = []; //黑桃
            var colorH = []; //红心
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].type == 4 || cards[i].type == 2) {
                    colorS.push(cards[i]); //全黑
                }
                else if (cards[i].type == 1 || cards[i].type == 3) {
                    colorH.push(cards[i]); //全红
                }
            }
            if (colorS.length == 13 || colorH.length == 13) {
                return true;
            }
            return false;
        };
        ;
        //五队三条
        PorkUtilExtends.isWuDuiSanTiao = function (cards) {
            var length = 13;
            if (cards.length < length) {
                return false;
            }
            var duiZiLength = 2;
            var sanTiaoLength = 3;
            //计算一个牌数组内的相同点数的牌的张数
            var cardNumbers = this.GetCardPointsSameCount(cards);
            var numberOfDuiZi = 0;
            var numberOfSanTiao = 0;
            for (var prop in cardNumbers) {
                var value = cardNumbers[prop];
                if (value == duiZiLength) {
                    numberOfDuiZi = numberOfDuiZi + 1;
                }
                else if (value == sanTiaoLength) {
                    numberOfSanTiao = numberOfSanTiao + 1;
                }
                else if (value >= 4) {
                    numberOfDuiZi = numberOfDuiZi + 2;
                }
            }
            return numberOfDuiZi == 5 && numberOfSanTiao == 1;
        };
        //铁支六对半
        PorkUtilExtends.isTieZhiLiuDuiBan = function (cards) {
            if (this.isLiuDuiBan(cards) == true && this.containTieZhi(cards)) {
                return true;
            }
            return false;
        };
        // 是否是 含同花顺的三顺子
        PorkUtilExtends.isSanShunAndHasTongHua = function (cards) {
            var length = 13;
            if (cards.length != length) {
                return false;
            }
            // var card20 = KQCard.contain20(cards);
            // if(card20.length > 0) {
            // 	return false;
            // }
            if (this.isSanShunZi(cards) && this.containTongHuaShun(cards)) {
                return true;
            }
            return false;
            // let colorCardsObject = this._colorClassCards(cards);
            // var subCards = [];
            // for (let prop in colorCardsObject) {
            // 	let cards = colorCardsObject[prop];
            // 	subCards.push(cards);
            // }
            // if (subCards.length != 3) {
            // 	return false;
            // }
            // subCards = subCards.sort((s1, s2)=> {
            // 	return s1.length - s2.length;
            // });
            // let touCards = subCards[0];
            // let zhongCards = subCards[1];
            // let weiCards = subCards[2];
            // if ((touCards.length != 3) || (zhongCards.length != 5) || (weiCards.length != 5)) {
            // 	return false;
            // }
            // return this._isSanTongHuaShun(touCards, zhongCards, weiCards);
        };
        ;
        //三个同花并且含有同花顺
        PorkUtilExtends.isSanTongHuaTongHuaShun = function (cards) {
            if (this.isSanTongHua(cards) && this.containTongHuaShun(cards)) {
                return true;
            }
            return false;
        };
        //是否是王者
        PorkUtilExtends.isWangZhe = function (cardAry) {
            var cards = cardAry.concat([]);
            var gAry = game.PorkUtil.filtGuiPai(cards);
            if (gAry.length < 2) {
                return false;
            }
            if (this.checkHasMidAndDown(cards, true)) {
                return true;
            }
            return false;
        };
        // 是否是六对半
        PorkUtilExtends.isLiuDuiBan = function (cards) {
            var length = 12;
            if (cards.length < length) {
                return false;
            }
            var duiZiLength = 2;
            //计算一个牌数组内的相同点数的牌的张数
            var cardNumbers = this.GetCardPointsSameCount(cards);
            var numberOfDuiZi = 0;
            var numberOfYi = 0;
            for (var prop in cardNumbers) {
                var value = cardNumbers[prop];
                if (value == duiZiLength || value == 3) {
                    numberOfDuiZi = numberOfDuiZi + 1;
                }
                else if (value == 4) {
                    numberOfDuiZi = numberOfDuiZi + 2;
                }
                else if (value == 1) {
                    numberOfYi += 1;
                }
            }
            if (numberOfDuiZi == 6) {
                // var teShuCard = cards.filter(function(i){return i});
                // teShuCard = KQCard.cardsFromArray(teShuCard);
                // teShuCard.forEach(function(a){
                // 	if(a.scores == 1) a.scores = 14;
                // });
                // teShuCard.sort(function(a,b){
                // 	return b.scores - a.scores;
                // });
                // teShuCard = KQCard.convertToServerCards(teShuCard);
                // var a1 = teShuCard.splice(0,5);
                // var a2 = teShuCard.splice(0,5);
                // cc.teShuPaiCards = [teShuCard, a2, a1];
                return true;
            }
            return false;
        };
        ;
        //三同花
        PorkUtilExtends.isSanTongHua = function (cards) {
            var length = 13;
            if (cards.length != length) {
                return false;
            }
            // var card20 = KQCard.contain20(cards);
            // if(card20.length > 0) {
            // 	return false;
            // }
            var colorS = []; //黑桃
            var colorH = []; //红心
            var colorC = []; //梅花
            var colorD = []; //方块
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].type == 4) {
                    colorS.push(cards[i]);
                }
                else if (cards[i].type == 3) {
                    colorH.push(cards[i]);
                }
                else if (cards[i].type == 2) {
                    colorC.push(cards[i]);
                }
                else if (cards[i].type == 1) {
                    colorD.push(cards[i]);
                }
            }
            var ls = colorS.length; //黑桃个数
            var lh = colorH.length; //红桃个数
            var lc = colorC.length; //梅花个数
            var ld = colorD.length; //方块个数
            var sanCard = [colorS, colorH, colorC, colorD];
            var teShuCard = [];
            var color = [ls, lh, lc, ld];
            var colorSum = []; //总共有几种花色 [5,3,0....]
            for (var i = 0; i < color.length; i++) {
                if (color[i] != 0) {
                    colorSum.push(color[i]);
                    teShuCard.push(sanCard[i]);
                }
            }
            //三种花色
            if (colorSum.length == 3) {
                for (var i = 0; i < colorSum.length; i++) {
                    if (colorSum[i] != 5 && colorSum[i] != 3) {
                        return false;
                    }
                }
                teShuCard.sort(function (a, b) {
                    return a.length - b.length;
                });
                // cc.teShuPaiCards = teShuCard;
                return true;
            }
            return false;
        };
        // 是否是三同花顺
        PorkUtilExtends._isSanTongHuaShun = function (touCards, zhongCards, weiCards) {
            return game.PorkUtil.isTongHuaShun(touCards) || game.PorkUtil.isTongHuaShun(zhongCards)
                || game.PorkUtil.isTongHuaShun(weiCards);
        };
        ;
        // 头、中、尾道为相同花色的牌
        PorkUtilExtends.isSanTaoHua = function (cards) {
            var length = 13;
            if (cards.length < length) {
                return false;
            }
            // var card20 = KQCard.contain20(cards);
            // if(card20.length > 0) {
            // 	return false;
            // }
            var colorHelper = new CardColorsHelper(cards);
            var colorNumbers = [];
            for (var prop in colorHelper.colorNumber) {
                colorNumbers.push(colorHelper.colorNumber[prop]);
            }
            colorNumbers.sort(function (n1, n2) {
                return n1 - n2;
            });
            if (colorNumbers.length != 3) {
                return false;
            }
            if (colorNumbers[0] == 3
                && (colorNumbers[1] == 5)
                && (colorNumbers[2] == 5)) {
                return true;
            }
            return false;
        };
        ;
        //三顺子
        PorkUtilExtends.isSanShunZi = function (cards) {
            var length = 13;
            if (cards.length != length) {
                return false;
            }
            var pointAry = cards.map(function (card) { return card.point; });
            pointAry.sort(function (n1, n2) { return n1 - n2; });
            if (this.fenzu(pointAry, 5, 5) == false) {
                pointAry = cards.map(function (card) { return card.point; });
                pointAry.sort(function (n1, n2) { return n1 - n2; });
                if (this.fenzu(pointAry, 5, 3) == false) {
                    pointAry = cards.map(function (card) { return card.point; });
                    pointAry.sort(function (n1, n2) { return n1 - n2; });
                    if (this.fenzu(pointAry, 3, 5) == false) {
                        return false;
                    }
                }
            }
            return true;
        };
        //三尖刀
        PorkUtilExtends.isSanJianDao = function (cards) {
            var helper = new CardPointsHelper(cards);
            var num = 0;
            for (var w in helper.pointNumbers) {
                num += 1;
            }
            if (helper.maxNumber >= 3) {
                var santiaoAry = game.PorkUtil.findSanTiao(cards);
                for (var i = 0; i < santiaoAry.length; i++) {
                    var rest = this.getRestCard(santiaoAry[i], cards.concat());
                    if (this.checkHasMidAndDown(rest)) {
                        return true;
                    }
                }
            }
            return false;
        };
        // 是否包含有同花顺
        PorkUtilExtends.containTongHuaShun = function (cards, minLength) {
            if (minLength === void 0) { minLength = 5; }
            if (cards.length < minLength) {
                return false;
            }
            if (game.PorkUtil.findTongHuaShun(cards).length > 0) {
                return true;
            }
            return false;
        };
        ;
        //分组553||535||355
        PorkUtilExtends.fenzu = function (pointAry, num1, num2) {
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < pointAry.length - 1; i++) {
                if (i == 0) {
                    arr1.push(pointAry[0]);
                }
                if (pointAry[i + 1] - pointAry[i] == 0) {
                    continue;
                }
                arr1.push(pointAry[i + 1]);
                if (arr1.length == num1) {
                    //取第一组是顺子
                    if (this.isShunZi1(arr1)) {
                        //这5个是顺子,从数组中移除
                        for (var i_1 = 0; i_1 < arr1.length; i_1++) {
                            for (var j = 0; j < pointAry.length; j++) {
                                if (pointAry[j] == arr1[i_1]) {
                                    //两个数一样的只删除一个
                                    if (pointAry[j] == pointAry[j + 1]) {
                                        continue;
                                    }
                                    pointAry.splice(j, 1); //从number中移除
                                }
                            }
                        }
                        console.log("删除第一组后的number");
                        console.log(pointAry);
                        //接下来取第二组
                        for (var i_2 = 0; i_2 < pointAry.length - 1; i_2++) {
                            if (i_2 == 0) {
                                arr2.push(pointAry[0]);
                            }
                            if (pointAry[i_2 + 1] - pointAry[i_2] == 0) {
                                continue;
                            }
                            arr2.push(pointAry[i_2 + 1]);
                            if (arr2.length == num2) {
                                //取第二组是顺子
                                if (this.isShunZi1(arr2)) {
                                    for (var i_3 = 0; i_3 < arr2.length; i_3++) {
                                        for (var j = 0; j < pointAry.length; j++) {
                                            if (pointAry[j] == arr2[i_3]) {
                                                //两个数一样的只删除一个
                                                if (pointAry[j] == pointAry[j + 1]) {
                                                    continue;
                                                }
                                                pointAry.splice(j, 1); //从number中移除
                                            }
                                        }
                                    }
                                    console.log("删除第二组后的number");
                                    console.log(pointAry);
                                    arr3 = pointAry;
                                    //接下来就是剩下的了
                                    if (this.isShunZi1(arr3)) {
                                        //第三组也是顺子
                                        var asdf = [arr1, arr2, arr3];
                                        asdf.sort(function (n1, n2) { return n1.length - n2.length; });
                                        // if(!cc.teShuPaiCards) cc.teShuPaiCards = asdf;
                                        return true;
                                    }
                                    //第三组不是顺子
                                    return false;
                                }
                                //第二组不是顺子
                                return false;
                            }
                        }
                    }
                    //第一组不是顺子
                    return false;
                }
            }
            //如果取不到num1个数
            if (arr1.length < num1) {
                return false;
            }
            if (arr2.length < num2) {
                return false;
            }
        };
        // 判断是否包含铁支
        // 四张同样点数的牌
        PorkUtilExtends.containTieZhi = function (cards) {
            var length = 4;
            if (cards.length < length) {
                return false;
            }
            // var card20 = KQCard.contain20(cards);
            // cards = cards.kq_excludes(card20);
            // length = length-card20.length;
            var helper = new CardPointsHelper(cards);
            for (var w in helper.pointNumbers) {
                var maxNumber = helper.pointNumbers[w];
                if (maxNumber >= length) {
                    // card20.forEach(function(ca){
                    // 	ca.scores = parseInt(w);
                    // });
                    return true;
                }
            }
            return false;
        };
        ;
        // 将牌根据 color 进行分类
        PorkUtilExtends._colorClassCards = function (cards) {
            var colorCardsObject = {};
            cards.forEach(function (card) {
                var color = card.type;
                var subCards = colorCardsObject[color];
                if (!subCards) {
                    subCards = [];
                    colorCardsObject[color] = subCards;
                }
                subCards.push(card);
            });
            return colorCardsObject;
        };
        ;
        PorkUtilExtends.GetCardPointsSameCount = function (cards) {
            var cardNumbers = {};
            for (var i in cards) {
                var s = cards[i].point;
                if (cardNumbers[s]) {
                    cardNumbers[s]++;
                }
                else {
                    cardNumbers[s] = 1;
                }
            }
            return cardNumbers;
        };
        PorkUtilExtends.getRestCard = function (cards, allCards) {
            var cardAry = [];
            for (var i = 0; i < cards.length; i++) {
                for (var j = 0; j < allCards.length; j++) {
                    if (cards[i] == allCards[j]) {
                        allCards.splice(j, 1);
                        break;
                    }
                }
            }
            return allCards;
        };
        PorkUtilExtends.getRestCard1 = function (cards, allCards) {
            var cards1 = cards.concat([]);
            var allCards1 = allCards.concat([]);
            var cardAry = [];
            for (var i = 0; i < cards1.length; i++) {
                for (var j = 0; j < allCards1.length; j++) {
                    if (cards1[i] == allCards1[j]) {
                        allCards1.splice(j, 1);
                        break;
                    }
                }
            }
            return allCards1;
        };
        /**
         * 检查中墩和下墩是否一定有牌型，为了方便判断头墩是否有特殊牌型
         */
        PorkUtilExtends.checkHasMidAndDown = function (cards, isforWangzhe) {
            if (isforWangzhe === void 0) { isforWangzhe = false; }
            if (isforWangzhe) {
                return false;
            }
            var arr = game.PorkUtil.findTongHuaShun(cards);
            for (var i = 0; i < arr.length; i++) {
                return this.checkHasMidAndDown1(this.getRestCard(arr[i], cards.concat()), isforWangzhe);
            }
            arr = game.PorkUtil.findTieZhi(cards);
            for (var i = 0; i < arr.length; i++) {
                return this.checkHasMidAndDown1(this.getRestCard(arr[i], cards.concat()), isforWangzhe);
            }
            arr = game.PorkUtil.findHuLu(cards);
            for (var i = 0; i < arr.length; i++) {
                return this.checkHasMidAndDown1(this.getRestCard(arr[i], cards.concat()), isforWangzhe);
            }
            arr = game.PorkUtil.findTongHua(cards);
            for (var i = 0; i < arr.length; i++) {
                return this.checkHasMidAndDown1(this.getRestCard(arr[i], cards.concat()), isforWangzhe);
            }
            arr = game.PorkUtil.findShunZi(cards);
            for (var i = 0; i < arr.length; i++) {
                return this.checkHasMidAndDown1(this.getRestCard(arr[i], cards.concat()), isforWangzhe);
            }
            return false;
        };
        PorkUtilExtends.checkHasMidAndDown1 = function (cards, isforWangzhe) {
            if (isforWangzhe === void 0) { isforWangzhe = false; }
            if (isforWangzhe == true) {
                if (game.PorkUtil.containSanTiao(cards)) {
                    return true;
                }
            }
            if (game.PorkUtil.containTonghuaShun(cards)) {
                return true;
            }
            if (game.PorkUtil.containTieZhi(cards)) {
                return true;
            }
            if (game.PorkUtil.containHulu(cards)) {
                return true;
            }
            if (game.PorkUtil.containTonghua(cards)) {
                return true;
            }
            if (game.PorkUtil.containShunZi(cards)) {
                return true;
            }
            return false;
        };
        //判断5张或者3张是否顺子
        PorkUtilExtends.isShunZi1 = function (arr) {
            //console.log(arr);
            for (var i = 0; i < arr.length - 1; i++) {
                if (arr[i + 1] - arr[i] != 1) {
                    //不是顺子
                    //console.log("不是顺子");
                    return false;
                }
            }
            return true;
        };
        return PorkUtilExtends;
    }());
    game.PorkUtilExtends = PorkUtilExtends;
    __reflect(PorkUtilExtends.prototype, "game.PorkUtilExtends");
    var CardPointsHelper = (function () {
        function CardPointsHelper(cards) {
            var _this = this;
            this.pointNumbers = {};
            cards.forEach(function (card) {
                var point = card.point;
                var number = _this.pointNumbers[point] || 0;
                _this.pointNumbers[point] = number + 1;
            });
        }
        Object.defineProperty(CardPointsHelper.prototype, "maxNumber", {
            get: function () {
                var result = 0;
                for (var prop in this.pointNumbers) {
                    var number = this.pointNumbers[prop];
                    result = Math.max(number, result);
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        return CardPointsHelper;
    }());
    game.CardPointsHelper = CardPointsHelper;
    __reflect(CardPointsHelper.prototype, "game.CardPointsHelper");
    var CardColorsHelper = (function () {
        function CardColorsHelper(cards) {
            var _this = this;
            this.colorNumber = {};
            cards.forEach(function (card) {
                var type = card.type;
                var number = _this.colorNumber[type] || 0;
                _this.colorNumber[type] = number + 1;
            });
        }
        Object.defineProperty(CardColorsHelper.prototype, "maxNumber", {
            get: function () {
                var result = 0;
                for (var prop in this.colorNumber) {
                    var number = this.colorNumber[prop];
                    result = Math.max(number, result);
                }
                return result;
            },
            enumerable: true,
            configurable: true
        });
        return CardColorsHelper;
    }());
    game.CardColorsHelper = CardColorsHelper;
    __reflect(CardColorsHelper.prototype, "game.CardColorsHelper");
})(game || (game = {}));
//# sourceMappingURL=PorkUtilExtends.js.map