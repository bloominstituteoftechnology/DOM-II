// Your code goes here

funBusHeading = document.querySelector('.logo-heading');
navBar = document.querySelector('.nav');
navItems = document.querySelectorAll('.nav-link');
headerH2 = document.querySelector('.intro h2');
allParagraphs = document.querySelectorAll('p');
allExpeditionsTitle = document.querySelectorAll('.destination h4')
allButtons = document.querySelectorAll('.btn');
footer = document.querySelector('.footer');

//  The next two event listeners work together to change the
//  color of the header and make it bigger when hover over
//  and getting back to its original state once hover out
funBusHeading.addEventListener('mouseover', function() {
    this.classList.add('funBusHeading');
});

funBusHeading.addEventListener('mouseleave', function() {
    this.classList.remove('funBusHeading');
})

//  Rotates the entire nav bar at keydown
navBar.addEventListener('keydown', function(){
    this.classList.add('navBar');
    // the following commented line only does it per nav item
    // event.target.classList.add('navBar');
    console.log('navBar');
    this.addEventListener("animationend", myEndFunction)
    // TweenMax.fromTo('.text-content h2', 2, {x: 600, scale:0, opacity: 0}, {x: 100, rotation:360, scale:1.5, opacity: 1})
})

//  this callback allows for the animation to be executed more than once
function myEndFunction() {
    this.classList.remove('navBar')
}

//  Changes the color of each nav item at dblclick
navItems.forEach(node => {
    node.addEventListener('dblclick', function(event) {
        event.target.style.color = 'red';
    })
})

//  transition of header 'Welcome to Fun Bus'
//  BUG: it does not execute transitions
headerH2.addEventListener('drag', function(){
    console.log('h2 selected');
    this.classList.add('headerH2')
})

//  alert when a paragraph is copied
allParagraphs.forEach(node =>{
    node.addEventListener('copy', function(event){
        alert("You are copying a paragraph!");
    })
})

//  Highlights the expeditions title
allExpeditionsTitle.forEach(node => {
    node.addEventListener('mousemove', function(event){
        event.target.style.color = 'purple';
    })
})

//  prompt an input box
allButtons.forEach(node => {
    node.addEventListener('click', function(){
       let name = prompt('Enter name');
        console.log(name + ' you are signed up!');
    })
});

//  right click on the footer will change its color 
footer.addEventListener('contextmenu', function(){
    event.target.style.color = 'dodgerblue';
})



