

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


// create a new LOGO element (IMAGE NOT SHOWING)
logoStan.src = 'img/stan.png'
// style the LOGO element 
logoStan.style.marginTop = '40px';
logoStan.style.marginRight = '20px';
logoStan.style.height = '42px';
logoStan.style.width = '42px';
logoStan.style.borderRadius = '50%';
// append the LOGO element
logoSection.prepend(logoStan);


// create a new H2 element (OK)
subHeadLine.textContent = 'Click the yellow bus'
// style ...
subHeadLine.style.fontSize = '2.5rem'
subHeadLine.style.color = 'slategrey'
subHeadLine.style.marginBottom = '20px';
// append ...
headerEl.appendChild(subHeadLine);


// change background color 
const x = document.getElementsByClassName('destination');
for (let i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = 'lightgrey';
    x[i].style.padding = '10px';
};


// Change 'p' color when select
const destination = document.querySelector('.content-destination p')
destination.addEventListener('mousedown', () => {
    destination.style.color = 'violet';
})
destination.addEventListener('mouseup', () => {
    destination.style.color = 'blue'
})


// Window E V E N T  * * * 
window.addEventListener('load', event => {
    console.log(`this page is loaded`)
});


// Alert on the bus
let funBus = document.querySelector('.intro img');
funBus.addEventListener('click', event => {
    alert('CONGRATULATIONS... You clicked the BUS!')
});


// Hero banner img transform * * * ZOOM ZOOM
imgInHero.addEventListener('mouseenter', () => {
    imgInHero.style.transform = 'scale(1.1)';
    imgInHero.style.transition = 'all 0.5s';
});
imgOutHero.addEventListener('mouseleave', () => {
    imgOutHero.style.transform = 'scale(1)';
});
// Let's Go! img... ZOOM ZOOM
imgInGo.addEventListener('mouseenter', () => {
    imgInGo.style.transform = 'scale(1.1)';
    imgInGo.style.transition = 'all 0.5s';
});
imgOutGo.addEventListener('mouseleave', () => {
    imgOutGo.style.transform = 'scale(1)';
});
// Adventure Awaits img... ZOOM ZOOM
imgInAwaits.addEventListener('mouseenter', () => {
    imgInAwaits.style.transform = 'scale(1.1)';
    imgInAwaits.style.transition = 'all 0.5s';
});
imgOutAwaits.addEventListener('mouseleave', () => {
    imgOutAwaits.style.transform = 'scale(1)';
});


// Sign me up buttons (take visitors to registration pages)
for (let i = 0; i < x.length; i++)
    button[i].addEventListener('click', event => {
    button[i].textContent = `Click: ${event.detail}`;
    console.log(`Fun Bus ${event.detail} in the sun`);
    });



// Window scrolling + alert (can alert/award a visitor for reading the entire page)
// window.addEventListener('scroll', () => {
//     console.log('window.scrollY', window.scrollY);
//     if (window.scrollY >= 1009) {
//         alert('Congratulations, you are a TOP SCROLLER');
//     }
// });


//              S T R E C H 
// ______________ No Time _______________
