const blocks=document.querySelectorAll('.blocks .block');
let index=0;
let interval;
let size=10;

rockets=(e)=>{e.target.style.order=index;index-=1;};

travelers=(e)=>{
    interval=setInterval(()=>{size+=5;e.target.style.marginLeft=size+'px';},100);
    
}
reset=(e)=>{
    size=10;
    e.target.style.marginLeft=size+'px';
    clearInterval(interval);
}
for (let i=0; i<blocks.length; i++) {
    blocks[i].addEventListener('click',rockets);
    blocks[i].addEventListener('mouseover',travelers);
    blocks[i].addEventListener('mouseleave',reset);
}

