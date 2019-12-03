// Your code goes here - 10 unique event listeners 

// #1
const logoExpand = document.querySelector('.logo-heading');
//console.log(logoExpand);
logoExpand.addEventListener('mouseover', () => {
    logoExpand.style.transform = 'scale(1.7)';
    logoExpand.style.transition = 'transform 0.3s';
})
// #2
logoExpand.addEventListener('click', () => {
    logoExpand.style.transform = 'scale(1)';
    logoExpand.style.transition = 'transform 0.3s';
})

// #3 
const busZoom = document.querySelector('.intro img');
//console.log(busZoom);
busZoom.addEventListener('wheel', () => {
    busZoom.style.transform = `scale(2)`;
    busZoom.style.transition = 'transform 4.0s'
})
// #4
busZoom.addEventListener('click', () => {
    busZoom.style.transform = `scale(1)`;
    busZoom.style.transition = 'transform 4.0s'
})

