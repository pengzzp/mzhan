const classifyTpl = require('../views/classify.html');
const model = require('../models/classify')

const classifyController={
    render(){
        $('.container main').html(classifyTpl)
    },
    async data_render(cateid){
        let html=await model.find('./dapu/mgallery-menu_cate.html',cateid);
        html=html.replace(/\.\//g,"./dapu/");
        $('.classify .right .list').html(html);
    }
}

module.exports = classifyController
   