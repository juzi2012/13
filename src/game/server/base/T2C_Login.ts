class T2C_Login_Message extends T2C_Message_Base {
	/**
	 * 纸娃娃
	 */
	public avatar: string;
	/**
	 * 卡牌
	 */
	public card: number;
	/**
	 * 金币
	 */
	public gold: number;
	/**
	 * 编号
	 */
	public id: string;
	/**
	 * 名称
	 */
	public name: string;
	/**
	 * Uid
	 */
	public uid: string;
	public constructor()
	{
		super();
	}
}

class T2C_Login extends T2C_Base {

	public Msg: T2C_Login_Message = new T2C_Login_Message();

	public constructor() {
		super();
	}

	public execute(data: any): void {
		super.execute(data);
		this.Msg.execute(data.Msg);
		game.GameModel.ins.setLoginData(this.Msg);
		App.Socket.dispatchCmd(this.Aid,this.Msg);
	}
}

window["T2C_Login"] = T2C_Login;