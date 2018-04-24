const blocks = document.querySelectorAll('.block');

for (let i = 0; i < blocks.length; i++) {
  let blockContainer = document.querySelector('.blocks');
  
  blocks[i].addEventListener('mouseup', function() {
    blockContainer.prepend(this);
  });
}