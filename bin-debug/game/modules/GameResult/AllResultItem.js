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
    var AllResultItem = (function (_super) {
        __extends(AllResultItem, _super);
        function AllResultItem() {
            return _super.call(this) || this;
        }
        AllResultItem.prototype.setData = function (index, value) {
            if (index == 0) {
                this.m_winner.visible = true;
            }
            else {
                this.m_winner.visible = false;
            }
            var user = game.GameModel.ins.roomModel.getUserById(value.uid);
            this.m_txt_name.text = user.name;
            this.m_txt_id.text = "ID:" + user.uid;
            for (var i = 0; i < 6; i++) {
                if (value.scoreArr[i] != null) {
                    var score = value.scoreArr[i].toString();
                    if (value.scoreArr[i] > 0) {
                        // score = "+"+score;
                        this.m_bg.url = 'ui://25mni52ohmwn1h';
                    }
                    else {
                        this.m_bg.url = 'ui://25mni52ohmwn1g';
                    }
                    this['m_txt_ju' + i].text = "第" + (i + 1) + "局:" + score;
                }
                else {
                    this['m_txt_ju' + i].text = "";
                }
            }
            if (value.resultScore > 0) {
                this.m_txt_score.text = "+" + value.resultScore;
            }
            else {
                this.m_txt_score.text = value.resultScore.toString();
            }
        };
        AllResultItem.prototype.setDataPlay = function (index, value) {
            if (index == 0) {
                this.m_winner.visible = true;
            }
            else {
                this.m_winner.visible = false;
            }
            var scoreArr = value.getScoreById(value.playerFinalData[index].uid);
            this.m_txt_name.text = value.playerFinalData[index].name;
            this.m_txt_id.text = "ID:" + value.playerFinalData[index].uid;
            for (var i = 0; i < 6; i++) {
                if (scoreArr[i] != null) {
                    var score = scoreArr[i].toString();
                    if (scoreArr[i] > 0) {
                        score = "+" + score;
                    }
                    this['m_txt_ju' + i].text = "第" + (i + 1) + "局:" + score;
                }
                else {
                    this['m_txt_ju' + i].text = "";
                }
            }
            if (value.playerFinalData[index]['sc'] > 0) {
                this.m_txt_score.text = "+" + value.playerFinalData[index]['sc'];
            }
            else {
                this.m_txt_score.text = value.playerFinalData[index]['sc'].toString();
            }
        };
        return AllResultItem;
    }(UI.Result.UI_AllResultItem));
    game.AllResultItem = AllResultItem;
    __reflect(AllResultItem.prototype, "game.AllResultItem");
})(game || (game = {}));
//# sourceMappingURL=AllResultItem.js.map