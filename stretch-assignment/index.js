const theBlocks = document.querySelectorAll('.block');
const blockContainer = document.querySelector('.blocks');

theBlocks.forEach(item => {
  let rocketX = 0;
  let go = false;
  item.addEventListener('mousedown', _ => {
    go = true;
    
      const fly = window.setInterval(function(){
        if(go){
          
          item.style.left = rocketX++ + 'px';
          
        }else{
          clearInterval(fly);
        }
      }, 10);
      
  });

  item.addEventListener('mouseup', _ => {
    go = false;
  });

  item.addEventListener('mouseleave', _ => {
    go = false;
  });
});

blockContainer.addEventListener('click', e => {
  theBlocks.forEach( item => {
    item.style.order = 1;
  });

  e.target.style.order = 0;
});