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
navBar.addEventListener('keydown', function(event){
    event.preventDefault();
    this.classList.add('navBar');
    // the following commented line only does it per nav item
    // event.target.classList.add('navBar');
    console.log('navBar');
    this.addEventListener('animationend', myEndFunction)
    // TweenMax.fromTo('.navBar', 2, {x: 600, scale:0, opacity: 0}, {x: 100, rotation:360, scale:1.5, opacity: 1})
})

//  this callback allows for the animation to be executed more than once
function myEndFunction() {
    this.classList.remove('navBar')
}

//  Changes the color of each nav item at dblclick
navItems.forEach(node => {
    node.addEventListener('click', function(event) {
        event.preventDefault();
        event.target.style.color = 'red';
    })
})

//  change color of header 'Welcome to Fun Bus'
headerH2.addEventListener('drag', function(event){
    console.log('h2 selected');
    this.style.color = 'red';
})

//  Highlights the expeditions title
allExpeditionsTitle.forEach(node => {
    node.addEventListener('mousemove', function(event){
        event.target.style.color = 'purple';
    })
})

//  prompt an input box
allButtons.forEach(node => {
    node.addEventListener('dblclick', function(){
       let name = prompt('Enter name');
        console.log(name + ' you are signed up!');
    })
});

//  right click on the footer will change its color 
footer.addEventListener('contextmenu', function(){
    event.target.style.color = 'dodgerblue';
})

// alet when copied any child of intro. Also, use event.stopPropagation()
intro = document.querySelector('.intro');
intro.addEventListener('copy', function(event){
    alert('You copied Intro');
})

//  alert when a paragraph is copied. work along with event.stopPropagation()
//  if event.stopPropagation() is not added on this block, when copying the paragraph
//  on the 'Welcome to the Fun Bus' section, two alerts will pop up
//  event.stopPropagation() prevents this from happening, so only the paragraph alert will pop up
allParagraphs.forEach(node =>{
    node.addEventListener('copy', function(event){
        event.stopPropagation();
        alert("You are copying a paragraph!");
    })
})





