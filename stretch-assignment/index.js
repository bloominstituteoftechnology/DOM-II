const blocks = document.querySelector('.blocks');

blocks.addEventListener('click', function(event) {
  // If clicking outside the blocks
  if(event.target === blocks) return;

  // Make click block rise to the top
  blocks.prepend(event.target);
});

blocks.addEventListener('mousedown', function(event) {
  if(event.target === blocks) return;

  let position = 0;
  const move = setInterval(function() {
    position += 10;
    // Specify how far the block goes right
    if(position < 1000) {
      TweenMax.to(event.target, 1, {x:position});
    }
    blocks.addEventListener('mouseup', function() {
      //go back to start
      TweenMax.to(event.target, 1, {x:-10});
      clearInterval(move);
    });
  }, 10);
})