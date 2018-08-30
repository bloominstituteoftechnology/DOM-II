// Your code goes here
const button = document.querySelectorAll('.btn');

const buttonColorHandler = function() {
    this.style.backgroundColor = 'white';
    this.style.color = '#17A2B8';
}

button.forEach(button => {
    button.addEventListener('mouseover', buttonColorHandler);
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
}

body.addEventListener('keydown', bodyNightTimeHandler);