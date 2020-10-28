const dot = document.getElementById('dot');
const text = document.getElementById('text');
dot.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    dot.classList.toggle('white');
    text.classList.toggle('white')
});



