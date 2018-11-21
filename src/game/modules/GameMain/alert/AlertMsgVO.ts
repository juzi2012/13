module game {
	export class AlertMsgVO {
		public content:string;
		public handleYes:core.Handler;
		public handleNo:core.Handler;
		public offsiteX:number;
		public offsiteY:number;
		public constructor(content:string,handleYes?:core.Handler,handleNo?:core.Handler,offsiteX:number=0,offsiteY:number=0) {
			this.content=content;
			this.handleYes=handleYes;
			this.handleNo=handleNo;
			this.offsiteX = offsiteX;
			this.offsiteY = offsiteY;
		}
	}
}