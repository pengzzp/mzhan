// 从接口获得后端的数据(页面)
const model = {
    find(url,data) {
      // fetch('/lagou/listmore.json')
      // fetch('/douban/v2/book/1220562')
      data?data:'';
      let formdata = new FormData();
      formdata.append(data.name, data.value);
      return fetch(url,{
        method:'POST',
        body:formdata||'',
        cache:'default'
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
  