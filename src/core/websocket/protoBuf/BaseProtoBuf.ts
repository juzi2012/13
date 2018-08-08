module proto
{
	export class BaseProtoBuf
	{
		public protobuf_className:string = "";

		public constructor($className:string) 
		{
			this.protobuf_className = $className
		}
	}
}