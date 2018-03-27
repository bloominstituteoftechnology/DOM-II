const bockList = document.querySelector('.blocks').childNodes;

let orderValue = -1;
// events
const moveToTop = (event) => {
    event.stopPropagation();
    event.target.style.order = orderValue;
    orderValue--;
};

const goRight = (event) => {
    let dist = window.innerWidth - 130;
    event.target.style = 'transition:margin-left, 2s; margin-left:'+ dist + 'px';
};

let goleft = (e) => {
    e.target.style = 'transition:margin-right, 3s; margin-right:10px';
};

bockList.forEach( (block) =>{
    //block.addEventListener('click', moveToTop);
    block.addEventListener('mousedown', goRight);
    block.addEventListener('mouseup', goleft);
});

