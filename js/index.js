// Your code goes here


const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        alert(`Signups are closed at the moment!`);
    });
});

const nav = document.querySelector('nav');
nav.addEventListener('mouseover', event => {
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'black';

    setTimeout(() => {
        event.target.style.color = 'white';
    }, 200);
})

const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(item => {
    item.addEventListener('mouseover', item => {
        item.stopPropagation();
        item.target.style.backgroundColor = 'white';
        item.target.style.color = 'red';
        item.preventDefault();

        setTimeout(() => {
            item.target.style.color = '#212529';
        }, 200);
    }, false);
});

const mainBus = document.querySelector('header img');

mainBus.addEventListener('drag', event => {
    event.target.style.opacity = .2;

    setTimeout(() => {
        event.target.style.opacity = 1;
    }, 1000);
}, false);

const text = document.querySelectorAll('p');

text.forEach(item => {
    item.addEventListener('copy', event =>{
        alert(`Text has been copied!`);
    });
});

const images = document.querySelectorAll('img');

images.forEach(image => {
    image.addEventListener('dblclick', item => {
        event.target.style.display = 'none';
    });

    image.addEventListener('mousemove', event => {
        event.target.style.opacity = .5;
        
        setTimeout(() => {
            event.target.style.opacity = 1;
        }, 1000)
    });
});

const body = document.querySelector('body');

body.addEventListener('wheel', event => {
    event.target.style.backgroundImage = 'url(img/vroom.jpg)';

    setTimeout(() => {
        event.target.style.backgroundImage = '';
    }, 500);
});

body.addEventListener('keydown', event => {
    event.target.style.backgroundImage = 'url(img/vroom.jpg)';
});

body.addEventListener('keyup', event => {
    event.target.style.backgroundImage = '';
})

const inputForms = document.querySelectorAll('.notes');
inputForms.forEach(form => {
    form.addEventListener('select', function() {
        event.target.style.backgroundColor = 'black';
        event.target.style.color = 'white';
    });
});