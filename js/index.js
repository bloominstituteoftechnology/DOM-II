// Your code goes here


/* Possible Listeners to Use 
    
    1. resize
    2. select
    3. scroll
    4. resize
    5. wheel

*/

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        alert(`Signups are closed at the moment!`);
    });
});

const navItems = document.querySelectorAll('.nav-link');
navItems.forEach(item => {
    item.addEventListener('mouseover', item => {
        item.target.style.color = 'red';

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
});

