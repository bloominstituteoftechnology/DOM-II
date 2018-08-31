const navAnchors = document.querySelectorAll('.nav a');
navAnchors.forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.fontSize = '2rem';
        this.style.backgroundColor = 'lightgray';
    })
    item.addEventListener('mouseleave', function() {
        this.parentNode.parentNode.parentNode.style.backgroundColor === 'cyan' ? this.style.backgroundColor = 'cyan' : 
        (this.style.fontSize = '1.6rem', this.style.backgroundColor = '#FFFFFF');
        if(this.parentNode.parentNode.parentNode.style.backgroundColor === 'darkcyan') {
            this.style.backgroundColor = 'darkcyan';
            }
    })
    item.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        this.parentNode.parentNode.parentNode.style.backgroundColor = 'cyan';
        navAnchors.forEach(item => {item.style.backgroundColor = 'cyan'});
        this.style.fontSize = '1.6rem';
    })
})

const navContainer = document.querySelector('.nav-container');
navContainer.addEventListener('click', function() {
    this.parentNode.style.backgroundColor = 'darkcyan';
    navAnchors.forEach(item => {item.style.backgroundColor = 'darkcyan'});
})

const funBusHeader = document.querySelector('.logo-heading');
    funBusHeader.addEventListener('mouseenter', function() {
        this.style.fontSize = '6rem';})
    funBusHeader.addEventListener('mouseleave', function() {
        this.style.fontSize = '4rem';})

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(item => {
    item.addEventListener('mousemove', function() {
        this.parentNode.style.backgroundColor = 'darkcyan';
        this.parentNode.style.padding = '10px';
    })
})
paragraphs.forEach(item => {
    item.addEventListener('mouseleave', function() {
        this.parentNode.style.backgroundColor = '#FFFFFF';
        this.parentNode.style.padding = '';
        this.style.fontSize = '1.6rem';
    })
})
paragraphs.forEach(item => {
    item.addEventListener('wheel', function() {
        this.style.fontSize = '2.2rem';
    })
})

const home = document.querySelector('body .home');
window.addEventListener('resize', function() {
    paragraphs.forEach(item => {
        item.style.fontSize = '1.4rem';
    })
})

const images = document.querySelectorAll('img');
images.forEach(item => {
    item.addEventListener('dblclick', function() {
        this.style.display = 'none';
    })
    document.addEventListener('scroll', function() {
        item.parentNode.style.backgroundColor = 'cyan';
    })
    item.addEventListener('mouseleave', function() {
        item.parentNode.style.backgroundColor = '';
    })
})

const buttons = document.querySelectorAll('.btn')
document.addEventListener('keydown', function() {
    buttons.forEach(item => {
        item.style.backgroundColor = 'cyan';
        item.innerText = 'Event!!!';
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
            this.innerText = 'Sign Me Up!';
        })
    })
})
