// clickMe.addEventListener('click',function(e){
//     popover.style.display = 'block'
// })
// wrapper.addEventListener('click',function(e){
//     e.stopPropagation();

// })
// document.addEventListener('click', function(e){
//     popover.style.display = 'none'
// })

// jqury
$(clickMe).on('click',()=>{
    $(popover).show()
    // 每个浮层都需要监听document，则进行优化
    // 优化为点击浮层则监听一次document
    $(document).one('click',()=>{
        $(popover).hide()
    })
})

$(wrapper).on('click',(e)=>{
   e.stopPropagation()

})
// $(document).on('click',()=>{
//     $(popover).hide()
// })
