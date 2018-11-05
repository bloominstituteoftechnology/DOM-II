// Your code goes here
const home = document.querySelector('.home');
const h2 = document.querySelector('h2') ; 
const destination = document.querySelector('.destination');
const p = document.querySelectorAll('p');
const aTags = document.querySelectorAll('a');
const introImg = document.querySelector('.intro img');
const nav = document.querySelector(".main-navigation")
const imgOne = document.querySelector('.img1 img');
const imgTwo = document.querySelector('.img2 img');
const btn = document.querySelectorAll('.btn');
const footer = document.querySelector('.footer');
const paragraphs = document.querySelectorAll('.dText');
const img = document.querySelector('.img-content img');

// event 1
nav.addEventListener('dblclick', () => {
  nav.style.backgroundColor = 'dodgerblue';
});


// event 2
introImg.addEventListener('click', () => {
  introImg.style.opacity = '0';

  introImg.addEventListener('click', () => {
    introImg.style.opacity = "1";
    introImg.setAttribute('src', "img/LiveAdventure.png")
  })
})


// event 3

//errored with "uncaught type error: p.addEventListener is not a function"
// p.addEventListener("mouseenter", () => {
//   p.innerHTML = "One of us.... One of us.... One of us.... One of us.... One of us.... One of us.... One of us.... One of us.... One of us.... One of us.... ";
// })



// event 4
imgOne.addEventListener('click', () => {
  imgOne.style.opacity = '0';

  imgOne.addEventListener('click', () => {
    imgOne.style.opacity = "1";
    imgOne.setAttribute('src', "img/AdventureBus.png");
  })
})



// event 5
imgTwo.addEventListener('click', () => {
  imgTwo.style.opacity = '0';

  imgTwo.addEventListener('click', () => {
    imgTwo.style.opacity = "1";
    imgTwo.setAttribute('src', "img/Barney.png")
  })
})


// event 6


for (let i=0; i < btn.length; i++) {
  btn[i].addEventListener('mouseover', () => {
    btn[i].innerHTML = "GET OFF ME";
  })
}


// event 7
footer.addEventListener('dblclick', () => {
  footer.style.backgroundColor = 'black';
})


// event 8

  for (i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener('mouseenter', () => {
    paragraphs[i].style.color = "red";
  })
}



// event 9

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener('click', () => {
    paragraphs[i].textContent = "One of us... One of us... One of us... One of us... One of us... One of us... One of us... One of us... ";
  })
}



// event 10
img.addEventListener('wheel', () => {
  img.style.borderRadius = '100px';
})


// event 11
const body = document.querySelector('body')
document.addEventListener('cut', function (event) {
  body.style.background = 'red'
})

// event 12
document.addEventListener('paste', function (event) {
  body.style.background = 'mediumspringgreen'
})

// event 13
document.addEventListener('copy', function (event) {
  body.style.background = 'dodgerblue'
})

//using .preventDefault()

for (let i = 0; i < aTags.length; i++) {
  aTags[i].addEventListener('click', () => {
      preventDefault();
      });
      
}