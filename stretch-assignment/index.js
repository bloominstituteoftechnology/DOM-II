

//====Add container event listener====

const container = document.querySelector('.blocks');
container.addEventListener('click', e => {
  let firstBlock = e.target;
   container.prepend(firstBlock);
 });


 //====Add setinterval callback====
 
 function intervals() {
    let counter = Math.floor((Date.now() - initTime) / 10);
     block.style.transform = `translateX(${counter}px)`;
    TweenMax.to(".block", 0.01, {
      x: counter,
      ease: Sine.easeOut
    });
  }



 //====Add block mouse down===

 const blocks = document.querySelectorAll('.block');

 blocks.forEach(block => {
   block.style.cursor = 'pointer';
   let initTime;
   let moveRight;
   block.addEventListener('mousedown', () => {
     initTime = Date.now();
     moveRight = setInterval(intervals, 1);
   });

//====Add mouse up====

window.addEventListener('mouseup', () => {
    clearInterval(moveRight);
    TweenMax.to(".block", 2, {
      x: 0,
      ease: Elastic.easeOut
     });

   });

 });
  
