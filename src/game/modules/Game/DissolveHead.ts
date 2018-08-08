module game {
	export class DissolveHead extends UI.Game.UI_DissolveHead{
		public constructor() {
			super()
		}
		public user:User;
		public setData(startUserId:string,$user:User):void
		{
			this.user = $user;
			if(startUserId==this.user.uid){
				this.m_txt_top.text="发起者";
			}else{
				if(GameModel.ins.roomModel.getIsAccept(this.user.uid)==1){
					this.m_txt_top.text = "同意";
				}else if(GameModel.ins.roomModel.getIsAccept(this.user.uid)==0){
					this.m_txt_top.text = "拒绝";
				}else{
					this.m_txt_top.text="投票中";
				}
			}
			this.m_txt_name.text = this.user.name;
			this.m_txt_score.text = this.user.sc.toString();
		}
		public setState(act:number):void
		{
			if(act==1){
				this.m_txt_top.text = "同意";
			}else{
				this.m_txt_top.text = "拒绝";
			}
		}
	}
}