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
  