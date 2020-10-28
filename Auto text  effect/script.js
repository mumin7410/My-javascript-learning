let text = 'Hello I"m mumin';
let index = 0;
let container = document.getElementById('container')
function Writetext(){
    
    container.innerText = text.slice(0,index);
    index++ ;

    if(index > text.length){
        index = 0;
    }
}

setInterval(Writetext,200);
