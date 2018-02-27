
const blocks = document.querySelector('.blocks');
// let lowestOrder = 0;
// blocks.addEventListener('click', function(e){
//       lowestOrder--;
//       e.target.style.order  = lowestOrder;
// });
//blocks.children.addEventListener('click', moveToRight, false);
Array.from(blocks.children).forEach(child => {
     child.addEventListener('click', moveToRight, false);
});

function moveToRight(e) {
       // transition starts
       e.target.style.marginLeft=  "80%";
       window.setTimeout(() => {
            e.target.style.marginLeft=  "1rem";
       }, 6000);
       //end transition fire moveTo left
}

// when mouse click down send element to the right
// when mouse is released start setInterval function making
// mouse travel left