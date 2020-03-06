
// 实现jquery
window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
  }
  window.$ = window.jQuery

  // 实现promise
  window.Promise = function(fn){
    // ...
  }
  // 实现ajax
  window.jQuery.ajax = function(option){
    let url
    if(arguments.length === 1){
        url = option.url
    } else if(arguments.length ===2){
        url = arguments[0]
        option = arguments[1]
    }
    let method = option.method
    let body = option.body
    let successFn = option.successFn
    let failFn = option.failFn
    let headers = option.headers
    let xhr = new XMLHttpRequest()
    xhr.open(method,url)
    for(let key in headers){
        xhr.setRequestHeader(key,headers[key])
    }
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState===4){
            if(xhr.status >= 200 && xhr.status <300){
                successFn.call(undefined,xhr.responseText)
            } else if(request.status >= 400){
                failFn.call(undefined,xhr)
            }
        }
      }
      xhr.send(body)  
  }
  

  myButton.addEventListener('click',(e)=>{
     window.jQuery.ajax(
         {
             url:'/xxx',
             method:'post',
             body: 'a=1&b=2',
             headers:{
                 'Content-Type':'application/x-www-form-urlencoded',
                 'Cache-Control': 'no-cache',
                 'frank':'18'
             },
             successFn:(responseText)=>{console.log('success')},
             failFn: (request)=>{console.log('error')}
         })
    })


