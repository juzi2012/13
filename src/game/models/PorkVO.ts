module game {
	export enum CardType{
		WuLong=0,//乌龙
		DuiZi=1,//对子
		LiangDui=2,//两对子
		SanTiao=3,//三条
		ShunZi=4,//顺子
		TongHua=5,//同花
		Hulu=6,//葫芦
		TieZhi=7,//铁支
		TongHuaShun=8,//同花顺
		SanJianDao=10,//三尖刀
		SanShunZi=11,//三顺子
		SanTongHua=12,//三同花 3墩牌都由同花组成
		LiuDuiBan=13,//六对半
		WangZheRongYao=14,//王者荣耀
		SanTongHuaAndTongHuaShun=15,//带同花顺三同花
		TieZhiLiuDuiBan=16,//含铁支六对半
		WuDuiSanChong=17,//五对冲三 由五个对子和一个三张牌组成
		CouYiSe=18,//凑一色 全部是方块+红心的牌或全部是黑桃+梅花的牌
		QuanXiao=19,//全部牌由2、3、4、5、6、7、8组成
		QuanDa=20,//全部牌由8、9、10、J、Q、K、A组成
		SiTaoSanTiao=21,//四套三条
		SanFenTianXia=22,//三分天下（三炸弹）由三个铁支加一张单牌组成
		YiTiaoLong=23,//一条龙 不同花色，A-K各一张的十三张牌
		ZhiZunQingLong=24,//同一种花色，A-K各一张的十三张牌
	}
	export class PorkVO {
		public constructor(value:number) {
			this.parse(value);
		}
		//花色
		public type:number;
		//大小
		public point:number;
		//显示的牌型
		public showStr:string;
		//显示的颜色
		public font:string;
		// 102
		public data:number;
		private parse(value:number):void
		{
			this.data = value;
			if(this.data==501||this.data==502){
				this.type=5;
				this.point=this.data;
				this.showStr='';
			}else{
				this.type = parseInt(String(value/100))
				this.point = parseInt(String(value%100))
				
				if(this.point==10){
					this.showStr="0";
				}else if(this.point==11){
					this.showStr="J";
				}else if(this.point==12){
					this.showStr="Q";
				}else if(this.point==13){
					this.showStr="K";
				}else if(this.point==14){
					this.showStr="A";
				}else{
					this.showStr = this.point.toString()
				}
				if(this.type==4 || this.type==2){
					this.font = 'ui://jow5n9bqrezh2j';
				}else{
					this.font = 'ui://jow5n9bqmwp41e';
				}
			}
		}

	}
}