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

function writeMarkdown(markdown, fn){
    var domMarkdown = document.querySelector('#paper > pre')
    var n = 0
    var id = setInterval(() => {
        n+=1
        domMarkdown.innerHTML = markdown.substring(0,n)
        if(n > markdown.length){
            window.clearInterval(id)
            fn.call()
        } 
    },10)    
}

var show1 =  `/*
 * 面试官您好，我是李寒
 * 只用文字作做自我介绍太单调了吧
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */
*{
    transition: all 1s;
}
html{
    background: #eee;
    font-size:16px;

}
#code{
    border: 1px solid #aaa;
    padding: 16px;
}
/* 代码高亮好看一点*/
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
} 
/* 加 点 3D 效果 */
#code{
    transform: rotate(360deg);
}
/* 接下来，介绍一下我自己 */
/* 我需要一张白纸 */
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:blue;
    display:flex;
    justify-content:center;
    align-items:center;
    background: gray;
    padding:16px;

}
#paper .content{
    background:white;
    height:100%;
    width:100%;
    

}
`
var show2=`#paper{
}`

var md = `
# 自我介绍
我叫 XXX
1990 年 1 月出生
XXX 学校毕业
自学前端半年
希望应聘前端开发岗位
# 技能介绍
熟悉 JavaScript CSS
# 项目介绍
1. XXX 轮播
2. XXX 简历
3. XXX 画板
# 联系方式
- QQ xxxxxxxx
- Email xxxxxxxx
- 手机 xxxxxxx
# 个人爱好
- xxxxxxx
- xxxxxxx
- xxxxxxx
`

writeCode('',show1,()=>{
    createPaper(()=>{
        writeCode(show1,show2,()=>{
            writeMarkdown(md,()=>{
                
            })
        })
    })
}) //定闹钟：50ms后开始写第一行代码
// setInterval是异步的，所以不能在后直接调用f2()
//1. 定闹钟
//2. writeCode返回
//3. 执行fn2()
//4. 闹钟时间到
//5. 执行第一行代码

function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}


