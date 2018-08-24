var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    var AllResultModule = (function (_super) {
        __extends(AllResultModule, _super);
        function AllResultModule() {
            return _super.call(this) || this;
        }
        AllResultModule.prototype.initContent = function () {
            this.content = UI.Result.UI_AllResult.createInstance();
        };
        Object.defineProperty(AllResultModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        AllResultModule.prototype.preShow = function (data) {
            this.mContent.m_btn_back.addClickListener(this.onBack, this);
            this.mContent.m_btn_share.addClickListener(this.onShare, this);
            this.mContent.m_txt_roomid.text = "房间:" + game.GameModel.ins.roomModel.rid;
            this.mContent.m_txt_info.text = game.GameModel.ins.roomModel.rinfo.fc == 1 ? "房主付费" : "房费AA " + game.GameModel.ins.roomModel.rinfo.pn + "人 " + game.GameModel.ins.roomModel.rinfo.snum + "局 ";
            this.mContent.m_txt_time.text = Utils.timetrans(new Date().getTime());
            _super.prototype.preShow.call(this, data);
        };
        AllResultModule.prototype.show = function (data) {
            App.SoundUtils.playSound("over_mp3", 0, 1);
            this.mContent.m_list.itemRenderer = this.RenderListItem;
            this.mContent.m_list.callbackThisObj = this;
            this.mContent.m_list.numItems = game.GameModel.ins.roomModel.jieSuanAll.length;
            _super.prototype.show.call(this, data);
        };
        AllResultModule.prototype.RenderListItem = function (index, _item) {
            var item = _item;
            item.setData(index, game.GameModel.ins.roomModel.jieSuanAll[index]);
        };
        AllResultModule.prototype.onBack = function () {
            game.GameModel.ins.disMissRoom();
            ModuleMgr.ins.changeScene(ModuleEnum.GAME_SINGLE_RESULT, ModuleEnum.GAME_MAIN);
        };
        AllResultModule.prototype.onShare = function () {
        };
        return AllResultModule;
    }(Module));
    game.AllResultModule = AllResultModule;
    __reflect(AllResultModule.prototype, "game.AllResultModule");
})(game || (game = {}));
//# sourceMappingURL=AllResultModule.js.map