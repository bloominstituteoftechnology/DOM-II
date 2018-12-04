// Your code goes here
const pageHeader = document.querySelector('.main-navigation');
pageHeader.addEventListener('mouseenter', function(e) {
    pageHeader.style.backgroundColor = '#17A2B8';
})


// const links = document.querySelectorAll('a');
// links.addEventListener('mouseover', function(e) {
//     e.stopPropagation();
//     for (let i = 0; i < links.length; i++) {
//         links[i].style.color = 'white';
//     }
// })

const busPic = document.querySelector('.bus-pic');
busPic.addEventListener('click', function(e) {
    busPic.src = 'img/photo-1464851707681-f9d5fdaccea8.jpeg'
})