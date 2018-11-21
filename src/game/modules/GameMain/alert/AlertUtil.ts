module game {
	export class AlertUtil {
		public constructor() {
		}
		public static alert(content:string,$handleYes?:core.Handler,offsiteX:number=0,offsiteY:number=0):void
		{
			ModuleMgr.ins.showModule(ModuleEnum.ALERT,new AlertMsgVO(content,$handleYes,null,offsiteX,offsiteY))
		}
		public static floatMsg(content:string):void{
			App.MessageCenter.dispatch(MsgEnum.FLOAT_MSG,content);
		}
	}
}