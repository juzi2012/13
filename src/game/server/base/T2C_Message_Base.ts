class T2C_Message_Base {
	public constructor() {
	}
	public execute(msg:any):void
	{
		for(let prop in msg){
			if(this.hasOwnProperty(prop)!=null){
				this[prop] = msg[prop];
			}
		}
	}
}