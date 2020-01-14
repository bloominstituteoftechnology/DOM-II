// Your code goes here
//mouse click
const bgChange = document.querySelector('.main-navigation')
bgChange.addEventListener('click', () => {
    bgChange.style.backgroundColor = 'cyan'
})


// mouse enter
// const drive = document.querySelector('.img-content');
// drive.addEventListener('mouseenter', () => { 
//   gsap.to('.img-content', {
//   duration: 1,
//   filter: "none",
//   x: -20,
//   y: -10,
//   // rotate: 360,
//   yoyo: true,
//   repeat: 1
// })
  
// })

const busAnimate = document.querySelector('img')
busAnimate.addEventListener('mouseenter', () => {
    busAnimate.style.transform = 'scale(1.5)';
    busAnimate.style.transition = 'transform 0.5s'
})
busAnimate.addEventListener('mouseleave', () => {
    busAnimate.style.transform = 'scale(.5)'
  }) 

  //dblclick
  document.querySelectorAll('h2').forEach(e => {
      e.addEventListener('dblclick', () => {
          e.style.color = 'blue';
      })
  })

//   
const colorful = document.querySelector('.img-content');
colorful.addEventListener('mouseenter', () => {
    gsap.to('.img-content', {
        filter: "none",
    })
})