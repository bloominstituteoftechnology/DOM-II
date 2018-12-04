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

// blockContainer.addEventListener('mousedown', e => {
//   window.setInterval(function(){
//     marginstuff++;
//     e.target.style.marginLeft = marginstuff + 'px';
//   },100);
  
// });


// function rocketFly(rocket) {
//   let rocketH = rocket.style.marginLeft;
//   let rocketnew = rocketH.split('px');
  
//   // rocketH.pop();
//   // rocketH.pop();
//   // rocketH.join('');
//   console.log('/////////////////////////////////' + rocketH);

//   window.setInterval(function () {
//     console.log(rocket.style.marginLeft);
//     if (fly === true) {
//       rocket.style.marginLeft = `${rocketH++}px`;
//     } else if(rocketH > 0) {
//       rocket.style.marginLeft = `${rocketH--}px`;
//     }
//   }, 10)
// }
