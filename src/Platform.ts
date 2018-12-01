/** 
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
declare interface Platform {

    getUserInfo(): Promise<any>;

    login(): Promise<any>

}

class DebugPlatform implements Platform {
    private info:any="";
    async getUserInfo() {
        console.log("拿取结果")
        return game.OptModel.ins;
    }
    private getJSON() {
        var promise = new Promise(function(resolve, reject){
            game.OptModel.ins.appId = egret.getOption("appId");
            game.OptModel.ins.channelId = egret.getOption("channelId");
            game.OptModel.ins.time = egret.getOption("time");
            game.OptModel.ins.token = egret.getOption("token");
            game.OptModel.ins.state = egret.getOption("state");
            game.OptModel.ins.setKeFu();
            game.GameModel.ins.init();
            game.OptModel.ins.sign = new md5().hex_md5("appId="+game.OptModel.ins.appId+"channelId="+game.OptModel.ins.channelId+"time="+game.OptModel.ins.time+"token="+game.OptModel.ins.token+game.GameModel.ins.key);//egret.getOption("sign");
            let parentUrl:string = getParentUrl();
            console.log("父级url----"+parentUrl);
            game.OptModel.ins.shareRoomId = core.LocationProperty.getPara("shareRoomId",parentUrl);
            game.OptModel.ins.shareUserId = core.LocationProperty.getPara("shareUserId",parentUrl);
            game.OptModel.ins.shareRePlayRoomId = core.LocationProperty.getPara("shareRePlayRoomId",parentUrl);
            console.log("roomid----"+game.OptModel.ins.shareRoomId);

            console.log(game.OptModel.ins.appId)
            console.log(game.OptModel.ins.channelId)
            console.log(game.OptModel.ins.sign)
            console.log(game.OptModel.ins.state)
            console.log(game.OptModel.ins.time)
            console.log(game.OptModel.ins.token)
            console.log(game.OptModel.ins.shareRoomId)
            var urls:string = game.GameModel.ins.HttpSerever;
            var urlreq:egret.URLRequest = new egret.URLRequest();
            var urlvar:egret.URLVariables = new egret.URLVariables();
            urlvar.variables ={'appId':game.OptModel.ins.appId,'channelId':game.OptModel.ins.channelId
                            ,'sign':game.OptModel.ins.sign,'time':game.OptModel.ins.time,'token':game.OptModel.ins.token} 

            urlreq.data = urlvar;
            urlreq.url = urls;
            var loader:egret.URLLoader = new egret.URLLoader();
            loader.addEventListener(egret.Event.COMPLETE,function reqeustCallBack(evt:egret.Event):void
            {
                console.log("收到结果")
                var loader: egret.URLLoader = <egret.URLLoader>evt.target;
                let data: Object;
                var str: string = evt.currentTarget.data;
                data = JSON.parse(str);
                console.log(data['data']);
                if(data['data']!=null){
                    game.OptModel.ins.name = data['data']['nickname'];
                    game.OptModel.ins.head = data['data']['avatar'];
                    game.GameModel.ins.card = Number(data['data']['fangka']);
                    resolve(data["data"]);
                }else{
                    reject(new Error(data['message'])); 
                }
            },this);
            loader.load(urlreq);
        });

        return promise;
    };
    async login() {
       await this.getJSON().then(this.onsuccess,this.onerror);
    }
    private onsuccess(json){
        console.log('Contents: ' + json);
        console.log(json['nickname']);
        console.log(JSON.stringify(json));
        this.info = json;
    }
    private onerror(error){
        console.error('出错了', error);
    }
    
}


if (!window.platform) {
    window.platform = new DebugPlatform();
}



declare let platform: Platform;

declare interface Window {

    platform: Platform
}





