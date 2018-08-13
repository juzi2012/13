var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var TeShuVO = (function () {
        function TeShuVO(_type, _arr) {
            this.type = _type;
            this.arr = _arr;
        }
        return TeShuVO;
    }());
    game.TeShuVO = TeShuVO;
    __reflect(TeShuVO.prototype, "game.TeShuVO");
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
                return null;
            }
            var result = [];
            result = this.getQingLong(cards);
            if (result != null) {
                return new TeShuVO(16, result);
            }
            result = this.getYiTiaoLong(cards);
            if (result != null) {
                return new TeShuVO(15, result);
                ;
            }
            result = this.getSanFenTianXia(cards);
            if (result != null) {
                return new TeShuVO(14, result);
            }
            result = this.getSiTaoSanTiao(cards);
            if (result != null) {
                return new TeShuVO(13, result);
            }
            result = this.QuanDa(cards);
            if (result != null) {
                return new TeShuVO(12, result);
            }
            result = this.QuanXiao(cards);
            if (result != null) {
                return new TeShuVO(11, result);
            }
            result = this.getCouYiSe(cards);
            if (result != null) {
                return new TeShuVO(10, result);
            }
            result = this.getWuDuiSanTiao(cards);
            if (result != null) {
                return new TeShuVO(9, result);
            }
            result = this.getTieZhiLiuDuiBan(cards);
            if (result != null) {
                return new TeShuVO(8, result);
            }
            result = this.getSanShunAndHasTongHua(cards);
            if (result != null) {
                return new TeShuVO(7, result);
            }
            result = this.getSanTongHuaTongHuaShun(cards);
            if (result != null) {
                return new TeShuVO(6, result);
            }
            result = this.getWangZhe(cards);
            if (result != null) {
                return new TeShuVO(5, result);
            }
            result = this.isLiuDuiBan(cards);
            if (result != null) {
                return new TeShuVO(4, result);
            }
            result = this.getSanTongHua(cards);
            if (result != null) {
                return new TeShuVO(3, result);
            }
            result = this.getSanShunZi(cards);
            if (result != null) {
                return new TeShuVO(2, result);
            }
            result = this.getSanJianDao(cards);
            if (result != null) {
                return new TeShuVO(1, result);
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
        PorkUtilExtends.getQingLong = function (cards) {
            var length = 13;
            if (cards.length != length) {
                return null;
            }
            var gAry = game.PorkUtil.filtGuiPai(cards);
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
                if (colorSum[0] == (13 - gAry.length)) {
                    if (this.getYiTiaoLong(cards) != null) {
                        return cards;
                    }
                }
            }
            return null;
        };
        ;
        /*是否一条龙*/
        PorkUtilExtends.getYiTiaoLong = function (cards) {
            var length = 13;
            if (cards.length != length) {
                return null;
            }
            var gAry = game.PorkUtil.filtGuiPai(cards);
            var number = cards.filter(function (card) {
                if (card.point < 65) {
                    return card;
                }
            }).map(function (card) {
                return card.point;
            }).sort(function (n1, n2) {
                return n1 - n2;
            });
            for (var i = 0; i < number.length - 1; i++) {
                if (number[i] != number[i + 1] - 1) {
                    if (gAry.length > 0) {
                        gAry.pop();
                    }
                    else {
                        return null;
                    }
                }
            }
            return cards;
        };
        ;
        // 是否是 “三分天下”
        PorkUtilExtends.getSanFenTianXia = function (cards) {
            var length = 13;
            if (cards.length < length) {
                return null;
            }
            var gAry = game.PorkUtil.filtGuiPai(cards);
            var tieZhiLength = 4;
            var pointHelper = new CardPointsHelper(cards);
            var numberOfTieZhi = 0;
            for (var prop in pointHelper.pointNumbers) {
                if (Number(prop) < 65) {
                    var value = pointHelper.pointNumbers[prop];
                    if (value == tieZhiLength) {
                        numberOfTieZhi = numberOfTieZhi + 1;
                    }
                    else {
                        if (value == (tieZhiLength - 1) && gAry.length > 0) {
                            gAry.pop();
                            numberOfTieZhi = numberOfTieZhi + 1;
                        }
                        else if (value == (tieZhiLength - 2) && gAry.length > 1) {
                            gAry.pop();
                            gAry.pop();
                            numberOfTieZhi = numberOfTieZhi + 1;
                        }
                    }
                }
            }
            if (numberOfTieZhi === 3) {
                return cards;
            }
            else {
                return null;
            }
        };
        ;
        // 是否是 “四套三条”
        PorkUtilExtends.getSiTaoSanTiao = function (cards) {
            var length = 13;
            if (cards.length < length) {
                return null;
            }
            var gAry = game.PorkUtil.filtGuiPai(cards);
            var sanTiaoLength = 3;
            var pointHelper = new CardPointsHelper(cards);
            var numberOfSanTiao = 0;
            for (var prop in pointHelper.pointNumbers) {
                var value = pointHelper.pointNumbers[prop];
                if (value == sanTiaoLength) {
                    numberOfSanTiao = numberOfSanTiao + 1;
                }
                else if (value == sanTiaoLength - 1 && gAry.length > 0) {
                    gAry.pop();
                    numberOfSanTiao = numberOfSanTiao + 1;
                }
                else if (value == sanTiaoLength - 2 && gAry.length > 1) {
                    gAry.pop();
                    gAry.pop();
                    numberOfSanTiao = numberOfSanTiao + 1;
                }
            }
            if (numberOfSanTiao == 4) {
                return cards;
            }
            else {
                return null;
            }
        };
        ;
        PorkUtilExtends.QuanDa = function (cards) {
            var result = cards;
            // let gAry:Array<PorkVO> = PorkUtil.filtGuiPai(cards);
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].point < 8) {
                    return null;
                }
            }
            return result;
        };
        PorkUtilExtends.QuanXiao = function (cards) {
            var result = cards;
            // let gAry:Array<PorkVO> = PorkUtil.filtGuiPai(cards);
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].point > 8 && (cards[i].point != 501 && cards[i].point != 502)) {
                    return null;
                }
            }
            return result;
        };
        /*是否凑一色
        * 全部是方块+红心的牌或全部是黑桃+梅花的牌
        */
        PorkUtilExtends.getCouYiSe = function (cards) {
            var length = 13;
            if (cards.length != length) {
                return null;
            }
            var gAry = game.PorkUtil.filtGuiPai(cards);
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
            if (((colorS.length + gAry.length) == 13) || ((colorH.length + gAry.length) == 13)) {
                return cards;
            }
            return null;
        };
        ;
        //五队三条
        PorkUtilExtends.getWuDuiSanTiao = function (cards) {
            var length = 13;
            if (cards.length < length) {
                return null;
            }
            var gAry = game.PorkUtil.filtGuiPai(cards);
            var duiZiLength = 2;
            var sanTiaoLength = 3;
            //计算一个牌数组内的相同点数的牌的张数
            var cardNumbers = this.GetCardPointsSameCount(cards);
            var numberOfDuiZi = 0;
            var numberOfSanTiao = 0;
            for (var prop in cardNumbers) {
                if (Number(prop) < 65) {
                    var value = cardNumbers[prop];
                    if (value == 1 && gAry.length > 0) {
                        value = 2;
                        gAry.pop();
                    }
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
            }
            if (numberOfDuiZi == 6 && gAry.length > 0) {
                numberOfDuiZi = 5;
                numberOfSanTiao += 1;
            }
            if (numberOfDuiZi == 5 && numberOfSanTiao == 1) {
                return cards;
            }
            else {
                return null;
            }
        };
        //铁支六对半
        PorkUtilExtends.getTieZhiLiuDuiBan = function (cards) {
            if (this.isLiuDuiBan(cards) != null && this.containTieZhi(cards)) {
                return cards;
            }
            return null;
        };
        // 是否是 含同花顺的三顺子
        PorkUtilExtends.getSanShunAndHasTongHua = function (cards) {
            var length = 13;
            if (cards.length != length) {
                return null;
            }
            var shunzi = this.getSanShunZi(cards);
            if (shunzi != null && (game.PorkUtil.isTongHua(shunzi.slice(0, 3), 3) || game.PorkUtil.isTongHua(shunzi.slice(3, 8)) || game.PorkUtil.isTongHua(shunzi.slice(8, 13)))) {
                return shunzi;
            }
            return null;
        };
        ;
        //三个同花并且含有同花顺
        PorkUtilExtends.getSanTongHuaTongHuaShun = function (cards) {
            var result = this.getSanTongHua(cards);
            if (result != null && (game.PorkUtil.isShunZi(result.slice(0, 3), 3) || game.PorkUtil.isShunZi(result.slice(3, 8)) || game.PorkUtil.isShunZi(result.slice(8, 13)))) {
                return result;
            }
            return null;
        };
        //是否是王者
        PorkUtilExtends.getWangZhe = function (cardAry) {
            var cards = cardAry.concat([]);
            var gAry = game.PorkUtil.filtGuiPai(cards);
            if (gAry.length < 2) {
                return null;
            }
            if (this.checkHasMidAndDown(cards, true)) {
                return null;
            }
            return null;
        };
        // 是否是六对半
        PorkUtilExtends.isLiuDuiBan = function (cards) {
            var length = 13;
            if (cards.length < length) {
                return null;
            }
            var gAry = game.PorkUtil.filtGuiPai(cards);
            var duiZiLength = 2;
            //计算一个牌数组内的相同点数的牌的张数
            var cardNumbers = this.GetCardPointsSameCount(cards);
            var numberOfDuiZi = 0;
            var numberOfYi = 0;
            for (var prop in cardNumbers) {
                if (Number(prop) < 65) {
                    var value = cardNumbers[prop];
                    if (value == duiZiLength || value == 3) {
                        numberOfDuiZi = numberOfDuiZi + 1;
                    }
                    else if (value == 4) {
                        numberOfDuiZi = numberOfDuiZi + 2;
                    }
                    else if (value == 1) {
                        if (numberOfYi == 1 && gAry.length > 0) {
                            numberOfDuiZi = numberOfDuiZi + 1;
                            gAry.pop();
                        }
                        else {
                            numberOfYi += 1;
                        }
                    }
                }
            }
            if (numberOfDuiZi == 6) {
                return cards;
            }
            return null;
        };
        ;
        //三同花
        PorkUtilExtends.getSanTongHua = function (cards) {
            var length = 13;
            if (cards.length != length) {
                return null;
            }
            var gAry = game.PorkUtil.filtGuiPai(cards);
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
            var result = [];
            //三种花色
            if (colorSum.length == 3) {
                for (var i = 0; i < colorSum.length; i++) {
                    if (colorSum[i] != 5 && colorSum[i] != 3) {
                        if ((colorSum[i] == 2 && gAry.length > 0)) {
                            teShuCard[i].push(gAry.pop());
                        }
                        else if ((colorSum[i] == 4 && gAry.length > 0)) {
                            teShuCard[i].push(gAry.pop());
                        }
                        else if ((colorSum[i] == 1 && gAry.length > 1)) {
                            teShuCard[i].push(gAry.pop());
                            teShuCard[i].push(gAry.pop());
                        }
                        else if ((colorSum[i] == 3 && gAry.length > 1)) {
                            teShuCard[i].push(gAry.pop());
                            teShuCard[i].push(gAry.pop());
                        }
                        else {
                            return null;
                        }
                    }
                }
                teShuCard.sort(function (a, b) {
                    return a.length - b.length;
                });
                for (var a = 0; a < teShuCard.length; a++) {
                    for (var b = 0; b < teShuCard[a].length; b++) {
                        result.push(teShuCard[a][b]);
                    }
                }
                return result;
            }
            return null;
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
        PorkUtilExtends.sanShunZi1 = function (cards, length) {
            if (length === void 0) { length = 3; }
            var shunzi = game.PorkUtil.findShunZi(cards, length);
            var cardsT = [];
            var cardsIndex = [];
            for (var i = 0; i < shunzi.length; i++) {
                var a = shunzi[i];
                var cardsShunzi = [];
                for (var j = 0; j < a.length; j++) {
                    var index = a[j];
                    if (typeof (cards[index]) == 'undefined') {
                        continue;
                    }
                    cardsShunzi.push(cards[index]);
                }
                cardsIndex.push(a);
                cardsT.push(cardsShunzi);
            }
            return [cardsT, cardsIndex];
        };
        //三顺子
        PorkUtilExtends.getSanShunZi = function (cards) {
            var length = 13;
            if (cards.length != length) {
                return null;
            }
            var pointAry = cards; //cards.map(card=>{return card.point;});
            pointAry.sort(function (n1, n2) { return n1.point - n2.point; });
            var result = [];
            result = this.fenzu(pointAry.concat([]), 5, 5);
            if (result != null) {
                return result;
            }
            else {
                result = this.fenzu(pointAry.concat([]), 5, 3);
                if (result != null) {
                    return result;
                }
                else {
                    result = this.fenzu(pointAry.concat([]), 3, 5);
                    if (result != null) {
                        return result;
                    }
                }
            }
            return null;
        };
        //三尖刀
        PorkUtilExtends.getSanJianDao = function (cards) {
            var helper = new CardPointsHelper(cards);
            var num = 0;
            for (var w in helper.pointNumbers) {
                num += 1;
            }
            if (helper.maxNumber >= 3) {
                var santiaoAry = game.PorkUtil.findSanTiao(cards);
                var santiao = void 0;
                var minPoint = 100;
                if (santiaoAry.length > 1) {
                    for (var i = 0; i < santiaoAry.length; i++) {
                        if (santiaoAry[i][0].point < minPoint) {
                            santiao = santiaoAry[i];
                            minPoint = santiaoAry[i][0].point;
                        }
                    }
                }
                else if (santiaoAry.length == 1) {
                    santiao = santiaoAry[0];
                }
                else {
                    return null;
                }
                var rest = this.getRestCard(santiao, cards.concat());
                var restResult = this.checkHasMidAndDown(rest, true);
                if (restResult != null) {
                    return santiao.concat(restResult);
                }
            }
            return null;
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
            var result = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            for (var i = 0; i < pointAry.length - 1; i++) {
                if (i == 0) {
                    arr1.push(pointAry[0]);
                }
                if (pointAry[i + 1].point - pointAry[i].point == 0) {
                    continue;
                }
                arr1.push(pointAry[i + 1]);
                if (arr1.length == num1) {
                    //取第一组是顺子
                    if (game.PorkUtil.isShunZi(arr1, num1)) {
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
                            if (pointAry[i_2 + 1].point - pointAry[i_2].point == 0) {
                                continue;
                            }
                            arr2.push(pointAry[i_2 + 1]);
                            if (arr2.length == num2) {
                                //取第二组是顺子
                                if (game.PorkUtil.isShunZi(arr2, num2)) {
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
                                    if (game.PorkUtil.isShunZi(arr3, 13 - num1 - num2)) {
                                        //第三组也是顺子
                                        var ar = [arr1, arr2, arr3];
                                        ar.sort(function (a, b) {
                                            return a.length - b.length;
                                        });
                                        for (var a = 0; a < ar.length; a++) {
                                            for (var b = 0; b < ar[a].length; b++) {
                                                result.push(ar[a][b]);
                                            }
                                        }
                                        return result;
                                    }
                                    //第三组不是顺子
                                    return null;
                                }
                                //第二组不是顺子
                                return null;
                            }
                        }
                    }
                    //第一组不是顺子
                    return null;
                }
            }
            //如果取不到num1个数
            if (arr1.length < num1) {
                return null;
            }
            if (arr2.length < num2) {
                return null;
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
            var result = [];
            var arr = game.PorkUtil.findTongHuaShun(cards);
            for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                var restp = this.getRestCard(arr[i], cards.concat());
                if (this.checkHasMidAndDown1(restp, isforWangzhe) == true) {
                    if (game.PorkUtil.checkCanPutDown(p, restp) == true) {
                        result = restp.concat(p);
                    }
                    else {
                        result = p.concat(restp);
                    }
                }
            }
            if (result.length != 0) {
                return result;
            }
            arr = game.PorkUtil.findTieZhi(cards);
            for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                var restp = this.getRestCard(arr[i], cards.concat());
                if (this.checkHasMidAndDown1(restp, isforWangzhe) == true) {
                    if (game.PorkUtil.checkCanPutDown(p, restp) == true) {
                        result = restp.concat(p);
                    }
                    else {
                        result = p.concat(restp);
                    }
                }
            }
            if (result.length != 0) {
                return result;
            }
            arr = game.PorkUtil.findHuLu(cards);
            for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                var restp = this.getRestCard(arr[i], cards.concat());
                if (this.checkHasMidAndDown1(restp, isforWangzhe) == true) {
                    if (game.PorkUtil.checkCanPutDown(p, restp) == true) {
                        result = restp.concat(p);
                    }
                    else {
                        result = p.concat(restp);
                    }
                }
            }
            if (result.length != 0) {
                return result;
            }
            arr = game.PorkUtil.findTongHua(cards);
            for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                var restp = this.getRestCard(arr[i], cards.concat());
                if (this.checkHasMidAndDown1(restp, isforWangzhe) == true) {
                    if (game.PorkUtil.checkCanPutDown(p, restp) == true) {
                        result = restp.concat(p);
                    }
                    else {
                        result = p.concat(restp);
                    }
                }
            }
            if (result.length != 0) {
                return result;
            }
            arr = game.PorkUtil.findShunZi(cards);
            for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                var restp = this.getRestCard(arr[i], cards.concat());
                if (this.checkHasMidAndDown1(restp, isforWangzhe) == true) {
                    if (game.PorkUtil.checkCanPutDown(p, restp) == true) {
                        result = restp.concat(p);
                    }
                    else {
                        result = p.concat(restp);
                    }
                }
            }
            if (result.length != 0) {
                return result;
            }
            arr = game.PorkUtil.findSanTiao(cards);
            for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                var restp = this.getRestCard(arr[i], cards.concat());
                if (this.checkHasMidAndDown1(restp, isforWangzhe) == true) {
                    if (game.PorkUtil.checkCanPutDown(p, restp) == true) {
                        result = restp.concat(p);
                    }
                    else {
                        result = p.concat(restp);
                    }
                }
            }
            if (result.length == 0) {
                return null;
            }
            else {
                return result;
            }
        };
        PorkUtilExtends.checkHasMidAndDown1 = function (cards, isforWangzhe) {
            if (isforWangzhe === void 0) { isforWangzhe = false; }
            if (isforWangzhe == true) {
                var santiao = game.PorkUtil.findSanTiao(cards);
                if (santiao.length > 0) {
                    var san = santiao[0];
                    cards.sort(function (a, b) {
                        return a.point - b.point;
                    });
                    if (cards[0].point == san[0].point && cards[1].point == san[1].point) {
                        cards.sort(function (a, b) {
                            return b.point - a.point;
                        });
                    }
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
        // 三顺子
        /*public static getSanShunZi(_cards:Array<PorkVO>):Array<PorkVO>
        {
            var length = 13;
            if(_cards.length != length) {
                return null;
            }
            
            let cards:Array<PorkVO> = _cards.concat([]);
            cards.sort(PorkUtil.sortByPoint);
            var wei = [];
            var zhong = [];
            var tou = [];
            // var sanShunZi = this.sanShunZi1(cards)[0];//获取所有组合的头道
            var sanShunZi = PorkUtil.findShunZi(cards,3);
            if(sanShunZi.length == 0){ //你连头道都没有 怎么混
                return null;
            }

            var newCard = cards.filter(function(i){//重新赋值cards
                return i;
            });
            var newCards1 = [];
            var newPoint = [];//判断point是否相同
            var duiZi = [];//取出有对子当中的一张牌
            for(var s in cards){
                if(newPoint.indexOf(cards[s].point)<0){
                    newCards1.push(cards[s]);
                    newPoint.push(cards[s].point);
                }else{//取出有对子当中的一张牌
                    duiZi.push(cards[s]);
                }
            }

            for (var j = 0; j < sanShunZi.length; ++j) {//循环所有头道
                var number3 = sanShunZi[j];
                for (var i = 0; (i) < cards.length; ++i) {
                    var newCards = newCards1.filter(function(i){//重新赋值cards
                        return i;
                    });
                    newCards = this.getRestCard(number3,newCards);//删除牌里的头道
                    if (wei.length != 5) {
                        let subCards = newCards.slice(i, i + 5);
                        if (subCards.length == 5 || PorkUtil.isShunZi(subCards)) {//得到尾道 删除牌里的尾道
                            wei = subCards;
                            newCards = this.getRestCard(subCards,newCards);

                        }
                    }

                    if(wei.length == 5){//把剩余的牌和对子的单张合并
                        let tasks = duiZi.filter(function(i){//重新赋值对子
                            return i;
                        });
                        tasks =  this.getRestCard(number3,tasks);//判断头道和对子的单张是否有相同 有的话就删除
                        newCards = newCards.concat(tasks);//把剩余的牌和对子的单张合并
                    }

                    if (zhong.length != 5 && newCards.length == 5) {
                        if (PorkUtil.isShunZi(newCards)) {//是三顺子
                            zhong = newCards;
                        }
                    }
                    if(wei.length == 5 && zhong.length == 5 ){//是三顺子终止循环
                        break;
                    }
                    else{//来吧 继续吧
                        zhong = [];wei = [];tou = [];
                    }
                }
                if(wei.length == 5 && zhong.length == 5 ){//是三顺子终止循环
                    tou = number3;
                    break;
                }
                else{//来吧 继续吧
                    zhong = [];wei = [];tou = [];
                }
            }

            cards = newCard;
            if (this._isSanShunZi(tou,zhong,wei)) {//是三顺
                return tou.concat(zhong).concat(wei);
            }
            return null
        }*/
        PorkUtilExtends._isSanShunZi = function (touCards, zhongCards, weiCards) {
            return game.PorkUtil.isShunZi(touCards) && game.PorkUtil.isShunZi(zhongCards)
                && game.PorkUtil.isShunZi(weiCards);
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