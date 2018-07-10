const blocks=document.querySelectorAll('.blocks .block');
let index=0;
let interval;
let size=10;
let lastClicked;
rockets=(e)=>{e.target.style.order=index;index-=1;};
travelers=(e)=>{
    lastClicked=e.target;
    interval=setInterval(()=>{size+=2;e.target.style.marginLeft=size+'px';},10);
}
reset=()=>{
    clearInterval(interval);
    size=10;
    lastClicked.style.marginLeft=size+'px';
}
for (let i=0; i<blocks.length; i++) {
    blocks[i].addEventListener('click',rockets);
    blocks[i].addEventListener('mousedown',travelers);
    blocks[i].addEventListener('mouseleave', reset);
}
