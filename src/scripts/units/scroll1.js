const model = require('../models/classify')

function Scroll(selector){
    let page=1;
    let goodsscroll=new IScroll(selector,{
        probeType: 3,
        mouseWheel: true
    })
    let foot = $('.foot img'),
    bottomImgHasClass = foot.hasClass('down')

    //鼠标滑动时
    goodsscroll.on('scroll',function(){
        let y=this.y;//盒子的y轴滚动距离
        let maxY=this.maxScrollY-y;
        if(maxY>0){//上拉到底
            !bottomImgHasClass && foot.addClass('down')
            return
        }
    })
    //鼠标松开时
    goodsscroll.on('scrollEnd',async function(){
        let maxY = this.maxScrollY - this.y
        if (maxY >= 0) {
            foot.attr('src', '/images/ajax-loader.gif');
    
            let html=await model.find('./dapu/mgallery-articlepage.html',{
                name:'page',
                value:++page
            });
            $('.home .topic ul').append(html);
    
            
            this.refresh()
            this.scrollTo(0, this.y + 40);
            foot.removeClass('down');
            foot.attr('src', '/images/arrow.png');
        }
    })

}
module.exports=Scroll