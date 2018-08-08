module game {
	export class JuModel{
		public constructor() {
		}
		public juNum:number;
		public players:Array<JuPlayer>;
	}
	export class JuPlayer{
		public constructor() {
		}
		public id:string;
		public name:string;
		public px:number;//特殊牌型
		public sc:number;//分数
		public topCards:Array<PorkVO>;//头顿牌
		public midCards:Array<PorkVO>;//头顿牌
		public downCards:Array<PorkVO>;//头顿牌
		public topType:number;
		public midType:number;
		public downType:number;
	}
	export class Round{
		public constructor() {
		}
		public cur:number=0;// 当前播放到第几局
		public Tm:number;
		public Rd:string;
		//人数
		public Fc:number;
		//局数
		public Jn:number;
		public jus:Array<JuModel>;

		public playerFinalData:Array<any>;
		public init(data:any):void
		{
			this.Tm = data['Tm'];
			this.Rd = data['Rd'];
			this.Fc = data['Fc'];
			this.Jn = data['Jn'];
			this.jus = [];
			this.playerFinalData = [];
			for(let item in data['Us']){
				this.playerFinalData.push(data['Us'][item]);
			}
			this.playerFinalData.sort((a,b)=>{
				return b['sc']-a['sc'];
			})
			let judata:any = data['Pl'];
			for(let i:number=0;i<judata.length;i++){
				let ju:JuModel = new JuModel();
				ju.juNum = judata[i]['Js'];
				ju.players = [];
				for(let id in judata[i]['Us']){
					let player:JuPlayer = new JuPlayer();
					player.id = id;
					player.name = judata[i]['Us'][id].name;
					player.px = judata[i]['Us'][id]['px'];
					player.sc = judata[i]['Us'][id]['sc'];
					player.topCards = [];
					for(let a:number=0;a<judata[i]['Us'][id]['tc'].length;a++){
						let pk:PorkVO = new PorkVO(PorkUtil.ChangeServerCardToClient(judata[i]['Us'][id]['tc'][a]));
						player.topCards.push(pk);
					}
					player.midCards = [];
					for(let a:number=0;a<judata[i]['Us'][id]['wc'].length;a++){
						let pk:PorkVO = new PorkVO(PorkUtil.ChangeServerCardToClient(judata[i]['Us'][id]['wc'][a]));
						player.midCards.push(pk);
					}
					player.downCards = [];
					for(let a:number=0;a<judata[i]['Us'][id]['zc'].length;a++){
						let pk:PorkVO = new PorkVO(PorkUtil.ChangeServerCardToClient(judata[i]['Us'][id]['zc'][a]));
						player.downCards.push(pk);
					}
					player.topType = judata[i]['Us'][id]['tt'];
					player.midType = judata[i]['Us'][id]['wt'];
					player.downType = judata[i]['Us'][id]['zt'];
					ju.players.push(player);
				}
				this.jus.push(ju);
				this.jus.sort((a,b)=>{
					return a.juNum-b.juNum;
				})
			}
		}
		public getScoreById(id:string):Array<number>
		{
			let result:Array<number>=[];

			for(let i:number=0;i<this.jus.length;i++){
				let ju:JuModel = this.jus[i];
				for(let j:number=0;j<ju.players.length;j++){
					if(ju.players[j].id==id){
						result.push(ju.players[j].sc)
						break;
					}
				}
			}
			return result;
		}
	}
	export class ZhanJiModel {
		public constructor() {
		}
		private static _ins:ZhanJiModel;
		public static get ins() : ZhanJiModel {
			if(this._ins==null){
				this._ins = new ZhanJiModel();
			}
			return this._ins;
		}
		public rounds:Array<Round>;
		public init(value:Array<any>):void
		{
			this.rounds = [];
			for(let p:number = 0;p<value.length;p++){
				let data:any = JSON.parse(value[p]['msg']);
				let round:Round = new Round();
				round.init(data);
				this.rounds.push(round);
			}
		}
	}
}