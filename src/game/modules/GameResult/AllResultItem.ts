module game {
	export class AllResultItem extends UI.Result.UI_AllResultItem{
		public constructor() {
			super()
		}
		public setData(index:number,value:JieSuanAllItem):void
		{
			if(index==0){
				this.m_winner.visible=true;
			}else{
				this.m_winner.visible=false;
			}
			let user:User = GameModel.ins.roomModel.getUserById(value.uid);
			this.m_txt_name.text = user.name;
			this.m_txt_id.text = "ID:"+user.uid;
			for(let i:number=0;i<6;i++){
				if(value.scoreArr[i]!=null){
					let score:string = value.scoreArr[i].toString();
					if(value.scoreArr[i]>0){
						// score = "+"+score;
						this.m_bg.url = 'ui://25mni52ohmwn1h';
					}else{
						this.m_bg.url = 'ui://25mni52ohmwn1g';
					}
					this['m_txt_ju'+i].text="第"+(i+1)+"局:"+score;
				}else{
					this['m_txt_ju'+i].text="";
				}
			}
			if(value.resultScore>0){
				this.m_txt_score.text = "+"+value.resultScore;
			}else{
				this.m_txt_score.text = value.resultScore.toString();
			}
		}
		public setDataPlay(index:number,value:Round):void
		{
			if(index==0){
				this.m_winner.visible=true;
			}else{
				this.m_winner.visible=false;
			}
			let scoreArr:Array<number> = value.getScoreById(value.playerFinalData[index].uid);
			this.m_txt_name.text = value.playerFinalData[index].name;
			this.m_txt_id.text = "ID:"+value.playerFinalData[index].uid;
			for(let i:number=0;i<6;i++){
				if(scoreArr[i]!=null){
					let score:string = scoreArr[i].toString();
					if(scoreArr[i]>0){
						score = "+"+score;
					}
					this['m_txt_ju'+i].text="第"+(i+1)+"局:"+score;
				}else{
					this['m_txt_ju'+i].text="";
				}
			}
			if(value.playerFinalData[index]['sc']>0){
				this.m_txt_score.text = "+"+value.playerFinalData[index]['sc'];
			}else{
				this.m_txt_score.text = value.playerFinalData[index]['sc'].toString();
			}
		}
	}
}