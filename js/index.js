// Your code goes here
// Here are some unique events you could try to use:
//  mouseover
//  keydown
//  wheel
//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick

//change color of logo, font size and give it a background and revert
let logo = document.querySelector('.logo-heading');

  logo.addEventListener('mouseenter', (event)=>{
       logo.style.backgroundColor ='blanchedalmond';
       logo.style.fontSize='60px';
       logo.style.color ='limegreen';
     });
   logo.addEventListener('mouseleave', (event) =>{
     logo.style.backgroundColor = 'white';
     logo.style.fontSize= '40px';
     logo.style.color = 'black';
   });


// underline nav items and color limegreen dblclick
let navItems = document.querySelectorAll('nav a');
navItems.forEach(item =>{
    item.addEventListener('click', (event)=>{
        item.style.color= 'limegreen';
        item.style.textDecoration='underline';
      });

    });

// give first image rounded corners on on mouse scroll

let img1 = document.querySelector('.intro img');
img1.addEventListener('mouseenter', (event)=>{
    console.log(`mouseentered.`);
    img1.style.borderRadius = '50px';
});
img1.addEventListener('mouseleave', (event)=>{
    img1.style.borderRadius = 0;
});

// colors background around text content on mouse enter and revert

let textContent = document.querySelectorAll('.text-content');
  console.log(textContent);
   textContent[0].addEventListener('mouseenter', (event) => {
   textContent[0].style.backgroundColor = 'limegreen';
 });
   textContent[0].addEventListener('mouseleave', (event) =>{
   textContent[0].style.backgroundColor = 'white';
 });
   textContent[1].addEventListener('mouseenter', (event) => {
   textContent[1].style.backgroundColor = 'limegreen';
 });
   textContent[1].addEventListener('mouseleave', (event) =>{
   textContent[1].style.backgroundColor = 'white';
 });

 // button change background color on click
let button =document.querySelectorAll('.btn');
    button[0].addEventListener('click', (event) => {
      button[0].style.backgroundColor= 'limegreen';
    });
    button[1].addEventListener('click', (event) => {
      button[1].style.backgroundColor= 'limegreen';
    });
    button[2].addEventListener('click', (event) => {
      button[2].style.backgroundColor= 'limegreen';
    });
