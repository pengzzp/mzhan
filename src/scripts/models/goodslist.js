// 从接口获得后端的数据(json)
const model = {
    find(url) {
      // return fetch('./banggou/searchcate/get-search-goods/a_134_a_a_a_a_a_a_a_a_a_a.shtml?ts=&',{
        return fetch(url,{
      method:'POST'
      })
      .then(response =>{
        return  response.json()
      })
      .then(result => {
          // console.log(res);
              return result;
              // cb(res)
      })
    }
  }
  
module.exports = model
  