const shopcarTpl = require('../views/shopcar.html');
const goodslistTpl=require('../views/goodslist.html');
const model=require('../models/goodslist');
const poslistTpl=require('../views/poslist.html');
const goodscroll=require('../units/scroll');

const shopcarController={
    render(){
        // $('.container main').html(shopcarTpl)
        $('.container main').html(goodslistTpl); 
      },
      async data_render(){
          let result=await model.find("./banggou/searchcate/get-search-goods/a_134_a_a_a_a_a_a_a_a_a_a.shtml?ts=&");
          let data=result.data;
          let html = template.render(poslistTpl,data)
          $('.goodslist ul').html(html);
          goodscroll(".goodslist");
      }
    
}
    
module.exports = shopcarController
   