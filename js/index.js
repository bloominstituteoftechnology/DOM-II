// Your code goes here
const button = document.querySelectorAll('.btn');

const buttonColorHandler = function() {
    this.style.backgroundColor = 'white';
    this.style.color = '#17A2B8';
};

const buttonReset = function() {
    this.style.backgroundColor = '';
    this.style.color = '';
};

button.forEach(button => {
    button.addEventListener('mouseover', buttonColorHandler);
    button.addEventListener('mouseleave', buttonReset);
});

const body = document.querySelector('body');
const header = document.querySelector('header');
const anchor = document.querySelectorAll('a');
const footer = document.querySelector('footer');
const footerText = document.querySelector('footer > p');


const bodyNightTimeHandler = function() {
    if (this.style.backgroundColor === '') {
        this.style.backgroundColor = '#2c3e50';
        this.style.color = 'white';
        header.style.backgroundColor = '#2c3e50';
        anchor.forEach(function(a) {
            a.style.color = 'white';
        }); 
        footer.style.backgroundColor = '#2c3e50';
        footerText.style.color = 'white';
    } else {
        this.style.backgroundColor = '';
        this.style.color = '';
        header.style.backgroundColor = '';
        anchor.forEach(function(a) {
            a.style.color = '';
        });
        footer.style.backgroundColor = '';
        footerText.style.color = '';
    }
};

body.addEventListener('keydown', bodyNightTimeHandler);

const images = document.querySelectorAll('.img-content > img');


const borderImage = function() {
    this.style.border = '10px solid grey';
};

const resetImage = function() {
    this.style.border = '';
};

const removeImage = function() {
    this.style.display = 'none';
};

images.forEach(image => {
    image.addEventListener('mouseenter', borderImage);
    image.addEventListener('mouseleave', resetImage);
    image.addEventListener('drag', removeImage);
});

const scrollRainbow = function() {
    const colors = ['#33658a', '#86bbd8', '#758e4f', '#f6ae2d', '#f26419'];

    let random = Math.floor((Math.random() * 4));

    this.style.backgroundColor = colors[random];
};

body.addEventListener('wheel', scrollRainbow);

const paragraph = document.querySelectorAll('p');

const boldP = function() {
    this.style.fontWeight = 'bold';
};

paragraph.forEach(p => {
    p.addEventListener('dblclick', boldP);
});