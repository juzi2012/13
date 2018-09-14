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

			public name:string;
			public head:string;
    }
}