// Your code goes here

// Sign Up Button gives an alert when clicked

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        alert(`Signups are closed at the moment!`);
    });
});

// Nav changes color when hovered over

const nav = document.querySelector('nav');
nav.addEventListener('mouseover', event => {
    event.target.style.color = 'white';
    event.target.style.backgroundColor = 'black';

    setTimeout(() => {
        event.target.style.color = 'white';
    }, 200);
})

// Nav Anchors change text color to red and resets background color when hovered over

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

// When the bus is dragged, opacity decreases

const mainBus = document.querySelector('header img');

mainBus.addEventListener('drag', event => {
    event.target.style.opacity = .2;

    setTimeout(() => {
        event.target.style.opacity = 1;
    }, 1000);
}, false);

// When p text is copied, alert is launched

const text = document.querySelectorAll('p');

text.forEach(item => {
    item.addEventListener('copy', event =>{
        alert(`Text has been copied!`);
    });
});

// images disappear when doubleclicked
// images decrease opacity when mouse moves around on them

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

// (vroom) appears when user uses wheel or presses any key

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

// input forms change background color when text inside is selected

const inputForms = document.querySelectorAll('.notes');
inputForms.forEach(form => {
    form.addEventListener('select', function() {
        event.target.style.backgroundColor = 'black';
        event.target.style.color = 'white';
    });
});