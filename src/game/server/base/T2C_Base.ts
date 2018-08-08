class T2C_Base {
	public Aid: number;
	public Err: string;

	public constructor() {
	}

	public execute(data: any): void {
		this.Aid = data.Aid;
		this.Err = data.Err;
		
	}
}