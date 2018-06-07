// 切换界面
function Change(){
 this.url=''
 this.routes={}
}
Change.prototype={
    constructor:Change,
    init(){
        window.addEventListener('load',this.refresh.bind(this))//初始化
        window.addEventListener('hashchange',this.refresh.bind(this))//地址栏hash变化时切换界面
    },
    route(url,cb){//将界面url存储到数组中
        var noop=function(){}
        this.routes[url]=cb||noop;
    },
    refresh(){//切换界面
        this.url = location.hash.slice(1) || '/index'
        this.routes[this.url]();
    }
}

module.exports=Change;