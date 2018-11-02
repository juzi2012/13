module game {
	export class PorkUtil {
		public constructor() {
		}
		/**
		 * 临时测试，获取一组牌型
		 */
		public static RuffleCard(IsCheat:boolean,AddColor:number):Array<PorkVO>
		{
			let idArr = []
			if(IsCheat){
				if(AddColor==1){
					idArr = [102,103,104,105,106,107,108,109,110,111,112,113,114,
							202,203,204,205,206,207,208,209,210,211,212,213,214,
							302,303,304,305,306,307,308,309,310,311,312,313,314,
							402,403,404,405,406,407,408,409,410,411,412,413,414,
							404,405,406,407,408,409,410,411,412,413,414,
							501,
							502];
				}else if(AddColor==2){
					idArr = [102,103,104,105,106,107,108,109,110,111,112,113,114,
							202,203,204,205,206,207,208,209,210,211,212,213,214,
							302,303,304,305,306,307,308,309,310,311,312,313,314,
							302,303,304,305,306,307,308,309,310,311,312,313,314,
							402,403,404,405,406,407,408,409,410,411,412,413,414,
							404,405,406,407,408,409,410,411,412,413,414,
							501,
							502];
				}else{
					idArr = [102,103,104,105,106,107,108,109,110,111,112,113,114,
							202,203,204,205,206,207,208,209,210,211,212,213,214,
							302,303,304,305,306,307,308,309,310,311,312,313,314,
							404,405,406,407,408,409,410,411,412,413,414,
							501,
							502];
				}
			}else{
				if(AddColor==1){
					idArr = [102,103,104,105,106,107,108,109,110,111,112,113,114,
							202,203,204,205,206,207,208,209,210,211,212,213,214,
							302,303,304,305,306,307,308,309,310,311,312,313,314,
							402,403,404,405,406,407,408,409,410,411,412,413,414,
							402,403,404,405,406,407,408,409,410,411,412,413,414
							];
				}else if(AddColor==2){
					idArr = [102,103,104,105,106,107,108,109,110,111,112,113,114,
							202,203,204,205,206,207,208,209,210,211,212,213,214,
							302,303,304,305,306,307,308,309,310,311,312,313,314,
							302,303,304,305,306,307,308,309,310,311,312,313,314,
							402,403,404,405,406,407,408,409,410,411,412,413,414,
							402,403,404,405,406,407,408,409,410,411,412,413,414
							];
				}else{
					idArr = [102,103,104,105,106,107,108,109,110,111,112,113,114,
							202,203,204,205,206,207,208,209,210,211,212,213,214,
							302,303,304,305,306,307,308,309,310,311,312,313,314,
							402,403,404,405,406,407,408,409,410,411,412,413,414
							];
				}
			}
			
			let idIndexArr:Array<number> = App.MathUtils.randomNoRepeat(13,0,idArr.length)
			// let idIndexArr:Array<number> = [32,4,25,46,10,51,19,15,36,22,20,27,7];//3,13,1,14,26,39,6,7,8,21,34,47,12
			console.log(idIndexArr);
			var myCardAry:Array<PorkVO> = new Array<PorkVO>();
			for(var i:number=0;i<idIndexArr.length;i++){
				myCardAry.push(new PorkVO(idArr[idIndexArr[i]]));
			}
			return myCardAry;
		}
		public static RuffleCard1():Array<PorkVO>{
			let serverArr:Array<number> = [35,41,46,4,7,14,50,52,53,58,61,501,502];//[61,58,9,5,46,30,57,14,27,20,28,62,34];
			let resultArr:Array<PorkVO> =[];
			for(let i:number=0;i<serverArr.length;i++){
				resultArr.push(new PorkVO(this.ChangeServerCardToClient(serverArr[i])));
			}
			return resultArr;
		}
		public getCardType(cards:Array<PorkVO>):number{
			// if(this.is){

			// }
			return 0;
		}
		/**
		 * 是否包含对子
		 */
		public static containDuiZi(cards:Array<PorkVO>):boolean
		{
			var length = 2;
			if (cards.length < length) {
				return false;
			}
			let pointHelper = new CardPointHelper(cards);
			for(var w in pointHelper.pointNumbers){
				var maxNumber = pointHelper.pointNumbers[w];
				if(maxNumber>=length){
					return true;
				}
			}
			return false;
		}
		/**
		 * 是否包含两对
		 */
		public static containLiaDui(cards:Array<PorkVO>):boolean
		{
			if(cards.length<4){
				return false;
			}

			return false;
		}
		public static findDuiZi(cards:Array<PorkVO>):Array<any>
		{
			//先找到三条，因为三条也包涵对子
			let sDuiZiIndexs = this.findSanTiao(cards)||[];
			//找到所有对子的组合
			let result = this.findPointByLength(cards,2)||[];
			if(result.length<2){//如果出现只有一个对子，并且是包含在三条当中的
				if(sDuiZiIndexs.length>0){
					sDuiZiIndexs.forEach((pointsAry)=>{
						let s1 = [pointsAry[0],pointsAry[1]];
						result.push(s1);
					})
				}
				let tresult = this.findByGuiPai(cards,2);
				for(let i:number=0;i<tresult.length;i++){
					result.push(tresult[i]);
				}
			}
			return result.length>0?result:[];
		}
		/**
		 * 是否包涵三条
		 */
		public static containSanTiao(cards:Array<PorkVO>):boolean
		{
			if(this.findSanTiao(cards).length>0){
				return true;
			}
			return false;
		}
		/**
		 * 是否包涵顺子
		 */
		public static containShunZi(cards:Array<PorkVO>):boolean
		{
			if(this.findShunZi(cards).length>0){
				return true;
			}
			return false;
		}
		/**
		 * 是否包涵同花
		 */
		public static containTonghua(cards:Array<PorkVO>):boolean
		{
			if(this.findTongHua(cards).length>0){
				return true;
			}
			return false;
		}
		/**
		 * 是否包涵葫芦
		 */
		public static containHulu(cards:Array<PorkVO>):boolean
		{
			if(this.findHuLu(cards).length>0){
				return true;
			}
			return false;
		}
		/**
		 * 是否包涵铁支
		 */
		public static containTieZhi(cards:Array<PorkVO>):boolean
		{
			if(this.findTieZhi(cards).length>0){
				return true;
			}
			return false;
		}
		/**
		 * 是否包涵同花顺
		 */
		public static containTonghuaShun(cards:Array<PorkVO>):boolean
		{
			if(this.findTongHuaShun(cards).length>0){
				return true;
			}
			return false;
		}
		/**
		 * 查找两对
		 */
		public static findLiaDui(cards:Array<PorkVO>):Array<any>
		{
			let duiZiIndexs = this.findDuiZi(cards)||[];
			let duiZiIndex:Array<PorkVO> = this.findByGuiPai(cards,2)||[];
			if(duiZiIndexs.length<1 && duiZiIndex.length>0){
				duiZiIndex.forEach(indexs=>{
					duiZiIndexs.unshift(indexs);
				})
			}
			if(duiZiIndexs.length<2){
				return [];
			}
			let result = [];
			for(let i=0;i<duiZiIndexs.length;i++){
				for(let j=i+1;j<duiZiIndexs.length;j++){
					if(result.length<10){
						let pre = duiZiIndexs[i];
						let next = duiZiIndexs[j];
						let s = pre.concat(next);
						let newS:Array<PorkVO>=new Array<PorkVO>();
						for(let q=0;q<s.length;q++){
							if(newS.indexOf(s[q])==-1){
								newS.push(s[q]);
							}else{
								break;
							}
						}
						if(newS.length==4){
							newS.sort((n1,n2)=>{
								return n1.point-n1.point;
							});
							result.unshift(newS);
						}
					}else{
						break;
					}
				}
			}
			if(result.length>6){
				result = result.slice(0,6);
			}
			return result;
		}
		public static findSanTiao(cards:Array<PorkVO>):Array<any>
		{
			if(cards.length<3){
				return [];
			}
			let result = this.findPointByLength(cards,3)||[];
			if(result.length<2){
				let tieZhiPointsArray = this.findTieZhi(cards);
				if(tieZhiPointsArray.length>0){
					tieZhiPointsArray.forEach(pointsAry=>{
						let sanTiaoPoints0:Array<PorkVO> = [pointsAry[0],pointsAry[1],pointsAry[2]]
						result.push(sanTiaoPoints0);
					});
				}
				let tresult = this.findByGuiPai(cards,3);
				for(let i:number=0;i<tresult.length;i++){
					result.push(tresult[i]);
				}
			}
			return result.length>0?result:[];
		}
		public static findTieZhi(cards:Array<PorkVO>):Array<any>
		{
			let result=this.findPointByLength(cards,4);
			if(result.length>0){
				return result;
			}
			result = [];
			let wuTongIndexsArray = this.findWuTong(cards);
			wuTongIndexsArray.forEach(indexs=>{
				let tieZhiPoints0 = [indexs[0],indexs[1],indexs[2],indexs[3]];
				let tieZhiPoints1 = [indexs[0],indexs[1],indexs[2],indexs[4]];
				let tieZhiPoints2 = [indexs[0],indexs[1],indexs[3],indexs[4]];
				let tieZhiPoints3 = [indexs[0],indexs[2],indexs[3],indexs[4]];
				let tieZhiPoints4 = [indexs[1],indexs[1],indexs[2],indexs[4]];
				result.push(tieZhiPoints0);
				result.push(tieZhiPoints1);
				result.push(tieZhiPoints2);
				result.push(tieZhiPoints3);
				result.push(tieZhiPoints4);
			});
			if(result.length>10){
				result = result.slice(0,10);
			}
			return result.length>0?result:this.findByGuiPai(cards,4);
		}
		public static findWuTong(cards:Array<PorkVO>):Array<any>
		{
			if(cards.length<5){
				return [];
			}
			let result = this.findPointByLength(cards,5)||[];
			return result.length>0?result:this.findByGuiPai(cards,5);
		}
		public static findShunZi(cards:Array<PorkVO>,length=5):Array<any>
		{
			if(cards.length<5){
				return [];
			}
			let newCards:Array<PorkVO> = [];
			let pointAry=[];
			//先去重
			cards.forEach(card=>{
				if(pointAry.indexOf(card.point)==-1){
					newCards.push(card);
					pointAry.push(card.point);
				}
			})
			newCards.sort((a,b)=>{
				return a.point-b.point;
			})
			let result=[];
			for(let start=0;(start+length)<=newCards.length;start++){
				let subCard = newCards.slice(start,start+length);
				if(this.isShunZi(subCard,length)){
					result.unshift(subCard);
				}
			}
			return result.length>0?result:this.findShunZiGuiPai(cards);
		}
		/**
		 * 查找同花
		 */
		public static findTongHua(cards:Array<PorkVO>,length=5):Array<any>{
			// GameModel.ins.roomModel = new RoomModel();
			// GameModel.ins.roomModel.rinfo = new RoomInfo();
			// GameModel.ins.roomModel.rinfo.rp=3;
			
			if(GameModel.ins.roomModel.rinfo.rp==6){
				return [];
			}
			if(cards.length<5){
				return [];
			}
			let result=[];
			cards.sort(this.sortByColor);
			for(let start=0;(start+length)<=cards.length;++start){
				let subCard = cards.slice(start,start+length);
				if(this.isTongHua(subCard,length)){
					result.unshift(subCard);
				}
			}
			return result.length>0?result:this.findTongHuaGuiPai(cards);
		}
		/**
		 * 查找葫芦
		 */
		public static findHuLu(cardAry:Array<PorkVO>):Array<any>
		{
			if(cardAry.length<5){
				return [];
			}
			let p_3=this.findSanTiao(cardAry);
			let p_4 = this.findTieZhi(cardAry);
			let p2 = this.findDuiZi(cardAry)||[];
			if(p2.length<=0){
				if(p_3.length>0){
					p_3.forEach(pointAry=>{
						let sanTiaoIndexs0=[pointAry[0],pointAry[1]];
						let sanTiaoIndexs1=[pointAry[1],pointAry[2]];
						p2.push(sanTiaoIndexs0);
						p2.push(sanTiaoIndexs1);
					})
				}
				if(p_4.length>=0){
					p_4.forEach(pointAry=>{
						let siTiaoIndexs0=[pointAry[0],pointAry[1]];
						let siTiaoIndexs1=[pointAry[2],pointAry[3]];
						p2.push(siTiaoIndexs0);
						p2.push(siTiaoIndexs1);
					});
				}
			}
			if(p2.length<=0||p_3.length<=0){
				return [];
			}
			let result=[];
			for(let a=0;a<p2.length;a++){
				let subResult=[];
				let peace2 = p2[a];
				for(let b=0;b<p_3.length;b++){
					let peace3 = p_3[b]
					subResult= peace2.concat(peace3);
					for(let i:number=0;i<subResult.length-1;i++){
						let aa = subResult[i];
						for(let j:number=i+1;j<subResult.length;j++){
							if(aa==subResult[j]){
								subResult=null
								break;
							}
						}
						if(subResult==null){
							break;
						}
					}
					if(subResult!=null)result.unshift(subResult);
				}
			}
			if(result.length>10){
				result = result.slice(0,10);
			}
			return result.length>0?result:this.findHuLuGuiPai(cardAry);
		}
		public static findTongHuaShun(cards:Array<PorkVO>,length=5):Array<any>
		{
			if(cards.length<length){
				return [];
			}
			let color1 = [];//方块
			let color2 = [];//梅花
			let color3 = [];//红心
			let color4 = [];//黑桃
			
			let color11 = [];//方块
			let color22 = [];//梅花
			let color33 = [];//红心
			let color44 = [];//黑桃
			for(let i=0;i<cards.length;i++){
				if(cards[i].type==4){
					if(color44.indexOf(cards[i].point)==-1){
						color4.push(cards[i])
						color44.push(cards[i].point);
					}
				}
				if(cards[i].type==3){
					if(color33.indexOf(cards[i].point)==-1){
						color3.push(cards[i])
						color33.push(cards[i].point);
					}
				}
				if(cards[i].type==2){
					if(color22.indexOf(cards[i].point)==-1){
						color2.push(cards[i])
						color22.push(cards[i].point);
					}
				}
				if(cards[i].type==1){
					if(color11.indexOf(cards[i].point)==-1){
						color1.push(cards[i])
						color11.push(cards[i].point);
					}
				}
			}
			let colorSum=[];
			if(color4.length>=5){
				color4.sort(this.sortByPoint);
				colorSum.push(color4)
			}
			if(color3.length>=5){
				color3.sort(this.sortByPoint);
				colorSum.push(color3)
			}
			if(color2.length>=5){
				color2.sort(this.sortByPoint);
				colorSum.push(color2)
			}
			if(color1.length>=5){
				color1.sort(this.sortByPoint);
				colorSum.push(color1)
			}
			let result = [];
			for(let j=0;j<colorSum.length;j++){
				let s = colorSum[j];
				for(let start=0;(start+5)<=s.length;start++){
					let subCards = s.slice(start,start+5);
					if(this.isTongHuaShun(subCards)){
						subCards.sort(this.sortByPoint);
						result.unshift(subCards);
					}
				}
			}
			return result.length>0?result:this.findTongHuaShunGuiPai(cards,5);
		}
		public static sortByColor(card1:PorkVO,card2:PorkVO,pointAsc:boolean=true):number{
			if(card2.type==card1.type){
				return (card1.point-card2.point)*(pointAsc?1:-1);
			}
			return card2.type-card1.type;
		}
		public static sortByPoint(card1:PorkVO,card2:PorkVO):number
		{
			return card1.point-card2.point;
		}
		/**
		 * 查找带鬼牌的牌型，仅限于对子，3，4个
		 * 65 66
		 */
		public static findByGuiPai(cardAry:Array<PorkVO>,numBer:number=1):Array<any>{
			let cards:Array<PorkVO> = cardAry.concat([]);
			let gAry:Array<PorkVO> = this.filtGuiPai(cards);
			if(gAry.length<=0){
				return []
			}
			let result = [];
			for(let j:number=1;j<=gAry.length;++j){
				let num:number = numBer-j
				let indexs:Array<any> = this.findPointByLength(cards,num)||[];
				for(let t:number=0;t<indexs.length;t++){
					if(numBer==2){
						for(let o:number=0;o<gAry.length;o++){
							let s:Array<PorkVO> = indexs[t].concat(gAry[o]);
							if(s.length==numBer){
								result.push(s);
							}
						}
					}else{
						let s:Array<PorkVO> = indexs[t].concat(gAry.slice(0,j));
						if(s.length==numBer){
							result.push(s);
						}
					}
				}
			}
			return result.length>0?result:[];
		}
		public static findShunZiGuiPai(cardsAry:Array<PorkVO>,length=5):Array<any>{
			if(cardsAry.length<length){
				return [];
			}
			let cards1:Array<PorkVO> = cardsAry.concat([]);
			let gAry:Array<PorkVO> = this.filtGuiPai(cards1);
			cards1 = this.deleteAryFormAry(cards1,gAry);
			let cards:Array<PorkVO>=[];
			let cardsPoint:Array<number>=[];
			for(let i:number=0;i<cards1.length;i++){
				if(cardsPoint.indexOf(cards1[i].point)==-1){
					cards.push(cards1[i]);
					cardsPoint.push(cards1[i].point);
				}
			}
			cards.sort((n1,n2)=>{
				return n1.point-n2.point;
			});
			let result:Array<any>=[];
			for(let j:number = 1;j <= gAry.length;++j){
				var num = length - j;
				for (let start:number = 0; (start + num) <= cards.length; ++start) {
					var subCards = cards.slice(start, start + num);
					var bool = subCards[num-1].point - subCards[0].point < length;
					if(bool){
						let indexs:Array<PorkVO> = [];
						let newCard20 = gAry.slice(0,j);
						subCards = subCards.concat(newCard20);
						subCards.forEach(function(card) {
						for(let q = 0;q < cardsAry.length; q++){
							let r = cardsAry[q];
							if(r === card){
								indexs.push(card);
								break;
							}
						}

						});

						indexs.sort((a,b)=>{
							return a.point-b.point;
						});
						result.unshift(indexs);
					}
				}
			}
			return result;
		}
		/**
		 * 带鬼牌的同花顺
		 */
		public static findTongHuaShunGuiPai(cardsAry:Array<PorkVO>,length:number):Array<any>{
			if (cardsAry.length < length) {
				return [];
			}
			let cards:Array<PorkVO> = cardsAry.concat([]);
			let gAry:Array<PorkVO> = this.filtGuiPai(cards);
			if(gAry.length <= 0){
				return [];
			}
			cards = this.deleteAryFormAry(cards,gAry);

			let colorS = []; //黑桃
			let colorH = []; //红心
			let colorC = []; //梅花
			let colorD = []; //方块
			let pointS = []; //黑桃
			let pointH = []; //红心
			let pointC = []; //梅花
			let pointD = []; //方块
			for(let i=0;i<cards.length;i++){
				if(cards[i].type == 4){
					if(pointS.indexOf(cards[i].point) == -1){
						pointS.push(cards[i].point);
						colorS.push(cards[i]);
					}
				}else if(cards[i].type == 3){
					if(pointH.indexOf(cards[i].point) == -1){
						pointH.push(cards[i].point);
						colorH.push(cards[i]);
					}
				}else if(cards[i].type == 2){
					if(pointC.indexOf(cards[i].point) == -1){
						pointC.push(cards[i].point);
						colorC.push(cards[i]);
					}
				}else if(cards[i].type == 1){
					if(pointD.indexOf(cards[i].point) == -1){
						pointD.push(cards[i].point);
						colorD.push(cards[i]);
					}
				}
			}

			let color = [colorS,colorH,colorC,colorD];
			let colorSum = [];    //总共有几种花色 [5,3,0....]
			for(let i=0;i<color.length;i++){
				if(color[i].length >= (5 - gAry.length)){
					color[i].sort(function(a1,a2){
						return a1.point - a2.point;
					})
					colorSum.push(color[i]);
				}
			}
			let result = [];
			for(let i=0;i<colorSum.length;i++) {
				let s = colorSum[i]
				for(let j = 1;j <= gAry.length;++j){
					var num = 5 - j;
					for (let start = 0; (start + num) <= s.length; ++start) {
						let subCards = s.slice(start, start + num);
						console.log(num);
						let bool = subCards[num-1].point - subCards[0].point < 5;
						if(bool){
							let indexs:Array<PorkVO> = [];
							let newCard20 = gAry.slice(0,j);
							subCards = subCards.concat(newCard20);
							subCards.forEach(function(ca) {
								for(let q = 0;q < cardsAry.length; q++){
									let r = cardsAry[q];
									if(r === ca){
										indexs.push(ca);
										break;
									}
								}

							});
							indexs.sort((a,b)=>{
								return a.point-b.point;
							});
							result.unshift(indexs);

						}
					}
				}
			}
			return result;
		}
		/**
		 * 带鬼牌的同花
		 */
		public static findTongHuaGuiPai(cardsAry:Array<PorkVO>):Array<any>{
			if (cardsAry.length < 5) {
				return [];
			}
			let cards:Array<PorkVO> = cardsAry.concat([]);
			let gAry:Array<PorkVO> = this.filtGuiPai(cards);
			if(gAry.length <= 0){
				return [];
			}
			cards = this.deleteAryFormAry(cards,gAry);
			// 先根据点数去重
			cards.sort(this.sortByColor);

			let result:Array<any> = [];
			for(let j:number = 1;j <= gAry.length;++j){
				let num:number = 5 - j;
				for (let start = 0; (start + num) <= cards.length; ++start) {
					let subCards = cards.slice(start, start + num);
					if (this.isTongHua(subCards, num)) {
						let indexs:Array<PorkVO> = [];
						let newCard20 = gAry.slice(0,j);
						subCards = subCards.concat(newCard20);
						subCards.forEach(function(card) {
							for(let q = 0;q < cardsAry.length; q++){
								let r = cardsAry[q];
								if(r === card){
									indexs.push(card);
									break;
								}
							}
						});
						indexs.sort((a,b)=>{
								return a.point-b.point;
							});
						result.unshift(indexs);
					}
				}
			}
			return result.length > 0 ? result : [];
		}
		/**
		 * 带鬼牌的葫芦
		 */
		public static findHuLuGuiPai(cardsAry:Array<PorkVO>):Array<PorkVO>{
			let length = 5;
			if (cardsAry.length < length) {
				return [];
			}
			let cards:Array<PorkVO> = cardsAry.concat([]);
			let gAry:Array<PorkVO> = this.filtGuiPai(cards);
			if(gAry.length <= 0){
				return [];
			}
			let p_3=this.findByGuiPai(cardsAry,3);
			let p_4=this.findByGuiPai(cardsAry,4);
			let p_2=this.findByGuiPai(cardsAry,2);
			if(p_2==null){
				p_2=[];
			}
			if (p_3) {
				p_3.forEach(function(indexs) {
					let sanTiaoIndexs0 = [indexs[0], indexs[1]];
					let sanTiaoIndexs3 = [indexs[1], indexs[2]];
					p_2.unshift(sanTiaoIndexs0);
					p_2.unshift(sanTiaoIndexs3);
				});
			}

			if (p_4) {
				p_4.forEach(function(indexs) {
					let sanTiaoIndexs0 = [indexs[0], indexs[1]];
					let sanTiaoIndexs6 = [indexs[2], indexs[3]];
					p_2.unshift(sanTiaoIndexs0);
					p_2.unshift(sanTiaoIndexs6);
				});
			}

			if ((p_2 == null) || (p_3 == null)) {
				return [];
			}
			let tresult=[]
			p_2.forEach(function (i_3) {
				let s=i_3;
				p_3.forEach(function (i_2) {
				s = i_3.concat(i_2);
				for(let i =0;i<s.length-1;i++){
					let index = s[i];
					for(let j =i+1;j<s.length;j++){
					if(index == s[j]) {
						s = null;
						break;
					}
					}
					if(s == null) {
						break;
					}
				}
				if(s !== null){
					tresult.unshift(s);
				}
				});
			});
			if(tresult.length > 10){
				tresult = tresult.slice(0,10);
			}
			return tresult.length > 0 ? tresult : [];
		}
		//过滤鬼牌
		public static filtGuiPai(cardsAry:Array<PorkVO>):Array<PorkVO>{
			if(cardsAry.length<=0){
				return [];
			}
			let newCards:Array<PorkVO> = cardsAry.filter(function(card){
				if(card.point>=65){
					return card;
				}
			})
			return newCards||[];
		}
		public static isDuiZi(cardAry:Array<PorkVO>):boolean{
			if(this.findDuiZi(cardAry).length>0){
				return true;
			}
			return false;
		}
		public static isLiangDui(cardAry:Array<PorkVO>):boolean{
			if(this.findLiaDui(cardAry).length>0){
				return true;
			}
			return false;
		}
		public static isSanTiao(cardAry:Array<PorkVO>):boolean{
			if(this.findSanTiao(cardAry).length>0){
				return true;
			}
			return false;
		}
		public static isHulu(cardAry:Array<PorkVO>):boolean{
			if(this.findHuLu(cardAry).length>0){
				return true;
			}
			return false;
		}
		public static isTieZhi(cardAry:Array<PorkVO>):boolean{
			if(this.findTieZhi(cardAry).length>0){
				return true;
			}
			return false;
		}
		/**
		 * 是否是顺子
		 */
		public static isShunZi(cardAry:Array<PorkVO>,minLength=5):boolean{
			if(cardAry.length<minLength){
				return false;
			}
			cardAry.sort((a,b)=>{
				return a.point-b.point;
			});
			let point0 = cardAry[0].point;
			for(let i=1;i<cardAry.length;i++){
				if(cardAry[i].point!=(point0+1)){
					return false;
				}
				point0+=1;
			}
			return true;
		}
		public static isTongHua(cardAry:Array<PorkVO>,minLength=5):boolean
		{
			if(cardAry.length<minLength){
				return false;
			}
			var type = cardAry[0].type;
			for(let i=1;i<cardAry.length;i++){
				if(cardAry[i].type!=type){
					return false;
				}
			}
			return true;
		}
		public static isTongHuaShun(cardAry:Array<PorkVO>):boolean
		{
			return this.isTongHua(cardAry) && this.isShunZi(cardAry);
		}
		public static isWuTong(cardAry:Array<PorkVO>):boolean
		{
			return this.findWuTong(cardAry).length>0;
		}
		
		/**
		 * 查找牌型中长度为length的牌
		 */
		public static findPointByLength(cardAry:Array<PorkVO>,length):Array<any>
		{
			if(cardAry.length<length){
				return [];	
			}
			let obj:Object = new Object();
			cardAry.forEach(card => {
				let pointAry = obj[card.point]||[];
				obj[card.point] = pointAry;
				pointAry.push(card)
			});
			let result=[];
			for(var prop in obj){
				let pointAry:Array<PorkVO> = obj[prop];
				while(pointAry.length>=length && length!=0){//出现超过两个的情况,按段取，比如三个的时候，只会选择前两个的一个组合,4个的时候，结果才会有两组
					let splices:Array<PorkVO> = pointAry.splice(0,length);
					if(splices.length>=length){
						splices.sort((n1,n2)=>{
							return (n1.type-n2.type)
						})
						result.push(splices)
					}
				}
			}
			result.sort((arr1,arr2)=>{
				let n1 = arr1[0] as PorkVO;
				let n2 = arr2[0] as PorkVO;
				return n1.point-n2.point
			})
			return result.length>0?result:[];
		}
		/**
		 * 从大到小排序
		 */
		public static SortCard(cardAry:Array<PorkVO>):Array<PorkVO>
		{
			cardAry.sort((a,b)=>{
				let result = b.point-a.point;
                if (result == 0)
                {
                    result = b.type - a.type;
                }
                return result;
			})
			return cardAry;
		}
		/**
		 * 由小到大排序s
		 */
		public static SortCardMinToMax(cardAry:Array<PorkVO>):Array<PorkVO>
		{
			cardAry.sort((a,b)=>{
				let result = a.point-b.point;
                if (result == 0)
                {
                    result = a.type - b.type;
                }
                return result;
			})
			return cardAry;
		}
		/**
		 * 从某个数组中去除相关的元素
		 */
		public static deleteAryFormAry(oriAry:Array<any>,delAry:Array<any>):Array<any>{
			let result:Array<any>=[];
			oriAry.forEach((item)=>{
				if(delAry.indexOf(item)==-1){
					result.push(item);
				}
			})
			return result;
		}
		public static ChangeServerCardToClient(num:number):number
		{
			return (parseInt((num/16).toString())+1)*100+num%16
		}
		public static ChangeClientToServer(num:number):number
		{
			return (parseInt(String(num/100))-1)*16+parseInt(String(num%100))
		}
		public static ChangeClientArrToServer($arr:Array<PorkVO>):Array<number>{
			let arr:Array<number> = new Array();
			for(let i:number=0;i<$arr.length;i++){
				arr.push(this.ChangeClientToServer($arr[i].data));
			}
			return arr;
		}
		public static checkCanPutDown(nowArr:Array<PorkVO>,otherArr:Array<PorkVO>):boolean
		{
			let paixing1:number=this.getPorkPaiXing(nowArr);
			let paixing2:number=this.getPorkPaiXing(otherArr);
			if(paixing1>paixing2){
				return true;
			}else if(paixing1==paixing2){
				this.SortCard(nowArr);
				this.SortCard(otherArr);
				if(paixing1==1){
					return this.checkWulong(nowArr,otherArr);
				}else if(paixing1==2){
					return this.checkDuizi(nowArr,otherArr);
				}else if(paixing1==3){
					return this.checkLiangDui(nowArr,otherArr);
				}else if(paixing1==4){
					return this.checkSantiao(nowArr,otherArr);
				}else if(paixing1==5){
					return this.checkShunzi(nowArr,otherArr);
				}else if(paixing1==6){
					return this.checkTonghua(nowArr,otherArr);
				}else if(paixing1==7){
					return this.checkHulu(nowArr,otherArr);
				}else if(paixing1==8){
					if(GameModel.ins.roomModel.rinfo.rp==6){
						return this.checkTonghuashun(nowArr,otherArr);
					}else{
						return this.checkTiezhi(nowArr,otherArr);
					}
				}else if(paixing1==9){
					if(GameModel.ins.roomModel.rinfo.rp==6){
						return this.checkTiezhi(nowArr,otherArr);
					}else{
						return this.checkTonghuashun(nowArr,otherArr);
					}
					
				}else if(paixing1==10){
					return this.checkWutong(nowArr,otherArr);
				}
			}
			return false;
		}
		public static checkWutong(nowArr:Array<PorkVO>,otherArr:Array<PorkVO>):boolean
		{
			if(nowArr[0].point>otherArr[0].point){
				return true;
			}
			return false;
		}
		public static checkTonghuashun(nowArr:Array<PorkVO>,otherArr:Array<PorkVO>):boolean
		{
			if(nowArr[0].point>otherArr[0].point){
				return true;
			}else if(nowArr[0].point==otherArr[0].point){
				return false;
			}else{
				return false;
			}
		}
		public static checkTiezhi(nowArr:Array<PorkVO>,otherArr:Array<PorkVO>):boolean
		{
			let now:Array<PorkVO>=this.findPointByLength(nowArr,4)[0];
			let other:Array<PorkVO>=this.findPointByLength(otherArr,4)[0];
			if(now[0].point>other[0].point){
				return true;
			}else if(now[0].point<other[0].point){
				return false;
			}
			return false;
		}
		public static checkHulu(nowArr:Array<PorkVO>,otherArr:Array<PorkVO>):boolean
		{
			let nowSantiao:Array<PorkVO> = this.findSanTiao(nowArr);
			let nowduizi:Array<PorkVO> = PorkUtilExtends.getRestCard1(nowSantiao,nowArr);

			let otherSantiao:Array<PorkVO> = this.findSanTiao(otherArr);
			let otherduizi:Array<PorkVO> = PorkUtilExtends.getRestCard1(otherSantiao,otherArr);

			if(nowSantiao[0].point>otherSantiao[0].point){
				return true;
			}else if(nowSantiao[0].point<otherSantiao[0].point){
				return false;
			}else{
				if(nowduizi[0].point>otherduizi[0].point){
					return true
				}else if(nowduizi[0].point<otherduizi[0].point){
					return false;
				}else{
					return false;
				}
			}
			// return false;
		}
		public static checkTonghua(nowArr:Array<PorkVO>,otherArr:Array<PorkVO>):boolean
		{
			for(let i:number=0;i<nowArr.length;i++){
				if(nowArr[i].point>otherArr[i].point){
					return true
				}else if(nowArr[i].point<otherArr[i].point){
					return false;
				}else{
					continue;
				}
			}
			return false;
		}
		public static checkShunzi(nowArr:Array<PorkVO>,otherArr:Array<PorkVO>):boolean
		{
			if(nowArr[0].point>otherArr[0].point){
				return true;
			}else if(nowArr[0].point==otherArr[0].point){
				if(nowArr[0].type>=otherArr[0].type){
					return true
				}else{
					return false;
				}
			}
			return false;
		}
		public static checkSantiao(nowArr:Array<PorkVO>,otherArr:Array<PorkVO>):boolean
		{
			let nowsantiao:Array<PorkVO> = this.findSanTiao(nowArr)[0];
			let othersantiao:Array<PorkVO> = this.findSanTiao(otherArr)[0];
			let nowPt:number = nowsantiao[0].point;
			let otherPt:number = othersantiao[0].point;
			if(nowPt>otherPt){
				return true;
			}else if(nowPt==otherPt){
				return this.checkWulong(PorkUtilExtends.getRestCard1(nowsantiao,nowArr),PorkUtilExtends.getRestCard1(othersantiao,otherArr));
			}
			return false;
		}
		public static checkLiangDui(nowArr:Array<PorkVO>,otherArr:Array<PorkVO>):boolean
		{
			let nowDuis:Array<any> = this.findDuiZi(nowArr);
			let otherDuis:Array<any> = this.findDuiZi(otherArr);
			let nowPtAry:Array<number> = [nowDuis[0][0].point,nowDuis[1][0].point];
			let otherPtAry:Array<number> = [otherDuis[0][0].point,otherDuis[1][0].point];
			nowPtAry.sort((a,b)=>{
				return b-a;
			})
			otherPtAry.sort((a,b)=>{
				return b-a;
			})
			if(nowPtAry[0]>otherPtAry[0]){
				return true;
			}else if(nowPtAry[0]==otherPtAry[0]){
				if(nowPtAry[1]>otherPtAry[1]){
					return true;
				}else if(nowPtAry[1]<otherPtAry[1]){
					return false;
				}else{
					let helper1 = new CardPointsHelper(nowArr);
					let helper2 = new CardPointsHelper(otherArr);
					let w1:number = 0
					let w2:number = 0
					for(var w in helper1.pointNumbers) {
						var n = helper1.pointNumbers[w];
						if(n == 1){
							w1 = Number(w)
							break;
						}
					}
					for(var w in helper2.pointNumbers) {
						var n = helper2.pointNumbers[w];
						if(n == 1){
							w2 = Number(w)
							break;
						}
					}
					if(w1>w2){
						return true;
					}else if(w1<w2){
						return false;
					}else{
						return true;
					}
				}
			}
			
			return false;
		}
		public static checkDuizi(nowArr:Array<PorkVO>,otherArr:Array<PorkVO>):boolean
		{
			let nowDui:Array<PorkVO> = this.findDuiZi(nowArr)[0];
			let otherDui:Array<PorkVO> = this.findDuiZi(otherArr)[0];
			let nowDuiPoint:number = nowDui[0].point;
			let otherPoint:number = otherDui[0].point;
			if(nowDuiPoint>otherPoint){
				return true;
			}else if(nowDuiPoint<otherPoint){
				return false;
			}else{
				return this.checkWulong(PorkUtilExtends.getRestCard1(nowDui,nowArr),PorkUtilExtends.getRestCard1(otherDui,otherArr));
			}
			// return true;
		}
		public static checkWulong(nowArr:Array<PorkVO>,otherArr:Array<PorkVO>):boolean
		{
			for(let i:number=0;i<nowArr.length;i++){
				if(nowArr[i].point>otherArr[i].point){
					return true;
				}else if(nowArr[i].point<otherArr[i].point){
					return false;
				}else{
					continue;
				}
			}
			// for(let i:number=0;i<nowArr.length;i++){
			// 	if(nowArr[i].type>otherArr[i].type){
			// 		return true;
			// 	}else if(nowArr[i].type<otherArr[i].type){
			// 		return false;
			// 	}else{
			// 		break;
			// 	}
			// }
			return false;
		}
		//获取单
		// public static getSingBigger():boolean{

		// }
		public static getPorkPaiXing(arr:Array<PorkVO>):number{
			if(this.findWuTong(arr).length>0){
				return 10;
			}
			if(this.findTongHuaShun(arr).length>0){
				if(GameModel.ins.roomModel.rinfo.rp==6){//纯一色十三水
					return 8;
				}else{
					return 9;
				}
			}
			if(this.findTieZhi(arr).length>0){
				if(GameModel.ins.roomModel.rinfo.rp==6){//纯一色十三水
					return 9;
				}else{
					return 8;
				}
			}
			if(this.findHuLu(arr).length>0){
				return 7;
			}
			if(this.findTongHua(arr).length>0&&GameModel.ins.roomModel.rinfo.rp!=6){
				return 6;
			}
			if(this.findShunZi(arr).length>0){
				return 5;
			}
			if(this.findSanTiao(arr).length>0){
				return 4;
			}
			if(this.findLiaDui(arr).length>0){
				return 3;
			}
			if(this.findDuiZi(arr).length>0){
				return 2;
			}
			return 1;
		}
	}
}