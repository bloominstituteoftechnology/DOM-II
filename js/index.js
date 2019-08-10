// Your code goes here
const nav = document.querySelector('.main-navigation');
nav.addEventListener('mouseover', (event) => {
    console.log(event.target);
    event.target.style.backgroundColor = 'lightYellow';
    // event.target.select
});

const home = document.querySelector('.intro');
console.log(home);
home.addEventListener('mousedown', function (event) {
    event.target.style.backgroundColor = 'pink';
    console.log(event);
});

// const h1 = document.querySelector('.logo-heading');
// h1.addEventListener('dragover', (event) => {
//     event.target.style
// });


const links = document.querySelector('.nav-link');
links.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '2rem'
});

const h2 = document.querySelector('.text-content h2');
h2.addEventListener('dblclick', (event) => {
    event.currentTarget.style.color = 'blue';
});

const intros = document.querySelectorAll('.text-content p');
intros.forEach(intro => {
    intro.addEventListener('click', () => {
    event.target.style.color = 'lightGreen';
})
});

const image = document.querySelectorAll('img');
let blur = 0;
let lastKnownPosition = 0;
window.addEventListener('scroll', () => {
    if(lastKnownPosition < window.scrollY){
        blur += 1
    } else {
    // if (lastKnownPosition > window.scrollY) {
        blur -= 1
}

    lastKnownPosition = window.scrollY;

    image.forEach(pic => pic.style.filter = `blur(${blur}px)`);
});
// image.addEventListener('drop', (event) => {
//     event.target.


const destination = document.querySelector('.destination');
document.addEventListener('keypress', (event) => {
    destination.style.backgroundColor = 'orange';

});

// destination.forEach(dest => {
//     dest.addEventListener('keypress', () => {
//         destination.style.backgroundColor = 'orange';
//     })
// });

const outputBox = document.createElement('p')
document.querySelector('body').append(outputBox);
document.addEventListener('keydown', event => {
    outputBox.textContent += `${event.key}`
})


const h4 = document.querySelector('.destination h4');
document.addEventListener('keydown', () => {
    h4.style.backgroundColor = 'red';
});

const button = document.querySelector('.btn');
document.addEventListener('click', (event) => {
   button.style.backgroundColor = 'yellow';
});


// let dragged ;
// introP.forEach(pTag => {
//     pTag.daggable = true;
//     pTag.classList.add('dropzone');
// })

// document.addEventListener('dragstart', (event) => {
//     dragged.event.target;
//     event.target.style.opacity = .5;
// });

// document.addEventListener('dragend', (event) => {
//     dragged.event.target;
//     event.target.style.opacity = .5;
// });

// document.addEventListener('dragover', (event) => {
//     dragged.event.target;
//     event.target.style.opacity = .5;
// });

// document.addEventListener('dragenter', (event) => {
//     if(event.target.className == 'dropzone';
//     event.target.style.opacity = .5;
// });

// document.addEventListener('dragleave', (event) => {
//     dragged.event.target;
//     event.target.style.opacity = .5;
// });

// introP = document.querySelector