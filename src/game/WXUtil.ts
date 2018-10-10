module game {
	export class WXUtil {
		public constructor() {
		}
		private static _ins:WXUtil;
		public static get ins() : WXUtil {
			if(this._ins==null){
				this._ins = new WXUtil();
			}
			return this._ins;
		}
		public invit(shareData:Object)
		{
			invit(shareData);
		}
		public share(shareData:Object)
		{
			share(shareData);
		}
		public shareRePlay(shareData:Object)
		{
			shareRePlay(shareData);
		}
	}
}