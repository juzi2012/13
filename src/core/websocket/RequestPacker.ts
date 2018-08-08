module ws 
{
	/**
	 * 封装  - 请求数据包
	 * @author liujia
	 * 
	 */	
	export class RequestPacker 
	{
		public static index:number = 0;

		public constructor() 
		{

		}

		private static getIndex():number
        {
			let num:number = this.index;
			this.index ++;
            return num;
        }

		/**
		 * 创建包体 
		 * @param arr
		 * @param str
		 * @return 
		 * 
		 */		
		public static createBody(arr:Array<any>):egret.ByteArray
        {
            let byteArr:egret.ByteArray = new egret.ByteArray();
			
			let obj;
			for(let i = 0; i < arr.length; i++)
            {
				obj = arr[i];
				if (typeof obj === "string")
                {
					byteArr.writeUTFBytes(String(obj));
                }
                else
                {
                    if (obj instanceof egret.ByteArray)
                    {
						byteArr.writeBytes(obj);
						obj.length = 0;
                    }
                    else
                    {
						byteArr.writeUnsignedInt(obj);
                    }
                }
            }
            return byteArr;
        }
	}
}