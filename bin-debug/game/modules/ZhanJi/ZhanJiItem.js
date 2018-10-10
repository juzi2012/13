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
    var ZhanJiItem = (function (_super) {
        __extends(ZhanJiItem, _super);
        function ZhanJiItem() {
            var _this = _super.call(this) || this;
            _this.maxScore = 0;
            _this.addClickListener(_this.onClick, _this);
            return _this;
        }
        ZhanJiItem.prototype.setData = function (value) {
            this.data = value;
            this.users = [];
            this.m_txt_rid.text = "房号:" + this.data.Rd;
            this.m_txt_jushu.text = "局数:" + this.data.Jn;
            this.m_txt_time.text = Utils.timetrans(this.data.Tm * 1000);
            for (var item in this.data.playerFinalData) {
                var user = new ZhanJiUser();
                user.uid = this.data.playerFinalData[item].uid;
                user.uname = this.data.playerFinalData[item]['name'];
                user.sc = this.data.playerFinalData[item]['sc'];
                if (user.uid == game.GameModel.ins.uid) {
                    if (user.sc > 0) {
                        this.m_img_result.url = "ui://lxifvkdup0d65";
                    }
                    else if (user.sc == 0) {
                        this.m_img_result.url = "ui://lxifvkdup0d63";
                    }
                    else {
                        this.m_img_result.url = "ui://lxifvkdup0d64";
                    }
                }
                if (user.sc > this.maxScore) {
                    this.maxScore = user.sc;
                }
                this.users.push(user);
            }
            // this.users.sort((a,b)=>{
            // 	return b.sc-a.sc;
            // })
            this.m_list.itemRenderer = this.RenderListItem;
            this.m_list.callbackThisObj = this;
            this.m_list.numItems = this.users.length;
            this.m_btn_check.addClickListener(this.replay, this);
        };
        ZhanJiItem.prototype.replay = function (evt) {
            evt.stopImmediatePropagation();
            if (this.data.jus.length > 0) {
                ModuleMgr.ins.changeScene(ModuleEnum.GAME_MAIN, ModuleEnum.REPLAY, this.data);
            }
            else {
                game.AlertUtil.floatMsg("牌局数据有问题！");
            }
        };
        ZhanJiItem.prototype.RenderListItem = function (index, _item) {
            var item = _item;
            item.setData(this.users[index], this.maxScore);
        };
        ZhanJiItem.prototype.onClick = function (evt) {
            if (this.data.jus.length > 0) {
                ModuleMgr.ins.showModule(ModuleEnum.ZHANJIDETAIL, this.data);
            }
            else {
                game.AlertUtil.floatMsg("牌局数据有问题！");
            }
        };
        return ZhanJiItem;
    }(UI.ZhanJi.UI_ZhanJiItem));
    game.ZhanJiItem = ZhanJiItem;
    __reflect(ZhanJiItem.prototype, "game.ZhanJiItem");
    var ZhanJiUser = (function () {
        function ZhanJiUser() {
        }
        return ZhanJiUser;
    }());
    game.ZhanJiUser = ZhanJiUser;
    __reflect(ZhanJiUser.prototype, "game.ZhanJiUser");
})(game || (game = {}));
//# sourceMappingURL=ZhanJiItem.js.map