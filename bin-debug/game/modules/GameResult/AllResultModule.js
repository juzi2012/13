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
            var fufei = game.GameModel.ins.roomModel.rinfo.fc == 2 ? "房主付费" : "房费AA ";
            var reshu = game.GameModel.ins.roomModel.rinfo.pn + "人 ";
            var jushu = game.GameModel.ins.roomModel.rinfo.snum + "局 ";
            console.log(fufei);
            console.log(reshu);
            console.log(jushu);
            this.mContent.m_txt_info.text = fufei + reshu + jushu;
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
            if (game.GameModel.ins.roomModel.hasPlayedJu < game.GameModel.ins.roomModel.rinfo.snum) {
                game.AlertUtil.floatMsg("房间已经解散");
            }
            game.GameModel.ins.disMissRoom();
            ModuleMgr.ins.changeScene(ModuleEnum.GAME_SINGLE_RESULT, ModuleEnum.GAME_MAIN);
        };
        /**
         * 点击分享截屏按钮
         * Click the button
         */
        AllResultModule.prototype.onShare = function () {
            var renderTexture = new egret.RenderTexture();
            renderTexture.drawToTexture(this.mContent.displayObject); //渲染到临时画布
            var divImage = document.getElementById("divImage"); //获取DIV
            var shareImage = document.getElementById("shareImage"); //获取Image标签		
            shareImage.src = renderTexture.toDataURL('image/jpeg'); //把数据赋值给Image
            divImage.style.display = "block"; //显示DIV
        };
        return AllResultModule;
    }(Module));
    game.AllResultModule = AllResultModule;
    __reflect(AllResultModule.prototype, "game.AllResultModule");
})(game || (game = {}));
//# sourceMappingURL=AllResultModule.js.map