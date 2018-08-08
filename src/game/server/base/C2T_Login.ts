class C2T_Login_Message {
	/**
	 * 用户名称
	 */
	public name: string = "";
	/**
	 * 用户Id
	 */
	public wid: string = "";
	/**
	 * 设备Id
	 */
	public mid: string = "";
	/**
	 * 头像
	 */
	public head: string = "";
	/**
	 * 频道Id
	 */
	public chid: string = "";
}

class C2T_Login extends C2T_Base {

	public Msg: C2T_Login_Message;

	public constructor() {
		super();
		this.Aid = MsgType.Login;
		this.Msg = new C2T_Login_Message();
	}

}