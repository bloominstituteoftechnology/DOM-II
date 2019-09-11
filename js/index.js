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

back.addEventListener('wheel', () => {
    let rand1 = Math.floor(Math.random() * 101);
    let rand2 = Math.floor(Math.random() * 101);
    let rand3 = Math.floor(Math.random() * 101);
    back.style.backgroundColor = 'rgb(' + rand1 + ', ' + rand2 + ', ' + rand3 + ')';
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

const child = document.querySelector('.dest-img');
child.addEventListener('click', (e) => {
    alert('This is the picture.');
    e.stopPropagation();
});

const adult = document.querySelector('.content-destination');
adult.addEventListener('click', (e) => {
    alert('This is the container.');
    
});

