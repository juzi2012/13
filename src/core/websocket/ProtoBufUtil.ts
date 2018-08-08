module ws 
{
	export class ProtoBufUtil 
	{
		private static _instance:ProtoBufUtil;

		private basicsArr:string[] = ["number", "string", "boolean"];

		private _message;

		public static get instance():ProtoBufUtil
		{
			if(!this._instance)
			{
				this._instance = new ProtoBufUtil();
			}
			return this._instance;
		}

		public constructor() 
		{
			this._message = dcodeIO.ProtoBuf.loadProto(RES.getRes("game_proto"));
		}

		public getReqByteArr(pbCls:proto.BaseProtoBuf):egret.ByteArray
		{
			//proto对象
			let protoCls = this._message.build(pbCls.protobuf_className);
			let protoClsExample = new protoCls();

			this.evaluationObj(pbCls, protoClsExample);
			
			let sendData = new egret.ByteArray(protoClsExample.toArrayBuffer());

			return sendData;
		}

		public getResProtobuf(cmd, byteArr:egret.ByteArray):any
		{
			let protoClsName:string = proto.CmdResHash.obj[cmd];
			if(protoClsName == undefined)
			{
				egret.error("协议类型没有在 proto.CmdResHash 绑定：cmd = " + cmd);
			}

			//proto对象
			let protoCls = this._message.build(protoClsName);
			let protoClsExample = protoCls.decode(byteArr.buffer);

			return protoClsExample;
		}

		
		private evaluationObj(sourceObj:any, targetObj:any):void
		{
			let nameStrArr:string[] = Object.getOwnPropertyNames(sourceObj);
			let nameStr:string;
			let len = nameStrArr.length;
			for(let i = 0; i < len; i++)
			{
				nameStr = nameStrArr[i];
				if(!nameStr || nameStr === "" || nameStr === "protobuf_className")
				{
					continue;
				}

				let type = typeof sourceObj[nameStr];
				egret.log(type);
				if(type === "function")
				{
					continue;
				}
				if(targetObj.hasOwnProperty(nameStr))//注意继承的属性是flase
				{
					targetObj[nameStr] = sourceObj[nameStr];
					// if(this.basicsArr.indexOf(type) != -1)
					// {
					// 	targetObj[nameStr] = sourceObj[nameStr];
					// }
					// else
					// {
					// 	this.evaluationObj(sourceObj[nameStr], targetObj[nameStr]);
					// }
				}
			}
		}
	}
}