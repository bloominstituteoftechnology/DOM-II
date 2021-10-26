//Testing to see if everything works properly
/*
const logo = document.querySelector('h1');
logo.textContent = 'Please work';
It works lol*/

//Prevent navigation from refreshing page
document.querySelectorAll('.nav-link').forEach(elem => {
    elem.addEventListener('click', function(e) {
        e.stopPropagation();
    })
});

//Make all h2s turn purple when moused over for a short period of time
document.querySelectorAll('off').forEach(elem => {
    elem.addEventListener('mouseover', function(e) {
        e.target.style.color = 'purple';
        setTimeout(function() {
            e.target.style.color = '';
          }, 500);
    })
}, false);

//Change the title to "There is No Escape" when escape key is pressed and then go back to normal after a short period of time. Also turns red because spooky
const pageTitle = document.querySelector('h1');

function escKey(evt) {
    if (evt.key === 'Escape') {
        pageTitle.textContent = 'There is No Escape';
        pageTitle.style.color = 'red';
        setTimeout(function() {
            pageTitle.textContent = 'Fun Bus';
            pageTitle.style.color = '';
          }, 500);
    }
};

document.addEventListener('keydown', escKey);