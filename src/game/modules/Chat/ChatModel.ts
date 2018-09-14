module game {
	export class ChatModel {
		public constructor() {
		}
		private static _ins:ChatModel;
		public static get ins() : ChatModel {
			if(this._ins==null){
				this._ins = new ChatModel();
			}
			return this._ins;
		}
		public arr:Array<T2C_Chat>;
		public arr_his:Array<T2C_Chat>;
		public init():void{
			this.arr = [];
			this.arr_his = [];
			if(egret.localStorage.getItem("Thirting_Chat")){
				let his:Array<any> = JSON.parse(egret.localStorage.getItem("Thirting_Chat"));
				for(var i:number=0;i<his.length;i++){
					let b:number = (Number(his[i]["times"])+5*24*60*60*1000);
					let n:number = new Date().getTime();
					if(b>n){
						let t2cChat:T2C_Chat = new T2C_Chat();
						t2cChat.str = his[i]["str"];
						t2cChat.time = his[i]["time"];
						t2cChat.times = his[i]["times"];
						t2cChat.type = his[i]["type"];
						t2cChat.uid = his[i]["uid"];
						t2cChat.uname = his[i]["uname"];
						this.arr_his.push(t2cChat);
					}
				}
			}
		}
		public onReceive(msg:T2C_Chat):void{
			this.arr.push(msg);
			this.arr_his.push(msg);
			let str:string = JSON.stringify(this.arr_his);
			egret.localStorage.setItem("Thirting_Chat",str);
		}
		public dispose():void
		{
			this.arr = [];
		}
	}
}