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
    var SingleResultPlayModule = (function (_super) {
        __extends(SingleResultPlayModule, _super);
        function SingleResultPlayModule() {
            return _super.call(this) || this;
        }
        SingleResultPlayModule.prototype.initContent = function () {
            this.content = UI.Result.UI_SingleResult.createInstance();
        };
        Object.defineProperty(SingleResultPlayModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        SingleResultPlayModule.prototype.preShow = function (data) {
            this.round = data;
            this.mContent.m_btn_continue.addClickListener(this.onContinue, this);
            this.mContent.m_btn_check.addClickListener(this.onCheck, this);
            this.mContent.m_c1.selectedIndex = 1;
            this.mContent.m_list.itemRenderer = this.RenderListItem;
            this.mContent.m_list.callbackThisObj = this;
            this.mContent.m_list.numItems = this.round.jus[this.round.cur].players.length;
            this.mContent.m_txt_roominfo.text = this.round.Fc + "人 " + (this.round.cur + 1) + "/" + this.round.Jn + "局 ";
            this.mContent.m_txt_time.text = ""; //Utils.timetrans(new Date().getTime());
            _super.prototype.preShow.call(this, data);
        };
        SingleResultPlayModule.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        SingleResultPlayModule.prototype.onContinue = function () {
            if (this.round.cur == this.round.Jn - 1) {
                ModuleMgr.ins.changeScene(ModuleEnum.REPLAY, ModuleEnum.GAME_ALL_RESULT_PLAY, this.round);
            }
            else {
                this.round.cur++;
                App.MessageCenter.dispatch(game.MsgEnum.PLAY_NEXT);
                ModuleMgr.ins.closeModule(ModuleEnum.GAME_SINGLE_RESULT_PLAY);
            }
        };
        SingleResultPlayModule.prototype.RenderListItem = function (index, _item) {
            var item = _item;
            item.setDataPlay(this.round.jus[this.round.cur].players[index]);
        };
        SingleResultPlayModule.prototype.onCheck = function () {
        };
        return SingleResultPlayModule;
    }(Module));
    game.SingleResultPlayModule = SingleResultPlayModule;
    __reflect(SingleResultPlayModule.prototype, "game.SingleResultPlayModule");
})(game || (game = {}));
//# sourceMappingURL=SingleResultPlayModule.js.map