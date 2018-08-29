// TypeScript file
class BindFGuiTask{     
    public constructor() {
        this.exec();
    }

    private exec():void{
        //------ auto start ------//
        UI.PreLoading.PreLoadingBinder.bindAll();
        UI.Loading.LoadingBinder.bindAll();
        UI.MainUI.MainUIBinder.bindAll();
        UI.Activity.ActivityBinder.bindAll();
        UI.AddRoom.AddRoomBinder.bindAll();
        UI.Base.BaseBinder.bindAll();
        UI.BuyCard.BuyCardBinder.bindAll();
        UI.CreateRoom.CreateRoomBinder.bindAll();
        UI.Kefu.KefuBinder.bindAll();
        UI.Mail.MailBinder.bindAll();
        UI.Notice.NoticeBinder.bindAll();
        UI.Rank.RankBinder.bindAll();
        UI.ZhanJi.ZhanJiBinder.bindAll();
        UI.Setting.SettingBinder.bindAll();
        UI.ShuoMing.ShuoMingBinder.bindAll();
        UI.Rank.RankBinder.bindAll();
        UI.Game.GameBinder.bindAll();
        UI.GameHelper.GameHelperBinder.bindAll();
        UI.Result.ResultBinder.bindAll();
        UI.TestPork.TestPorkBinder.bindAll();
        //------ auto end ------//
        
    }
}