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
const btn = document.querySelector('.btn');
const footer = document.querySelector('.footer');
const paragraphs = document.querySelector('.dText');
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

////i need to practice for loops with event listeners
// for (let i=0; i < btn.length; i++) {
//   btn[i].addEventListener('mouseover', () => {
//     btn.innerHTML = "GET OFF ME";
//   })
// }

btn.addEventListener('mouseenter', () => {
  btn.innerHTML = "GET OFF ME";
  btn.classList.toggle('black');
})


// event 7
footer.addEventListener('dblclick', () => {
  footer.style.backgroundColor = 'black';
})


// event 8
paragraphs.addEventListener('mouseenter', () => {
  paragraphs.style.color = "red";
})



// event 9

//wont change the text
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].addEventListener('click', () => {
    paragraphs[i].innerHTML = "One of us...";
  })
}



// event 10
img.addEventListener('wheel', () => {
  img.style.borderRadius = '100px';
})




