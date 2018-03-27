const bockList = document.querySelector('.blocks').childNodes;

let orderValue = -1;
// events
const moveToTop = (event) => {
    event.stopPropagation();
    event.target.style.order = orderValue;
    orderValue--;
};

bockList.forEach( (block) =>{
    block.addEventListener('click', moveToTop);
});