// ################################ ROCKETS #################################

// gives an array-like object containing all elements that have a .block
const block = document.querySelectorAll('.block');

// iterate  over each item in array and attach addEventListener method to each item
block.forEach((item) => {
item.addEventListener('click', (event) => {
    
    // access parent div 'blocks'
    const parent = item.parentElement;
    // remove clicked 'block' from parent
    // parent.removeChild(item);

    // prepend attaches any item or in this case 'block' to the parent as the parent's first child element
    parent.prepend(item);
});
});

// ################################ TRAVELERS #################################
   

block.forEach((item) => {
    item.addEventListener('mousedown', (event) => {
        event.target.style.position = 'relative';
        event.target.style.transform = 'translate(600px)';       
});

item.addEventListener('mouseout', (event) => {
    event.target.style.position = 'relative';
    event.target.style.transform = 'translate(0)'; 
});
});



   

