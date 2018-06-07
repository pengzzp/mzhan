const shopcarTpl = require('../views/shopcar.html');
const goodslistTpl=require('../views/goodslist.html');
const model=require('../models/goodslist');
const poslistTpl=require('../views/poslist.html');

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
   