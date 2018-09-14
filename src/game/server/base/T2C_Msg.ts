class T2C_UpdateMyInfo extends T2C_Message_Base{
	public card:number;
	public gold:number;
}

class T2C_Enter_Room extends T2C_Message_Base{
	public fname:string;//"fname":"房主",
	public fuid:string;//"fuid":"房主uid",
	public gps:string;//"gps":"",//备用
	public rid:number;//"rid":"721500",//房间号
	public rinfo:any;//"rinfo": //房间信息
	public users:any;
	public zuid:string;//庄家uid
	public execute(msg:any):void
	{
		this.fname = msg['fname'];
		this.fuid = msg['fuid'];
		this.rid = msg['rid'];
		this.gps = msg['gps'];
		this.rinfo = msg['rinfo'];
		this.users = msg['users'];
		this.zuid = msg['zuid'];
	}
}
class T2C_Create_Room extends T2C_Message_Base{
	public dk:number;
	public rid:number;

}
class T2C_Leave_Room extends T2C_Message_Base{
	public name:string;
	public uid:string;
}
class T2C_Ready extends T2C_Message_Base{
	public ready:number;
	public uid:string;
}
class T2C_GameStart extends T2C_Message_Base{
	public card:Array<number>;
	public der:string;
	public jnum:number;
}
class T2C_BaiPai extends T2C_Message_Base{
	public uid:string;
}
class T2C_JieSuanAll extends T2C_Message_Base{
	public et:string;
	public sc:Dictionary<Array<number>>
	public execute(msg:any):void
	{
		this.et = msg["et"];
		this.sc = msg["sc"];
	}
}

class T2C_JieSuanSingle extends T2C_Message_Base{
	public bp:Array<any>;
	public sc:Array<any>;
	public execute(msg:any):void
	{
		this.bp = msg["bp"];
		this.sc = msg["sc"];
	}
}
class T2C_ReConnect extends T2C_Message_Base{
	public dealer:string;
	public fname:string;
	public fuid:string;
	public js:string;
	public jt:number;
	public ju:any;
	public of:Array<any>;
	public rid:number;
	public rinfo:any;
	public users:any;
	public status:number;
	public execute(msg:any):void
	{
		this.dealer = msg['dealer'];
		this.fname = msg['fname'];
		this.fuid = msg['fuid'];
		this.js = msg['js'];
		this.jt = msg['jt'];
		this.ju = msg['ju'];
		this.of = msg['of'];
		this.rid = msg['rid'];
		this.rinfo = msg['rinfo'];
		this.users = msg['users'];
		this.status = msg['status'];
	}
}
class T2C_DiaoXian extends T2C_Message_Base{
	public name:string;
	public uid:string;
	public execute(msg:any):void
	{
		this.name = msg["name"];
		this.uid = msg["uid"];
	}
}
class T2C_DiaoXian_Back extends T2C_Message_Base{
	public name:string;
	public uid:string;
	public execute(msg:any):void
	{
		this.name = msg["name"];
		this.uid = msg["uid"];
	}
}
class T2C_AskForDismiss extends T2C_Message_Base{
	public name:string;
	public uid:string;
	public time:number;
	public execute(msg:any):void
	{
		this.name = msg["name"];
		this.uid = msg["uid"];
		this.time = msg["time"];
	}
}
class T2C_AnswerForDismiss extends T2C_Message_Base{
	public uid:string;
	public act:number;
	public execute(msg:any):void
	{
		this.uid = msg["uid"];
		this.act = msg["act"];
	}
}
class T2C_Chat extends T2C_Message_Base{
	public uid:string;
	public str:string;
	public uname:string;
	public time:string;
	public times:string;
	public type:number;
	public execute(msg:any):void
	{
		this.uid = msg["uid"];
		this.uname = msg["uname"];
		this.str = msg["str"];
		this.time = msg["time"];
		this.times = msg["times"];
		this.type = msg["type"];
	}
}

class T2C_Msg extends T2C_Base {

	public Msg: T2C_Message_Base;
	public Err: string;

	public constructor() {
		super();
		this.Msg = new T2C_Message_Base();
	}

	public execute(data: any): void {
		super.execute(data);
		
		if(this.Err==''){
			if(this.Aid == MsgType.UpdateMyInfo){
				this.Msg = new T2C_UpdateMyInfo();
			}else if(this.Aid == MsgType.EnterRooom){
				this.Msg = new T2C_Enter_Room();
			}else if(this.Aid==MsgType.CreateRoom){
				this.Msg = new T2C_Create_Room();
			}else if(this.Aid==MsgType.LeaveRoom){
				this.Msg = new T2C_Leave_Room();
			}else if(this.Aid==MsgType.Ready){
				this.Msg = new T2C_Ready();
			}else if(this.Aid==MsgType.ReadyCancel){
				this.Msg = new T2C_Ready();
			}else if(this.Aid==MsgType.GameStart){
				this.Msg = new T2C_GameStart();
			}else if(this.Aid==MsgType.BaiPai){
				this.Msg = new T2C_BaiPai();
			}else if(this.Aid==MsgType.JieSuan_Single){
				this.Msg = new T2C_JieSuanSingle();
			}else if(this.Aid==MsgType.JieSuan_All){
				this.Msg = new T2C_JieSuanAll();
			}else if(this.Aid==MsgType.ReConnect){
				this.Msg = new T2C_ReConnect();
			}else if(this.Aid==MsgType.PlayerDisConnect){
				this.Msg = new T2C_DiaoXian();
			}else if(this.Aid==MsgType.PlayerInAfterDisConnect){
				this.Msg = new T2C_DiaoXian_Back();
			}else if(this.Aid==MsgType.AskForDismiss){
				this.Msg = new T2C_AskForDismiss();
			}else if(this.Aid==MsgType.AnswerForDismiss){
				this.Msg = new T2C_AnswerForDismiss();
			}else if(this.Aid==MsgType.Chat){
				this.Msg = new T2C_Chat();
			}else{
				this.Msg = new T2C_Message_Base();
			}
			this.Msg.execute(data.Msg);
			App.Socket.dispatchCmd(this.Aid,this.Msg);
		}else{
			App.MessageCenter.dispatch(game.MsgEnum.FLOAT_MSG,this.Err,this.Aid);
		}
	}

}

window["T2C_Msg"] = T2C_Msg;