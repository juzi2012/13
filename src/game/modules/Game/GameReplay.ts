module game {
	export class GameReplay extends Module{
		public constructor() {
			super()
		}
		public initContent():void
		{
			this.content = UI.Game.UI_GameReplay.createInstance();
		}
		public get mContent():UI.Game.UI_GameReplay{
			return this.content as UI.Game.UI_GameReplay;
		}
		private head1:PlayerHead;
		private head2:PlayerHead;
		private head3:PlayerHead;
		private head4:PlayerHead;
		private head5:PlayerHead;
		private head6:PlayerHead;
		private headAry:Array<any>;
		private curHeadAry:Array<PlayerHead>;
		private qiang:UI.Game.UI_DaQiang;

		private round:Round;
		private ju:JuModel;

		private wantToBreakHere:boolean=false;

		private startState:boolean=false;
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.round = data as Round;
			this.mContent.m_btn_quit.addClickListener(this.onQuit,this);
			this.preShowCpl();
			//根据当前牌局的人数显示头像的个数
			this.mContent.m_playerNumCtrl.selectedPage = this.round.Fc.toString()
			this.setHead();
			this.mContent.m_txt_fid.text = "房间ID "+this.round.Rd.toString();
			this.ju = this.round.jus[this.round.cur];
			//初始化当前人物头像
			for(let i:number=0;i<this.ju.players.length;i++){
				this.UserIn(this.ju.players[i]);
			}
			this.mContent.m_playcontrol.m_btn_start.addClickListener(this.play,this);
			this.mContent.m_playcontrol.m_btn_pre.addClickListener(this.pre,this);
			this.mContent.m_playcontrol.m_btn_next.addClickListener(this.next,this);
			this.mContent.m_playcontrol.m_btn_pause.addClickListener(this.pause,this);
			this.mContent.m_playcontrol.m_btn_stop.addClickListener(this.stop,this);
			App.MessageCenter.addListener(MsgEnum.PLAY_NEXT,this.playNext,this);
			this.wantToBreakHere=false;
			this.mContent.m_playcontrol.m_btn_pre.enabled = false;
			this.mContent.m_txt_ju.text = "第"+(this.round.cur+1)+"/"+this.round.jus.length+"局";
		}
		private play():void
		{
			this.mContent.m_txt_ju.text = "第"+(this.round.cur+1)+"/"+this.round.jus.length+"局";
			if(this.round.cur == this.round.jus.length-1){
				this.mContent.m_playcontrol.m_btn_next.enabled=false;
			}else{
				this.mContent.m_playcontrol.m_btn_next.enabled=true;
			}
			if(this.round.cur == 0){
				this.mContent.m_playcontrol.m_btn_pre.enabled=false;
			}else{
				this.mContent.m_playcontrol.m_btn_pre.enabled=true;
			}
			if(this.startState==false){
				this.startState = true;
				this.FaPai();
				this.mContent.m_playcontrol.m_c1.selectedIndex=1;
			}else{
				egret.ticker.resume();
				TweenMax.resumeAll();
				this.mContent.m_playcontrol.m_c1.selectedIndex=1;
			}
		}
		private pre():void
		{
			TweenMax.killAll();
			this.round.cur--;
			if(this.round.cur<0){
				this.round.cur = 0;
			}
			this.playNext();
		}
		private next():void
		{
			TweenMax.killAll();
			this.round.cur++;
			if(this.round.cur>=this.round.jus.length){
				this.round.cur = this.round.jus.length-1;
			}
			this.playNext();
		}
		private pause():void
		{
			TweenMax.pauseAll();
			this.mContent.m_playcontrol.m_c1.selectedIndex=0;
			App.TimerManager.doTimer(200,1,()=>{egret.ticker.pause();},this); 
		}
		private stop(tar:boolean=true):void
		{
			this.startState=false;
			this.mContent.m_playcontrol.m_c1.selectedIndex=0;

			if(tar){
				this.round.cur = 0;
				if(this.round.cur == this.round.jus.length-1){
					this.mContent.m_playcontrol.m_btn_next.enabled=false;
				}else{
					this.mContent.m_playcontrol.m_btn_next.enabled=true;
				}
				if(this.round.cur == 0){
					this.mContent.m_playcontrol.m_btn_pre.enabled=false;
				}else{
					this.mContent.m_playcontrol.m_btn_pre.enabled=true;
				}
				TweenMax.killAll();
			}

			this.reset();
			this.wantToBreakHere=true;
		}
		private playNext():void
		{
			this.stop(false);
			this.play();
		}
		private reset():void
		{
			for(let i:number=0;i<this.curHeadAry.length;i++){
				this.ju = this.round.jus[this.round.cur];
				this.curHeadAry[i].restart();
			}
		}
		public show(data?:any):void
		{
			super.show(data);
		}
		private setHead():void
		{
			this.head1 = (this.mContent.m_head1 as PlayerHead);
			this.head2 = (this.mContent.m_head2 as PlayerHead);
			this.head3 = (this.mContent.m_head3 as PlayerHead);
			this.head4 = (this.mContent.m_head4 as PlayerHead);
			this.head5 = (this.mContent.m_head5 as PlayerHead);
			this.head6 = (this.mContent.m_head6 as PlayerHead);

			this.head2.m_ctrlPos.selectedIndex=1;
			this.head2.m_pokers.m_c2.selectedIndex=1;
			this.head3.m_ctrlPos.selectedIndex=1;
			this.head3.m_pokers.m_c2.selectedIndex=1;
			this.head4.m_ctrlPos.selectedIndex=1;
			this.head4.m_pokers.m_c2.selectedIndex=1;

			for(let i:number=0;i<6;i++){
				this["head"+(i+1)].init();
			}
			this.headAry = [[this.head1,this.head4],[this.head1,this.head3,this.head5],[this.head1,this.head3,this.head4,this.head5],[this.head1,this.head2,this.head3,this.head5,this.head6],[this.head1,this.head2,this.head3,this.head4,this.head5,this.head6]];
			this.curHeadAry = this.headAry[this.mContent.m_playerNumCtrl.selectedIndex];
				
		}
		private UserIn(user:JuPlayer):void
		{
			for(let i:number=0;i<this.curHeadAry.length;i++){
				if(this.curHeadAry[i].isInit==false){
					this.curHeadAry[i].setDataPlay(user);
					break;
				}
			}
		}
		
		private FaPai():void
		{
			// 先播放开始特效,完了在开始发牌
			// this.mContent.m_img_start.visible=true;
			// this.mContent.m_t1.play(this.onStartEffectComplete,this);
			this.onStartEffectComplete();
		}
		private onStartEffectComplete():void
		{
			for(let i:number=0;i<this.curHeadAry.length;i++){
				this.curHeadAry[i].onFaPai();
			}
			App.TimerManager.doTimer(2000,1,this.showSingleResult,this);
		}
		private showSingleResult():void
		{
			this.doShowSingleResult();
			/*this.doShowSingleResult().then(() => {
				ModuleMgr.ins.showModule(ModuleEnum.GAME_SINGLE_RESULT_PLAY,this.round);
				this.startState=false;
			})*/
        		// .catch((e) => console.log("Exception happened:", e));	
		}
		private doShowSingleResult(){
			let players:Array<JuPlayer> = this.ju.players;
			let special_uid:Array<string>=[];
			//先得到特殊牌型，把特殊牌型展示出来
			for(let a:number=0;a<players.length;a++){
				if(players[a].px>0){
					let uid:string = players[a].id;
					let playerHead:PlayerHead = this.getPlayerById(uid);
					playerHead.showSpecial();
					special_uid.push(uid);
				}
			}

			for(let i:number=0;i<players.length;i++){
				let uid:string = players[i].id;
				let playerHead:PlayerHead = this.getPlayerById(uid);
				playerHead.onBaiPaiEnd();
				playerHead.updateScorePlay(players[i]);
			}
			// await this.sleep(1000);
			let t:number = 0
			for(let j:number = 0;j<3;j++){
				for(let i:number=0;i<players.length;i++){
					let uid:string = players[i].id;
					if(special_uid.indexOf(uid)<0){
						// App.TimerManager.doTimer(t*1000,1,()=>{
						// 	let playerHead:PlayerHead = this.getPlayerById(uid);
						// playerHead.showResultPlay(j,players[i]);
						// },this);
						// egret.setTimeout(()=>{
						// 	let playerHead:PlayerHead = this.getPlayerById(uid);
						// playerHead.showResultPlay(j,players[i]);
						// },this,1000);
						let tw = TweenMax.delayedCall(t,()=>{
							let playerHead:PlayerHead = this.getPlayerById(uid);
							playerHead.showResultPlay(j,players[i]);
						})
						t = t+1;
					}
				}
			}
			
			TweenMax.delayedCall(t+2,()=>{
				ModuleMgr.ins.showModule(ModuleEnum.GAME_SINGLE_RESULT_PLAY,this.round);
				this.startState=false;
			});
			/*
			for(let j:number = 0;j<3;j++){
				for(let i:number=0;i<players.length;i++){
					let uid:string = players[i].id;
					
					if(special_uid.indexOf(uid)<0){
						let playerHead:PlayerHead = this.getPlayerById(uid);
						playerHead.showResultPlay(j,players[i]);
						await this.sleep(1000);
					}
				}
			}
			await this.sleep(1000);
			*/
		}
		
		private onQuit():void
		{
			ModuleMgr.ins.changeScene(ModuleEnum.REPLAY,ModuleEnum.GAME_MAIN);
		}
		private getPlayerById(uid:string):PlayerHead{
			for(let i:number=0;i<this.curHeadAry.length;i++){
				if(this.curHeadAry[i].juPlayer.id==uid){
					return this.curHeadAry[i];
				}
			}
			return null;
		}
		// 延迟
		private sleep(ms = 0) {
			if (this.wantToBreakHere==true) {
				// 抛出中断信号.
				return Promise.reject("quit");
			}
			
			return new Promise(r => setTimeout(r, ms));
		}
		public preClose(data?: any):void {
			this.wantToBreakHere=true;
			this.preCloseCpl();
			this.mContent.m_btn_quit.removeClickListener(this.onQuit,this);
		}
	}
}