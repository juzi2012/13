module ws {
/**
 * Created by yangsong on 15-3-20.
 */
    export class UTFMsgByJson extends UTFMsg {
        private _protoMap:any;
        /**
         * 构造函数
         */
        public constructor() {
            super();
            this._protoMap = {};
        }

        /**
         * 消息解析
         * @param msg
         */
        public decode(msg:any):any {
            var obj:any = JSON.parse(msg);
            for(var s in obj){
                var c:any;
                if(this._protoMap[s]==null){
                    c = egret.getDefinitionByName(s);
                    if(c!=null){
                        this._protoMap[s] = new c();
                    }
                }
                if(this._protoMap[s]!=null){
                    var baseMsg:T2C_Base = this._protoMap[s];
                    baseMsg.execute(obj[s]);
                    return baseMsg;
                }else{
                    console.log(this,"未处理的消息"+msg);
                }
            }
            return null;
            // if (obj) {
            //     App.MessageCenter.dispatch(obj.key, obj.body);
            // }
        }

        /**
         * 消息封装
         * @param msg
         */
        public encode(msg:any):any {
            let temp  = "{\"" + egret.getQualifiedClassName(msg)+"\":"+JSON.stringify(msg)+"}";
            return temp;
        }
    }
}