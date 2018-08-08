module ws {
/**
 * Created by yangsong on 15-2-11.
 */
    export class UTFMsg implements BaseMsg {
        private _ba:egret.ByteArray;
        /**
         * 构造函数
         */
        public constructor() {
            this._ba = new egret.ByteArray();
        }

        /**
         * 接收消息处理
         * @param msg
         */
        public receive(socket:egret.WebSocket):void {
            this._ba.clear();
            socket.readBytes(this._ba);
            var msg:string = this._ba.readUTFBytes(this._ba.length);
            if(msg.indexOf("_Heart")<0){
                console.log("recv"+msg);
            }
            this.decode(msg);
        }

        /**
         * 发送消息处理
         * @param msg
         */
        public send(socket:egret.WebSocket, msg:any):void {
            if(socket.connected){
                var obj:any = this.encode(msg);
                socket.writeUTF(obj);
                socket.flush();
            }else{
                console.log("socket 未连接");
            }
        }

        /**
         * 消息解析
         * @param msg
         */
        public decode(msg:any):any {
            Log.trace("decode需要子类重写，根据项目的协议结构解析");
            return null;
        }

        /**
         * 消息封装
         * @param msg
         */
        public encode(msg:any):any {
            Log.trace("encode需要子类重写，根据项目的协议结构解析");
            return null;
        }
    }
}