// Your code goes here
//bg color
const bgChange = document.querySelector('.main-navigation')
bgChange.addEventListener('click', () => {
    bgChange.style.backgroundColor = 'cyan'
})


// resize photo
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


  //font color
  document.querySelectorAll('h2').forEach(e => {
      e.addEventListener('dblclick', () => {
          e.style.color = 'blue';
      })
  })

  
// const colorful = document.querySelector('.img-fluid');
// colorful.addEventListener('mouseenter', () => {
//     gsap.to('.img-fluid', {
//         filter: "none",
//     })
// })

//rotate photo
const sizing = document.querySelector('.img-fluid');
window.addEventListener('resize', () => {
    sizing.style.transform = 'rotate(90deg)'
})



//audio
window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.play();
});



//scroll
const scrolling = document.querySelector('body');
window.addEventListener('scroll', () => {
    scrolling.style.backgroundColor = 'grey'
})

//skew
document.querySelectorAll('.btn').forEach(e => {
    e.addEventListener('mousedown', () => {
        e.style.transform = 'skew(40deg, -10deg)';
    })
})


//translate
const translating = document.querySelector('.img-water');
window.addEventListener('drag', () => {
    translating.style.transform = 'translateX(75px)';
    translating.style.transition = 'transform 2s'
})

//2 events during dragend





//stop refresh
const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", (event) => {
  event.preventDefault();
  
})