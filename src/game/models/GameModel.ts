module game {
	export class GameModel {
    	public key:string;
		public HttpSerever:string;
		public BuySerever:string;
		public BuySereverRedirect:string;
    	public SocketServer:string;
    	public SocketPort:string;
		public BindServer:string;
		public CheckBindServer:string;
		public constructor() {
			if(App.GlobalData.IsDebug==0){
				this.key = App.GlobalData.key;
				this.HttpSerever = App.GlobalData.HttpSerever;
				this.SocketServer = App.GlobalData.SocketServerDebug;
				this.SocketPort =  App.GlobalData.SocketPortDebug;
				this.BindServer =  App.GlobalData.BindServer;
				this.CheckBindServer = App.GlobalData.CheckBindServer;
			}else if(App.GlobalData.IsDebug==1){
				this.key = App.GlobalData.key;
				this.HttpSerever = App.GlobalData.HttpSerever;
				this.SocketServer = App.GlobalData.SocketServer;
				this.SocketPort =  App.GlobalData.SocketPort;
				this.BindServer =  App.GlobalData.BindServer;
				this.CheckBindServer = App.GlobalData.CheckBindServer;
			}else if(App.GlobalData.IsDebug==2){
				this.key = App.GlobalData.keyOffical;
				this.HttpSerever = App.GlobalData.HttpSereverOffical;
				this.SocketServer = App.GlobalData.SocketServerOffical;
				this.SocketPort =  App.GlobalData.SocketPortOffical;
				this.BindServer =  App.GlobalData.BindServerOffical;
				this.CheckBindServer = App.GlobalData.CheckBindServerOffical;
			}
		}
		public init():void
		{
			let channel:string = game.OptModel.ins.channelId;
			console.log("------"+channel);
			if(App.GlobalData.IsDebug==0){
				
				this.BuySerever = App.StringUtils.strParams(App.GlobalData.BuySerever,[channel]);
				this.BuySereverRedirect = App.StringUtils.strParams(App.GlobalData.BuySereverRedirect,[channel]);
				
			}else if(App.GlobalData.IsDebug==1){
				this.BuySerever = App.StringUtils.strParams(App.GlobalData.BuySerever,[channel]);
				this.BuySereverRedirect = App.StringUtils.strParams(App.GlobalData.BuySereverRedirect,[channel]);
				
			}else if(App.GlobalData.IsDebug==2){
				
				this.BuySerever = App.StringUtils.strParams(App.GlobalData.BuySereverOffical,[channel]);
				this.BuySereverRedirect = App.StringUtils.strParams(App.GlobalData.BuySereverRedirectOffical,[channel]);
				
			}
			console.log("Byserver"+this.BuySerever)
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