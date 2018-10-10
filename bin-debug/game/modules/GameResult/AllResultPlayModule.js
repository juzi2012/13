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
            this.mContent.m_btn_share.addClickListener(this.onShare, this);
            this.mContent.m_txt_roomid.text = "房间:" + this.round.Rd;
            this.mContent.m_txt_info.text = this.round.Fc + "人 ";
            // this.mContent.m_c1.selectedIndex=1;
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
        /**
         * 点击分享截屏按钮
         * Click the button
         */
        AllResultPlayModule.prototype.onShare = function () {
            var renderTexture = new egret.RenderTexture();
            renderTexture.drawToTexture(this.mContent.displayObject); //渲染到临时画布
            var divImage = document.getElementById("divImage"); //获取DIV
            var shareImage = document.getElementById("shareImage"); //获取Image标签		
            shareImage.src = renderTexture.toDataURL('image/jpeg'); //把数据赋值给Image
            divImage.style.display = "block"; //显示DIV
        };
        return AllResultPlayModule;
    }(Module));
    game.AllResultPlayModule = AllResultPlayModule;
    __reflect(AllResultPlayModule.prototype, "game.AllResultPlayModule");
})(game || (game = {}));
//# sourceMappingURL=AllResultPlayModule.js.map