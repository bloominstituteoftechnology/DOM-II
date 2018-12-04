// Your code goes here


//========== Header event listeners
const pageHeader = document.querySelector('.main-navigation');
pageHeader.addEventListener('mouseenter', function(e) {
    pageHeader.style.backgroundColor = '#17A2B8';
})


const links = document.querySelectorAll('nav-links');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) {
        e.preventDefault;
        e.stopPropagation();
        links[i].style.color = '#FFFFFF';
        
    })
}


//==========  entire page/window event listeners
const home = document.querySelector('.home');
home.addEventListener('wheel', function(e) {
    console.log("Wheeeee! We're scrolling, now.");
})


//========== Main content event listeners
const busPic = document.querySelector('.bus-pic');
busPic.addEventListener('dragend', function(e) {
    busPic.src = 'img/photo-1464851707681-f9d5fdaccea8.jpeg'
})

const contentSection = document.querySelectorAll('.content-section');
for (let i=0; i<contentSection.length; i++) {
    contentSection[i].addEventListener('drag', function(e) {
        contentSection[i].style.display = 'none';
    })
}

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
        alert('Form page loading....');
    })
}

const footer = document.querySelector('.footer p');
footer.addEventListener('mousemove', function(e) {
    footer.style.color = '#17A2B8';
})