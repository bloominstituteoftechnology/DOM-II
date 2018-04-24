const blocks = document.querySelectorAll('.block');

for (let i = 0; i < blocks.length; i++) {
  blocks[i].style.position = 'relative';
  blocks[i].style.left = '0';
  blocks[i].style.transition = 'left 1s';
  
  blocks[i].addEventListener('mouseup', function() {
    let blockContainer = document.querySelector('.blocks');
    blockContainer.prepend(this);
  });

  blocks[i].addEventListener('mousedown', function() {
    this.style.left = '100vw';
  });

  document.addEventListener('mouseup', function () {
    blocks[i].style.left = '0';
  });
}