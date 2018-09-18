
// page fades in upon loading
const body = document.querySelector('body');
window.addEventListener('load', function (event) {
    TweenMax.to("body", 1, { opacity: 1 });
});

// increase heading size on scroll
const logoHeading = document.querySelector('.logo-heading');
window.addEventListener('scroll', () => {
    if(body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        logoHeading.style.fontSize = '5rem';
    } else {
        logoHeading.style.fontSize = '4rem';
    }
});

// alert on window resize
window.addEventListener('resize', () => {
    alert('Window resized.');
});

// stopPropagation
const textContent = document.querySelectorAll('.text-content');
textContent.forEach((content) => {
    content.addEventListener('click', () => {
        console.log('I am the text-content!');
    })
});

const textContentH2 = document.querySelectorAll('.text-content h2');
textContentH2.forEach((content) => {
    content.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('I am the h2 in text-content!');
    })
});

const textContentP = document.querySelectorAll('.text-content p');
textContentP.forEach((content) => {
    content.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('I am the p in text-content!');
    })
});

// pay respects
document.addEventListener('keypress', function (event) {
    if (event.key === 'f') {
        alert('Respects payed.');
    }
})

// link events --- included preventDefault
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((link, i) => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
    })
    link.addEventListener('mouseover', function (event) {
        event.currentTarget.style.color = '#96C4D1';
    });
    link.addEventListener('mouseout', function (event) {
        event.currentTarget.style.color = '#212529';
    });
    link.addEventListener('blur', () => {
        TweenMax.to(link, 3, {rotationY:360});
    });
    link.addEventListener('focus', (event) => {
        console.log(event.currentTarget);
    });
});

//increases size when fun bus image is clicked
const funBusImage = document.querySelector('.intro img');
funBusImage.addEventListener('dblclick', function (event) {
    TweenMax.to('.intro img', 1, { scale: 1.5 });
    setTimeout(function () {
        TweenMax.to('.intro img', 1, { scale: 1 })
    }
        , 500);
});

//buttons
const buttons = document.querySelectorAll('.btn');
const destinations = document.querySelectorAll('.destination');
buttons.forEach((button, i) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        destinations[i].style.background = '#C0E0EB';
    })
});

