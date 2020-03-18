// Your code goes here
 const doc = document;

 // MOUSEOVER 

//  const moNav = doc.querySelectorAll('.main-navigation');

//  moNav.addEventListener('mouseover', function(event) {
//      event.target.style.color = "violet";
//  });

const header = doc.querySelector('.main-navigation');

// Bolden up our header to make it more prominent

header.addEventListener('mouseover', (event) => {
    // event.stopPropagation();
    event.target.style.color = 'violet';
});