// Your code goes here

//==========  entire page/window event listeners
const home = document.querySelector('.home');
home.addEventListener('wheel', function(e) {
    console.log("Wheeeee! We're scrolling, now.");
})


//========== Header event listeners
const pageHeader = document.querySelector('.main-navigation');
pageHeader.addEventListener('mouseenter', function(e) {
    pageHeader.style.backgroundColor = '#17A2B8';
})


const links = document.querySelectorAll('.nav-link');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        e.preventDefault;
        e.stopPropagation();
        links[i].style.color = '#FFFFFF';
        
    })
}


//========== Main content event listeners
const busPic = document.querySelector('.bus-pic');
busPic.addEventListener('dragend', function(e) {
    busPic.src = 'img/photo-1464851707681-f9d5fdaccea8.jpeg'
})

// const welcome = document.querySelector('.intro h2');
// // welcome.addEventListener('click', function(e) {
// //     TweenMax.from('welcome', 5, {
// //         x: 650,
// //         scale: 0.5,
// //         opacity:0.1,
// //         ease: Bounce.easeOut,
// //         delay: 0.5,
// //     });
// // })
// TweenMax.from('welcome', 5, {
//     x: 650,
//     scale: 0.5,
//     opacity:0.1,
//     ease: Bounce.easeOut,
//     delay: 0.5,
// });

const adventurePic = document.querySelector('.content-section .img-content');
adventurePic.addEventListener('click', function(e) {
    e.stopPropagation();
    adventurePic.style.display = 'none';
})

const destinationContent = document.querySelector('.content-destination');
destinationContent.addEventListener('dragstart', function(e){
    alert('This image is copyrighted!');
})

const buttons = document.querySelectorAll('.btn');
for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('mouseover', function(e) {
        buttons[i].style.backgroundColor = '#FCB74A';
    })
}
for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('dblclick', function(e) {
        alert('Please wait, our form page is loading....');
    })
}

const footer = document.querySelector('.footer p');
footer.addEventListener('mousemove', function(e) {
    footer.style.color = '#17A2B8';
})

footer.addEventListener('mouseout', function(e) {
    footer.style.backgroundColor = '#17A2B8';
    footer.style.color = '#FFFFFF';
})