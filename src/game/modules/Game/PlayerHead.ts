module game {
	export class PlayerHead extends UI.Game.UI_PlayerHead{
		public constructor() {
			super();
			this.addClickListener(this.showInfo,this);
		}
		public isInit:boolean=false;
		public user:User;
		public juPlayer:JuPlayer;
		
		public get pokers():PlayerPokers
		{
			return this.m_pokers as PlayerPokers;
		}
		public init():void
		{
			this.isInit=false;
			this.user=null;
			this.m_ctrlState.selectedIndex=4;
			this.visible=false;
			this.m_lixian.visible=false;
			this.m_img_special.visible=false;
			this.m_img_fz.visible=false;
		}
		public setData($user:User):void
		{
			this.visible = true;
			this.m_ctrlState.selectedIndex=0;
			this.user = $user;
			this.isInit=true;
			// this.m_head.url = "http://www.touxiang.cn/uploads/20131110/10-010858_115.jpg";
			this.m_name.text = this.user.name;
			if(GameModel.ins.roomModel.rinfo.zz){
				this.m_img_fz.url = "ui://jow5n9bqh9yl51";
				if(this.user.uid==GameModel.ins.roomModel.rinfo.zuid){
					this.m_img_fz.visible=true;
				}else{
					this.m_img_fz.visible=false;
				}
			}else{
				this.m_img_fz.url = "ui://jow5n9bqx90y45"
				if(this.user.uid==GameModel.ins.roomModel.fuid){
					this.m_img_fz.visible=true;
				}else{
					this.m_img_fz.visible=false;
				}
			}
			if(this.user.status==1){
				this.onReady();
			}
			this.m_score.text = this.user.sc.toString();
			this.setDiaoXian(GameModel.ins.roomModel.checkIsOffLine(this.user.uid));
		}
		public setDataPlay(user:JuPlayer):void
		{
			this.juPlayer = user;
			this.visible = true;
			this.isInit=true;
			this.m_ctrlState.selectedIndex=0;
			this.m_name.text = user.name;
			this.onReady();
			this.m_score.text = user.sc.toString();
		}
		public setDiaoXian(value:boolean):void
		{
			this.m_lixian.visible = value;
		}
		public restart():void
		{
			this.m_img_finish.visible=false;
			this.pokers.m_txt_score_result.text="";
			this.m_ctrlState.selectedIndex=0;
			this.m_score.text="0";
		}
		public onReady():void
		{
			this.m_img_finish.visible=false;
			this.m_img_special.visible=false;
			this.m_ctrlState.selectedIndex=1;
			if(this.user){
				this.user.status = 1;
			}
		}
		public onFaPai():void
		{
			this.m_img_finish.visible=false;
			this.m_ctrlState.selectedIndex=2;
			this.pokers.init();
		}
		public onBaiPaiEnd():void
		{
			App.SoundUtils.playSound("showCard_mp3",0,1);
			this.m_ctrlState.selectedIndex=3;
			this.pokers.m_c1.selectedIndex=1;
			this.pokers.m_qiangyan.visible=false;
			this.pokers.m_porka.visible=false;
			this.m_img_finish.visible=true;
		}
		//pos 为上敦 中墩 下墩
		public showResult(pos:number,result:ResultCard):void
		{
			this.m_img_finish.visible=false;
			this.pokers.showResult(pos,result);
		}
		//pos 为上敦 中墩 下墩
		public showResultPlay(pos:number,result:JuPlayer):void
		{
			this.m_img_finish.visible=false;
			this.pokers.showResultPlay(pos,result);
			
		}
		public showSpecial():void
		{
			this.m_img_finish.visible=false;
			this.m_img_special.visible=true;
		}
		public showQiangYan():void
		{
			this.pokers.showQiangYan();
		}
		public showInfo():void
		{
			if(this.user!=null&&this.user.uid!=GameModel.ins.uid){
				ModuleMgr.ins.showModule(ModuleEnum.USERINFO,this.user);
			}
		}
		public updateScore():void
		{
			this.m_score.text = this.user.sc.toString();
		}
		public updateScorePlay(result:JuPlayer):void
		{
			this.m_score.text = result.sc.toString();
		}
	}
}