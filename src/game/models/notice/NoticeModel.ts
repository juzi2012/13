module game {
	export class NoticeModel {
		public constructor() {
		}
		private static _ins:NoticeModel;
		public static get ins() : NoticeModel {
			if(this._ins==null){
				this._ins = new NoticeModel();
			}
			return this._ins;
		}
		public ary:Array<NoticeVO>;
		public setData(value):void
		{
			
		}
	}
}