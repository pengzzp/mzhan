/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<!-- 首页主要布局 --><div class=\"home\">    <header>        <img src=\"https://activity.dapuimg.com/20180227001_logo.png\" alt=\"\">    </header>    <nav>        <div class=\"search\">            <i>&#xe648</i>            <input type=\"text\" placeholder=\"发现居家好物\">        </div>    </nav>    <!-- ---------------------轮播图---------------------- -->    <div class=\"lbt swiper-container\">            <ul class=\"swiper-wrapper\">                <li class=\"swiper-slide\">                    <img src=\"https://activity.dapuimg.com/750X410.jpg\" alt=\"\">                </li>                <li class=\"swiper-slide\">                    <img src=\"https://activity.dapuimg.com/2018laocubu750-410.jpg\" alt=\"\">                                   </li>                <li class=\"swiper-slide\">                    <img src=\"https://activity.dapuimg.com/YM750-410.jpg\" alt=\"\">                                    </li>            </ul>            <div class=\"swiper-pagination\"></div>        </div>    <!-- ---------------------注意--------------------- -->    <div class=\"notice\">        创建放心消费环境，树立诚信守法意识。    </div>     <!-- -------------------热销推荐------------------- -->    <div class=\"hot\">        <h3>热销推荐</h3>        <span>用户喜爱的热销精品</span>        <div class=\"hoter swiper-container\">            <ul class=\"swiper-wrapper\">                <li class=\"swiper-slide\">                    <img src=\"https://p1.dapuimg.com/public/images/34/02/d4/46c8d4a7be082387a21cfe57df7a9d32.jpg?1526897014#h\" alt=\"\">                    <h4>老粗布薄被</h4>                    ￥<i>569</i>                </li>                <li class=\"swiper-slide\">                    <img src=\"https://p2.dapuimg.com/public/images/a9/21/bf/c8fcee62163771bb3cd8f5f1bf31d22a.jpg?1526895062#h\" alt=\"\">                    <h4>精梳纯棉缎纹绣花夏凉...</h4>                    ￥<i>499</i>                </li>                <li class=\"swiper-slide\">                    <img src=\"https://p2.dapuimg.com/public/images/72/87/74/45a445839707861aaf094b3879e51cb6.jpg?1526371716#h\" alt=\"\">                    <h4>手绘桑蚕丝被</h4>                    ￥<i>1499</i>                </li>                <li class=\"swiper-slide\">                        <img src=\"https://p1.dapuimg.com/public/images/f5/cd/6b/ccf94ff908b710fd45fd353f35be7e57.jpg?1522121355#h\" alt=\"\">                        <h4>手绘桑蚕丝被</h4>                        ￥<i>1499</i>                </li>                <li class=\"swiper-slide\">                    <img src=\"https://p1.dapuimg.com/public/images/bd/72/cc/1e61dbaece15c563069bd09e9427b98e.jpg?1523344501#h\" alt=\"\">                    <h4>手绘桑蚕丝被</h4>                    ￥<i>1499</i>                </li>            </ul>        </div>    </div>    <!-- -------------------精选话题------------------- -->    <div class=\"topic\">        <h3>精选话题</h3>        <ul>            <li>                <div class=\"top\">                    <img src=\"https://activity.dapuimg.com/%E5%A4%A7%E6%9C%B4%E5%A4%B4%E5%83%8F.jpg\" alt=\"\">                    <h4>大朴</h4>                    <p>2018-02-28</p>                    <i>1186</i>                    <i>52</i>                    <i>8</i>                </div>                <img src=\"https://activity.dapuimg.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20180228165707.jpg\" alt=\"\">                <p>CBA冠军队都在用的运动巾，冬季健身不来一条？</p>                <div class=\"pop\">                    <img src=\"http://activity.dapuimg.com/2017022800_blur_bg.png\" alt=\"\">                    <i>热门话题</i>                </div>            </li>            <li>                <div class=\"top\">                    <img src=\"https://activity.dapuimg.com/%E5%A4%A7%E6%9C%B4%E5%A4%B4%E5%83%8F.jpg\" alt=\"\">                    <h4>大朴</h4>                    <p>2018-02-28</p>                    <i>1186</i>                    <i>52</i>                    <i>8</i>                </div>                <img src=\"https://activity.dapuimg.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20180228165707.jpg\" alt=\"\">                <p>《国家宝藏》让人们走进博物馆，谁来让传统文化走出博物馆？</p>                <div class=\"pop\">                    <img src=\"http://activity.dapuimg.com/2017022800_red_bg.png\" alt=\"\">                    <i>好物推荐</i>                </div>            </li>                    </ul>    </div></div>"

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "<!-- 闲的蛋疼渲染的界面 --><div class=\"goodslist\">    <ul>        <!-- <li>            <img src=\"http://pic.banggo.com/sources/images/goods/MB/245353/245353_00.jpg?x-oss-process=image/resize,m_fill,w_300,h_410\" alt=\"\">            <h2>男休闲连帽皮肤衣</h2>            <p>119.9</p>        </li> -->    </ul></div>"

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// 从接口获得后端的数据
const model = {
    find(data) {
      // fetch('/lagou/listmore.json')
      // fetch('/douban/v2/book/1220562')
      let formdata = new FormData();
      formdata.append("cateId", data);
      return fetch('./dapu/mgallery-menu_cate.html',{
        method:'POST',
        body:formdata||''
      })
      .then(response =>{
        return  response.text()
      })
      .then(result => {
          // console.log(result);
          // console.log(res);
              return result;
              // cb(res)
      })
    }
  }
  
module.exports = model
  

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "{{each list}}<li>    <img src=\'{{$value.imgUrl}}?x-oss-process=image/resize,m_fill,w_300,h_410\'>    <h2>{{$value.productName}}</h2>    <p>{{salesPrice}}</p></li>{{/each}}"

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const indexTpl = __webpack_require__(5);
const homeTpl = __webpack_require__(0);
const goodslistTpl=__webpack_require__(1);

const indexController = __webpack_require__(6)
const homeController  = __webpack_require__(7)
const classifyController  = __webpack_require__(8)
const shopcarController  = __webpack_require__(10)
const mineController  = __webpack_require__(13)
const Change=__webpack_require__(15)
const change=new Change()


$('.wrap').html(indexTpl)
indexController.footerAction();

change.init()
// 首页----------------------------------
change.route('/index',function(){
    homeController.render();
    homeController.swiper();
})
// 类目页--------------------------------------------
change.route('/classify',function(){
    classifyController.render();
    classifyController.data_render(102);
    $('.classify .left li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active')
        let cateid=$(this).attr('cateid');
        let imageurl=$(this).attr('imageurl');
        let text=$(this).text();
        classifyController.data_render(cateid);
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





/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<!-- 界面大体布局 --><div class=\"container\">    <main></main>    <footer>        <ul>            <li class=\"active\"><a>&#xe626</a>首页</li>            <li><a>&#xe605</a>分类</li>            <li><a>&#xe60a</a>购物车</li>            <li><a>&#xe635</a>我</li>        </ul>    </footer></div>"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

const indexController={
  footerAction() {
    
    const pagelist = ['/index', '/classify', '/shopcar','/mine']
    $('footer li').on('click', function(){
      // console.log(1)
      location.hash = pagelist[$(this).index()]
      // $(this).addClass('active').siblings().removeClass('active')
    })
    window.addEventListener('hashchange',function(){//地址栏hash变化时变换footer颜色
      let nowhash=location.hash.slice(1);
      let index=pagelist.indexOf(nowhash);
      $('footer li').eq(index).addClass('active').siblings().removeClass('active');
    })
  }
}
module.exports = indexController
   

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const model = __webpack_require__(2)
const poslistTpl = __webpack_require__(3)
const homeTpl = __webpack_require__(0);
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
   

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const classifyTpl = __webpack_require__(9);
const model = __webpack_require__(2)

const classifyController={
    render(){
        $('.container main').html(classifyTpl)
    },
    async data_render(cateid){
        let html=await model.find(cateid);
        // console.log(html);
        $('.classify .right .list').html(html);
    }
}

module.exports = classifyController
   

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<!-- 分类页主要布局 --><div class=\"classify\">    <header>        <div class=\"back\" onclick=\"javascript:history.back(-1);\"></div>        <h2>类目</h2>        <div class=\"search\"></div>    </header>    <!-- -------------------------------------- -->    <section>        <div class=\"left\">            <ul>                <li cateid=\"102\" imageurl=\"https://activity.dapuimg.com/%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81.jpg\" class=\"active\">卧室床品</li>                <li cateid=\"105\" imageurl=\"https://activity.dapuimg.com/%E7%94%9F%E6%B4%BB%E5%B7%BE%E7%B1%BB.jpg\">冠军毛巾</li>                <li cateid=\"231\" imageurl=\"https://activity.dapuimg.com/%E5%A5%B3%E8%A3%85.jpg\">女装</li>                <li cateid=\"228\" imageurl=\"https://activity.dapuimg.com/%E7%94%B7%E8%A3%85.jpg\">男装</li>                <li cateid=\"198\" imageurl=\"https://activity.dapuimg.com/%E5%86%85%E8%A1%A3%E8%A3%A4.jpg\">贴身衣物</li>                <li cateid=\"107\" imageurl=\"https://activity.dapuimg.com/%E8%A2%9C%E5%AD%90%E6%8B%96%E9%9E%8B.jpg\">袜子拖鞋</li>                <li cateid=\"232\" imageurl=\"https://activity.dapuimg.com/%E6%97%A5%E7%94%A8%E5%93%81.jpg\">日用品</li>                <li cateid=\"233\" imageurl=\"https://activity.dapuimg.com/%E6%B4%97%E6%B6%A4%E7%94%A8%E5%93%81.jpg\">洗涤用品</li>                <li cateid=\"247\" imageurl=\"https://activity.dapuimg.com/%E5%8C%85%E8%A2%8B.jpg\">包装</li>                <li cateid=\"108\" imageurl=\"https://activity.dapuimg.com/%E5%A9%B4%E7%AB%A5%E7%94%A8%E5%93%81.jpg\">婴童用品</li>            </ul>        </div>        <!-- -------------------------------------------------- -->        <div class=\"right\">           <div class=\"top\">               <img src=\"https://activity.dapuimg.com/%E5%8D%A7%E5%AE%A4%E5%BA%8A%E5%93%81.jpg\" alt=\"\" class=\"src\">           </div>           <div class=\"middle\">            —— <span>卧室床品</span>分类 ——           </div>           <div class=\"list\"></div>        </div>    </section>   </div>"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const shopcarTpl = __webpack_require__(11);
const goodslistTpl=__webpack_require__(1);
const model=__webpack_require__(12);
const poslistTpl=__webpack_require__(3);

const shopcarController={
    render(){
        // $('.container main').html(shopcarTpl)
        $('.container main').html(goodslistTpl); 
      },
      async data_render(){
          let result=await model.find();
          let data=result.data;
          let html = template.render(poslistTpl,data)
          $('.goodslist ul').html(html);
        //   console.log(data);
      }
    
}
    
module.exports = shopcarController
   

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<!-- 购物车布局 -->"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// 从接口获得后端的数据
const model = {
    find() {
      return fetch('./banggou/searchcate/get-search-goods/a_134_a_a_a_a_a_a_a_a_a_a.shtml?ts=&',{
        method:'POST'
      })
      .then(response =>{
        return  response.json()
      })
      .then(result => {
          // console.log(result);
          // console.log(res);
              return result;
              // cb(res)
      })
    }
  }
  
module.exports = model
  

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const mineTpl = __webpack_require__(14);

const mineController={
    render(){
        $('.container main').html(mineTpl)
      }
}
    
module.exports = mineController
   

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<!-- 个人界面布局 --><div class=\"mine\">    <div class=\"login\">        <div class=\"user\">            <i><img src=\"http://activity.dapuimg.com/m_login_newusername.png\" alt=\"\"></i>            <input type=\"text\" placeholder=\"手机号/邮箱/用户名\">        </div>        <div class=\"pwd\">            <i><img src=\"http://activity.dapuimg.com/m_login_newpwd.png\" alt=\"\"></i>            <input type=\"text\" placeholder=\"登录密码\">        </div>        <div class=\"login_btn\">发现居家好物</div>    </div></div>"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);