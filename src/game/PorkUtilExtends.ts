module game {
	export class TeShuVO{
		public constructor(_type:number,_arr:Array<PorkVO>){
			this.type = _type;
			this.arr = _arr;
		}
		public type:number;
		public arr:Array<PorkVO>;
	}
	export class PorkUtilExtends {
		public constructor() {
		}
		public static getTeShuPai(id:number):string
		{
			switch(id){
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
		}
		// 是否是特殊牌
		public static isTeShuPai(cards:Array<PorkVO>):TeShuVO {
			if (cards.length < 13) {
				return null;
			}
			let result:Array<PorkVO> = [];
			result = this.getQingLong(cards);
			if(result!=null){
				return new TeShuVO(16,result);
			}

			result = this.getYiTiaoLong(cards);
			if(result!=null){
				return new TeShuVO(15,result);;
			}

			result = this.getSanFenTianXia(cards);
			if(result!=null){
				return new TeShuVO(14,result);
			}

			result = this.getSiTaoSanTiao(cards)
			if(result!=null){
				return new TeShuVO(13,result);
			}

			result = this.QuanDa(cards);
			if(result!=null){
				return new TeShuVO(12,result);
			}

			result = this.QuanXiao(cards);
			if(result!=null){
				return new TeShuVO(11,result);
			}

			result = this.getCouYiSe(cards);
			if(result!=null){
				return new TeShuVO(10,result);
			}

			result = this.getWuDuiSanTiao(cards);
			if(result!=null){
				return new TeShuVO(9,result);
			}

			result = this.getTieZhiLiuDuiBan(cards)
			if(result!=null){
				return new TeShuVO(8,result);
			}

			result = this.getSanShunAndHasTongHua(cards);
			if(result!=null){
				return new TeShuVO(7,result);
			}

			result = this.getSanTongHuaTongHuaShun(cards)
			if(result!=null){
				return new TeShuVO(6,result);
			}

			result = this.getWangZhe(cards)
			if(result!=null){
				return new TeShuVO(5,result);
			}

			result = this.isLiuDuiBan(cards)
			if(result!=null){
				return new TeShuVO(4,result);
			}

			result = this.getSanTongHua(cards);
			if(result!=null){
				return new TeShuVO(3,result);
			}
			result = this.getSanShunZi(cards);
			if(result!=null){
				return new TeShuVO(2,result);
			}

			result = this.getSanJianDao(cards);
			if(result!=null){
				return new TeShuVO(1,result);
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
		// 是否是清龙
		public static getQingLong(cards:Array<PorkVO>):Array<PorkVO> {
			let length = 13;
			if (cards.length != length) {
				return null;
			}
			let gAry:Array<PorkVO> = PorkUtil.filtGuiPai(cards);

			var colorS = []; //黑桃
			var colorH = []; //红心
			var colorC = []; //梅花
			var colorD = []; //方块
			for(var i=0;i<cards.length;i++){
				if(cards[i].type == 4){
					colorS.push(cards[i]);
				}else if(cards[i].type == 3){
					colorH.push(cards[i]);
				}else if(cards[i].type == 2){
					colorC.push(cards[i]);
				}else if(cards[i].type == 1){
					colorD.push(cards[i]);
				}
			}
			var ls = colorS.length;  //黑桃个数
			var lh = colorH.length;  //红桃个数
			var lc = colorC.length;  //梅花个数
			var ld = colorD.length;  //方块个数
			var color = [ls,lh,lc,ld];
			var colorSum = [];    //总共有几种花色 [5,3,0....]
			for(var i=0;i<color.length;i++){
				if(color[i] != 0){
					colorSum.push(color[i]);
				}
			}
			if(colorSum.length == 1){
				if(colorSum[0]==(13-gAry.length)){

					if(this.getYiTiaoLong(cards)!=null){
						return cards;
					}

				}
			}
			return null;
		};
		/*是否一条龙*/
		public static getYiTiaoLong(cards:Array<PorkVO>):Array<PorkVO> {
			var length = 13;
			if(cards.length != length) {
				return null;
			}
			let gAry:Array<PorkVO> = PorkUtil.filtGuiPai(cards);

			var number = cards.filter(function (card) {
				if(card.point<65){
					return card;
				}
			}).map(function (card) {
					return card.point;
			}).sort(function (n1, n2) {
				return n1 - n2;
			});
			let total:number=0;
			for(var i=0;i<number.length;i++) {
				if(number[i] != number[i+1] - 1){
					if(gAry.length>0){
						gAry.pop();
					}else{
						return null;
					}
				}else{
					total+=1;
				}
			}
			if(total<13){
				return null
			}
			return cards;
		};

		// 是否是 “三分天下”
		public static getSanFenTianXia(cards:Array<PorkVO>):Array<PorkVO> {
			let length:number = 13;
			if (cards.length < length) {
				return null;
			}
			let gAry:Array<PorkVO> = PorkUtil.filtGuiPai(cards);

			let tieZhiLength = 4;
			let pointHelper:CardPointsHelper = new CardPointsHelper(cards);
			let numberOfTieZhi = 0;
			for (let prop in pointHelper.pointNumbers) {
				if(Number(prop)<65){
					let value = pointHelper.pointNumbers[prop];
					if (value == tieZhiLength) {
						numberOfTieZhi = numberOfTieZhi + 1;
					}else{
						if(value==(tieZhiLength-1)&&gAry.length>0){
							gAry.pop();
							numberOfTieZhi = numberOfTieZhi + 1;
						}else if(value==(tieZhiLength-2)&&gAry.length>1){
							gAry.pop();
							gAry.pop();
							numberOfTieZhi = numberOfTieZhi + 1;
						}
					}
				}
			}
			if(numberOfTieZhi === 3){
				return cards;
			}else{
				return null;
			}
		};
		// 是否是 “四套三条”
		public static getSiTaoSanTiao(cards:Array<PorkVO>):Array<PorkVO> {
			let length:number = 13;
			if (cards.length < length) {
				return null;
			}

			let gAry:Array<PorkVO> = PorkUtil.filtGuiPai(cards);

			let sanTiaoLength = 3;
			let pointHelper = new CardPointsHelper(cards);
			let numberOfSanTiao = 0;
			for (let prop in pointHelper.pointNumbers) {
				let value = pointHelper.pointNumbers[prop];
				if (value == sanTiaoLength) {
					numberOfSanTiao = numberOfSanTiao + 1;
				}else if (value == sanTiaoLength-1 && gAry.length>0) {
					gAry.pop();
					numberOfSanTiao = numberOfSanTiao + 1;
				}else if (value == sanTiaoLength-2 && gAry.length>1) {
					gAry.pop();
					gAry.pop();
					numberOfSanTiao = numberOfSanTiao + 1;
				}
			}
			if(numberOfSanTiao == 4){
				return cards;
			}else{
				return null;
			}
		};
		public static QuanDa(cards:Array<PorkVO>):Array<PorkVO>
		{
			let result:Array<PorkVO>=cards;
			// let gAry:Array<PorkVO> = PorkUtil.filtGuiPai(cards);
			for(let i:number=0;i<cards.length;i++){
				if(cards[i].point<8){
					return null;
				}
			}
			return result;
		}
		public static QuanXiao(cards:Array<PorkVO>):Array<PorkVO>
		{
			let result:Array<PorkVO>=cards;
			// let gAry:Array<PorkVO> = PorkUtil.filtGuiPai(cards);
			for(let i:number=0;i<cards.length;i++){
				if(cards[i].point>8 && (cards[i].point!=501&&cards[i].point!=502)){
					return null;
				}
			}
			return result;
		}
		/*是否凑一色
		* 全部是方块+红心的牌或全部是黑桃+梅花的牌
		*/ 
		public static getCouYiSe(cards:Array<PorkVO>):Array<PorkVO> {
			if(GameModel.ins.roomModel.rinfo.rp==6){//纯一色十三水	
				return null;
			}
			var length = 13;
			if(cards.length != length) {
				return null;
			}
			let gAry:Array<PorkVO> = PorkUtil.filtGuiPai(cards);
			var colorS = []; //黑桃
			var colorH = []; //红心
			for(var i=0;i<cards.length;i++){
				if(cards[i].type == 4 || cards[i].type == 2){
					colorS.push(cards[i]);//全黑
				}else if(cards[i].type == 1 || cards[i].type == 3){
					colorH.push(cards[i]);//全红
				}
			}
			if(((colorS.length+gAry.length) == 13) || ((colorH.length+gAry.length) == 13)){
				return cards;
			}
			return null;
		};
		//五队三条
		public static getWuDuiSanTiao(cards:Array<PorkVO>):Array<PorkVO>
		{

			let length:number = 13;
			if (cards.length < length) {
				return null;
			}
			let gAry:Array<PorkVO> = PorkUtil.filtGuiPai(cards);

			let duiZiLength = 2;
			let sanTiaoLength = 3;
			//计算一个牌数组内的相同点数的牌的张数
			let cardNumbers = this.GetCardPointsSameCount(cards);
			let numberOfDuiZi = 0;
			let numberOfSanTiao = 0;
			for (let prop in cardNumbers) {
				if(Number(prop)<65){
					let value = cardNumbers[prop];
					if(value==1&&gAry.length>0){
						value=2;
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
			if(numberOfDuiZi==6&&gAry.length>0){
				numberOfDuiZi=5;
				numberOfSanTiao+=1;
			}
			if(numberOfDuiZi == 5 && numberOfSanTiao == 1){
				return cards;
			}else{
				return null;
			}
		}
		//铁支六对半
		public static getTieZhiLiuDuiBan(cards:Array<PorkVO>):Array<PorkVO>
		{
			if(this.isLiuDuiBan(cards)!=null&&this.containTieZhi(cards)){
				let arr:any = PorkUtil.findTieZhi(cards);
				let tarr:Array<PorkVO> = arr[0];
				let narr:Array<PorkVO> = this.getRestCard1(tarr,cards);
				tarr.push(this.getResetSingle(narr));
				narr = this.getRestCard1(tarr,cards);
				
				return narr.concat(tarr);
			}
			return null;
		}
		// 是否是 含同花顺的三顺子
		public static getSanShunAndHasTongHua(cards:Array<PorkVO>):Array<PorkVO> {
			var length = 13;
			if(cards.length != length) {
				return null;
			}
			let shunzi:Array<PorkVO> = this.getSanShunZi(cards);
			if(shunzi!=null&&(PorkUtil.isTongHua(shunzi.slice(0,3),3)||PorkUtil.isTongHua(shunzi.slice(3,8))||PorkUtil.isTongHua(shunzi.slice(8,13)))){
				return shunzi;
			}
			return null;
		};
		//三个同花并且含有同花顺
		public static getSanTongHuaTongHuaShun(cards:Array<PorkVO>):Array<PorkVO>
		{
			let result:Array<PorkVO> = this.getSanTongHua(cards);
			if(result!=null&&(PorkUtil.isShunZi(result.slice(0,3),3)||PorkUtil.isShunZi(result.slice(3,8))||PorkUtil.isShunZi(result.slice(8,13)))){
				return result;
			}
			return null;
		}
		//是否是王者
		public static getWangZhe(cardAry:Array<PorkVO>):Array<PorkVO>
		{
			let cards:Array<PorkVO> = cardAry.concat([]);
			let gAry:Array<PorkVO> = PorkUtil.filtGuiPai(cards);
			if(gAry.length<2){
				return null;
			}
			if(this.checkHasMidAndDown(cards,true)){
				return null;
			}
			return null;
		}
		// 是否是六对半
		public static isLiuDuiBan(cards:Array<PorkVO>):Array<PorkVO> {
			let length:number = 13;
			if (cards.length < length) {
				return null;
			}
			let gAry:Array<PorkVO> = PorkUtil.filtGuiPai(cards);
			let duiZiLength:number = 2;
			//计算一个牌数组内的相同点数的牌的张数
			let cardNumbers = this.GetCardPointsSameCount(cards);
			let numberOfDuiZi = 0;
			let numberOfYi = 0;
			for (let prop in cardNumbers) {
				if(Number(prop)<65){
					let value = cardNumbers[prop];
					if (value == duiZiLength || value == 3) {
						numberOfDuiZi = numberOfDuiZi + 1;
					}
					else if (value == 4) {
						numberOfDuiZi = numberOfDuiZi + 2;
					}
					else if (value == 1) {
						if(numberOfYi==1&&gAry.length>0){
							numberOfDuiZi = numberOfDuiZi+1;
							gAry.pop();
						}else{
							numberOfYi += 1;
						}
					}
				}
			}

			if(numberOfDuiZi == 6){
				return cards;
			}
			return null;
		};
		//三同花
		public static getSanTongHua(cards:Array<PorkVO>):Array<PorkVO>
		{
			if(GameModel.ins.roomModel.rinfo.rp==6){//纯一色十三水	
				return null;
			}
			var length = 13;
			if(cards.length != length) {
				return null;
			}
			let gAry:Array<PorkVO> = PorkUtil.filtGuiPai(cards);
			var colorS = []; //黑桃
			var colorH = []; //红心
			var colorC = []; //梅花
			var colorD = []; //方块
			for(var i=0;i<cards.length;i++){
				if(cards[i].type == 4){
					colorS.push(cards[i]);
				}else if(cards[i].type == 3){
					colorH.push(cards[i]);
				}else if(cards[i].type == 2){
					colorC.push(cards[i]);
				}else if(cards[i].type == 1){
					colorD.push(cards[i]);
				}
			}
			var ls:number = colorS.length;  //黑桃个数
			var lh:number = colorH.length;  //红桃个数
			var lc:number = colorC.length;  //梅花个数
			var ld:number = colorD.length;  //方块个数
			var sanCard = [colorS,colorH,colorC,colorD];
			var teShuCard = [];
			var color = [ls,lh,lc,ld];
			var colorSum = [];    //总共有几种花色 [5,3,0....]
			for(var i=0;i<color.length;i++){
				if(color[i] != 0){
					colorSum.push(color[i]);
					teShuCard.push(sanCard[i]);
				}
			}
			let result:Array<PorkVO>=[];
			//三种花色
			if(colorSum.length == 3){
				for(var i=0;i<colorSum.length;i++) {
					if (colorSum[i] != 5){
						if((colorSum[i]==2&&gAry.length>0)){
							teShuCard[i].push(gAry.pop())
						}else if((colorSum[i]==4&&gAry.length>0)){
							teShuCard[i].push(gAry.pop())
						}else if((colorSum[i]==1&&gAry.length>1)){
							teShuCard[i].push(gAry.pop())
							teShuCard[i].push(gAry.pop())
						}else if((colorSum[i]==3&&gAry.length>1)){
							teShuCard[i].push(gAry.pop())
							teShuCard[i].push(gAry.pop())
						}
					}
				}
				if(teShuCard[0].length+teShuCard[1].length+teShuCard[2].length<13){
					return null;
				}
				for(let a:number=0;a<colorSum.length;a++){
					if(colorSum[a]!=3&&colorSum[a]!=5){
						return null;
					}
				}
				teShuCard.sort(function(a,b){
					return a.length - b.length;
				});
				for(let a:number=0;a<teShuCard.length;a++){
					for(let b:number=0;b<teShuCard[a].length;b++){
						result.push(teShuCard[a][b]);
					}
				}
				return result;
			}
			return null;
		}
		
		// 是否是三同花顺
		public static _isSanTongHuaShun(touCards, zhongCards, weiCards):boolean {
			return PorkUtil.isTongHuaShun(touCards) || PorkUtil.isTongHuaShun(zhongCards)
				|| PorkUtil.isTongHuaShun(weiCards);
		};

		// 头、中、尾道为相同花色的牌
		public static isSanTaoHua(cards):boolean {
			let length = 13;
			if (cards.length < length) {
				return false;
			}
			// var card20 = KQCard.contain20(cards);
			// if(card20.length > 0) {
			// 	return false;
			// }
			let colorHelper:CardColorsHelper = new CardColorsHelper(cards);
			var colorNumbers = [];
			for (let prop in colorHelper.colorNumber) {
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
		public static _isSanShunZi = function (touCards, zhongCards, weiCards) {
			return PorkUtil.isShunZi(touCards) && PorkUtil.isShunZi(zhongCards)
				&& PorkUtil.isShunZi(weiCards);
		};
		public static sanShunZi1(cards,length = 3):any{
			var shunzi = PorkUtil.findShunZi(cards,length);
			var cardsT = [];
			var cardsIndex = [];
			for(var i = 0; i < shunzi.length;i++){
				var a = shunzi[i];
				var cardsShunzi = [];
				for(var j = 0; j < a.length;j++){
					var index = a[j];
					if(typeof(cards[index]) == 'undefined'){
						continue;
					}
					cardsShunzi.push(cards[index]);

				}
				cardsIndex.push(a);
				cardsT.push(cardsShunzi);
			}
			return [cardsT,cardsIndex];
		}
		//三顺子
		public static getSanShunZi(cards:Array<PorkVO>):Array<PorkVO>
		{
			let length:number = 13;
			if(cards.length!=length){
				return null;
			}
			let pointAry:Array<PorkVO> = cards;//cards.map(card=>{return card.point;});
			pointAry.sort((n1,n2)=>{return n1.point-n2.point});

			let result:Array<PorkVO> = [];
			result = this.fenzu(pointAry.concat([]),5,5)
			if(result!=null){
				return result;
			}else{
				result = this.fenzu(pointAry.concat([]),5,3);
				if(result!=null){
					return result;
				}else{
					result = this.fenzu(pointAry.concat([]),3,5);
					if(result!=null){
						return result;
					}
				}
			}
			//为了防止123的牌型出现，把A放到pointAry的最前面，然后再执行一次
			let pointAry1:Array<PorkVO> = [];
			for(let i:number=0;i<pointAry.length;i++){
				if(pointAry[i].point!=14){
					pointAry1.push(pointAry[i]);
				}
				else{
					pointAry1.unshift(pointAry[i]);
				}
			}
			result = this.fenzu(pointAry1.concat([]),5,5)
			if(result!=null){
				return result;
			}else{
				result = this.fenzu(pointAry1.concat([]),5,3);
				if(result!=null){
					return result;
				}else{
					result = this.fenzu(pointAry1.concat([]),3,5);
					if(result!=null){
						return result;
					}
				}
			}
			return null;
		}
		//三尖刀
		public static getSanJianDao(cards:Array<PorkVO>):Array<PorkVO>
		{
			let helper = new CardPointsHelper(cards);
			let num:number = 0;
			for(var w in helper.pointNumbers) {
				num+=1;
			}
			if(helper.maxNumber>=3){
				let santiaoAry:Array<any> = PorkUtil.findSanTiao(cards);
				let santiao:Array<PorkVO>;
				let minPoint:number=100;
				if(santiaoAry.length>1){
					for(let i:number=0;i<santiaoAry.length;i++){
						if(santiaoAry[i][0].point<minPoint){
							santiao = santiaoAry[i];
							minPoint = santiaoAry[i][0].point;
						}
					}
				}else if(santiaoAry.length==1){
					santiao = santiaoAry[0];
				}else{
					return null;
				}
				let rest:Array<PorkVO> = this.getRestCard(santiao,cards.concat());
				let restResult:Array<PorkVO> = this.checkHasMidAndDown(rest,true);
				if(restResult!=null){
					return santiao.concat(restResult);
				}
			}
			return null;
		}
		// 是否包含有同花顺
		public static containTongHuaShun(cards:Array<PorkVO>, minLength = 5) {
			if (cards.length < minLength) {
				return false;
			}
			if (PorkUtil.findTongHuaShun(cards).length > 0) {
				return true;
			}
			return false;
		};
		//分组553||535||355
		public static fenzu(pointAry:Array<PorkVO>,num1:number,num2:number):Array<PorkVO>
		{
			pointAry = pointAry.concat([]);
			let result:Array<PorkVO> = [];
			let arr1:Array<PorkVO> = [];
			let arr2:Array<PorkVO> = [];
			let arr3:Array<PorkVO> = [];
			let gAry:Array<PorkVO> = PorkUtil.filtGuiPai(pointAry);
			let pointAryTemp = this.getRestCard(gAry,pointAry);
			pointAry = this.filterSamePoint(pointAryTemp);
			let step1=1;
			for(let i:number=0;i<pointAry.length;i++){
				if(i == 0){
					arr1.push(pointAry[0]);
				}else{
					// if(pointAry[i+1].point - pointAry[i].point == 0){
					// 	continue;
					// }
					if(pointAry[i].point==pointAry[i-1].point+step1){
						arr1.push(pointAry[i]);
						step1=1;
					}else{
						if(gAry.length>0){
							step1+=1;
							i-=1;
							arr1.push(gAry.pop());
						}else{
							return null;
						}
					}
				}
				
				if(arr1.length == num1){
					//取第一组是顺子
					// if(PorkUtil.isShunZi(arr1,num1)){
						//这5个是顺子,从数组中移除
						for(let i:number=0;i<arr1.length;i++){
							for(let j:number=0;j<pointAryTemp.length;j++){
								if(pointAryTemp[j] == arr1[i]){
									//两个数一样的只删除一个
									if(pointAryTemp[j] == pointAryTemp[j+1]){
										continue;
									}
									pointAryTemp.splice(j,1);    //从number中移除
								}
							}
						}
						console.log("删除第一组后的number");
						pointAry = this.filterSamePoint(pointAryTemp);
						//接下来取第二组
						let step2 = 1;
						for(let i:number=0;i<pointAry.length;i++){
							if(i == 0){
								arr2.push(pointAry[0]);
							}else{
								// if(pointAry[i+1].point - pointAry[i].point == 0){
								// 	continue;
								// }
								if(pointAry[i].point==pointAry[i-1].point+step2){
									arr2.push(pointAry[i]);
									step2=1;
								}else{
									if(gAry.length>0){
										step2 +=1;
										i-=1;
										arr2.push(gAry.pop());
									}else{
										return null;
									}
								}
							}
							if(arr2.length == num2) {
								//取第二组是顺子
								// if (PorkUtil.isShunZi(arr2,num2)) {
									for(let i:number=0;i<arr2.length;i++){
										for(let j:number=0;j<pointAryTemp.length;j++){
											if(pointAryTemp[j] == arr2[i]){
												//两个数一样的只删除一个
												if(pointAryTemp[j] == pointAryTemp[j+1]){
													continue;
												}
												pointAryTemp.splice(j,1);    //从number中移除
											}
										}
									}
									console.log("删除第二组后的number");
									let step3:number=1;
									pointAry = this.filterSamePoint(pointAryTemp);
									//接下来取第三组
									for(let a:number=0;a<pointAry.length;a++){
										if(a == 0){
											arr3.push(pointAry[0]);
										}else{
											// if(pointAry[i+1].point - pointAry[i].point == 0){
											// 	continue;
											// }
											if(pointAry[a].point==pointAry[a-1].point+step3){
												arr3.push(pointAry[a]);
												step3=1;
											}else{
												if(gAry.length>0){
													step3+=1;
													a-=1;
													arr3.push(gAry.pop());
												}else{
													return null;
												}
											}
										}
										if(arr3.length == 13-num1-num2) {
											let ar:Array<any>= [arr1,arr2,arr3];
											ar.sort((a,b)=>{
												return a.length-b.length;
											});
											for(let a:number=0;a<ar.length;a++){
												for(let b:number=0;b<ar[a].length;b++){
													result.push(ar[a][b]);
												}
											}
											return result;
										}
								}
								//第三组不是顺子
								// return null;
							// }
						}
						//第二组不是顺子
						// return null;
					}
					//第一组不是顺子
					// return null;
				}
			}
			//如果取不到num1个数
			if(arr1.length < num1){
				return null;
			}
			if(arr2.length < num2){
				return null;
			}
			return null;
		}
		//判断5张或者3张是否顺子
		public static isShunZi1 = function(arr){
			//console.log(arr);
			for(let i=0;i<arr.length-1;i++){
				if(arr[i+1] - arr[i] != 1){
					//不是顺子
					//console.log("不是顺子");
					return false;
				}
			}
			return true;
		};
		// 判断是否包含铁支
		// 四张同样点数的牌
		public static containTieZhi(cards:Array<PorkVO>) {
			let length = 4;
			if (cards.length < length) {
				return false;
			}
			// var card20 = KQCard.contain20(cards);
			// cards = cards.kq_excludes(card20);
			// length = length-card20.length;
			let helper = new CardPointsHelper(cards);

			for(var w in helper.pointNumbers) {
				var maxNumber = helper.pointNumbers[w];
				if(maxNumber >= length){
					// card20.forEach(function(ca){
					// 	ca.scores = parseInt(w);
					// });
					return true;
				}
			}
			return false;
		};
		// 将牌根据 color 进行分类
		public static _colorClassCards(cards:Array<PorkVO>) {
			let colorCardsObject = {};
			cards.forEach(function (card) {
				let color = card.type;
				var subCards = colorCardsObject[color];
				if (!subCards) {
					subCards = [];
					colorCardsObject[color] = subCards;
				}
				subCards.push(card);
			});

			return colorCardsObject;
		};
		public static GetCardPointsSameCount(cards:Array<PorkVO>):any
		{
			let cardNumbers ={};
			for(let i in cards){
				let s:number = cards[i].point;
				if(cardNumbers[s]){
					cardNumbers[s]++;
				}else{
					cardNumbers[s]=1;
				}
			}
			return cardNumbers;
		}
		public static getRestCard(cards:Array<PorkVO>,allCards:Array<PorkVO>):Array<PorkVO>{
			let cardAry:Array<PorkVO> = [];
			for(let i:number=0;i<cards.length;i++){
				for(let j:number=0;j<allCards.length;j++){
					if(cards[i]==allCards[j]){
						allCards.splice(j,1);
						break;
					}
				}
			}
			return allCards;
		}
		public static getRestCard1(cards:Array<PorkVO>,allCards:Array<PorkVO>):Array<PorkVO>{
			let cards1:Array<PorkVO> = cards.concat([]);
			let allCards1:Array<PorkVO> = allCards.concat([]);
			let cardAry:Array<PorkVO> = [];
			for(let i:number=0;i<cards1.length;i++){
				for(let j:number=0;j<allCards1.length;j++){
					if(cards1[i]==allCards1[j]){
						allCards1.splice(j,1);
						break;
					}
				}
			}
			return allCards1;
		}
		/**
		 * 检查中墩和下墩是否一定有牌型，为了方便判断头墩是否有特殊牌型
		 */
		public static checkHasMidAndDown(cards:Array<PorkVO>,isforWangzhe:boolean=false):Array<PorkVO>
		{
			let result:Array<PorkVO>=[];
			let arr:Array<any>=PorkUtil.findTongHuaShun(cards);
			for(let i:number=0;i<arr.length;i++){
				let p:Array<PorkVO> = arr[i];
				let restp:Array<PorkVO> = this.getRestCard(arr[i],cards.concat());
				if(this.checkHasMidAndDown1(restp,isforWangzhe)==true){
					if(PorkUtil.checkCanPutDown(p,restp)==true){
						result = restp.concat(p); 
					}else{
						result = p.concat(restp); 
					}
				}
			}
			if(result.length!=0){
				return result;
			}
			arr = PorkUtil.findTieZhi(cards);
			for(let i:number=0;i<arr.length;i++){
				let p:Array<PorkVO> = arr[i];
				let restp:Array<PorkVO> = this.getRestCard(arr[i],cards.concat());
				if(this.checkHasMidAndDown1(restp,isforWangzhe)==true){
					if(PorkUtil.checkCanPutDown(p,restp)==true){
						result = restp.concat(p); 
					}else{
						result = p.concat(restp); 
					}
				}
			}
			if(result.length!=0){
				return result;
			}
			arr = PorkUtil.findHuLu(cards);
			for(let i:number=0;i<arr.length;i++){
				let p:Array<PorkVO> = arr[i];
				let restp:Array<PorkVO> = this.getRestCard(arr[i],cards.concat());
				if(this.checkHasMidAndDown1(restp,isforWangzhe)==true){
					if(PorkUtil.checkCanPutDown(p,restp)==true){
						result = restp.concat(p); 
					}else{
						result = p.concat(restp); 
					}
				}
			}
			if(result.length!=0){
				return result;
			}
			arr = PorkUtil.findTongHua(cards);
			for(let i:number=0;i<arr.length;i++){
				let p:Array<PorkVO> = arr[i];
				let restp:Array<PorkVO> = this.getRestCard(arr[i],cards.concat());
				if(this.checkHasMidAndDown1(restp,isforWangzhe)==true){
					if(PorkUtil.checkCanPutDown(p,restp)==true){
						result = restp.concat(p); 
					}else{
						result = p.concat(restp); 
					}
				}
			}
			if(result.length!=0){
				return result;
			}
			arr = PorkUtil.findShunZi(cards);
			for(let i:number=0;i<arr.length;i++){
				let p:Array<PorkVO> = arr[i];
				let restp:Array<PorkVO> = this.getRestCard(arr[i],cards.concat());
				if(this.checkHasMidAndDown1(restp,isforWangzhe)==true){
					if(PorkUtil.checkCanPutDown(p,restp)==true){
						result = restp.concat(p); 
					}else{
						result = p.concat(restp); 
					}
				}
			}
			if(result.length!=0){
				return result;
			}
			arr = PorkUtil.findSanTiao(cards);
			for(let i:number=0;i<arr.length;i++){
				let p:Array<PorkVO> = arr[i];
				let restp:Array<PorkVO> = this.getRestCard(arr[i],cards.concat());
				if(this.checkHasMidAndDown1(restp,isforWangzhe)==true){
					if(PorkUtil.checkCanPutDown(p,restp)==true){
						result = restp.concat(p); 
					}else{
						result = p.concat(restp); 
					}
				}
			}
			if(result.length==0){
				return null;
			}else{
				return result;
			}
		}
		public static checkHasMidAndDown1(cards:Array<PorkVO>,isforWangzhe:boolean=false):boolean{
			if(isforWangzhe==true){
				let santiao:Array<any> = PorkUtil.findSanTiao(cards);
				if(santiao.length>0){
					let san:Array<PorkVO> = santiao[0];
					cards.sort((a,b)=>{
						return a.point-b.point;
					})
					if(cards[0].point == san[0].point&&cards[1].point == san[1].point){
						cards.sort((a,b)=>{
							return b.point-a.point;
						})
					}
					return true;
				}
			}
			if(PorkUtil.containTonghuaShun(cards)){
				return true;
			}
			if(PorkUtil.containTieZhi(cards)){
				return true;
			}
			if(PorkUtil.containHulu(cards)){
				return true;
			}
			if(PorkUtil.containTonghua(cards)){
				return true;
			}
			if(PorkUtil.containShunZi(cards)){
				return true;
			}
			
			return false;
		}
		//当拿到的是两对或者是铁支等四张牌型的时候，获取剩下的一个单张牌，补齐5张
		private static getResetSingle(ary:Array<PorkVO>):PorkVO{
			let restAry:Array<PorkVO>=ary;
			
			for(let i:number=restAry.length-1;i>0;i--){
				if(this.checkHasSameNum(restAry[i].point,restAry,1)==false){
					return restAry[i];
				}
			}
			return restAry[restAry.length-1];
		}
		//数组里面是否有重复的num的
		private static checkHasSameNum(num:number,arr:Array<PorkVO>,min:number):boolean
		{
			let len:number=0
			for(let i:number=0;i<arr.length;i++){
				if(arr[i].point == num){
					len+=1;
				}
			}
			if(len>min){
				return true;
			}else{
				return false;
			}
		}
		///过滤到相同点数的牌
		private static filterSamePoint(arr:Array<PorkVO>):Array<PorkVO>
		{
			let result:Array<PorkVO> = new Array<PorkVO>();
			for(let i:number=0;i<arr.length;i++){
				if(this.checkHasSameNum(arr[i].point,result,0)==false){
					result.push(arr[i]);
				}
			}
			return result;
		}
	}
	export class CardPointsHelper{
		public pointNumbers={};
		public constructor(cards:Array<PorkVO>){
			cards.forEach(card=>{
				let point:number = card.point;
				let number:number = this.pointNumbers[point]||0;
				this.pointNumbers[point]=number+1;
			})
		}
		public get maxNumber():number{
			let result:number=0;
			for(let prop in this.pointNumbers){
				let number = this.pointNumbers[prop];
				result = Math.max(number,result);
			}
			return result;
		}
		
	}
	export class CardColorsHelper{
		public colorNumber={};
		public constructor(cards:Array<PorkVO>){
			cards.forEach(card=>{
				let type:number = card.type;
				let number:number = this.colorNumber[type]||0;
				this.colorNumber[type]=number+1;
			})
		}
		public get maxNumber():number{
			let result:number=0;
			for(let prop in this.colorNumber){
				let number = this.colorNumber[prop];
				result = Math.max(number,result);
			}
			return result;
		}
		
	}
}