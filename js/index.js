// Your code goes here

// mouseover
let highLightLink = document.querySelector('a');
highLightLink.addEventListener('mouseover', (event) => {
    
    event.target.style.color = 'yellow';
    event.preventDefault();


    setTimeout (() => {
        event.target.style.color = ''; 
    }, 500);
}, false);


// keydown
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert(' hey, you pressed key: ' + keyName + '. Please press another key!');
  });


// wheel

// drag / drop
// load
// focus
// resize
// scroll
// select
// dblclick