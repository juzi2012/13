module game {
	export class TESTModule extends Module{
		public constructor() {
			super();
		}
		public initContent():void
		{
			this.content = new fairygui.GComponent();
		}
		public get mContent():fairygui.GComponent{
			return this.content as fairygui.GComponent;
		}
		/**
		 * 预显示
		 */
		public preShow(data?: any): void {
			this.preShowCpl();
		}

		public show(data?:any):void
		{
			super.show(data);
			this.testSocket();
		}
		private testSocket():void
		{
			App.Socket.send("abcd");
		}
	}
}