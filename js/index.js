// *************************KIM BUCK 2020**************************************************
// mouse over
const logoHeader = document.querySelector('.main-navigation .container.nav-container h1');
logoHeader.addEventListener('mouseover', (event) => {
    event.target.style.transition = 'font-size 0.2s ease-in-out';
    event.target.style.fontSize = '5rem'
});

logoHeader.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '';
});

// beforeprint
// add banner before print 
const printBanner = document.createElement('div');
printBanner.textContent = 'Printing the Fun Bus Page - KB';
printBanner.style.textAlign = 'center';
printBanner.style.fontSize = '8rem';
window.addEventListener('beforeprint', () => {
    document.body.prepend(printBanner);
});

// afterprint
// take off banner after print
window.addEventListener('afterprint', () => {
    printBanner.remove();
});

// scroll
document.addEventListener('scroll', () => {
    logoHeader.style.transform = `rotate(${window.scrollY}deg)`;
})

// resize
let resizeOpacityReset;
window.addEventListener('resize', () => {
    document.body.style.opacity = '0.5';
    clearTimeout(resizeOpacityReset);
    resizeOpacityReset = setTimeout(() => {
        document.body.style.opacity = '';
    }, 100);
});

// keydown
document.addEventListener('keydown', event => {
    if (event.key.toLowerCase() === 'f') {
        const footer = document.querySelector('footer.footer');
        footer.scrollIntoView();
    }
});

// click sign me up
const btns = document.querySelectorAll('.destination .btn');
const clickHandler = () => {
    const email = prompt('Enter your email:');
    console.log(`You entered: %c${email}`, 'font-size: 2rem; color: orange');
};
btns.forEach(btn => {
    btn.addEventListener('click', clickHandler);
})

// drag nav items
let draggedEl;
document.addEventListener('drag', event => {});
document.addEventListener('dragstart', event => {
    if (event.target.classList.contains('nav-link')) {
        draggedEl = event.target;
        draggedEl.style.opacity = '.5';
    }
})

document.addEventListener('dragover', event => {
    event.preventDefault();
});

document.addEventListener('dragend', event => {
    event.target.style.opacity = '';
})

document.addEventListener('drop', event => {
    event.preventDefault();
    if (event.target.classList.contains('nav')) {
        draggedEl.remove();
        event.target.appendChild(draggedEl);
        draggedEl = null;
    }
})

// dblclick
const introImage = document.querySelector('.intro img');
const bodyImages = document.querySelectorAll('.img-content img');
const adventureImage = bodyImages[0];
const funImage = bodyImages[1];
const destinationImage = document.querySelector('.content-destination img');

// img flip handler
const eventHandler = () => {
    let temp = introImage.src;
    introImage.src = destinationImage.src;
    destinationImage.src = temp;

    temp = adventureImage.src;
    adventureImage.src = funImage.src;
    funImage.src = temp;
};

const images = [introImage, adventureImage, funImage, destinationImage];

images.forEach(img => {
    img.addEventListener('dblclick', eventHandler);
});

// ***************************************************************************
// prevent links from refreshing the page
document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', evt => evt.preventDefault());
});

// ******************************* STRETCH ********************************************
// click on fun in the sun
document.querySelector('.destination h4').addEventListener('click', () => {
    gsap.to('.destination:first-child h4', {rotate: 150, duration: 1});
});