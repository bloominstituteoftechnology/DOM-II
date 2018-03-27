const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
   block.addEventListener('click', goToTop); 
   block.addEventListener('mousedown', goRight); 
   block.addEventListener('mouseup', goHome); 
});

function goToTop(event) {
  blocks.forEach(block => {
    if (block === event.target) {
      block.style.order = -1
    } else {
      block.style.order = 0;
    }
  });
}

let goRightIntervalId;
let goHomeIntervalId;

function goRight(event) {
  let marginLeft = event.target.style.marginLeft;
  clearInterval(goHomeIntervalId);

  goRightIntervalId = setInterval(() => {
    if (marginLeft === '') {
      marginLeft = 15;
    } else {
      marginLeft = parseInt(event.target.style.marginLeft, 10) + 5; 
    }
    event.target.style.marginLeft = marginLeft + 'px';

    if (marginLeft > 300) clearInterval(goRightIntervalId);
  }, 50); 
}


function goHome(event) {
  let marginLeft = event.target.style.marginLeft;
  clearInterval(goRightIntervalId)

  goHomeIntervalId = setInterval(() => {
    marginLeft = parseInt(event.target.style.marginLeft, 10) - 5; 
    event.target.style.marginLeft = marginLeft + 'px';

    if (marginLeft <= 10) clearInterval(goHomeIntervalId);
  }, 50); 
}
