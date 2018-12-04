// Your code goes here

// Mouseover
const navA = document.querySelectorAll(".nav a");
navA.forEach(function(element){ 
    element.addEventListener('mouseover', function() {  
        element.style.color = 'red';
        element.style.opacity = '0.5'
     });
  })
navA.forEach(function(element){ 
element.addEventListener('mouseout', function() {  
    element.style.color = 'yellow';
    element.style.opacity = '1'
    });
})

// Click - on images
const img = document.querySelectorAll("img");
img.forEach(function(element){
    element.addEventListener('click', function(e){
        console.log('image was clicked')
        e.stopPropagation();
        setTimeout(function(){
            element.classList.toggle('dim');
        },3000)
    },)
})

// Click - on window
window.addEventListener('click', function(){
    console.log('window was clicked')
})

// Click - on contact link in menu
const intro = document.querySelector('.intro');
const section = document.querySelectorAll('section');
console.log(section)

navA[3].addEventListener('click', function(e){
    form.classList.toggle('hide');
    form.style.paddingTop = '100px';
    intro.classList.toggle('hide');
    section.forEach(function(element){
        element.classList.toggle('hide');
})})


// Load
const logo = document.querySelector(".logo-heading");
const headerBar = document.querySelector(".main-navigation");

window.addEventListener("load", function(event) {
    logo.style.color = 'yellow';
    setTimeout(function(){
        headerBar.style.backgroundColor = 'black';
    },1000);
    
    navA.forEach(function(element){ 
            element.style.color = 'yellow';
         });
    
    console.log("All resources finished loading!");
  });

// Double Click - Sign Me Up buttons
const btn = document.querySelectorAll(".btn");
const form = document.querySelector("form")
btn.forEach(function(element){ 
    element.addEventListener('dblclick', function() {  
        form.classList.toggle('hide')
     });
  })

  //Scroll - down page to move logo image
  let logoImg = document.querySelector('.logoImg')
  window.addEventListener('scroll', function(){
        logoImg.style.marginLeft = '100px';
        console.log('test');
  })

  //focus - in contact form
form.addEventListener("focus", function( event ) {
  event.target.style.background = "pink";    
}, true);

//keydown - anywhere on page
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert('keydown event\n\n' + 'key: ' + keyName);
  });

//Prevent Default
navA[0].addEventListener('click', function(e){
e.preventDefault();
})

// Select - text within the subject field of the form
let subject = document.querySelector('#subject');
subject.addEventListener('select', function() {
    console.log('Selection changed!');
  }, false);

  //mouseleave - intro section
  intro.addEventListener('mouseleave', function(){
      intro.style.border = '1px solid red'
  })

   //mouseenter - intro section
   intro.addEventListener('mouseenter', function(){
    intro.style.border = '2px solid green'
})