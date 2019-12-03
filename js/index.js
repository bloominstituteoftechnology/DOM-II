// Your code goes here - 10 unique event listeners 


const logoExpand = document.querySelector('.logo-heading');
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
    item.addEventListener('focus', () => {
        item.style.background = 'red';
        item.style.borderRadius = '5px';
        item.style.padding = '3px';
        item.style.color = 'white';
        item.style.transform = 'scale(1.4)';
        item.style.transition = 'transform 1.5s'
    })

// #5
    item.addEventListener('blur', () => {
        item.style.background = '';
        item.style.color = 'black';
        item.style.transform = 'scale(1)';
        item.style.transition = 'transform 1.5s'
    } )
});

// #6
const changeImg = document.querySelector('.img-content img');
changeImg.addEventListener('dblclick', () => {
    changeImg.src='img/james-bold--PcZLgzmoIY-unsplash.jpg';
})



//const textDragged = document.getElementsByClassName('.text-content');




