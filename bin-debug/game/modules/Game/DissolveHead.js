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
    var DissolveHead = (function (_super) {
        __extends(DissolveHead, _super);
        function DissolveHead() {
            return _super.call(this) || this;
        }
        DissolveHead.prototype.setData = function (startUserId, $user) {
            this.user = $user;
            if (startUserId == this.user.uid) {
                this.m_txt_top.text = "发起者";
            }
            else {
                if (game.GameModel.ins.roomModel.getIsAccept(this.user.uid) == 1) {
                    this.m_txt_top.text = "同意";
                }
                else if (game.GameModel.ins.roomModel.getIsAccept(this.user.uid) == 0) {
                    this.m_txt_top.text = "拒绝";
                }
                else {
                    this.m_txt_top.text = "投票中";
                }
            }
            this.m_txt_name.text = this.user.name;
            this.m_txt_score.text = this.user.sc.toString();
            this.m_head.setURL(this.user.avatar);
        };
        DissolveHead.prototype.setState = function (act) {
            if (act == 1) {
                this.m_txt_top.text = "同意";
            }
            else {
                this.m_txt_top.text = "拒绝";
            }
        };
        return DissolveHead;
    }(UI.Game.UI_DissolveHead));
    game.DissolveHead = DissolveHead;
    __reflect(DissolveHead.prototype, "game.DissolveHead");
})(game || (game = {}));
//# sourceMappingURL=DissolveHead.js.map