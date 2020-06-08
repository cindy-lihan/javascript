// 把code写到#code和stayTag
function writeCode(prefix, code, fn){
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix ||''
    var n = 0
    var id = setInterval(() => {
        n+=1
        domCode.innerHTML =  Prism.highlight(prefix+code.substring(0,n), Prism.languages.css);
        styleTag.innerHTML = prefix+code.substring(0,n)
        //让代码始终在最后一行
        domCode.scrollTop=domCode.scrollHeight
        if(n > code.length){
            window.clearInterval(id)
            fn.call()
        } 
    }, 10)
}


var show1 =  `
#preview{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFE700;
}
.wrapper{
    position: relative;
    width:100%;
    height: 165px;
}
.nose{
    border:12px solid;
    border-radius: 12px; 
    border-color: black transparent transparent transparent;
    border-width:10px 12px;
    width: 22px;
    height: 10px;
    position: absolute;
    left: 50%;
    top: 28px;
    transform: translateX(-50%);
}
.eye{
    width: 49px;
    height:49px;
    background: #2E2E2E;
    border-radius:50%;
    border: 2px solid #000000;
    position: absolute;
}

.eye::before{
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    position: absolute;
    left: 16%;
    top:-1px;
    border: 2px solid #000000;

}
.eye.left{
    right: 50%;
    margin-right:90px;
}

.eye.right{
    left: 50%;
    margin-left: 90px;
}

.face{
    width: 68px;
    height: 68px;
    background: #cf0d1c;
    border: 2px solid black;
    border-radius:50% ;
    position: absolute;
    top:45%;

}

.face.left{
    right: 50%;
    margin-right: 116px;
}

.face.right{
    left: 50%;
    margin-left: 116px;

}
.upperLip{
    height: 20px;
    width: 80px;
    border: 2px solid black;
    position: absolute;
    top:29%;
    background: #FFE700;
}
.upperLip.left{
    right: 50%;
    border-bottom-left-radius:40px 20px;
    border-top: none;
    border-right: none;
    transform: rotate(-15deg);

}

.upperLip.right{
    left: 50%;
    border-bottom-right-radius:40px 20px;
    border-top: none;
    border-left: none;
    transform: rotate(15deg);
}
.lowerLip-wrapper{
    position: absolute;
    bottom:0;
    left: 50%;
    z-index: -1;
    margin-left: -100px;
    width: 200px;
    height: 110px;
    overflow: hidden;
}
.lowerLip{
    height: 1500px;
    width: 200px;
    border: 2px solid black;
    background: #9C010A;
    border-radius:100px/500px ;
    position: absolute;
    bottom:0;
    left: 50%;
    margin-left: -100px;
    overflow: hidden;
}
.lowerLip::after{
content: '';
position: absolute;
bottom: -20px;
width: 100px;
height: 110px;
background: #FC4A62;
left: 50%;
margin-left: -50px;
border-radius: 50px;
} 
`

writeCode('',show1,()=>{
}) 


