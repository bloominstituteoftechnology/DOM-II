// Your code goes here

//mouseenter event
const funBus = document.querySelector('h1');
//console.log(funBus);
funBus.addEventListener("mouseenter", () => {
    funBus.style.color = "purple";
    funBus.style.fontSize = "6rem";
});




//click event
const intro = document.querySelector('.text-content h2');
//console.log(intro);
intro.addEventListener("click", () => {
  intro.style.fontSize = '7.5rem'
  intro.textContent = "Let's not go";
})

//resize event
const pick = document.querySelector(".content-destination img");
//console.log(pick);
window.addEventListener("resize", () => {
   pick.src="https://images.unsplash.com/photo-1564346610118-6e57ec21b9c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
})


//double click event 
const change = document.querySelector('.intro img');
//console.log(changeImg);
change.addEventListener("dblclick", () => {
  change.src = "https://images.unsplash.com/photo-1501619593928-bef49688c888?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
})





//scroll event
const body = document.querySelector('body');
window.addEventListener('scroll', () => {
     body.style.backgroundColor="slategray"
    })

//key down event
const key = document.querySelector('body');
key.addEventListener('keydown', logKey);

function logKey(e) {
  key.textContent += ` ${e.code}`;
}

//wheel event
const wheel = document.querySelector('.main-navigation');
wheel.addEventListener('wheel', () => {
    wheel.style.display = 'none';
})
   

//propagation 
const page = document.querySelector("body");
page.addEventListener("click", (event) => {
 page.style.backgroundColor="aqua";
  event.stopPropagation();
})

const contSec = document.querySelector(".content-section");
contSec.addEventListener('click', (event) => {
  contSec.style.backgroundColor="transparent";
  event.stopPropagation();
});

const card = document.querySelector(".text-content p");
card.addEventListener('click', (event) => {
  card.style.display="none";
  // console.log("start")
  console.log(event);
  event.stopPropagation();
})

//prevent default
const prevent = document.querySelector('.main-navigation');
prevent.addEventListener('click', (event) => {
  event.preventDefault();
  
})
