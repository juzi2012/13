module game {
	export class ActivityRender extends UI.Activity.UI_ActivityTab{
		public constructor() {
			super()
		}
        public m_data:any;
		public setData(data:any):void
		{
            this.m_data = data;
			this.m_txt_name.text =data['title'];
		}
	}
}