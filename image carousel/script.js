const imgcon = document.getElementById('imgcon')
const img = document.querySelectorAll('#imgcon img')
let idx = 0;

function run(){
    idx++

    if(idx>img.length-1){
        idx=0;
    }

    imgcon.style.transform = `translateX(${-idx * 500}px)`;
    setTimeout(run,2000)

}

run();
