const blocks = document.querySelectorAll('.block');

for (let i = 0; i < blocks.length; i++) {
  let blockContainer = document.querySelector('.blocks');
  
  blocks[i].addEventListener('click', function() {
    blockContainer.prepend(this);
  });
}