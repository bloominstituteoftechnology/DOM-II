// mouseenter and mouseleave event on the main picture
// turns all "Fun Bus" texts pink
const introContainer = document.querySelector('.intro');
const mainNavigation = document.querySelector('.main-navigation');
const busImg = document.querySelector('.intro img');
const logoH1 = document.querySelector('.logo-heading');
const welcomeToFunBusH2 = document.querySelector('.intro h2');

busImg.addEventListener('mouseenter', event => {
    busImg.style.border = 'pink dotted 10px';
    logoH1.style.color = 'pink';
    logoH1.style.fontWeight = 'bolder';
    welcomeToFunBusH2.innerHTML = 'Welcome To <span style=color:pink>Fun Bus</span>!';
});
busImg.addEventListener('mouseleave', event => {
    busImg.style.border = '';
    logoH1.style.color = 'black';
    logoH1.style.fontWeight = '';
    welcomeToFunBusH2.textContent = 'Welcome To Fun Bus!'
    event.stopPropagation();
});

// dblclick event on the 3 buttons at bottom of page
// mouseleave event to revert to original button text
const signMeUpBtns = document.querySelectorAll('.btn');
const btnsArray = Array.from(signMeUpBtns); //convert node list to array

btnsArray[0].addEventListener('dblclick', event => {
    btnsArray[0].textContent = 'One Click Please';
});
btnsArray[1].addEventListener('dblclick', event => {
    btnsArray[1].textContent = 'One Click Please';
});
btnsArray[2].addEventListener('dblclick', event => {
    btnsArray[2].textContent = 'One Click Please';
});
btnsArray[0].addEventListener('mouseleave', event => {
    btnsArray[0].textContent = 'Sign Me Up!';
});
btnsArray[1].addEventListener('mouseleave', event => {
    btnsArray[1].textContent = 'Sign Me Up!';
});
btnsArray[2].addEventListener('mouseleave', event => {
    btnsArray[2].textContent = 'Sign Me Up!';
});

// keydown event on the 'd' and 'l' key 
// toggles dark/light mode for page
document.addEventListener('keydown', event => {
    if (event.key === 'd') {
        document.body.style = 'color: white; background-color: #111111';
        event.stopPropagation();
    }
    if (event.key === 'l') {
        document.body.style = '';
        event.stopPropagation();
    }
});

// click key event on the last image
// replaces h2 of last section to a random location name
const destinationDiv = document.querySelector('.content-destination')
const destinationImg = document.querySelector('.content-destination img');
const destinationH2 = document.querySelector('.content-destination h2')

destinationImg.addEventListener('mouseenter', event => {
    destinationH2.style.textDecoration = 'underline';
    destinationH2.textContent = 'Click The Image!';
    destinationImg.style.border = 'solid 5px red';
});
destinationImg.addEventListener('mouseleave', event => {
    destinationH2.style.textDecoration = '';
    destinationH2.textContent = 'Pick Your Destination';
    destinationImg.style.border = '';
});
destinationImg.addEventListener('click', event => {
    const destinations = [
        'Rio de Janeiro', 
        'Thailand', 
        'Hawaii', 
        'Jamaica', 
        'Santorini',
        'Miami',
        'Cancun',
        'Bali',
        'San Diego',
        'Maldives'
    ]
    function randomNumber() {
        return Math.floor(Math.random() * 10);
    }
    destinationH2.textContent = destinations[randomNumber()];
});

// draggable
const middleTwoImgs = document.querySelectorAll('.img-content img');
middleTwoImgs[0].setAttribute('draggable', true);
middleTwoImgs[1].draggable = true;
const middleTwoDivs = document.querySelectorAll('.img-content');

middleTwoImgs[0].addEventListener('drag', event => {
}, false);
middleTwoImgs[1].addEventListener('drag', event => {
}, false);
middleTwoImgs[0].addEventListener('dragstart', event => {
    middleTwoImgs[0] = event.target;
    middleTwoImgs[0].style.opacity = '0.4';
}, false);
middleTwoImgs[1].addEventListener('dragstart', event => {
    middleTwoImgs[1] = event.target;
    middleTwoImgs[1].style.opacity = '0.4';
}, false);
middleTwoImgs[0].addEventListener('dragend', event => {
    middleTwoImgs[0].style.opacity = '';
}, false);
middleTwoImgs[1].addEventListener('dragend', event => {
    middleTwoImgs[1].style.opacity = '';
}, false);
middleTwoImgs[0].addEventListener('dragover', event => {
    event.preventDefault();
}, false);
middleTwoImgs[1].addEventListener('dragover', event => {
    event.preventDefault();
}, false);
middleTwoImgs[0].addEventListener('dragenter', event => {
    if (event.target.className == 'img-content') {
        event.target.style.border = 'dashed red 5px';
    }
}, false);
middleTwoImgs[1].addEventListener('dragenter', event => {
    if (event.target.className == 'img-content') {
        event.target.style.border = 'dashed red 5px';
    }
}, false);
middleTwoImgs[0].addEventListener('drop', event => {
    event.preventDefault();
    if (event.target.className == 'img-content') {
        event.target.style.background = '';
        middleTwoImgs[0].parentNode.removeChild(middleTwoImgs[0]);
        event.target.appendChild(middleTwoImgs[0]);
    }
}, false);
middleTwoImgs[1].addEventListener('drop', event => {
    event.preventDefault();
    if (event.target.className == 'img-content') {
        event.target.style.background = '';
        middleTwoImgs[1].parentNode.removeChild(middleTwoImgs[1]);
        event.target.appendChild(middleTwoImgs[1]);
    }
}, false);