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
   