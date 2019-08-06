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
  alert("Are you ready!!!!");
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