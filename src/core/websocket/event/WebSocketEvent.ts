module ws 
{
	export class WebSocketEvent extends egret.Event
	{
		/**
		 * 连接成功
		 */
		public static CONNECT_CPL:string = "CONNECT_CPL";
		/**
		 * 连接失败
		 */
		public static CONNECT_ERR:string = "CONNECT_ERR";

		/**
		 * 断开连接
		 */
		public static CLOSE:string = "CLOSE";

		/**
		 * 连接错误
		 */
		public static ERROR:string = "ERROR";

		public constructor(type: string, bubbles?: boolean, cancelable?: boolean, data?: any) 
		{
			super(type, bubbles, cancelable, data);
		}
	}
}