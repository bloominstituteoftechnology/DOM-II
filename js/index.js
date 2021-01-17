/* ****************************** */
/* Attempt to do a fade on scroll */
/* ****************************** */

/*
const hiddenSection = document.querySelectorAll('section');

for(let i = 1; i < hiddenSection.length; i++) {
    hiddenSection[i].style.opacity = '0';
    hiddenSection[i].className = 'hidden';
}

window.onscroll = function () {
    var elements = document.getElementsByClassName('hidden');

    for(var i=0; i<elements.length; i++) {
        var bottomOfObj = elements[i].getBoundingClientRect().top + window.outerHeight;
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var bottomOfWindow = scrollTop + window.innerHeight;

        if(bottomOfWindow > bottomOfObj) {
            elements[i].animate({'opacity': '1'}, 1500);
        }
    }
}
*/

/* ********************** */
/* create a modal on load */
/* ********************** */

const modal = document.createElement('div');

modal.innerHTML = "<div class='modalStuff'></div>";
modal.style.position = 'fixed';
modal.style.zIndex = '1';
modal.style.paddingTop = '200px';
modal.style.left = '0';
modal.style.top = '0';
modal.style.width = '100%';
modal.style.height = '100%';
modal.style.backgroundColor = 'rgb(0,0,0)';
modal.style.backgroundColor = 'rgba(0,0,0,0.4)';
document.querySelector('body').appendChild(modal);

const stuff = document.querySelector('.modalStuff');

stuff.style.backgroundColor = 'white';
stuff.style.margin = 'auto';
stuff.style.padding = '20px';
stuff.style.width = '50%';
stuff.innerHTML = "<span class='close'>&times;</span><p>Welcome to the Fun Bus website!</p>";

const closeBtn = document.querySelector('.close');

closeBtn.style.color = 'red';
closeBtn.style.float = 'right';
closeBtn.style.fontSize = '3rem';
closeBtn.onclick = function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'scroll';
}

window.addEventListener('load', windowLoaded);

function windowLoaded() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.querySelector('html').scrollTop = window.scrollY;
}

/* ****************************** */
/* display a top button on scroll */
/* ****************************** */

const topButton = document.createElement('button');

topButton.innerHTML = "^";
topButton.onclick = topFunction;
topButton.style.display = 'none';
topButton.style.position = 'fixed';
topButton.style.bottom = '20px';
topButton.style.right = '30px';
topButton.style.zIndex = '2';
topButton.style.fontSize = '3rem';
topButton.style.backgroundColor = 'white';
topButton.style.color = 'black';
topButton.style.border = 'none';

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = 'block';
    } else {
        topButton.style.display = 'none';
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.querySelector('body').appendChild(topButton);

/* **************************** */
/* animate nav links and height */
/* **************************** */

const links = document.querySelectorAll('.nav-link');

for(var i=0; i<links.length; i++) {
    links[i].addEventListener('click', animateLinks);
}

function animateLinks() {
    this.animate([
        {fontSize: '2rem'},
        {fontSize: '1.6rem'}
    ], {
        duration: 1000,
    })
}

window.addEventListener('scroll', navChange);

function navChange() {
    const nav = document.querySelector('.main-navigation');

    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        nav.animate({
            'height': '50px'
        }, 100)
        nav.style.height = '50px';
    } else {
        nav.animate({
            'height': '90px'
        }, 100)
        nav.style.height = '90px';
    }
}

/* **************** */
/* mouseover images */
/* **************** */

document.querySelector('img').style.borderRadius = '10px';

const fadePhotos = document.querySelectorAll('img');

for(var i=0; i<fadePhotos.length; i++) {
    fadePhotos[i].addEventListener('mouseover', mouseOver);
    fadePhotos[i].addEventListener('mouseout', mouseOut);
}

function mouseOver() {
    this.style.boxShadow = '5px 12px 13px gray';
    this.style.border = 'solid white';
    this.style.borderWidth = '5px 5px 40px 5px';
    this.style.borderRadius = '0px';
}

function mouseOut() {
    this.style.boxShadow = 'none';
    this.style.border = 'none';
    this.style.borderWidth = '0px';
    this.style.borderRadius = '10px';
}

/* ********** */
/* Email form */
/* ********** */

var footerForm = document.createElement('p');
footerForm.innerHTML = "Sign up for e-mail updates! <input type='text' id='email'> <button id='submitBtn' disabled>Submit</button><p id='text'></p>";

document.querySelector('.footer').appendChild(footerForm);
document.querySelector('#email').style.marginLeft = '10px';
document.querySelector('#email').addEventListener('input', inputReceived);
document.querySelector('#submitBtn').disabled = true;
document.querySelector('#submitBtn').addEventListener('click', verification);

function inputReceived() {
    console.log('typing');
    submitBtn.disabled = false;
}

function verification() {
    var txt;
    if (confirm("You're all signed up!")) {
      txt = "Thanks for signing up!";
    } else {
      txt = "You pressed cancel, do you want to <a href='#'>unsubscribe</a>?";
    }
    document.getElementById("text").innerHTML = txt;
}

/* ********************** */
/* propagation prevention */
/* ********************** */

const destDiv = document.querySelectorAll('.destination');
const classDiv = document.querySelectorAll('.btn');

// classDiv.addEventListener('onclick', classFunc);
// 

// for(var i=0; i<destDiv.length; i++) {
//     destDiv[i].addEventListener('click', destFunc);
//     classDiv[i].addEventListener('click', classFunc);
// }

classDiv.forEach(item => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        alert('how to sign up');
    })
});

destDiv.forEach(item => {
    item.addEventListener('click', () => {
        alert('details about package');
    })
})

/* *************** */
/* prevent refresh */
/* *************** */

const navAnchors = document.querySelectorAll('.nav-link');

for(var i=0; i<navAnchors.length; i++) {
    navAnchors[i].addEventListener('click', function(event) {
        event.preventDefault();
    })
}