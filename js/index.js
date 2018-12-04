// Your code goes here


//========== Header event listeners
const pageHeader = document.querySelector('.main-navigation');
pageHeader.addEventListener('mouseenter', function(e) {
    pageHeader.style.backgroundColor = '#17A2B8';
})


const links = document.querySelectorAll('nav-links');
// pageHeader.removeEventListener('mouseenter', function(e) {
//     pageHeader.style.backgroundColor = '#17A2B8';
// })
// links.addEventListener('mouseover', function(e) {
//     e.stopPropagation();
//     // for (let i = 0; i < links.length; i++) {
//     //     links[i].style.color = 'white';
//     // }
//     links[0].style.color = 'white';
// })
// links[0].addEventListener('mouseover', function(e) {
//     e.preventDefault();

// })

//==========  page event listeners
const home = document.querySelector('.home');
home.addEventListener('wheel', function(e) {
    console.log('Wheeeee!');
})

//========== Main content event listeners
const busPic = document.querySelector('.bus-pic');
busPic.addEventListener('click', function(e) {
    busPic.src = 'img/photo-1464851707681-f9d5fdaccea8.jpeg'
})

