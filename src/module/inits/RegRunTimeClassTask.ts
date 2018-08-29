// TypeScript file
class RegRunTimeClassTask{     
    public constructor() {
        this.exec();
    }

    private exec():void{			
        fairygui.UIObjectFactory.setPackageItemExtension(UI.Game.UI_Pork.URL, game.Pork);
        fairygui.UIObjectFactory.setPackageItemExtension(UI.Game.UI_PlayerHead.URL, game.PlayerHead);
        fairygui.UIObjectFactory.setPackageItemExtension(UI.Game.UI_PlayerPokers.URL, game.PlayerPokers);
        fairygui.UIObjectFactory.setPackageItemExtension(UI.Mail.UI_MailItem.URL, game.MailListItem);
        fairygui.UIObjectFactory.setPackageItemExtension(UI.ShuoMing.UI_ShuoMingTab.URL, game.ShuoMingTabItem);
        fairygui.UIObjectFactory.setPackageItemExtension(UI.Rank.UI_RankItem.URL, game.RankItem);
        fairygui.UIObjectFactory.setPackageItemExtension(UI.Result.UI_SingleResultItem.URL, game.SingleResultItem);
        fairygui.UIObjectFactory.setPackageItemExtension(UI.Result.UI_AllResultItem.URL, game.AllResultItem);
        fairygui.UIObjectFactory.setPackageItemExtension(UI.ZhanJi.UI_ZhanJiItem.URL, game.ZhanJiItem);
        fairygui.UIObjectFactory.setPackageItemExtension(UI.ZhanJi.UI_ZhanJiItemUserItem.URL, game.ZhanJiItemUserItem);
        fairygui.UIObjectFactory.setPackageItemExtension(UI.Game.UI_DissolveHead.URL, game.DissolveHead);
        fairygui.UIObjectFactory.setPackageItemExtension(UI.Game.UI_ChatItem.URL, game.ChatItem);
        fairygui.UIObjectFactory.setPackageItemExtension(UI.ZhanJi.UI_ZhanJiDetailItem.URL, game.ZhanJiDetailItem);
        fairygui.UIObjectFactory.setPackageItemExtension(UI.ZhanJi.UI_JieSanItem.URL, game.JieSanItem);
    }
}