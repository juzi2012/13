module game {
	export class GameModel {
		public constructor() {
		}
		private static _ins:GameModel;
		public static get ins() : GameModel {
			if(this._ins==null){
				this._ins = new GameModel();
			}
			return this._ins;
		}
		
		public uname:string = "Jack";
		public uid:string = "383928393";
		public card:number = 0;
		public gold:number = 0
		public avatar:string = "";
		public roundModel:RoundModel;
		public roomModel:RoomModel;

		public setLoginData(msg:T2C_Login_Message):void
		{
			this.uid = msg.uid;
			this.card = msg.card;
			this.gold = msg.gold;
			this.uname = msg.name;
			this.avatar = msg.avatar;
		}
		public setRoomInfo(msg:T2C_Enter_Room):void
		{
			if(this.roomModel==null){
				this.roomModel = new RoomModel();
			}
			this.roomModel.setRoomInfo(msg);
		}
		public setReConnectInfo(msg:T2C_ReConnect):void
		{
			if(this.roomModel==null){
				this.roomModel = new RoomModel();
			}
			this.roomModel.isReConnectInRoom = true;
			this.roomModel.reConnectSetRoomInfo(msg);
		}
		//解散房间
		public disMissRoom():void
		{
			this.roomModel=null;
			//清除聊天数据
			egret.localStorage.removeItem("Thirting_Chat");
		}
		public createRound(msg:T2C_GameStart):void
		{
			// if(this.roomModel.rinfo.nnum==0){
			// 	this.roomModel.rinfo.nnum=1;
			// }
			this.roomModel.addRound(msg.card);
		}
		public createRoundTest():void
		{
			this.roundModel = new RoundModel();
			// this.roundModel.myCard = PorkUtil.RuffleCard(true,0);
			this.roundModel.myCard = PorkUtil.RuffleCard1();

			this.roundModel.setAllType();
			this.roundModel.myCard = PorkUtil.SortCard(this.roundModel.myCard);
			console.log(this.roundModel.cardStr);
		}
		public createRoundTest1(arr:Array<PorkVO>):void
		{
			this.roundModel = new RoundModel();
			this.roundModel.myCard = arr;

			this.roundModel.setAllType();
			this.roundModel.myCard = PorkUtil.SortCard(this.roundModel.myCard);
			console.log(this.roundModel.cardStr);
		}
	}
}