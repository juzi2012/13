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
    var SingleResultModule = (function (_super) {
        __extends(SingleResultModule, _super);
        function SingleResultModule() {
            return _super.call(this) || this;
        }
        SingleResultModule.prototype.initContent = function () {
            this.content = UI.Result.UI_SingleResult.createInstance();
        };
        Object.defineProperty(SingleResultModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        SingleResultModule.prototype.preShow = function (data) {
            this.mContent.m_btn_continue.addClickListener(this.onContinue, this);
            this.mContent.m_btn_check.addClickListener(this.onCheck, this);
            this.mContent.m_c1.selectedIndex = 0;
            this.mContent.m_list.itemRenderer = this.RenderListItem;
            this.mContent.m_list.callbackThisObj = this;
            this.cards = game.GameModel.ins.roundModel.result.cards.concat([]);
            this.cards.sort(function (a, b) {
                return b.sc - a.sc;
            });
            this.mContent.m_list.numItems = this.cards.length;
            this.mContent.m_txt_roominfo.text = game.GameModel.ins.roomModel.rinfo.fc == 2 ? "房主付费" : "房费AA " + game.GameModel.ins.roomModel.rinfo.pn + "人 " + game.GameModel.ins.roomModel.rinfo.nnum + "/" + game.GameModel.ins.roomModel.rinfo.snum + "局 ";
            this.mContent.m_txt_time.text = Utils.timetrans(new Date().getTime());
            _super.prototype.preShow.call(this, data);
        };
        SingleResultModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        SingleResultModule.prototype.onContinue = function () {
            if (game.GameModel.ins.roomModel.isAllFinish) {
                ModuleMgr.ins.changeScene(ModuleEnum.GAME, ModuleEnum.GAME_ALL_RESULT);
            }
            else {
                App.MessageCenter.dispatch(game.MsgEnum.GAME_BEGIN_RESTART);
                game.ServerEngine.sendReady();
                ModuleMgr.ins.closeModule(ModuleEnum.GAME_SINGLE_RESULT);
            }
        };
        SingleResultModule.prototype.RenderListItem = function (index, _item) {
            var item = _item;
            item.setData(this.cards[index]);
        };
        SingleResultModule.prototype.onCheck = function () {
            App.MessageCenter.dispatch(game.MsgEnum.GAME_CHECK_SINGLE);
            ModuleMgr.ins.closeModule(ModuleEnum.GAME_SINGLE_RESULT);
        };
        SingleResultModule.prototype.preClose = function (data) {
            if (game.GameModel.ins.roomModel != null) {
            }
            this.preCloseCpl();
        };
        return SingleResultModule;
    }(Module));
    game.SingleResultModule = SingleResultModule;
    __reflect(SingleResultModule.prototype, "game.SingleResultModule");
})(game || (game = {}));
//# sourceMappingURL=SingleResultModule.js.map