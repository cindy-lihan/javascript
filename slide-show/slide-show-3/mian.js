let $allButtons = $('#buttonWrapper > button')  //allButtons为jQuery对象，allButtons[0]为DOM对象
let $slides = $('#slides')
let $images = $slides.children('img')
let $firstCopy = $images.eq(0).clone(true)
let $lastCopy = $images.eq($images.length-1).clone(true)
$slides.append($firstCopy)
$slides.prepend($lastCopy)

var current = 0

//init
$slides.css({transform: 'translateX(-400px)'})

for(let i=0; i<$allButtons.length;i++){
   $allButtons.eq(i).on('click',function(x){
        var index = $(x.currentTarget).index()
        goToSlide(index)
    // n = index
    // activeButton(allButtons.eq(n)) 
})
}

function goToSlide(index){
    var pos = (index+1) * -400
    if(index==0 && current==$allButtons.length-1){
        console.log('从最后一张到第一张')
        pos = ($allButtons.length+1) * - 400
        $slides.css({transform: 'translateX('+ pos +'px)'})
        .one('transitionend',()=>{
            pos = (index+1) * -400
            $slides.hide().offset()
            $slides.css({transform: 'translateX('+ pos +'px)'})
            .show()
        })
    } else if(index==$allButtons.length-1 && current == 0){
        console.log('从第一张到最后一张')
        $slides.css({transform: 'translateX(0px)'})
        .one('transitionend',()=>{
            pos =  $allButtons.length * -400
            $slides.hide().offset()
            $slides.css({transform: 'translateX('+ pos +'px)'})
            .show()
        })
    }else{
    $slides.css({
        transform: 'translate('+ pos +'px)'
    })
}
current = index
}

// var n = 0;
// var size = allButtons.length
// allButtons.eq(n%size).trigger('click')    //用eq会返回jqury对象

// var timerId = setTimer()
// function setTimer(){
//     return setInterval(()=>{
//         n +=1
//         allButtons.eq(n%size).trigger('click')
//     },2000)
// }

// function activeButton($button){
//     $button.addClass('red').siblings('.red').removeClass('red')
// }

// $('.slide-window').on('mouseenter', function() {
//     window.clearInterval(timerId)
//   })
  
//   $('.slide-window').on('mouseleave', function() {
//     timerId = setTimer()
//   })
