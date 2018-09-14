enum MsgType {
	Login=1001,
	CreateRoom = 2003,
	EnterRooom=2001,
	LeaveRoom=2002,
	Ready=2004,
	ReadyCancel=2005,
	GameStart=2006,
	BaiPai=2007,
	JieSuan_Single=2009,
	JieSuan_All=2010,
	KickOut=2011,
	ReConnect=2012,
	GameReStart=2013,
	AskForDismiss=2014,
	AnswerForDismiss=2015,
	RoomDismiss=2016,
	PlayerDisConnect=2017,
	PlayerInAfterDisConnect=2018,
	Chat=2019,
	UpdateMyInfo=2028,
}
class C2T_Message_CreateRoom{
	public constructor() {
	}
	// ty:2(玩法id),
	public ty:number;
	// pn:人数,
	public pn:number;
	// jn:局数,
	public jn:number;
	// zz:是否坐庄(1:是，0:否),
	public zz:number;
	// jm:是否加马(1:是，0:否),
	public jm:number;
	// fc:(1:房主付,2:均摊)
	public fc:number;
	// jp:加花色 int数组，不加花色留空) }花色对应值:0:方块 1:梅花2：红桃 3:黑桃
	public jp:Array<number>;
}
class C2T_Message_EnterRoom{
	public constructor() {
	}
	public rid:number;
}
class C2T_Message_BaiPai{
	public constructor() {
	}
	public cards:any;
	public mb:number;
}
class C2T_Message_AskForDismiss{
	public constructor() {
	}
	public rid:number;
}
class C2T_Message_AnswerForDismiss{
	public constructor() {
	}
	public act:number;
}
class C2T_Chat{
	public constructor() {
	}
	public str:string;
	public uid:string;
	public uname:string;
	public time:string;
	public times:string="1536840416000";
	public type:number=0;//0 普通聊天 1 鲜花砸蛋
}
class C2T_Msg extends C2T_Base {
	public Msg: any;

	public constructor() {
		super();
	}
}