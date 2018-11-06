/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module UI.Charge {

	export class UI_ChargeItem extends fairygui.GComponent {

		public m_btn_charge:UI_ButtonCharge;
		public m_cardnum:fairygui.GLoader;

		public static URL:string = "ui://n4kjkscxkd573";

		public static createInstance():UI_ChargeItem {
			return <UI_ChargeItem><any>(fairygui.UIPackage.createObject("Charge","ChargeItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btn_charge = <UI_ButtonCharge><any>(this.getChildAt(1));
			this.m_cardnum = <fairygui.GLoader><any>(this.getChildAt(2));
		}
	}
}