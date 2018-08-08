var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var BindFGuiTask = (function () {
    function BindFGuiTask() {
        this.exec();
    }
    BindFGuiTask.prototype.exec = function () {
        //------ auto start ------//
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
        //------ auto end ------//
    };
    return BindFGuiTask;
}());
__reflect(BindFGuiTask.prototype, "BindFGuiTask");
//# sourceMappingURL=BindFGuiTask.js.map