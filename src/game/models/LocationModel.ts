module game {
	export class LocationModel {
		public constructor() {
			this.userLocationArr = new Dictionary<UserLocation>();
		}
		private static _ins:LocationModel;
		public static get ins() : LocationModel {
			if(this._ins==null){
				this._ins = new LocationModel();
			}
			return this._ins;
		}
		public latitude:number = 0;
		public longitude:number = 0;

		public _myLocation:string="";
		public myPosString:string="";
		public set myLocation(value:string)
        {
            this._myLocation = value;
        }
        public get myLocation():string
        {
            return this._myLocation;
        }
		private userLocationArr:Dictionary<UserLocation>;

		public sendPosChat():void
		{
			///进入游戏发送我的地理位置
			if(LocationModel.ins.myLocation!=""){
				ServerEngine.sendLocation(LocationModel.ins.myLocation);
			}
		}
		public setPos(msg:T2C_Chat){
			let vo:UserLocation = new UserLocation();
			if(msg.str!=""){
				let arr:Array<string> = msg.str.split("|");
				vo.pos = arr[2];
				vo.lat = arr[0];
				vo.lng = arr[1];
				vo.uid = msg.uid;
				vo.uname = msg.uname;
				this.userLocationArr.add(vo.uid,vo);
			}
		} 
		public getPosByUid(uid:string):UserLocation{
			return this.userLocationArr.get(uid);
		}
		public clear():void
		{
			this.userLocationArr.clear();
		}

		public getJsLocation():void
		{
			getLocation(this.getLocationCallBack)
			// getBaiduPos(32.175411,121.409706,this.onCallBack)
		}
		private getLocationCallBack(res:any):void
		{
			let jsonObj:Object = JSON.parse(JSON.stringify(res));
			LocationModel.ins.latitude = Number(jsonObj['latitude']);
			LocationModel.ins.longitude = Number(jsonObj['longitude']);
			getBaiduPos(LocationModel.ins.latitude,LocationModel.ins.longitude,LocationModel.ins.onCallBack)
			// let url:string = "http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location="+jsonObj['latitude']+","+jsonObj['longitude']+"&output=json&pois=1&ak=59c25421fe5edf8f5837e7839c6efa37";
			// HttpAPI.HttpGET(url,null,this.onCallBack,this.onError,this);
		}
		private onCallBack(data:any):void
		{
			let callBackJson:any = data;
			if(callBackJson['address']!=""){
				LocationModel.ins.myLocation = callBackJson['point']['lat']+"|"+callBackJson['point']['lng']+"|"+callBackJson['address'];
				LocationModel.ins.myPosString = callBackJson['address'];
				//拿到地理位置信息之后，如果是在游戏界面，则发送一次位置信息
				App.MessageCenter.dispatch(game.MsgEnum.GAME_LOCATION);
			}
		}
		private onError(evt:egret.Event):void
		{
			
		}
	}
	export class UserLocation
	{
		public constructor(){

		}
		public uid:string;
		public uname:string;
		public pos:string;
		public lat:string;
		public lng:string;
	}
}