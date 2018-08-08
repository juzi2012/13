module ws 
{
	/**
	 *  通信描述文字
	 * @author liujia
	 * 
	 */	
	export class CommandDesc 
	{
		private static _desc:Object;


		public constructor() 
		{
			CommandDesc.setup();
		}

		public static setup():void
        {
			this._desc = {};
			this._desc[CommandID.CHECK_VERSION] = "服务器返回错误ID [CHECK_VERSION]";
        }

        public static getDescById(cmdID:number):string
        {
			if(!this._desc)
			{
				CommandDesc.setup();
			}
            if(this._desc[cmdID])
			{
				return (this._desc[cmdID]);
			}
            return ("未描述");
        }
	}
}