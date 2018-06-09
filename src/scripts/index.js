const indexTpl = require('./views/index.html');
const homeTpl = require('./views/home.html');
const goodslistTpl=require('./views/goodslist.html');

const indexController = require('./controllers/index')
const homeController  = require('./controllers/home')
const classifyController  = require('./controllers/classify')
const shopcarController  = require('./controllers/shopcar')
const mineController  = require('./controllers/mine')
const Change=require('./units/change')
const change=new Change()


$('.wrap').html(indexTpl)
indexController.footerAction();

change.init()
// 首页----------------------------------
change.route('/index',function(){
    homeController.render();
    homeController.swiper();
    homeController.data_render({
        name:'page',
        value:1
    });
})
// 类目页--------------------------------------------
change.route('/classify',function(){
    classifyController.render();
    classifyController.data_render({
        name:'cateId',
        value:102
    });
    $('.classify .left li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active')
        let cateid=$(this).attr('cateid');
        let imageurl=$(this).attr('imageurl');
        let text=$(this).text();
        classifyController.data_render({
            name:'cateId',
            value:cateid
        });
        $(".classify .right .top img").attr('src',imageurl);
        $(".classify .right .middle span").html(text);
    })
    
})
// 购物车页----------------------------------------
change.route('/shopcar',function(){
    shopcarController.render();
    shopcarController.data_render();
})

change.route('/mine',function(){
    mineController.render();
});



