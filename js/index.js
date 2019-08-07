// Your code goes here


let intro = document.querySelector(".intro h2");
intro.addEventListener("copy", (event) => {
  alert("Intro is copied");
});


//2
// mouseover
let buttons = document.querySelectorAll(".btn");
buttons[0].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "teal";
  event.target.style.color ="black" ;
});
buttons[1].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor ="white" ;
  event.target.style.color ="black" ;
});
buttons[2].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor ="white" ;
  event.target.style.color ="black" ;
});
// mouse leave
buttons[0].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "black";
    event.target.style.color ="white" ;
  });
  buttons[1].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "black";
    event.target.style.color ="white" ;
  });
  buttons[2].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "black";
    event.target.style.color ="white" ;
  });



 // 3 mouseover
 const foot = document.querySelector('footer');
 foot.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'white';
})


//4 dblclick

let letsGo = document.querySelector(".img-content img");
letsGo.addEventListener("dblclick", (event) => {
  event.preventDefault();
  alert("goodbye!");
});


//5 mouse move
let destination = document.querySelectorAll(".destination h4");
destination[0].addEventListener("mousemove", (event) => {
  event.target.style.color = "teal";
});
destination[1].addEventListener("mousemove", (event) => {
  event.target.style.color = "teal";
});
destination[2].addEventListener("mousemove", (event) => {
  event.target.style.color = "teal";
});


//6 drag
let pickYour = document.querySelector(".content-destination h2");
pickYour.addEventListener("drag", (event) => {
  alert("Pick your destination is being dragged");
});

//7 click
let paragraph = document.querySelector('p')
paragraph.addEventListener('click', (event) => {
    event.target.style.color = 'teal'
   
});

//8 stop propagation
let header2 = document.querySelector('.text-content h2');
 header2.addEventListener('mouseover', (event) => {
        event.target.style.color = 'teal';
        event.stopPropagation();
 });
 
 //9 remove img
 let imgRemove = document.querySelector('.img-content img');
 

 imgRemove.addEventListener('dblclick', event)

 imgRemove.addEventListener('dblclick', event => {
     imgRemove.style.display = 'none'
 })


 //10 nav click
 let navItems = document.querySelectorAll('nav a')
 
 navItems.forEach( aTag => {
    aTag.addEventListener('click', event => {
        event.preventDefault()
    })
})

//more nav selectors
const navLinks = document.querySelectorAll("nav a");


navLinks[0].addEventListener("mouseenter", navLinksHover);
navLinks[0].addEventListener("mouseleave", navLinksNoHover);
navLinks[1].addEventListener("mouseenter", navLinksHover);
navLinks[1].addEventListener("mouseleave", navLinksNoHover);
navLinks[2].addEventListener("mouseenter", navLinksHover);
navLinks[2].addEventListener("mouseleave", navLinksNoHover);
navLinks[3].addEventListener("mouseenter", navLinksHover);
navLinks[3].addEventListener("mouseleave", navLinksNoHover);



function navLinksHover(event) {
event.target.style.color = "steelblue";
event.target.style.fontSize = "2.5rem";
event.target.style.fontWeight = "black";
}

function navLinksNoHover(event) {
event.target.style.color = "black";
event.target.style.fontSize = "1.6rem";
event.target.style.fontWeight = "normal";
}

// stretch
let introHeading = document.querySelector('.intro-heading');
let headerShake = document.querySelector('.intro');



const spin = document.querySelector(".intro-heading");

window.addEventListener("load", x => {
  TweenMax.to(spin, 1.5, { rotation: 360 });
});

const btnClick = document.querySelector(".btn");

window.addEventListener("click", x => {
  TweenLite.to(btnClick, 2.5, { ease: Expo.easeOut, y: -15 });
  alert ("see you later")
});

TweenMax.staggerTo(".funBus", 2, {
  scale:0.1,
  y:40,
  stagger:{
      amount: 2, //total seconds to divide up among staggers
      from: "center", //or an index value. Determines where staggers originate
      grid:"auto", //or [columns, rows] 
      ease: Power1.easeIn //determines spacing
  }
});




