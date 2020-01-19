// Your code goes here
funBusHeading = document.querySelector('.logo-heading');
navBar = document.querySelector('.nav');
navItems = document.querySelectorAll('.nav-link');
headerH2 = document.querySelector('.intro h2');
allParagraphs = document.querySelectorAll('p');

//  The next two event listeners work together to change the
//  color of the header and make it bigger when hover over
//  and getting back to its original state once hover out
funBusHeading.addEventListener('mouseover', function () {
    this.classList.add('funBusHeading');
});

funBusHeading.addEventListener('mouseleave', function () {
    this.classList.remove('funBusHeading');
})

//  Rotates the entire nav bar at keydown
//  BUG: does not let this event to be called after
//  the events on navItem are called
navBar.addEventListener('keydown', function () {
    this.classList.add('navBar');
    // the following commented line only does it per nav item
    // event.target.classList.add('navBar');
    console.log('navBar');
})

//  Changes the color of each nav item at dblclick
navItems.forEach(node => {
    node.addEventListener('dblclick', function (event) {
        // event.stopPropagation();
        event.target.style.color = 'red';
    })
})

//  transition of header 'Welcome to Fun Bus'
//  BUG: it does not execute transitions
headerH2.addEventListener('drag', function () {
    console.log('h2 selected');
    this.classList.add('headerH2');
})

//  alert when an image is copied
allImages.forEach(node => {
    node.addEventListener('copy', function (event) {
        alert("You are copying a paragraph!");
    })
})
