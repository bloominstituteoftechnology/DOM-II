const navLogoHeading = document.querySelector('.logo-heading');

// INCREASE SIZE OF LOGO HEADING ON MOUSEOVER
navLogoHeading.addEventListener("mouseover", (e) => e.target.style.transform = "scale(1.5)");

const nav = document.querySelector(".nav");

// ADDED CONSOLE LOG FOR WHEN FUN IN THE SUNS DIV IS CLICKED 
signUpButton1Div.addEventListener("click", (e) => {
  console.log("div-clicked");
})


// STOPPING THE BUBBLING OF DIV CLICKED CONSOLE LOG
signUpButton1.addEventListener('click', (e) => {
  console.log("signup 1 clicked");
  e.stopPropagation();
})


const body = document.querySelector('body');
const header = document.querySelector('header');

// added alerts when user scrolls. 
body.addEventListener('wheel', function alertMeOnce(){
  alert("WEEEEEEEEEEEE!!!!!!");
  body.removeEventListener('wheel', alertMeOnce);
});

const funBusBanner = document.querySelector(".intro > img" );

 //color of header changes and hearder gets bigger
funBusHeading.addEventListener('mouseover', function() {
    this.classList.add('funBusHeading');
})

 funBusHeading.addEventListener('mouseleave', function() {
    this.classList.remove('funBusHeading');
});

 //  Rotates the entire nav bar at arrow keydown
navBar.addEventListener('keydown', function(event){
    event.preventDefault();
    this.classList.add('navBar');
    console.log('navBar');
    this.addEventListener('animationend', myEndFunction)
})

 //  Changes the color of each nav item at dblclick
navItems.forEach(node => {
    node.addEventListener('click', function(event) {
        event.preventDefault();
        event.target.style.color = 'red';
    })
})

 //  change color: welcome to fun bus
headerH2.addEventListener('drag', function(event){
    console.log('h2 selected');
    this.style.color = 'red';
})

 //  right click the footer will change of color
footer.addEventListener('contextmenu', function(){
    event.target.style.color = 'dodgerblue';
})


//Query Selectors

funBusHeading = document.querySelector('.logo-heading');
navBar = document.querySelector('.nav');
navItems = document.querySelectorAll('.nav-link');
headerH2 = document.querySelector('.intro h2');
allParagraphs = document.querySelectorAll('p');
allExpeditionsTitle = document.querySelectorAll('.destination h4')
allButtons = document.querySelectorAll('.btn');
footer = document.querySelector('.footer');


