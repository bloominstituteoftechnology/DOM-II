// Your code goes here
const bus = document.querySelector(".bus");

bus.addEventListener("click", (e) => {
    e.target.style.marginLeft = '435px';
    e.target.style.transition = 'margin-left 5s';
});

bus.addEventListener("dblclick", (e) => {
    e.target.style.marginLeft = '0px';
    e.target.style.transition = 'margin-left 5s';
});

const textPic = document.querySelectorAll('.img-content');
textPic.forEach((image) => {
    image.addEventListener('mouseover', (e) => {
    e.target.style.opacity = '.5';
    e.target.style.transition = 'opacity .5s';
    });
    image.addEventListener('mouseout', (e) => {
        e.target.style.opacity = '1';
        e.target.style.transition = 'opacity .5s';
    });
});

const back = document.querySelector('body');

back.addEventListener('wheel', (image) => {
    let rand1 = Math.floor(Math.random() * 101);
    let rand2 = Math.floor(Math.random() * 101);
    let rand3 = Math.floor(Math.random() * 101);
    image.target.style.backgroundColor = 'rgb(' + rand1 + ', ' + rand2 + ', ' + rand3 + ')';
})

window.addEventListener('load', () => {
    alert('Welcome to the Page.');
});

window.addEventListener('scroll', () => {
    
    console.log('The wheels on the bus go round and round');
});

const mainText = document.querySelectorAll('p');
mainText.forEach((event) => {
    event.addEventListener('select', (e) => {
        console.log(event);
    });
    event.addEventListener('copy', (e) => {
        alert('Text has been copied');
    });
});

window.addEventListener('resize', () => {
    let footer = document.querySelector('footer');
    let rand1 = Math.floor(Math.random() * 101);
    let rand2 = Math.floor(Math.random() * 101);
    let rand3 = Math.floor(Math.random() * 101);
    footer.style.borderColor = 'rgb(' + rand1 + ', ' + rand2 + ', ' + rand3 + ')';
})

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((item) => {
    item.addEventListener('click', (event) => {
        alert('Link is broken.');
        event.preventDefault();
    });
});

// var item;
// const dest = document.querySelector(".nav-link");
// document.addEventListener('drag', (e) => {

// }, false);

// document.addEventListener('dragstart', (e) => {
//     item = e.target;
// }, false);

// document.addEventListener('dragenter', (e) =>{
//     if(e.target.classNAme == 'nav') {
//         e.target.style.background = 'green';
//     }
// }, false);

// document.addEventListener("drop", (e) => {
//     e.preventDefault();
//     if(e.target.className == 'nav') {
//         e.target.style.background = "";
//         item.parentNode.removeChild(item);
//         document.querySelector('nav').append(item);
//     }
//     }, false);