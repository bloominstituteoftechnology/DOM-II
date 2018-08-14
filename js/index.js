// Your code goes here
const logo = document.querySelector('.logo-heading');
const welcomeHeader = document.querySelector('#welcome');
const funBusImg = document.querySelector('#fun-bus-img');

logo.addEventListener('mouseover', () => { 
    logo.style.color = 'red';
  });


funBusImg.addEventListener('wheel', () => { 
    
    funBusImg.classList.toggle('hide-this');
});


welcomeHeader.addEventListener('click', () => {
    welcomeHeader.style.color = 'red';
});

const nav = document.querySelectorAll('.nav-link');

    for(let i=0; i < nav.length; i++) {
        nav[i].addEventListener('mouseover', (event)=> {
            event.target.style.fontSize = '3rem';
        })
    }

    for(let i=0; i < nav.length; i++) {
        nav[i].addEventListener('mouseout', (event)=> {
            event.target.style.fontSize = '1.5rem';
        })
    }

const button = document.querySelectorAll('.btn');

    for(let i=0; i < button.length; i++) {
        button[i].addEventListener('mousedown', (event)=> {
            event.target.innerText = 'Me!';
        })
    }
const img = document.querySelectorAll('img');

for(let i=0; i < img.length; i++) {
    img[i].addEventListener('dblclick', (event)=> {
        event.target.style.opacity = '0.5';
    })
}

window.addEventListener('scroll', () => {
    document.querySelector('body').style.backgroundColor = 'green';
});

window.addEventListener('resize', () => {
    document.querySelector('body').style.backgroundColor = 'orange';
});

window.addEventListener('keydown', () => {
    document.querySelector('body').style.backgroundColor = 'purple';
});