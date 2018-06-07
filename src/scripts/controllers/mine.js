const mineTpl = require('../views/mine.html');

const mineController={
    render(){
        $('.container main').html(mineTpl)
      }
}
    
module.exports = mineController
   