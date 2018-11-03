let blocks = document.querySelectorAll('.blocks .block');

blocks.forEach((block, i) => {
  block.addEventListener('click', function() {
    let tempName = block.className;
    block.className = blocks[0].className;
    blocks[0].className = tempName;
  })
})

blocks.forEach(block => {
  let move;
  let x= 0;
  block.addEventListener('mousedown', function() {
    while(x < 1000) {
      move = setInterval(function() {
       block.style.transform = `translateX(${x}px)`;
        block.style.transition = 'transform 5s';
      }, 20);
      x++;
    }

    block.addEventListener('mouseup', function() {
      clearInterval(move);
    })
  })
})