window.jQuery = function(nodeOrSelector){
    let nodes = {}
    if(typeof nodeOrSelector === 'string'){
        let tmp = document.querySelectorAll(nodeOrSelector) 
        for(let i=0;i<tmp.length;i++){
            //只是伪数组
            nodes[i]=tmp[i]
        }
        nodes.length=tmp.length

    } else if(nodeOrSelector instanceof Node){
        nodes = {
            0:nodeOrSelector,
            length:1
        }

    }
    
    nodes.addClass=function(classes){
        classes.forEach(value => {
            for(let i=0;i<nodes.length;i++){
                nodes[i].classList.add(value)
            }  
        });
    }
    nodes.setText=function(text){
        for(let i=0;i<nodes.length;i++){
            nodes[i].textContent=text
        }  
    }
    return nodes
}

var node2=jQuery("ul > li")

node2.addClass(['blue'])
// node2.setText('新增')