const model = require('../models/goodslist')
const poslistTpl = require('../views/poslist.html')

function Scroll(selector){
    let goodsscroll=new IScroll(selector,{
        probeType: 3,
        mouseWheel: true
    })
    goodsscroll.scrollBy(0,-40);
    let head = $('.head img'),
    topImgHasClass = head.hasClass('up')
    let foot = $('.foot img'),
    bottomImgHasClass = head.hasClass('down')

    //鼠标滑动时
    goodsscroll.on('scroll',function(){
        let y=this.y;//盒子的y轴滚动距离
        let maxY=this.maxScrollY-y;
        // console.log(y);
        // console.log(maxY);

        if(y>=0){//下拉到顶
            !topImgHasClass&&head.addClass('up');
            return
        }
        if(maxY>0){//上拉到底
            !bottomImgHasClass && foot.addClass('down')
            return
        }
    })
    //鼠标松开时
    goodsscroll.on('scrollEnd',async function(){
        if(this.y>=-40 && this.y<0){
            this.scrollTo(0,-40);
            head.removeClass('up');
        }
        else if(this.y>=0){//下拉到顶
            head.attr('src', '/images/ajax-loader.gif');
            let result=await model.find('./banggou/searchcate/get-search-goods/a_646%7C648%7C671%7C673_a_a_a_a_a_a_a_a_a_a.shtml?ts=&')
            let data=result.data;
            let html = template.render(poslistTpl,data);
            $('.goodslist ul').prepend(html);
            
            this.refresh();
            this.scrollTo(0,-40);
            head.attr('src','/images/arrow.png');
            head.removeClass('up');

        }

        let maxY = this.maxScrollY - this.y
        if (maxY > -40 && maxY < 0) {
            this.scrollTo(0, this.maxScrollY + 40);
            foot.removeClass('down')
        } else if (maxY >= 0) {
            foot.attr('src', '/images/ajax-loader.gif');
    
            let result = await model.find(`./banggou/searchcate/get-search-goods/a_646%7C648%7C671%7C673_a_a_a_a_a_a_a_a_a_a.shtml?ts=&`)
            let data=result.data;
            let html = template.render(poslistTpl,data);
            $('.goodslist ul').append(html);
    
            this.refresh()
    
            this.scrollTo(0, this.y + 40);
            foot.removeClass('down');
            foot.attr('src', '/images/arrow.png');
        }
    })

}
module.exports=Scroll