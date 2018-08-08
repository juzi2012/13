module game {
	export class SettingModel extends core.BaseClass{
		public constructor() {
			super();
		}
		private static _ins:SettingModel;
		public static get ins() : SettingModel {
			if(this._ins==null){
				this._ins = new SettingModel();
			}
			return this._ins;
		}
		public music:boolean=true;
		public sound:boolean=true;
		public bg:number=0;

		public init():void{
			if(egret.localStorage.getItem("Thirting_Music")){
				if(egret.localStorage.getItem("Thirting_Music")=="true"){
					this.music = true;
				}else{
					this.music = false;
				}
			}
			if(egret.localStorage.getItem("Thirting_Sound")){
				if(egret.localStorage.getItem("Thirting_Sound")=="true"){
					this.sound = true;
				}else{
					this.sound = false;
				}
			}
			if(egret.localStorage.getItem("Thirting_Bg")){
				this.bg = Number(egret.localStorage.getItem("Thirting_Bg"));
			}
		}
		public setMusic():void
		{
			if(this.music==true){
				egret.localStorage.setItem("Thirting_Music","false");
				this.music=false;
				App.MessageCenter.dispatch(MsgEnum.STOP_PLAY_MUSIC,false);
			}else{
				egret.localStorage.setItem("Thirting_Music","true");
				this.music=true;
				App.MessageCenter.dispatch(MsgEnum.STOP_PLAY_MUSIC,true);
			}
		}
		public setSound():void
		{
			if(this.sound==true){
				egret.localStorage.setItem("Thirting_Sound","false");
				this.sound=false;
				App.MessageCenter.dispatch(MsgEnum.STOP_PLAY_SOUND,false);
			}else{
				egret.localStorage.setItem("Thirting_Sound","true");
				this.sound=true;
				App.MessageCenter.dispatch(MsgEnum.STOP_PLAY_SOUND,true);
			}
		}
		public setBg(id:number):void
		{
			egret.localStorage.setItem("Thirting_Bg",id.toString());
			this.bg = id;
		}
	}
}