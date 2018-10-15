var __reflect=this&&this.__reflect||function(e,r,t){e.__class__=r,t?t.push(r):t=[r],e.__types__=e.__types__?t.concat(e.__types__):t},__extends=this&&this.__extends||function(e,r){function t(){this.constructor=e}for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o]);t.prototype=r.prototype,e.prototype=new t},__awaiter=this&&this.__awaiter||function(e,r,t,o){return new(t||(t=Promise))(function(n,i){function a(e){try{u(o.next(e))}catch(r){i(r)}}function s(e){try{u(o["throw"](e))}catch(r){i(r)}}function u(e){e.done?n(e.value):new t(function(r){r(e.value)}).then(a,s)}u((o=o.apply(e,r||[])).next())})},__generator=this&&this.__generator||function(e,r){function t(e){return function(r){return o([e,r])}}function o(t){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,i&&(a=i[2&t[0]?"return":t[0]?"throw":"next"])&&!(a=a.call(i,t[1])).done)return a;switch(i=0,a&&(t=[0,a.value]),t[0]){case 0:case 1:a=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,i=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;default:if(a=u.trys,!(a=a.length>0&&a[a.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){u.label=t[1];break}if(6===t[0]&&u.label<a[1]){u.label=a[1],a=t;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(t);break}a[2]&&u.ops.pop(),u.trys.pop();continue}t=r.call(e,u)}catch(o){t=[6,o],i=0}finally{n=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}var n,i,a,s,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:t(0),"throw":t(1),"return":t(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},__decorate=this&&this.__decorate||function(e,r,t,o){var n,i=arguments.length,a=3>i?r:null===o?o=Object.getOwnPropertyDescriptor(r,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,r,t,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(3>i?n(a):i>3?n(r,t,a):n(r,t))||a);return i>3&&a&&Object.defineProperty(r,t,a),a},RES;!function(e){function r(r){var t=e.fileSystem.getFile(r);return t||(r=e.resourceNameSelector(r),t=e.fileSystem.getFile(r)),t}function t(e,r){var t;t=e.indexOf(".json")>=0?"legacyResourceConfig":"resourceConfig",o={type:t,root:r,url:e,name:e}}e.resourceNameSelector=function(e){return e},e.getResourceInfo=r;var o;e.setConfigURL=t;var n=function(){function t(){}return t.prototype.init=function(){var r=this;return this.config||(this.config={alias:{},groups:{},resourceRoot:o.root,typeSelector:function(){return"unknown"},mergeSelector:null,fileSystem:null}),e.queue.loadResource(o).then(function(e){return r.parseConfig(e)})["catch"](function(r){return r.__resource_manager_error__||(console.error(r.stack),r=new e.ResourceManagerError(1002)),Promise.reject(r)})},t.prototype.getGroupByName=function(r,t){var o=this.config.groups[r],n=[];if(!o){if(t)throw new e.ResourceManagerError(2005,r);return null}for(var i=0,a=o;i<a.length;i++){var s=a[i],u=e.config.getResourceWithSubkey(s,!0),c=u.key,f=(u.subkey,e.config.getResource(c,!0));-1==n.indexOf(f)&&n.push(f)}return n},t.prototype.__temp__get__type__via__url=function(r){var t=this.config.alias[r];if(t||(t=r),e.resourceTypeSelector){var o=e.resourceTypeSelector(t);if(!o)throw new e.ResourceManagerError(2004,t);return o}return console.warn("RES.mapConfig 并未设置 typeSelector"),"unknown"},t.prototype.getResourceWithSubkey=function(r,t){r=this.getKeyByAlias(r);var o=r.indexOf("#"),n="";o>=0&&(n=r.substr(o+1),r=r.substr(0,o));var i=this.getResource(r);if(i)return{r:i,key:r,subkey:n};if(t){var a=n?r+"#"+n:r;throw new e.ResourceManagerError(2006,a)}return null},t.prototype.getKeyByAlias=function(e){return this.config.alias[e]?this.config.alias[e]:e},t.prototype.getResource=function(t,o){var n=this.config.alias[t];n||(n=t);var i=r(n);if(!i){if(o)throw new e.ResourceManagerError(2006,t);return null}return i},t.prototype.getGroup=function(e){return this.getGroupByName(e)},t.prototype.createGroup=function(e,r,t){if(void 0===t&&(t=!1),!t&&this.config.groups[e]||!r||0==r.length)return!1;for(var o=[],n=0,i=r;n<i.length;n++){var a=i[n];if(this.config.groups[a]){var s=this.config.groups[a];o=o.concat(s)}else o.push(a)}return this.config.groups[e]=o,!0},t.prototype.parseConfig=function(r){this.config=r,e.fileSystem=r.fileSystem},t.prototype.addSubkey=function(e,r){this.addAlias(e,r+"#"+e)},t.prototype.addAlias=function(e,r){this.config.alias[r]&&(r=this.config.alias[r]),this.config.alias[e]=r},t.prototype.getType=function(e){return this.getResource(e,!0).type},t.prototype.addResourceData=function(r){e.hasRes(r.name)||(r.type||(r.type=this.__temp__get__type__via__url(r.url)),e.fileSystem.addFile(r.url,r.type,r.root),r.name&&(this.config.alias[r.name]=r.url))},t.prototype.destory=function(){e.systemPid++;var r={getFile:function(){return null},addFile:function(){},profile:function(){}};this.config={groups:{},alias:{},fileSystem:r,typeSelector:function(e){return e},resourceRoot:"resources",mergeSelector:null}},t}();e.ResourceConfig=n,__reflect(n.prototype,"RES.ResourceConfig")}(RES||(RES={}));var RES;!function(e){var r=function(){function r(){this.groupTotalDic={},this.numLoadedDic={},this.itemListDic={},this.groupErrorDic={},this.retryTimesDic={},this.maxRetryTimes=3,this.priorityQueue={},this.reporterDic={},this.dispatcherDic={},this.failedList=new Array,this.loadItemErrorDic={},this.errorDic={},this.loadingCount=0,this.thread=4,this.queueIndex=0}return r.prototype.load=function(e,r,t,o){var n=this;if(this.itemListDic[r]){if(!this.dispatcherDic[r]){var i=new egret.EventDispatcher;this.dispatcherDic[r]=i}var a=new Promise(function(e,t){n.dispatcherDic[r].addEventListener("complete",e,null),n.dispatcherDic[r].addEventListener("error",function(e){t(e.data)},null)});return a}for(var s=e.length,u=0;s>u;u++){var c=e[u];c.groupNames||(c.groupNames=[]),c.groupNames.push(r)}this.itemListDic[r]=e,this.groupTotalDic[r]=e.length,this.numLoadedDic[r]=0,this.priorityQueue[t]?this.priorityQueue[t].push(r):this.priorityQueue[t]=[r],this.reporterDic[r]=o;var f=new egret.EventDispatcher;this.dispatcherDic[r]=f;var l=new Promise(function(e,r){f.addEventListener("complete",e,null),f.addEventListener("error",function(e){r(e.data)},null)});return this.next(),l},r.prototype.next=function(){for(var r=this,t=function(){var t=o.getOneResourceInfo();return t?(o.loadingCount++,void o.loadResource(t).then(function(o){r.loadingCount--,e.host.save(t,o);var n=t.groupNames.shift();0==t.groupNames.length&&(t.groupNames=void 0);var i=r.reporterDic[n];r.numLoadedDic[n]++;var a=r.numLoadedDic[n],s=r.groupTotalDic[n];if(i&&i.onProgress&&i.onProgress(a,s),a==s){var u=r.groupErrorDic[n];r.removeGroupName(n),delete r.groupTotalDic[n],delete r.numLoadedDic[n],delete r.itemListDic[n],delete r.groupErrorDic[n];var c=r.dispatcherDic[n];if(u){var f=r.loadItemErrorDic[n];delete r.loadItemErrorDic[n];var l=r.errorDic[n];delete r.errorDic[n],c.dispatchEventWith("error",!1,{itemList:f,error:l})}else c.dispatchEventWith("complete")}r.next()})["catch"](function(o){if(!o.__resource_manager_error__)throw o;r.loadingCount--,delete e.host.state[t.root+t.name];var n=r.retryTimesDic[t.name]||1;if(!(n>r.maxRetryTimes))return r.retryTimesDic[t.name]=n+1,r.failedList.push(t),void r.next();delete r.retryTimesDic[t.name];var i=t.groupNames.shift();0==t.groupNames.length&&delete t.groupNames,r.loadItemErrorDic[i]||(r.loadItemErrorDic[i]=[]),-1==r.loadItemErrorDic[i].indexOf(t)&&r.loadItemErrorDic[i].push(t),r.groupErrorDic[i]=!0;var a=r.reporterDic[i];r.numLoadedDic[i]++;var s=r.numLoadedDic[i],u=r.groupTotalDic[i];if(a&&a.onProgress&&a.onProgress(s,u),s==u){r.groupErrorDic[i];r.removeGroupName(i),delete r.groupTotalDic[i],delete r.numLoadedDic[i],delete r.itemListDic[i],delete r.groupErrorDic[i];var c=r.loadItemErrorDic[i];delete r.loadItemErrorDic[i];var f=r.dispatcherDic[i];f.dispatchEventWith("error",!1,{itemList:c,error:o})}else r.errorDic[i]=o;r.next()})):"break"},o=this;this.loadingCount<this.thread;){var n=t();if("break"===n)break}},r.prototype.removeGroupName=function(e){for(var r in this.priorityQueue){for(var t=this.priorityQueue[r],o=0,n=!1,i=t.length,a=0;i>a;a++){var s=t[a];if(s==e){t.splice(o,1),n=!0;break}o++}if(n){0==t.length&&delete this.priorityQueue[r];break}}},r.prototype.getOneResourceInfo=function(){if(this.failedList.length>0)return this.failedList.shift();var e=Number.NEGATIVE_INFINITY;for(var r in this.priorityQueue)e=Math.max(e,r);var t=this.priorityQueue[e];if(t&&0!=t.length){for(var o=t.length,n=[],i=0;o>i&&(this.queueIndex>=o&&(this.queueIndex=0),n=this.itemListDic[t[this.queueIndex]],!(n.length>0));i++)this.queueIndex++;if(0!=n.length)return n.shift()}},r.prototype.loadResource=function(r,t){if(!t){if(1==e.FEATURE_FLAG.FIX_DUPLICATE_LOAD){var o=e.host.state[r.root+r.name];if(2==o)return Promise.resolve(e.host.get(r));if(1==o)return r.promise}t=e.processor.isSupport(r)}if(!t)throw new e.ResourceManagerError(2001,r.name,r.type);e.host.state[r.root+r.name]=1;var n=t.onLoadStart(e.host,r);return r.promise=n,n},r.prototype.unloadResource=function(r){var t=e.host.get(r);if(!t)return console.warn("尝试释放不存在的资源:",r.name),Promise.resolve();var o=e.processor.isSupport(r);if(o){e.host.state[r.root+r.name]=3;var n=o.onRemoveStart(e.host,r);return e.host.remove(r),n}return Promise.resolve()},r}();e.ResourceLoader=r,__reflect(r.prototype,"RES.ResourceLoader")}(RES||(RES={}));var RES;!function(e){function r(){e.fileSystem.profile(),console.log(t);var r=0;for(var o in t){var n=t[o];n instanceof egret.Texture&&(r+=n.$bitmapWidth*n.$bitmapHeight*4)}console.log("gpu size : "+(r/1024).toFixed(3)+"kb")}var t={};e.systemPid=0,e.checkCancelation=function(r,t,n){var i=n.value;n.value=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var n=e.systemPid,a=i.apply(this,r);return a.then(function(t){if(e.systemPid!=n)throw new o(1005,r[0]);return t})}},e.profile=r,e.host={state:{},get resourceConfig(){return e.config},load:function(r,t){var o="string"==typeof t?e.processor._map[t]:t;return e.queue.loadResource(r,o)},unload:function(r){return e.queue.unloadResource(r)},save:function(r,o){e.host.state[r.root+r.name]=2,r.promise=void 0,t[r.url]=o},get:function(e){return t[e.url]},remove:function(r){e.host.state[r.root+r.name]=0,delete t[r.url]}},e.config=new e.ResourceConfig,e.queue=new e.ResourceLoader;var o=function(e){function r(t,o,n){var i=e.call(this)||this;return i.__resource_manager_error__=!0,i.name=t.toString(),i.message=r.errorMessage[t].replace("{0}",o).replace("{1}",n),i}return __extends(r,e),r.errorMessage={1001:"文件加载失败:{0}",1002:"ResourceManager 初始化失败：配置文件加载失败",1005:"ResourceManager 已被销毁，文件加载失败:{0}",2001:"{0}解析失败,不支持指定解析类型:'{1}'，请编写自定义 Processor ，更多内容请参见 https://github.com/egret-labs/resourcemanager/blob/master/docs/README.md#processor",2002:"Analyzer 相关API 在 ResourceManager 中不再支持，请编写自定义 Processor ，更多内容请参见 https://github.com/egret-labs/resourcemanager/blob/master/docs/README.md#processor",2003:"{0}解析失败,错误原因:{1}",2004:"无法找到文件类型:{0}",2005:"资源配置文件中无法找到特定的资源组:{0}",2006:"资源配置文件中无法找到特定的资源:{0}"},r}(Error);e.ResourceManagerError=o,__reflect(o.prototype,"RES.ResourceManagerError")}(RES||(RES={}));var RES;!function(e){e.checkNull=function(e,r,t){var o=t.value;t.value=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e[0]?o.apply(this,e):(console.warn("方法"+r+"的参数不能为null"),null)}},e.FEATURE_FLAG={FIX_DUPLICATE_LOAD:1};var r;!function(e){function r(e){t=e}var t="warning";e.setUpgradeGuideLevel=r}(r=e.upgrade||(e.upgrade={}))}(RES||(RES={}));var RES;!function(e){var r;!function(r){function t(e){return r._map[e.type]}function o(e,t){r._map[e]=t}function n(r,t){return __awaiter(this,void 0,void 0,function(){var o=this;return __generator(this,function(n){return[2,new Promise(function(n,i){var a=function(){var e=r.data?r.data:r.response;n(e)},s=function(){var r=new e.ResourceManagerError(1001,t.url);i(r)};r.addEventListener(egret.Event.COMPLETE,a,o),r.addEventListener(egret.IOErrorEvent.IO_ERROR,s,o)})]})})}function i(r){if(-1!=r.url.indexOf("://"))return r.url;var t=r.root,o=t+r.url;return e.getRealURL?e.getRealURL(o):o}function a(e,r){if(-1!=r.indexOf("://"))return r;e=e.split("\\").join("/");var t=e.match(/#.*|\?.*/),o="";t&&(o=t[0]);var n=e.lastIndexOf("/");return e=-1!=n?e.substring(0,n+1)+r:r,e+o}function s(e,r,t){switch(e){case c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG:case c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:return Math.floor((Math.max(r,8)*Math.max(t,8)*4+7)/8);case c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG:case c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:return Math.floor((Math.max(r,16)*Math.max(t,8)*2+7)/8);default:return 0}}r.isSupport=t,r.map=o,r.getRelativePath=a,r.ImageProcessor={onLoadStart:function(e,r){return __awaiter(this,void 0,void 0,function(){var t,o,a,s,u;return __generator(this,function(c){switch(c.label){case 0:return t=new egret.ImageLoader,t.load(i(r)),[4,n(t,r)];case 1:return o=c.sent(),a=new egret.Texture,a._setBitmapData(o),s=e.resourceConfig.getResource(r.name),s&&s.scale9grid&&(u=s.scale9grid.split(","),a.scale9Grid=new egret.Rectangle(parseInt(u[0]),parseInt(u[1]),parseInt(u[2]),parseInt(u[3]))),[2,a]}})})},onRemoveStart:function(e,r){var t=e.get(r);return t.dispose(),Promise.resolve()}},r.BinaryProcessor={onLoadStart:function(e,r){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(o){switch(o.label){case 0:return e=new egret.HttpRequest,e.responseType=egret.HttpResponseType.ARRAY_BUFFER,e.open(i(r),"get"),e.send(),[4,n(e,r)];case 1:return t=o.sent(),[2,t]}})})},onRemoveStart:function(e,r){return Promise.resolve()}},r.TextProcessor={onLoadStart:function(e,r){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(o){switch(o.label){case 0:return e=new egret.HttpRequest,e.responseType=egret.HttpResponseType.TEXT,e.open(i(r),"get"),e.send(),[4,n(e,r)];case 1:return t=o.sent(),[2,t]}})})},onRemoveStart:function(e,r){return Promise.resolve()}},r.JsonProcessor={onLoadStart:function(e,r){return __awaiter(this,void 0,void 0,function(){var t,o;return __generator(this,function(n){switch(n.label){case 0:return[4,e.load(r,"text")];case 1:return t=n.sent(),o=JSON.parse(t),[2,o]}})})},onRemoveStart:function(e,r){return Promise.resolve()}},r.XMLProcessor={onLoadStart:function(e,r){return __awaiter(this,void 0,void 0,function(){var t,o;return __generator(this,function(n){switch(n.label){case 0:return[4,e.load(r,"text")];case 1:return t=n.sent(),o=egret.XML.parse(t),[2,o]}})})},onRemoveStart:function(e,r){return Promise.resolve()}},r.CommonJSProcessor={onLoadStart:function(r,t){return __awaiter(this,void 0,void 0,function(){var o,n,i,a;return __generator(this,function(s){switch(s.label){case 0:return[4,r.load(t,"text")];case 1:o=s.sent(),n=new Function("require","exports",o),i=function(){},a={};try{n(i,a)}catch(u){throw new e.ResourceManagerError(2003,t.name,u.message)}return[2,a]}})})},onRemoveStart:function(e,r){return Promise.resolve()}},r.SheetProcessor={onLoadStart:function(e,r){return __awaiter(this,void 0,void 0,function(){var t,o,n,i,s,u,c,f,i,l,p;return __generator(this,function(g){switch(g.label){case 0:return[4,e.load(r,"json")];case 1:return t=g.sent(),o=a(r.url,t.file),n=e.resourceConfig.getResource(t.file),n||(n={name:o,url:o,type:"image",root:r.root}),[4,e.load(n)];case 2:i=g.sent(),s=t.frames,u=new egret.SpriteSheet(i),u.$resourceInfo=n;for(c in s)f=s[c],i=u.createTexture(c,f.x,f.y,f.w,f.h,f.offX,f.offY,f.sourceW,f.sourceH),f.scale9grid&&(l=f.scale9grid,p=l.split(","),i.scale9Grid=new egret.Rectangle(parseInt(p[0]),parseInt(p[1]),parseInt(p[2]),parseInt(p[3])));return e.save(n,i),[2,u]}})})},getData:function(e,r,t,o){var n=e.get(r);return n?n.getTexture(o):(console.error("missing resource : "+t+"#"+o),null)},onRemoveStart:function(e,r){var t=e.get(r),o=t.$resourceInfo;return t.dispose(),e.unload(o),Promise.resolve()}};var u=function(e,r){var t="",o=r.split("\n"),n=o[2],i=n.indexOf('file="');-1!=i&&(n=n.substring(i+6),i=n.indexOf('"'),t=n.substring(0,i)),e=e.split("\\").join("/");var i=e.lastIndexOf("/");return e=-1!=i?e.substring(0,i+1)+t:t};r.FontProcessor={onLoadStart:function(e,r){return __awaiter(this,void 0,void 0,function(){var t,o,n,i,s,c;return __generator(this,function(f){switch(f.label){case 0:return[4,e.load(r,"text")];case 1:t=f.sent();try{o=JSON.parse(t)}catch(l){o=t}return n=r.name.replace("fnt","png"),i=e.resourceConfig.getResource(n),i||(n="string"==typeof o?u(r.url,o):a(r.url,o.file),i={name:n,url:n,type:"image",root:r.root}),[4,e.load(i)];case 2:return s=f.sent(),c=new egret.BitmapFont(s,o),c.$resourceInfo=i,e.save(i,s),[2,c]}})})},onRemoveStart:function(e,r){var t=e.get(r),o=t.$resourceInfo;return e.unload(o),Promise.resolve()}},r.SoundProcessor={onLoadStart:function(e,r){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=new egret.Sound,e.load(i(r)),[4,n(e,r)];case 1:return t.sent(),[2,e]}})})},onRemoveStart:function(e,r){return Promise.resolve()}},r.MovieClipProcessor={onLoadStart:function(r,t){var o,n;return r.load(t,"json").then(function(i){o=i;var a=t.name,s=a.substring(0,a.lastIndexOf("."))+".png";if(n=r.resourceConfig.getResource(s,!0),!n)throw new e.ResourceManagerError(1001,s);return r.load(n)}).then(function(e){r.save(n,e);var t=e,i=new egret.MovieClipDataFactory(o,t);return i})},onRemoveStart:function(e,r){var t=e.get(r);t.clearCache(),t.$spriteSheet.dispose();var o=r.name,n=o.substring(0,o.lastIndexOf("."))+".png",i=e.resourceConfig.getResource(n,!0);return e.unload(i)}},r.MergeJSONProcessor={onLoadStart:function(r,t){return __awaiter(this,void 0,void 0,function(){var o,n;return __generator(this,function(i){switch(i.label){case 0:return[4,r.load(t,"json")];case 1:o=i.sent();for(n in o)e.config.addSubkey(n,t.name);return[2,o]}})})},getData:function(e,r,t,o){var n=e.get(r);return n?n[o]:(console.error("missing resource :"+r.name),null)},onRemoveStart:function(e,r){return Promise.resolve()}},r.ResourceConfigProcessor={onLoadStart:function(r,t){return __awaiter(this,void 0,void 0,function(){var o,n;return __generator(this,function(i){switch(i.label){case 0:return[4,r.load(t,"commonjs")];case 1:return o=i.sent(),n=new e.NewFileSystem(o.resources),o.fileSystem=n,delete o.resource,e.resourceTypeSelector=o.typeSelector,e.resourceNameSelector=o.nameSelector?o.nameSelector:function(e){return e},[2,o]}})})},onRemoveStart:function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})}},r.LegacyResourceConfigProcessor={onLoadStart:function(r,t){return r.load(t,"json").then(function(r){var o=e.config.config,n=t.root,i=o.fileSystem;i||(i={fsData:{},getFile:function(e){return l[e]},addFile:function(e,r,t){r||(r=""),void 0==t&&(t=""),l[e]={name:e,type:r,url:e,root:t}},profile:function(){console.log(l)}},o.fileSystem=i);for(var a=o.groups,s=0,u=r.groups;s<u.length;s++){var c=u[s];a[c.name]=c.keys.split(",")}for(var f=o.alias,l=i.fsData,p=function(e){l[e.name]=e,l[e.name].root=n,e.subkeys&&e.subkeys.split(",").forEach(function(r){f[r]=e.name+"#"+r,f[e.name+"."+r]=e.name+"#"+r})},g=0,d=r.resources;g<d.length;g++){var v=d[g];p(v)}return o})},onRemoveStart:function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})}};var c=function(){function e(){}return e.parse=function(r,t,o){var n=13,i=new Uint32Array(r,0,n),a={buffer:r,header:i};55727696===i[0]?e._parseV3(a,t,o):559044176===i[11]?e._parseV2(a,t,o):o(a,"pvr parse error!")},e._parseV2=function(r,t,o){var n,i,a=r.header,s=a[0],u=a[1],c=a[2],f=a[3],l=a[4],n=(a[5],a[6]),p=(a[7],a[8],a[9],a[10]),g=(a[11],a[12]),d=255,v=24,h=25,_=l&d,R=p>0;_===h?(i=R?e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG:e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,n=4):_===v?(i=R?e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG:e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,n=2):(o(r,"pvr v2 parse error"),console.log("unknow format flags::"+_));var m=s;r.pvrtcData=new Uint8Array(r.buffer,m),r.bpp=n,r.format=i,r.width=c,r.height=u,r.surfacesCount=g,r.mipmapsCount=f+1,r.isCubemap=6===r.surfacesCount,t(r)},e._parseV3=function(r,t,o){var n,i,a=r.header,s=a[2];switch(s){case 0:n=2,i=e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;break;case 1:n=2,i=e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;break;case 2:n=4,i=e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;break;case 3:n=4,i=e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;break;default:o(r,"pvr v3 parse error"),console.log("unknow pixel format::"+s)}var u=52+a[12];r.pvrtcData=new Uint8Array(r.buffer,u),r.bpp=n,r.format=i,r.width=a[7],r.height=a[6],r.surfacesCount=a[10],r.mipmapsCount=a[11],r.isCubemap=6===r.surfacesCount,t(r)},e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840,e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841,e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842,e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843,e}();__reflect(c.prototype,"PVRParser"),"undefined"!=typeof egret&&egret&&egret.web&&egret.web.WebGLRenderContext&&(egret.web.WebGLRenderContext.prototype.createTextureFromCompressedData=function(e,r,t,o,n){var i=this.context;this.pvrtcExt||(this.pvrtcExt=i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"));var a=i.createTexture();i.bindTexture(i.TEXTURE_2D,a);for(var u=0,c=0;o>c;++c){var f=s(n,r,t),l=new Uint8Array(e.buffer,e.byteOffset+u,f);i.compressedTexImage2D(i.TEXTURE_2D,c,n,r,t,0,l),r>>=1,1>r&&(r=1),t>>=1,1>t&&(t=1),u+=f}return i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),a}),r.PVRProcessor={onLoadStart:function(e,r){return __awaiter(this,void 0,void 0,function(){var t,o,n,i,a,s,u,f,l,p,g,d,v;return __generator(this,function(h){switch(h.label){case 0:return[4,e.load(r,"bin")];case 1:for(t=h.sent(),o=512,n=512,i=0,a=0,s=new egret.ByteArray(t),s.position=7,u=["body","ext"],l=0;l<u.length;l++)switch(p=void 0,u[l]){case"body":s.position+=2,g=s.readUnsignedInt(),f=s.buffer.slice(s.position,s.position+g),s.position+=g;break;case"ext":s.position+=6,o=s.readUnsignedShort(),n=s.readUnsignedShort(),i=s.readUnsignedShort(),a=s.readUnsignedShort()}return d=this,c.parse(f,function(e){var r=new egret.BitmapData(e);r.format="pvr",v=new egret.Texture,v._setBitmapData(r),v.$initData(i,a,o,n,0,0,o,n,r.width,r.height)},function(){console.log("pvr error")}),[2,v]}})})},onRemoveStart:function(e,r){return Promise.resolve()}},r._map={image:r.ImageProcessor,json:r.JsonProcessor,text:r.TextProcessor,xml:r.XMLProcessor,sheet:r.SheetProcessor,font:r.FontProcessor,bin:r.BinaryProcessor,commonjs:r.CommonJSProcessor,sound:r.SoundProcessor,movieclip:r.MovieClipProcessor,pvr:r.PVRProcessor,mergeJson:r.MergeJSONProcessor,resourceConfig:r.ResourceConfigProcessor,legacyResourceConfig:r.LegacyResourceConfigProcessor}}(r=e.processor||(e.processor={}))}(RES||(RES={}));var RES;!function(e){function r(r,t){throw new e.ResourceManagerError(2002)}function t(r,t){if(t.indexOf("://")>=0){var o=t.split("://");t=o[0]+"://"+e.path.normalize(o[1]+"/")}else t=e.path.normalize(t+"/"),r=r.replace(t,"");return e.setConfigURL(r,t),R||(R=new _),R.loadConfig()}function o(e,r,t){return void 0===r&&(r=0),R.loadGroup(e,r,t)}function n(e){return R.isGroupLoaded(e)}function i(r){return R.getGroupByName(r).map(function(r){return e.ResourceItem.convertToResItem(r)})}function a(e,r,t){return void 0===t&&(t=!1),R.createGroup(e,r,t)}function s(e){return R.hasRes(e)}function u(e){return R.getRes(e)}function c(e,r,t){return R.getResAsync.apply(R,arguments)}function f(e,r,t,o){void 0===o&&(o=""),R.getResByUrl(e,r,t,o)}function l(e,r){return R.destroyRes(e,r)}function p(e){R||(R=new _),R.setMaxLoadingThread(e)}function g(e){R.setMaxRetryTimes(e)}function d(e,r,t,o,n){void 0===o&&(o=!1),void 0===n&&(n=0),R||(R=new _),R.addEventListener(e,r,t,o,n)}function v(e,r,t,o){void 0===o&&(o=!1),R.removeEventListener(e,r,t,o)}function h(e){R.addResourceData(e)}e.registerAnalyzer=r,e.loadConfig=t,e.loadGroup=o,e.isGroupLoaded=n,e.getGroupByName=i,e.createGroup=a,e.hasRes=s,e.getRes=u,e.getResAsync=c,e.getResByUrl=f,e.destroyRes=l,e.setMaxLoadingThread=p,e.setMaxRetryTimes=g,e.addEventListener=d,e.removeEventListener=v,e.$addResourceData=h;var _=function(r){function t(){return null!==r&&r.apply(this,arguments)||this}return __extends(t,r),t.prototype.loadConfig=function(){var r=this;return e.native_init(),e.config.init().then(function(t){e.ResourceEvent.dispatchResourceEvent(r,e.ResourceEvent.CONFIG_COMPLETE)},function(t){return e.ResourceEvent.dispatchResourceEvent(r,e.ResourceEvent.CONFIG_LOAD_ERROR),Promise.reject(t)})},t.prototype.isGroupLoaded=function(r){var t=e.config.getGroupByName(r,!0);return t.every(function(r){return null!=e.host.get(r)})},t.prototype.getGroupByName=function(r){return e.config.getGroupByName(r,!0)},t.prototype.loadGroup=function(r,t,o){var n=this;void 0===t&&(t=0);var i={onProgress:function(t,i){o&&o.onProgress&&o.onProgress(t,i),e.ResourceEvent.dispatchResourceEvent(n,e.ResourceEvent.GROUP_PROGRESS,r,void 0,t,i)}};return this._loadGroup(r,t,i).then(function(t){e.ResourceEvent.dispatchResourceEvent(n,e.ResourceEvent.GROUP_COMPLETE,r)},function(t){for(var o=t.itemList,i=o.length,a=0;i>a;a++){var s=o[a];delete s.promise,e.ResourceEvent.dispatchResourceEvent(n,e.ResourceEvent.ITEM_LOAD_ERROR,r,s)}return e.ResourceEvent.dispatchResourceEvent(n,e.ResourceEvent.GROUP_LOAD_ERROR,r),Promise.reject(t.error)})},t.prototype._loadGroup=function(r,t,o){void 0===t&&(t=0);var n=e.config.getGroupByName(r,!0);return e.queue.load(n,r,t,o)},t.prototype.loadResources=function(r,t){var o=r.map(function(r){var t=e.config.getResourceWithSubkey(r,!0);return t.r});return e.queue.load(o,"name",0,t)},t.prototype.createGroup=function(r,t,o){return void 0===o&&(o=!1),e.config.createGroup(r,t,o)},t.prototype.hasRes=function(r){return null!=e.config.getResourceWithSubkey(r)},t.prototype.getRes=function(r){var t=e.config.getResourceWithSubkey(r);if(t){var o=t.r,n=t.key,i=t.subkey,a=e.processor.isSupport(o);return a&&a.getData&&i?a.getData(e.host,o,n,i):e.host.get(o)}return null},t.prototype.getResAsync=function(r,t,o){var n=r,i=e.config.getResourceWithSubkey(r,!0),a=i.r,s=i.subkey;return e.queue.loadResource(a).then(function(i){e.host.save(a,i);var u=e.processor.isSupport(a);return u&&u.getData&&s&&(i=u.getData(e.host,a,r,s)),t&&t.call(o,i,n),i})},t.prototype.getResByUrl=function(r,t,o,n){void 0===n&&(n="");var i=e.config.getResource(r);if(!i&&(n||(n=e.config.__temp__get__type__via__url(r)),i={name:r,url:r,type:n,root:""},e.config.addResourceData(i),i=e.config.getResource(r),!i))throw"never";return e.queue.loadResource(i).then(function(r){return e.host.save(i,r),t&&i&&t.call(o,r,i.url),r})},t.prototype.destroyRes=function(r,t){return void 0===t&&(t=!0),__awaiter(this,void 0,void 0,function(){var t,o,n,i,a,a;return __generator(this,function(s){switch(s.label){case 0:if(t=e.config.getGroup(r),o=function(r){return e.queue.unloadResource(r)},!(t&&t.length>0))return[3,5];n=0,i=t,s.label=1;case 1:return n<i.length?(a=i[n],[4,o(a)]):[3,4];case 2:s.sent(),s.label=3;case 3:return n++,[3,1];case 4:return[2,!0];case 5:return a=e.config.getResource(r),a?[4,o(a)]:[3,7];case 6:return s.sent(),[2,!0];case 7:return console.warn("无法删除指定组:"+r),[2,!1]}})})},t.prototype.setMaxLoadingThread=function(r){1>r&&(r=1),e.queue.thread=r},t.prototype.setMaxRetryTimes=function(r){r=Math.max(r,0),e.queue.maxRetryTimes=r},t.prototype.addResourceData=function(r){e.config.addResourceData(r)},__decorate([e.checkCancelation],t.prototype,"loadConfig",null),__decorate([e.checkCancelation],t.prototype,"_loadGroup",null),__decorate([e.checkNull],t.prototype,"hasRes",null),__decorate([e.checkNull],t.prototype,"getRes",null),__decorate([e.checkNull,e.checkCancelation],t.prototype,"getResAsync",null),__decorate([e.checkNull,e.checkCancelation],t.prototype,"getResByUrl",null),t}(egret.EventDispatcher);e.Resource=_,__reflect(_.prototype,"RES.Resource");var R}(RES||(RES={}));var RES;!function(e){var r=function(r){function t(e,t,o){void 0===t&&(t=!1),void 0===o&&(o=!1);var n=r.call(this,e,t,o)||this;return n.itemsLoaded=0,n.itemsTotal=0,n.groupName="",n}return __extends(t,r),t.dispatchResourceEvent=function(r,o,n,i,a,s){void 0===n&&(n=""),void 0===i&&(i=void 0),void 0===a&&(a=0),void 0===s&&(s=0);var u=egret.Event.create(t,o);u.groupName=n,i&&(u.resItem=e.ResourceItem.convertToResItem(i)),u.itemsLoaded=a,u.itemsTotal=s;var c=r.dispatchEvent(u);return egret.Event.release(u),c},t.ITEM_LOAD_ERROR="itemLoadError",t.CONFIG_COMPLETE="configComplete",t.CONFIG_LOAD_ERROR="configLoadError",t.GROUP_PROGRESS="groupProgress",t.GROUP_COMPLETE="groupComplete",t.GROUP_LOAD_ERROR="groupLoadError",t}(egret.Event);e.ResourceEvent=r,__reflect(r.prototype,"RES.ResourceEvent")}(RES||(RES={}));var RES;!function(e){var r;!function(r){function t(r){var t=r.name;if(e.config.config)for(var o in e.config.config.alias)e.config.config.alias[o]==r.url&&(t=o);else t=r.url;var n={name:t,url:r.url,type:r.type,data:r,root:r.root};return n}r.TYPE_XML="xml",r.TYPE_IMAGE="image",r.TYPE_BIN="bin",r.TYPE_TEXT="text",r.TYPE_JSON="json",r.TYPE_SHEET="sheet",r.TYPE_FONT="font",r.TYPE_SOUND="sound",r.convertToResItem=t}(r=e.ResourceItem||(e.ResourceItem={}))}(RES||(RES={}));var RES;!function(e){var r;!function(e){e.normalize=function(e){var r=e.split("/");return r.filter(function(e,t){return!!e||t==r.length-1}).join("/")},e.basename=function(e){return e.substr(e.lastIndexOf("/")+1)},e.dirname=function(e){return e.substr(0,e.lastIndexOf("/"))}}(r=e.path||(e.path={}))}(RES||(RES={}));var RES;!function(e){function r(){egret.Capabilities.runtimeType==egret.RuntimeType.NATIVE&&(n=o("all.manifest"))}function t(e){return n&&n[e]?"resource/"+n[e].v.substring(0,2)+"/"+n[e].v+"_"+n[e].s+"."+e.substring(e.lastIndexOf(".")+1):e}function o(e){if(egret_native.readUpdateFileSync&&egret_native.readResourceFileSync){var r=egret_native.readUpdateFileSync(e);if(null!=r)return JSON.parse(r);if(r=egret_native.readResourceFileSync(e),null!=r)return JSON.parse(r)}return null}var n;e.native_init=r,e.getRealURL=t}(RES||(RES={}));var RES;!function(e){var r=function(){function r(e){this.data=e}return r.prototype.profile=function(){console.log(this.data)},r.prototype.addFile=function(r,t){t||(t=""),r=e.path.normalize(r);var o=e.path.basename(r),n=e.path.dirname(r);this.exists(n)||this.mkdir(n);var i=this.reslove(n);i[o]={url:r,type:t}},r.prototype.getFile=function(e){var r=this.reslove(e);return r&&(r.name=e),r},r.prototype.reslove=function(r){if(""==r)return this.data;r=e.path.normalize(r);for(var t=r.split("/"),o=this.data,n=0,i=t;n<i.length;n++){var a=i[n];if(!o)return o;o=o[a]}return o},r.prototype.mkdir=function(r){r=e.path.normalize(r);for(var t=r.split("/"),o=this.data,n=0,i=t;n<i.length;n++){var a=i[n];o[a]||(o[a]={}),o=o[a]}},r.prototype.exists=function(r){if(""==r)return!0;r=e.path.normalize(r);for(var t=r.split("/"),o=this.data,n=0,i=t;n<i.length;n++){var a=i[n];if(!o[a])return!1;o=o[a]}return!0},r}();e.NewFileSystem=r,__reflect(r.prototype,"RES.NewFileSystem")}(RES||(RES={}));