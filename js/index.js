const navLink = document.querySelectorAll('nav a');
const logoHeading = document.querySelector('.logo-heading');
const buttons = document.querySelectorAll('.btn');
const mainBody = document.querySelector('body');
const images = document.querySelectorAll('img');
const input = document.querySelector('.form-submit');

// Body
mainBody.addEventListener('wheel', (event) => {
    logoHeading.innerHTML = "FUN BUS";
});

window.addEventListener('contextmenu', (event) => {
    event.target.classList.toggle('new-body');
});

window.addEventListener('load', (event) => {
    alert('Page loaded');
});

// Logo
logoHeading.addEventListener('mouseenter', (event) => {
    logoHeading.style.cssText = 'color: blue; cursor: pointer;';
});

logoHeading.addEventListener('mouseleave', (event) => {
    logoHeading.style.color = '#212529';
});

// Nav
navLink.forEach((elem) => {

    elem.addEventListener('mousedown', (event) => {
        elem.style.color = 'red';
    });

    elem.addEventListener('mouseenter', (event) => {
        elem.style.color = 'blue';
    });

    elem.addEventListener('mouseleave', (event) => {
        elem.style.color = '#212529';
    });

});

// Buttons
buttons.forEach((elem) => {
    // Add new class to body and header to change to dark view
    elem.addEventListener('click', (event) => {
        document.querySelector('body').classList.toggle('new-body');
        document.querySelector('header').classList.toggle('new-nav');
    });

    // Change nav link styles
    navLink.forEach((elem) => {
        elem.addEventListener('mouseenter', (event) => {
            elem.style.cssText = 'color: #17A2B8;';
        });
    
        elem.addEventListener('mouseleave', (event) => {
            elem.style.cssText = 'color: @white';
        });
    
    });

    // Change logo style
    logoHeading.addEventListener('mouseenter', (event) => {
        logoHeading.style.cssText = 'color: #17A2B8; cursor: pointer;';
    });
    
    logoHeading.addEventListener('mouseleave', (event) => {
        logoHeading.style.cssText = 'color: @white';
    });
});

// Images
images.forEach((elem) => {
    elem.addEventListener('dblclick', (event) => {
        elem.style.cssText = 'opacity: 0.6;';
    });
});

// Submit
input.addEventListener('focus', (event) => {
    input.setAttribute('placeholder', 'type your text...');
});

input.addEventListener('keypress', (event) => {
    const keyName = event.key;
    if (keyName === 'Enter') {
        // alert('keypress event\n\n' + 'key: ' + keyName); // Testing
        alert(`You searched for ${input.value};`);
    }
})