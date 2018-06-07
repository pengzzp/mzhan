const classifyTpl = require('../views/classify.html');
const model = require('../models/classify')

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
   