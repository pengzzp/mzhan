const model = require('../models/classify')
const poslistTpl = require('../views/poslist.html')
const homeTpl = require('../views/home.html');
const scroll=require('../units/scroll1');
// console.log(1)
const homeController={
    render(){
            $('.container main').html(homeTpl);
      },
    swiper(){
        // console.log($('.container main .lbt'))
        var swiper1 = new Swiper('.container .lbt',{
            autoplay:true,
            slidesPerView: 1,
            spaceBetween: 10,
            // freeMode: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            });
        var swiper2 = new Swiper('.container .hoter', {
            slidesPerView:2.5,
            spaceBetween: 10,
            freeMode: true,
            });

        },
        async data_render(cateid){
            let html=await model.find('./dapu/mgallery-articlepage.html',cateid);
            // html=html.replace(/\.\//g,"./dapu/");
            $('.home .topic ul').html(html);
            // console.log(html);
            scroll('.home');
        }
}
    
module.exports = homeController
   