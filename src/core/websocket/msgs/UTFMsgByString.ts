module ws {
/**
 * Created by yangsong on 15-3-20.
 */
    export class UTFMsgByString extends UTFMsg {
        /**
         * 构造函数
         */
        public constructor() {
            super();
        }

        /**
         * 消息解析
         * @param msg
         */
        public decode(msg:any):any {
            Log.trace(String(msg));
            return String(msg);
        }

        /**
         * 消息封装
         * @param msg
         */
        public encode(msg:any):any {
            return String(msg);
        }
    }
}