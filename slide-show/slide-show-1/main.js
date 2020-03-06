var allButtons = $('#buttons > span')  //allButtons为jQuery对象，allButtons[0]为DOM对象
for(let i=0; i<allButtons.length;i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        var pos = index * -200
        $('#images').css({
            transform: 'translate('+ pos +'px)'
        })
    n = index
    activeButton(allButtons.eq(n)) 
})

}

var n = 0;
var size = allButtons.length
allButtons.eq(n%size).trigger('click')    //用eq会返回jqury对象

var timerId = setTimer()
function setTimer(){
    return setInterval(()=>{
        n +=1
        allButtons.eq(n%size).trigger('click')
    },2000)
}

function activeButton($button){
    $button.addClass('red').siblings('.red').removeClass('red')
}

$('.slide-window').on('mouseenter', function() {
    window.clearInterval(timerId)
  })
  
  $('.slide-window').on('mouseleave', function() {
    timerId = setTimer()
  })
