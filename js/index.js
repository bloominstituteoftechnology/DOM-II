// Your code goes here


let intro = document.querySelector(".intro h2");
intro.addEventListener("copy", (event) => {
  alert("Intro is copied");
});


//2
let buttons = document.querySelectorAll(".btn");
buttons[0].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "purple";
});
buttons[1].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor ="green" ;
});
buttons[2].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "red";
});
buttons[0].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "blue ";
  });
  buttons[1].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "blue";
  });
  buttons[2].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "blue";
  });

 // 3
 const foot = document.querySelector('footer');
 foot.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'yellow';
})


//4

let letsGo = document.querySelector(".img-content img");
letsGo.addEventListener("dblclick", (event) => {
  event.preventDefault();
  alert("WOOOOOOOOOOOO!!!!!!");
});


//5
let destination = document.querySelectorAll(".destination h4");
destination[0].addEventListener("mousemove", (event) => {
  event.target.style.color = "red";
});
destination[1].addEventListener("mousemove", (event) => {
  event.target.style.color = "red";
});
destination[2].addEventListener("mousemove", (event) => {
  event.target.style.color = "red";
});


//6
let pickYour = document.querySelector(".content-destination h2");
pickYour.addEventListener("drag", (event) => {
  alert("Pick your destination is being dragged");
});

//7
let paragraph = document.querySelector('p')
paragraph.addEventListener('click', (event) => {
    event.target.style.color = 'red'
   
});

//8
let header2 = document.querySelector('.text-content h2');
 header2.addEventListener('mouseover', (event) => {
        event.target.style.color = 'green';
        event.stopPropagation();
 });
 
 //9
 let imgRemove = document.querySelector('.img-content img');
 

 imgRemove.addEventListener('dblclick', event)

 imgRemove.addEventListener('dblclick', event => {
     imgRemove.style.display = 'none'
 })


 //10
 let navItems = document.querySelectorAll('nav a')
 
 navItems.forEach( aTag => {
    aTag.addEventListener('click', event => {
        event.preventDefault()
    })
})