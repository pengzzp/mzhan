const model = require('../models/classify')
const poslistTpl = require('../views/poslist.html')
const homeTpl = require('../views/home.html');
// console.log(1)
const homeController={
    render(){
            $('.container main').html(homeTpl)
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
        data_render(cb) {
        model.find((result) => {
            // let data=result.tags;
            // let html = template.render(poslistTpl,result)
            console.log(result);
            //  console.log(html);
            // cb(html)
            // cb(data)
        })
        }
}
    
module.exports = homeController
   