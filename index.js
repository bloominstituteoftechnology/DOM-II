
const blocks = document.querySelector('.blocks');
let lowestOrder = 0;
blocks.addEventListener('click', function(e){
      lowestOrder--;
      e.target.style.order  = lowestOrder;
});

