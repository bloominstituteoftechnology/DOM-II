// Your code goes here

unBusHeading = document.querySelector('.logo-heading');
navBar = document.querySelector('.nav');
navItems = document.querySelectorAll('.nav-link');
headerH2 = document.querySelector('.intro h2');
allParagraphs = document.querySelectorAll('p');

// Receive a "Don't Try It" note.
funBusHeading.addEventListener('click', (event) => {
   alert('Dont Try it!')
});

funBusHeading.addEventListener('click', (event) => { 
event.target.style.backgroundColor = 'green'; 

});

NavBar.addEventListener('click', (event) => {
    alert('Almost There!')
});


//  Changes the color of each nav item at dblclick
navItems.forEach(node => {
    node.addEventListener('dblclick', function (event) {
        // event.stopPropagation();
        event.target.style.color = 'red';
    })
})


headerH2.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'green';
    event.target.style.borderColor = 'yellow';
});

//  alert when an image is copied
allImages.addEventListener('mouseleave', () => {
    allImages.style.transform = "scale(2)"
})
