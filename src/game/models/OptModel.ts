module game {
    export class OptModel {
			public constructor() {
			}
			private static _ins:OptModel;
			public static get ins() : OptModel {
				if(this._ins==null){
					this._ins = new OptModel();
				}
				return this._ins;
			}
			public appId:string;
			public channelId:string;
			public time:string;
			public token:string;
			public sign:string;
			public state:string;

			public name:string;
			public head:string;

			public shareRoomId:string;//是否是分享过来的
			public shareUserId:string;//是否是分享过来的

			public shareRePlayRoomId:string;//是否是分享回放的
			
			//不同的平台不同的客服号
			public kefu:string;

			public setKeFu():void{
				let kefuConfig:any = RES.getRes("kefuconfig_json");
				this.kefu = kefuConfig[this.channelId.toString()];
			}
			
    }
}