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
		public init():void{
			this.arr = [];
		}
		public onReceive(msg:T2C_Chat):void{
			this.arr.push(msg);
		}
		public dispose():void
		{
			this.arr = [];
		}
	}
}