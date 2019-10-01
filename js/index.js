// Your code goes here

//This makes the "fun bus" logo get GIANT (1, 2)
const logoScaleUp = document.querySelector('.logo-heading');
    logoScaleUp.addEventListener('mouseenter', e => {
    console.log('mouseover happened');
    logoScaleUp.style.transform = 'scale(25)';
});

const logoScaleDown = document.querySelector('.logo-heading');
    logoScaleDown.addEventListener('mouseleave', e => {
        logoScaleDown.style.transform = 'scale(0.5)';
});


//This changes the color of fun bus to blue if the window size changes
const sizeChange = document.querySelector('.nav-container');
    window.addEventListener('resize', e => {
        sizeChange.style.color = 'blue';
    });

// this rotates the funBus image (4)
const rotatingBus = document.querySelector('.intro img');
// console.log(rotatingBus);
    rotatingBus.addEventListener('dblclick', () => {
        rotatingBus.style.transform = 'rotate(980deg)';
        rotatingBus.style.transition = 'all 1s';
    })


//stopping nav items from refreshing the page (5)
const stopNav = document.querySelector('.nav-link'); 
stopNav.addEventListener('click', (something) => {
    something.preventDefault;
})

// when f is pressed down, the background color changes to black(6)
const space = document.querySelector('body');
space.addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key === 'f') { 
        // console.log(keyCode);
        space.style.backgroundColor = 'black';
    }
})

// when f key is released, the background color changes to purple (7)
space.addEventListener('keyup', (event) => {
    if(event.key === 'f');
        space.style.backgroundColor = 'purple';
})

// when the left mouse button is pressed down, the image changes to a doll (8) 
  const changePic = document.querySelector('.content-section .img-content img');
  console.log(changePic);
  changePic.addEventListener('mousedown', (e) => {
      console.log('mousedown');
      changePic.setAttribute('src', '../img/creepy.jpg');
  })
// when the left mouse button is let up, the image changes to a crazy horse(9)
  changePic.addEventListener('mouseup', (e) => {
        console.log('mouseup');
        changePic.setAttribute('src', '../img/horse.jpg' )
        e.stopPropagation();
  })

//when mouse passes over the nav bar, it changes the text to be purple (10)
const last = document.querySelector('.nav');
last.addEventListener('mouseover', (e) => {
    event.target.style.color = 'purple';
})