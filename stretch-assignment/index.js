blocksDiv = document.querySelector('.blocks');
blocks = document.querySelectorAll('.block');

Array.from(blocks).map(block => {
  block.addEventListener('click', function(e) {
    blocksDiv.prepend(e.target)
  })
})

// TweenMax.to('.block--red', 1, {x:100});