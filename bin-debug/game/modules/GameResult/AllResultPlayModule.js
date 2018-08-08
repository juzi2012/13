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
    var AllResultPlayModule = (function (_super) {
        __extends(AllResultPlayModule, _super);
        function AllResultPlayModule() {
            return _super.call(this) || this;
        }
        AllResultPlayModule.prototype.initContent = function () {
            this.content = UI.Result.UI_AllResult.createInstance();
        };
        Object.defineProperty(AllResultPlayModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        AllResultPlayModule.prototype.preShow = function (data) {
            this.round = data;
            this.mContent.m_btn_back.addClickListener(this.onBack, this);
            this.mContent.m_btn_check.addClickListener(this.onCheck, this);
            this.mContent.m_txt_roomid.text = "房间:" + this.round.Rd;
            this.mContent.m_txt_info.text = this.round.Fc + "人 ";
            // this.mContent.m_txt_time.text = Utils.timetrans(new Date().getTime());
            _super.prototype.preShow.call(this, data);
        };
        AllResultPlayModule.prototype.show = function (data) {
            this.mContent.m_list.itemRenderer = this.RenderListItem;
            this.mContent.m_list.callbackThisObj = this;
            this.mContent.m_list.numItems = this.round.playerFinalData.length;
            _super.prototype.show.call(this, data);
        };
        AllResultPlayModule.prototype.RenderListItem = function (index, _item) {
            var item = _item;
            item.setDataPlay(index, this.round);
        };
        AllResultPlayModule.prototype.onBack = function () {
            ModuleMgr.ins.changeScene(ModuleEnum.GAME_SINGLE_RESULT, ModuleEnum.GAME_MAIN);
        };
        AllResultPlayModule.prototype.onCheck = function () {
        };
        return AllResultPlayModule;
    }(Module));
    game.AllResultPlayModule = AllResultPlayModule;
    __reflect(AllResultPlayModule.prototype, "game.AllResultPlayModule");
})(game || (game = {}));
//# sourceMappingURL=AllResultPlayModule.js.map