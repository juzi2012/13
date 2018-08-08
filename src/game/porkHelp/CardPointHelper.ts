module game {
	export class CardPointHelper {
		public pointNumbers:Object = {};
		public constructor(cardAry:Array<PorkVO>) {
			cardAry.forEach(card => {
				let point:number = card.point
				var num = this.pointNumbers[point]||0;
				this.pointNumbers[point] = num+1;
			});
		}
		public get maxNumber():number
		{
			let result = 0
			for(let prop in this.pointNumbers){
				let num = this.pointNumbers[prop]
				result = Math.max(num,result);
			}
			return result;
		}
	}
}