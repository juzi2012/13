module game {
	export class UserInfoLocationItem extends UI.Game.UI_UserInfoPosItem {
		public constructor() {
			super()
		}
		public setData(user:User,data:any,clickUser:User):void{
			this.m_txt_name.text = clickUser.name.substr(0,5)+"与"+user.name.substr(0,5);
			let userLocation:UserLocation = LocationModel.ins.getPosByUid(clickUser.uid);
			if(data==null||userLocation==null){
				this.m_txt_pos.text = "距离 无法确定";
			}else{
				let arr:Array<string> = [userLocation.lat,userLocation.lng];
				let dis:number = this.GetDistance(arr[0],arr[1],data['lat'],data['lng']);
				if(dis<1){
					this.m_txt_pos.text = "距离 "+dis*1000+"米";
				}else{
					this.m_txt_pos.text = "距离 "+dis+"公里";
				}
			}
		}

		private Rad(d){
			return d * Math.PI / 180.0;//经纬度转换成三角函数中度分表形式。
		}

		private GetDistance(lat1,lng1,lat2,lng2){
 
			var radLat1 = this.Rad(lat1);
			var radLat2 = this.Rad(lat2);
			var a = radLat1 - radLat2;
			var  b = this.Rad(lng1) - this.Rad(lng2);
			var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) +
			Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
			s = s *6378.137 ;// EARTH_RADIUS;
			s = Math.round(s * 10000) / 10000; //输出为公里
			// s = s.toFixed(4);
			return s;
		}
	}
}