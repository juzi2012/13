/**
 * Created by yangsong on 14/12/18.
 * 字符串操作工具类
 */
module core {
    export class StringUtils extends BaseClass {
        /**
         * 构造函数
         */
        public constructor() {
            super();
        }

        /**
         * 去掉前后空格
         * @param str
         * @returns {string}
         */
        public trimSpace(str:string):string {
            return str.replace(/^\s*(.*?)[\s\n]*$/g, '$1');
        }

        /**
         * 获取字符串长度，中文为2
         * @param str
         */
        public getStringLength(str:string):number {
            var strArr = str.split("");
            var length = 0;
            for (var i = 0; i < strArr.length; i++) {
                var s = strArr[i];
                if (this.isChinese(s)) {
                    length += 2;
                } else {
                    length += 1;
                }
            }
            return length;
        }

        /**
         * 判断一个字符串是否包含中文
         * @param str
         * @returns {boolean}
         */
        public isChinese(str:string):boolean {
            var reg = /^.*[\u4E00-\u9FA5]+.*$/;
            return reg.test(str);
        }
        /**
         * aaaa@param0bbbb
         * 将字符串中的param替换成具体的值
         */
        public strParams(str:string,params:Array<string>):string
        {
            if(params!=null){
                for(let i:number=0;i<params.length;i++){
                    str = str.replace("@param"+i.toString(),params[i]);
                }
            }
            return str;
        }
    }
}