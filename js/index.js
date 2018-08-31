// Your code goes here

//make links turn green
const links = document.querySelectorAll('a');
console.log(links);
const changeColorHandler = function(event) {
    if (this.style.color === '') {
    this.style.color = 'green';
    } else {
        this.style.color = '';
    }
};

links.forEach(function (item) {
    item.addEventListener('click', changeColorHandler)
});

//make bus picture disappear on mouseover

const busImg = document.querySelector('.home img');

const busImgNoneHandler = function(event) {
    event.stopPropagation();
    this.style.visibility = 'hidden';
};

busImg.addEventListener('mouseenter', busImgNoneHandler);


//change background color on key press

const keyBackground = document.querySelector('body');

const keyBackgroundHandler = function(event) {
    event.stopPropagation();

    if (this.style.backgroundColor === '') {
    this.style.backgroundColor = 'red';
    } else {
        this.style.backgroundColor = '';
    };
};

keyBackground.addEventListener('keydown', keyBackgroundHandler);

//drag something?

const mapImage = document.querySelector('.content-section .img-content img');



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// load event  commented out for now, live server triggers this everytime VSCode autosaves lol

// mapImage.addEventListener('load', function(event) {
//     event.stopPropagation();
//     alert('The map image has loaded!');
// });


//focus event on form entries

let form = document.querySelectorAll('input');

form.forEach(function(item) {
    item.addEventListener('focus', function(event) {
        event.target.style.background = 'lightblue';
    });

    item.addEventListener('select', function(event) {
        event.style.backgroundColor = 'pink';
    });
});

form.forEach(function(item) {
    item.addEventListener('blur', function(event) {
        event.target.style.background = '';
    });
});

//resize

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

let header = document.querySelector('.main-navigation');
window.addEventListener('resize', function(event) {
    header.style.background = randomColor();
});

//scroll counter

let scrollCounter = document.querySelector('.scroll-counter');
scrollCounter.setAttribute('style', 'color:red');

window.addEventListener('scroll', function(event) {
    scrollCounter.innerHTML = window.scrollY;
});


//button double click

let button = document.querySelectorAll('.btn');

button.forEach(function(item) {
    item.addEventListener('dblclick', function(event) {
        if (event.target.style.background === '') {
            event.target.style.background ='black';
            } else {
                event.target.style.background = '';
            };
    });
});



