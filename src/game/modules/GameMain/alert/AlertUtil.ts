module game {
	export class AlertUtil {
		public constructor() {
		}
		public static alert(content:string,$handleYes?:core.Handler):void
		{
			ModuleMgr.ins.showModule(ModuleEnum.ALERT,new AlertMsgVO(content,$handleYes,null))
		}
		public static floatMsg(content:string):void{
			App.MessageCenter.dispatch(MsgEnum.FLOAT_MSG,content);
		}
	}
}