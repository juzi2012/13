module game {
	export class ChargeItem extends UI.Charge.UI_ChargeItem{
		private step:number;
		public constructor() {
			super();
		}
		public setData(id:number):void
		{
			this.step = id;
			this.m_btn_charge.addClickListener(this.onBuyCard,this);
			switch(id){
				case 0:
				this.m_cardnum.url="ui://n4kjkscxg4m68";
				this.m_btn_charge.m_num.url = "ui://n4kjkscxg4m6c"
				break;
				case 1:
				this.m_cardnum.url="ui://n4kjkscxg4m6a";
				this.m_btn_charge.m_num.url = "ui://n4kjkscxg4m67"
				break;
				case 2:
				this.m_cardnum.url="ui://n4kjkscxg4m6b";
				this.m_btn_charge.m_num.url = "ui://n4kjkscxg4m69"
				break;
			}
		}
		private onBuyCard():void
		{
			let goodsName:string="获得10房卡";
			let money:number=6;
			switch(this.step){
				case 0:
				goodsName = "获得10张房卡";
				money = 6;
				break;
				case 1:
				goodsName = "获得20张房卡";
				money = 12;
				break;
				case 2:
				goodsName = "获得50张房卡";
				money = 30;
				break;
			}
			let appId:number = 600015;//"appOrderId1111111111";
			let state:string = OptModel.ins.state;
			let userId:string=GameModel.ins.uid;

			let sign:string = new md5().hex_md5("appId="+appId+"goodsName="+goodsName+"money="+money+"state="+state+"userId="+userId+game.GameModel.ins.key);
			showPay(appId,goodsName,money,state,userId,sign);
		}
		
	}
}