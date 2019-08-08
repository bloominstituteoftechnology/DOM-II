//mouseover
let buttons = document.querySelectorAll(".btn");
buttons[0].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "black"
  event.target.style.color = "yellow"
});
buttons[0].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor ="yellow" 
    event.target.style.color = "black";
  });
buttons[1].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "black"
  event.target.style.color = "yellow";
});
buttons[1].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor ="yellow" ;
    event.target.style.color = "black"
  });
  buttons[2].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black"
    event.target.style.color = "yellow";
  });
  buttons[2].addEventListener("mouseleave", (event) => {
      event.target.style.backgroundColor ="yellow" ;
      event.target.style.color = "black"
    });
  

//dblclick
  let suttonb = document.querySelector(".intro h2");
  suttonb.addEventListener("dblclick", (event) => {
  event.target.style.backgroundColor = "gray";
});


let sone = document.querySelectorAll(".text-content p");
  sone[1].addEventListener("dblclick", (event) => {
  event.target.style.backgroundColor = "gray";
});
//drag
let pickYourImg = document.querySelector(".content-destination img");
pickYourImg.addEventListener("drag", (event) => {
  console.log("Don't do that");
});

//load
window.addEventListener("load", function(event) {
    console.log("This page is loaded...enjoy!");
  });
  


//nav stuff
  const navLinks = document.querySelectorAll("nav a");

    //navLinks.forEach(banana => {
    navLinks[0].addEventListener("mouseenter", navLinksHover);
    navLinks[0].addEventListener("mouseleave", navLinksNoHover);
    navLinks[1].addEventListener("mouseenter", navLinksHover);
    navLinks[1].addEventListener("mouseleave", navLinksNoHover);
    navLinks[2].addEventListener("mouseenter", navLinksHover);
    navLinks[2].addEventListener("mouseleave", navLinksNoHover);
    navLinks[3].addEventListener("mouseenter", navLinksHover);
    navLinks[3].addEventListener("mouseleave", navLinksNoHover);
  //});
  
const nav = document.querySelector('.nav-container');
nav.addEventListener('click', (event)=> {event.preventDefault()});


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

  let destination = document.querySelectorAll('.destination')

let callBack = e =>{
    e.stopPropagation()
    alert('clicked')
}

let stopProp = e =>{
    e.stopPropagation()
    alert('clicked Button')
}

destination[0].addEventListener('click',callBack)

let dButton = destination[0].querySelector('.btn')
console.log(dButton)
dButton.addEventListener('click',stopProp)