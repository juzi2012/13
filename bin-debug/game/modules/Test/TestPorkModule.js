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
    var TestPorkModule = (function (_super) {
        __extends(TestPorkModule, _super);
        function TestPorkModule() {
            var _this = _super.call(this) || this;
            _this.arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
                50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
                65, 66];
            return _this;
        }
        TestPorkModule.prototype.initContent = function () {
            this.content = UI.TestPork.UI_TestPork.createInstance();
        };
        Object.defineProperty(TestPorkModule.prototype, "mContent", {
            get: function () {
                return this.content;
            },
            enumerable: true,
            configurable: true
        });
        TestPorkModule.prototype.preShow = function (data) {
            this.mContent.m_list1.itemRenderer = this.RenderListItem;
            this.mContent.m_list1.callbackThisObj = this;
            this.mContent.m_list1.addEventListener(fairygui.ItemEvent.CLICK, this.onClickPork, this);
            this.mContent.m_list1.numItems = 54;
            this.mContent.m_list2.itemRenderer = this.RenderListItem1;
            this.mContent.m_list2.callbackThisObj = this;
            this.mContent.m_list2.addEventListener(fairygui.ItemEvent.CLICK, this.onClickPork1, this);
            this.selectArr = [];
            this.mContent.m_btn_ok.addClickListener(this.showPut, this);
            this.preShowCpl();
        };
        TestPorkModule.prototype.showPut = function () {
            game.GameModel.ins.createRoundTest1(this.selectArr);
            ModuleMgr.ins.showModule(ModuleEnum.GAME_PUT_PORK, []);
        };
        TestPorkModule.prototype.RenderListItem = function (index, _pork) {
            var pork = _pork;
            var porkVo = new game.PorkVO(game.PorkUtil.ChangeServerCardToClient(this.arr[index]));
            pork.setData(porkVo);
        };
        //手动选择牌
        TestPorkModule.prototype.onClickPork = function (evt) {
            if (this.selectArr.length < 13) {
                var selectedPork = evt.itemObject;
                this.selectArr.push(selectedPork.vo);
                this.selectArr.sort(function (a, b) {
                    return b.point - a.point;
                });
                this.rendSelect();
            }
        };
        TestPorkModule.prototype.rendSelect = function () {
            this.mContent.m_btn_ok.visible = false;
            if (this.selectArr.length == 13) {
                this.mContent.m_btn_ok.visible = true;
                var pt = [];
                for (var i = 0; i < this.selectArr.length; i++) {
                    pt.push(this.selectArr[i].data);
                }
                // console.log(pt);
                // return;
            }
            this.mContent.m_list2.numItems = this.selectArr.length;
        };
        TestPorkModule.prototype.RenderListItem1 = function (index, _pork) {
            var pork = _pork;
            var porkVo = this.selectArr[index];
            pork.setData(porkVo);
        };
        //手动选择牌
        TestPorkModule.prototype.onClickPork1 = function (evt) {
            var selectedPork = evt.itemObject;
            for (var i = 0; i < this.selectArr.length; i++) {
                if (selectedPork.vo == this.selectArr[i]) {
                    this.selectArr.splice(i, 1);
                    break;
                }
            }
            this.selectArr.sort(function (a, b) {
                return b.point - a.point;
            });
            this.rendSelect();
        };
        return TestPorkModule;
    }(PopModuleView));
    game.TestPorkModule = TestPorkModule;
    __reflect(TestPorkModule.prototype, "game.TestPorkModule");
})(game || (game = {}));
//# sourceMappingURL=TestPorkModule.js.map