module ws {
	export class ServerSocket extends core.BaseClass{
		private TYPE_STRING:string="TYPE_STRING";
		private TYPE_BINARY:string="TYPE_BINARY";
		/**
		 * 重连次数
		 */
		public _connectCount:number = 0;
		public _setTimeoutIndex:number = 0;

		public mainSocket:egret.WebSocket;
		private _host:string;
        private _port:any;
		private _msg:BaseMsg;
		/** 是否启用protoBuf传送消息 */
        private _isUseProtoBuf:boolean = false;
		/** socket连接成功的回调 */
		private _connectSuccessHandle:core.Handler;
		public connected:boolean=false;

		private mEventListeners:Object;

		public constructor() {
			super();
		}
		/**
         * 初始化服务区地址
         * @param host IP
         * @param port 端口
		 * @param msg socket是用string byte 
         */
		public initServer(host:string, port:any,msg:BaseMsg):void{
			this._host = host;
            this._port = port;
			this._msg = msg;
			// if(this._isUseProtoBuf){
			// 	proto.CmdResHash.setup();
			// }
		}
		/**
         * 开始Socket连接
         */
        public connect(connectSuccessHandle:core.Handler):void {
            if (App.DeviceUtils.IsHtml5) {
                if (!window["WebSocket"]) {
                    Log.trace("不支持WebSocket");
                    return;
                }
            }
			this._connectSuccessHandle=connectSuccessHandle;

            this.mainSocket = new egret.WebSocket();
			if(this._msg instanceof ByteArrayMsg){
				this.mainSocket.type = egret.WebSocket.TYPE_BINARY;
			}
			this.mainSocket.type = egret.WebSocket.TYPE_BINARY;
			this.mainSocket.type = egret.WebSocket.TYPE_STRING;
			this.mainSocket.addEventListener(egret.Event.CONNECT, this.onSocketConnected, this);
            this.mainSocket.connect(this._host, this._port);
            Log.trace("WebSocket connecting: " + this._host + ":" + this._port);
			this._connectCount = 0;
			App.TimerManager.doTimer(3000,5,this.reconnect,this,this.reConnectFailedCplHandle,this);
			// this._setTimeoutIndex = setInterval(this.reconnect, 3000);
        }
		public reconnect():void
		{
			if(this.connected==true){
				console.log("已经连接了");
				return; 
			}
            this.mainSocket.connect(this._host, this._port);
			// this._connectCount++;
			// if(this._connectCount <= 5)
			// {
			// 	console.error("websocket连接 --> " + this._connectCount + " 次！")
			// 	this.mainSocket.connect(this._host, this._port);
			// }
			// else
			// {
			// 	console.error("服务器连接失败！ --> " + this._host + ":" + this._port);
			// 	App.TimerManager.remove(this.reconnect,this);
			// 	game.AlertUtil.alert("服务器连接断开，请刷新游戏!");
			// }
		}
		private reConnectFailedCplHandle():void
		{
			game.AlertUtil.alert("服务器连接断开，请刷新游戏!",core.Handler.create(this,this.showRefresh));
		}
		private showRefresh():void
		{
			refreshPage();
		}
		/**
		 * socket连接成功
		 */
		private onSocketConnected():void
		{
			this.mainSocket.removeEventListener(egret.Event.CONNECT, this.onSocketConnected, this);
			this.addListeners();
			App.TimerManager.remove(this.reconnect,this);
			console.log(this._host + ":" + this._port +  " 服务器连接上了");
			this.connected=true;
			this._connectSuccessHandle.run();
		}
		
		private addListeners():void
		{
			this.mainSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onData, this);
			this.mainSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
			this.mainSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
		}

		private removeListeners():void
		{
			this.mainSocket.removeEventListener(egret.ProgressEvent.SOCKET_DATA, this.onData, this);
			this.mainSocket.removeEventListener(egret.Event.CLOSE, this.onSocketClose, this);
			this.mainSocket.removeEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
		}

		/**
		 * 侦听服务器消息  
		 * @param str
		 * @param fun
		 * 
		 */
		public addCmdListener(str:number, fun:core.Handler):void
		{
			if(fun==null)return;
			if(!this.mEventListeners)
			{
				this.mEventListeners = {};
			}
			let funVec:Array<core.Handler> = this.mEventListeners[str] as Array<core.Handler>;
			if(!funVec)
			{
				this.mEventListeners[str] = new Array<core.Handler>();
				this.mEventListeners[str].push(fun);
			}
			else
			{
				if(funVec.indexOf(fun) == -1)
				{
					funVec.push(fun);
				}
			}
		}
		
		public dispatchCmd(cmdId:number, msg:T2C_Message_Base=null):void
        {
            let funVec:Array<core.Handler>;
            let i = 0;
            let fun:core.Handler;
            if(this.mEventListeners[cmdId])
            {
                funVec = this.mEventListeners[cmdId];
                i = 0;
                while(i < funVec.length)
                {
                    fun = funVec[i];
                    fun.runWith(msg);
                    i++;
                }
            }
        }
		/**
		 * 移除侦听服务器消息  
		 * @param str
		 * @param fun
		 * 
		 */
		public removeCmdListener(cmdID:number, fun:Function):void
		{
			let funVec1:Array<core.Handler>;
			let len:number;
			let funVec2:Array<core.Handler>;
			let i:number;
			if(this.mEventListeners)
			{
				funVec1 = this.mEventListeners[cmdID] as Array<core.Handler>;
				if(funVec1)
				{
					len = funVec1.length;
					funVec2 = new Array<core.Handler>();
					i = 0;
					while(i < len)
					{
						if(funVec1[i].method != fun)
						{
							funVec2.push(funVec1[i]);
						}
						i++;
					}
					if(funVec2.length > 0)
					{
						this.mEventListeners[cmdID] = funVec2;
					}
					else
					{
						delete this.mEventListeners[cmdID];
					}
				}
			}
		}
		/**
		 * 判断是否有此类侦听 
		 * @param cmdID
		 * @return 
		 * 
		 */		
		public hasCmdListener(cmdID:number):boolean
		{
			return this.mEventListeners[cmdID];
		}
		private onSocketClose():void 
		{
			console.log("websocket --> 断开连接了！");
			this.connected=false;
			this.reConnectFailedCplHandle();
			// if(App.TimerManager.isExists(this.reconnect,this)==false){
			// 	App.TimerManager.doTimer(3000,5,this.reconnect,this,this.reConnectFailedCplHandle,this);
			// }
		}
		
		private onSocketError():void 
		{
			console.error("websocket --> 连接错误了！");
		}
		private onData(event:ProgressEvent):void
		{
			this._msg.receive(this.mainSocket);
		}
		
		/**
		 * 向服务发送消息 
		 * @param cmdID
		 * @param _args
		 * 
		 */		
		public send(msg:any):void
		{
			if(this.connected){
				this._msg.send(this.mainSocket,msg);
			}else{
				this.reConnectFailedCplHandle();
			}
		}
	}
}