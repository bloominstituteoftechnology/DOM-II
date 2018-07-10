const blocks=document.querySelectorAll('.blocks .block');
let index=0;
order=(e)=>{e.target.style.order=index;index-=1;};
for (let i=0; i<blocks.length; i++) {
    blocks[i].addEventListener('click',order);
}
