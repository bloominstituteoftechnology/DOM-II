// Your code goes here

let homebutton = document.querySelector(".nav-link");
homebutton.addEventListener('click', () =>{
  homebutton.style.backgroundColor ="green";    
});

let letsgo = document.querySelector('.text-content h2');
letsgo.addEventListener('dblclick', () =>{
  letsgo.style.backgroundColor ="green";     
});

let busImage = document.querySelector('.intro img');
window.addEventListener('resize', () =>{
    busImage.style.color ="green";  
     busImage.setAttribute("src", "img/adventure.jpg");  
});

let logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', () =>{
    logo.style.color = "yellow";
});


let buttons = document.querySelectorAll('.btn');
buttons[0].addEventListener('click', () =>{
  buttons[0].style.color = "red";
});
buttons[1].addEventListener('click', () =>{
  buttons[1].style.color = "blue";
});
buttons[2].addEventListener('click', () =>{
  buttons[2].style.color = "yellow";
});


let island = document.querySelectorAll(".content-pick .destination h4")[2];
island.addEventListener('click', () =>{
  island.style.color = "yellow";
});
console.log(island)

let content_section = document.querySelector('.content-section');
let text_content = content_section.querySelector('.text-content');
let expedition = text_content.querySelectorAll('p')[1];
console.log(expedition)


expedition.addEventListener('click', () =>{
  expedition.style.color = "blue";
});
