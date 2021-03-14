

// Your code here:
const logoSection = document.querySelector('h1');
const logoStan = document.createElement('img');
const headerEl = document.querySelector('h1');
const subHeadLine = document.createElement('h2');
const imgInHero = document.querySelector('.intro img');
const imgOutHero = document.querySelector('.intro img');
const imgInGo = document.querySelector('.img-content');
const imgOutGo = document.querySelector('.img-content');
const imgInAwaits = document.querySelector('.inverse-content img');
const imgOutAwaits = document.querySelector('.inverse-content img');
const button = document.querySelectorAll('.btn');
const bkColor = document.getElementsByClassName('destination');
const destination = document.querySelector('.intro p')
const dest = document.querySelector('.content-destination p');



// create a new LOGO element 
// (IMAGE NOT SHOWING, driving me crazy, but crazy is good...:)
logoStan.src = 'img/stan.png'
// style the LOGO element 
logoStan.style.marginTop = '40px';
logoStan.style.marginRight = '20px';
logoStan.style.height = '42px';
logoStan.style.width = '42px';
logoStan.style.borderRadius = '50%';
// append the LOGO element
logoSection.prepend(logoStan);


// create a new H2 element 
subHeadLine.textContent = 'Click the yellow bus'
// style it...
subHeadLine.style.fontSize = '2.5rem'
subHeadLine.style.color = 'slategrey'
subHeadLine.style.marginBottom = '20px';
// append it...
headerEl.appendChild(subHeadLine);

// change CTA background color 
for (let i = 0; i < bkColor.length; i++) {
    bkColor[i].style.backgroundColor = 'yellow';
    bkColor[i].style.padding = '10px';
    bkColor[i].style.borderRadius = '50%';
};


// PARAGRAPHS - Mouse Events
destination.addEventListener('mouseover', () => {
    destination.style.color = 'violet';
});
dest.addEventListener('mousedown', () => {
    dest.style.color = 'green';
});
destination.addEventListener('mouseup', () => {
    destination.style.color = 'red'
});


// Window E V E N T  * * * 
window.addEventListener('load', event => {
    console.log(`this page is loaded`)
});


// ALERT on the Bus
let funBus = document.querySelector('.intro img');
funBus.addEventListener('click', event => {
    alert('CONGRATULATIONS... You clicked the BUS!')
});


// Hero banner img TRANSFORM * * * ZOOM ZOOM
imgInHero.addEventListener('mouseenter', () => {
    imgInHero.style.transform = 'scale(1.1)';
    imgInHero.style.transition = 'all 0.5s';
});
imgOutHero.addEventListener('mouseleave', () => {
    imgOutHero.style.transform = 'scale(1)';
});

// Let's Go! img TRANFORM ... ZOOM ZOOM
imgInGo.addEventListener('mouseenter', () => {
    imgInGo.style.transform = 'scale(1.1)';
    imgInGo.style.transition = 'all 0.5s';
});
imgOutGo.addEventListener('mouseleave', () => {
    imgOutGo.style.transform = 'scale(1)';
});
// Adventure Awaits img TRANFORM ... ZOOM ZOOM
imgInAwaits.addEventListener('mouseenter', () => {
    imgInAwaits.style.transform = 'scale(1.1)';
    imgInAwaits.style.transition = 'all 0.5s';
});
imgOutAwaits.addEventListener('mouseleave', () => {
    imgOutAwaits.style.transform = 'scale(1)';
});


// Sign me up BUTTONS event details (needs more events...)
for (let i = 0; i < bkColor.length; i++)
    button[i].addEventListener('click', event => {
        button[i].textContent = `Click: ${event.detail}`;
        console.log(`Fun Bus ${event.detail} in the sun`);
    });



// Window scrolling + A L E R T !!!
// (can alert/award a visitor for reading the entire page)

// window.addEventListener('scroll', () => {
//     console.log('window.scrollY', window.scrollY);
//     if (window.scrollY >= 1009) {
//         alert('Congratulations, you are a TOP SCROLLER');
//     }
// });

//              S T R E C H 
// ______________ No Time _______________