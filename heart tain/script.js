const btn = document.getElementById('btn');
const container = document.getElementById('container');
const Xbtn = document.getElementById('X')

btn.addEventListener('click',()=>{
    btn.classList.toggle('stand')
    container.classList.toggle('stand');
});

Xbtn.addEventListener('click',()=>{
    container.classList.remove('stand');
    btn.classList.remove('stand')
})
