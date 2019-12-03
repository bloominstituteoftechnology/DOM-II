// Your code goes here - 10 unique event listeners 


const logoExpand = document.querySelector('.logo-heading');
//console.log(logoExpand);
// #1
logoExpand.addEventListener('mouseover', () => {
    logoExpand.style.transform = 'scale(1.7)';
    logoExpand.style.transition = 'transform 0.3s';
})
// #2
logoExpand.addEventListener('click', () => {
    logoExpand.style.transform = 'scale(1)';
    logoExpand.style.transition = 'transform 0.3s';
})
 
const busZoom = document.querySelector('.intro img');
//console.log(busZoom);
// #3
busZoom.addEventListener('wheel', () => {
    busZoom.style.transform = `scale(2)`;
    busZoom.style.transition = 'transform 4.0s'
})
busZoom.addEventListener('click', () => {
    busZoom.style.transform = `scale(1)`;
    busZoom.style.transition = 'transform 4.0s'
})

// #4 
const navFocus = document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('focus', event => {
        item.style.background = 'red';
        item.style.color = 'white';
    })
// #5
    item.addEventListener('blur', event => {
        item.style.background = '';
        item.style.color = 'black';
    } )
});
// console.log(titleSelect);


