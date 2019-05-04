// initial commit

// Selectors
let navItems = document.querySelectorAll('.nav-link');

//doubleclick: changes color of nav items
navItems.forEach(event => {
    event.addEventListener('dblclick', (event) => {
        event.target.style.color = 'purple'; 
    });
});
