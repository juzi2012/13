module core {
    export class MathUtils extends BaseClass {

        public ceil(value: number): number {
            if (value % 1 == 0) {
                return value;
            }
            if (value > 0) {
                return (value + 1) << 0;
            } else {
                return value << 0;
            }
        }
        /**
         * 得到 [min,max] 范围内的随机数
         */
        public random(min: number, max: number): number {
            return Math.random() * (max - min+1) + min << 0;
        }

        /**
         * 弧度制转换为角度值
         * @param radian 弧度制
         * @returns {number}
         */
        public getAngle(radian:number):number {
            return 180 * radian / Math.PI;
        }

        /**
         * 角度值转换为弧度制
         * @param angle
         */
        public getRadian(angle:number):number {
            return angle / 180 * Math.PI;
        }

        /**
         * 获取两点间弧度
         * @param p1X
         * @param p1Y
         * @param p2X
         * @param p2Y
         * @returns {number}
         */
        public getRadian2(p1X:number, p1Y:number, p2X:number, p2Y:number):number {
            var xdis:number = p2X - p1X;
            var ydis:number = p2Y - p1Y;
            return Math.atan2(ydis, xdis);
        }

        /**
         * 获取两点间距离
         * @param p1X
         * @param p1Y
         * @param p2X
         * @param p2Y
         * @returns {number}
         */
        public getDistance(p1X:number, p1Y:number, p2X:number, p2Y:number):number {
            var disX:number = p2X - p1X;
            var disY:number = p2Y - p1Y;
            var disQ:number = disX * disX + disY * disY;
            return Math.sqrt(disQ);
        }
        /**
         * 求1-100的和
         */
        public getSum(startNum:number,endNum:number):number
        {
            let sum:number=0;
            for(let i:number=startNum;i<=endNum;i++){
                sum += i;
            }
            return sum;
        }
        /**
         * len 获取数据的个数
         * startNum 开始的数
         * endNum 结束的数
         */
        public randomNoRepeat(len,startNum,endNum):Array<number>
        {
            var arr:Array<number> = new Array();
        　　function _inner(start, end) {
        　　　　var span = end - start;
        　　　　return parseInt(Math.random() * span + start)
        　　}
        　　while (arr.length < len) {
        　　　　var num = _inner(startNum, endNum);
        　　　　　　if (arr.indexOf(num) == -1) {
        　　　　　　　　arr.push(num);
        　　　　　　}
        　　　　}
    　　　　return arr;
        }
        /*求两点间连线角度
		*/
		public towPointGetAngle(x1:number, y1:number, x2:number, y2:number):number
		{
			var dx = x2 - x1;//求出x轴方向距离
			var dy = y2 - y1;//求出Y轴方向距离
			var radian:number = Math.atan2(dy, dx);//反正切函数求出弧度值
			return this.getAngle(radian);//返回角度值。
			
		}
    }
}