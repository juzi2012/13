module game {
	export class RankModel {
		public constructor() {
		}
		private static _ins:RankModel;
		public static get ins() : RankModel {
			if(this._ins==null){
				this._ins = new RankModel();
			}
			return this._ins;
		}
	}
}