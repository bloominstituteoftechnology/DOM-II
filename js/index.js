// Your code goes here
//1 bg color
const bgChange = document.querySelector('.main-navigation')
bgChange.addEventListener('click', () => {
    bgChange.style.backgroundColor = 'cyan'
})


//2 resize photo
const busAnimate = document.querySelector('img')
busAnimate.addEventListener('mouseenter', () => {
    busAnimate.style.transform = 'scale(1.5)';
    busAnimate.style.transition = 'transform 0.5s'
})
busAnimate.addEventListener('mouseleave', () => {
    busAnimate.style.transform = 'scale(.5)'
  }) 


  //3 font color
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

//4 rotate photo
const sizing = document.querySelector('.img-fluid');
window.addEventListener('resize', () => {
    sizing.style.transform = 'rotate(90deg)'
})



//5 audio
window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.play();
});



//6 scroll
const scrolling = document.querySelector('body');
window.addEventListener('scroll', () => {
    scrolling.style.backgroundColor = 'grey'
})

//7 skew
document.querySelectorAll('.btn').forEach(e => {
    e.addEventListener('mousedown', () => {
        e.style.transform = 'skew(40deg, -10deg)';
    })
})


//8 translate
const translating = document.querySelector('.img-water');
window.addEventListener('drag', () => {
    translating.style.transform = 'translateX(75px)';
    translating.style.transition = 'transform 2s'
})

//9 wheel
const dogsRule = document.querySelector(".img-coffee");

window.addEventListener("wheel", () => {
  dogsRule.src = "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
});

//10 select
const selecting = document.querySelector('.intro')
selecting.addEventListener('contextmenu', () => {
    selecting.style.color = 'red'
})




//stop refresh
const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", (e) => {
  e.preventDefault();
  
})