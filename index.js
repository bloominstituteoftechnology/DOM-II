
const blocks = document.querySelector('.blocks');
// let lowestOrder = 0;
// blocks.addEventListener('click', function(e){
//       lowestOrder--;
//       e.target.style.order  = lowestOrder;
// });

blocks.addEventListener('mousedown', moveToRight);

function moveToRight(e) {
      console.log(this);
      console.log(e.target);
      e.target.style.right="0px";

}


// when mouse click down send element to the right
// when mouse is released start setInterval function making
// mouse travel left