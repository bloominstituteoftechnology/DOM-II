
// Your code goes here




navBar = document.querySelector('.nav');
navItems = document.querySelectorAll('.nav-link');
headerH2 = document.querySelector('.intro h2');
allParagraphs = document.querySelectorAll('.p');
contentPick = document.querySelector('.content-pick');
divH4 = document.querySelector('h4');


divH4.addEventListener = ('click' , (event) => {
    event.target.style.backgroundColor = "yellow" ; 
});

let funBusHeading = document.querySelector('.logo-heading');
// Receive a "Don't Try It" note.
console.log('hello') ;

funBusHeading.addEventListener('click', (event) => {
alert('Dont Try it!');
});

funBusHeading.addEventListener('click', (event) => {event.target.style.backgroundColor = 'yellow'; });
navBar.addEventListener('click', (event) => {alert('Almost There!');
});

contentPick.addEventListener('click', (event) => {alert('complete!')
});

headerH2.addEventListener('click', (event) => {
event.target.style.backgroundColor = 'yellow';
event.target.style.borderColor = 'yellow';

});
headerH2.addEventListener('mouseenter', () => {
headerH2.style.transform = "scale(1.2)";
headerH2.style.transition = "all 0.5s";

});

headerH2.addEventListener('mouseout', () => {
headerH2.style.transform = "scale(1.1)";
headerH2.style.transition = "all 0.5s";

});


//  alert when an image is copied
contentPick.addEventListener('mouseenter', () => {
contentPick.style.transform = "scale(1.2)";
contentPick.style.transition ="all 0.5s";

});

contentPick.addEventListener('mouseout', () => {
contentPick.style.transform = "scale(1.1)";
contentPick.style.transition = "all 0.5s";

});

funBusHeading.addEventListener('mouseenter', () => {
funBusHeading.style.transform = "scale(1.2)";
funBusHeading.style.transition = "all 0.5s";

});

funBusHeading.addEventListener('mouseout', () => {
funBusHeading.style.transform = "scale(1.5)";
funBusHeading.style.transition = "all 0.5s";

});
