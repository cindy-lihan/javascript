let n
init()
setInterval(()=>{
    // bug解决，之前写的on('transitionend')出错，
    // on()方法，绑定事件后并不是自动移除事件的，需要通过.off()来手工移除。
    // .one()方法，绑定元素执行完毕后自动移除事件，可以方法仅触发一次的事件。
    $(`.images > img:nth-child(${x(n)})`).removeClass('enter current').addClass('leave')
    .one('transitionend',function(e){
        $(e.currentTarget).removeClass('leave current').addClass('enter')
    })
    $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter leave').addClass('current')
    n++
},3000)



function init(){
     n=1
     $(`.images > img:nth-child(${x(n)})`).addClass('current')    
     .siblings().addClass('enter')
}

function x(n){
if(n>5){
    n = n%5
    if (n===0){
      n=5
    }
  } // n = 1 2 3 4 5
  return n
}