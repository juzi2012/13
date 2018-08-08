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
		public roundModel:RoundModel;
		public roomModel:RoomModel;

		public setLoginData(msg:T2C_Login_Message):void
		{
			this.uid = msg.uid;
			this.card = msg.card;
			this.gold = msg.gold;
			this.uname = msg.name;
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
			AlertUtil.floatMsg("房间已经解散")
			this.roomModel=null;
		}
		public createRound(msg:T2C_GameStart):void
		{
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
	}
}