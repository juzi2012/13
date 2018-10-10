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
    var UserInfoPanel = (function (_super) {
        __extends(UserInfoPanel, _super);
        function UserInfoPanel() {
            return _super.call(this) || this;
        }
        UserInfoPanel.prototype.initContent = function () {
            this.content = UI.Game.UI_UserInfo.createInstance();
        };
        Object.defineProperty(UserInfoPanel.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 预显示
         */
        UserInfoPanel.prototype.preShow = function (data) {
            this.user = data;
            this.mContent.m_btn_close.addClickListener(this.onClose, this);
            this.mContent.m_btn_zadan.addClickListener(this.onZaDan, this);
            this.mContent.m_btn_flower.addClickListener(this.onFlower, this);
            this.mContent.m_head.setURL(this.user.avatar);
            this.mContent.m_txt_name.text = '昵称:' + this.user.name;
            this.mContent.m_txt_id.text = 'ID:' + this.user.uid;
            this.mContent.m_txt_score.text = '积分:' + this.user.sc.toString();
            this.mContent.m_txt_pos.text = '';
            _super.prototype.preShow.call(this, data);
        };
        UserInfoPanel.prototype.show = function (data) {
            _super.prototype.show.call(this, data);
        };
        UserInfoPanel.prototype.onZaDan = function () {
            if (this.user.uid == game.GameModel.ins.uid) {
                for (var i = 0; i < game.GameModel.ins.roomModel.users.length; i++) {
                    if (game.GameModel.ins.roomModel.users[i].uid != game.GameModel.ins.uid) {
                        game.ServerEngine.sendFlower(game.GameModel.ins.roomModel.users[i].uid + "|boom");
                    }
                }
            }
            else {
                game.ServerEngine.sendFlower(this.user.uid + "|boom");
            }
            this.onClose();
        };
        UserInfoPanel.prototype.onFlower = function () {
            if (this.user.uid == game.GameModel.ins.uid) {
                for (var i = 0; i < game.GameModel.ins.roomModel.users.length; i++) {
                    if (game.GameModel.ins.roomModel.users[i].uid != game.GameModel.ins.uid) {
                        game.ServerEngine.sendFlower(game.GameModel.ins.roomModel.users[i].uid + "|flower");
                    }
                }
            }
            else {
                game.ServerEngine.sendFlower(this.user.uid + "|flower");
            }
            this.onClose();
        };
        UserInfoPanel.prototype.onClose = function () {
            ModuleMgr.ins.closeModule(ModuleEnum.USERINFO);
        };
        return UserInfoPanel;
    }(PopModuleView));
    game.UserInfoPanel = UserInfoPanel;
    __reflect(UserInfoPanel.prototype, "game.UserInfoPanel");
})(game || (game = {}));
//# sourceMappingURL=UserInfoPanel.js.map