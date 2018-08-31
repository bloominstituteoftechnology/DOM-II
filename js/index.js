//selectors
const navLinks = document.querySelectorAll('.nav-link');
const images = document.querySelectorAll('img');
const destinationImg = document.querySelector('.content-destination img');
const containerHome = document.querySelector('.home');
const header = document.querySelector('.main-navigation');
const textContent = document.querySelectorAll('.text-content');
const footer = document.querySelector('.footer');
const buttons = document.querySelectorAll('.btn');
const destinationHeaders = document.querySelectorAll('.destination h4');
console.log(destinationHeaders);

//handler callbacks
const navMouseOverHandler = function(event){
    this.style.color = 'gray';
}

const navMouseLeaveHandler = function(event){
    this.style.color = 'black';
}

const imageDblClick = function(event){
    this.style.display = 'none';
}

const destinationDragHandler = function(event){
    header.style.display = 'none';
}

const textContentClickHandler = function(event){
    if (this.style.backgroundColor === '') {
        this.style.backgroundColor = 'crimson';
    } else {
        this.style.backgroundColor = '';
    }
}

const headerDblClickHandler = function(event){
    if (header.style.display === 'none') {
        header.style.display = '';
    } else {
        header.style.display = '';
    }
}

//event listeners
navLinks.forEach(navLink => {
    navLink.addEventListener('mouseover', navMouseOverHandler); //1
    navLink.addEventListener('mouseleave', navMouseLeaveHandler); //2
})

images.forEach(img => {
    img.addEventListener('dblclick', imageDblClick); //3
})

destinationImg.addEventListener('drag', destinationDragHandler); //4

textContent.forEach(txtDiv => {
    txtDiv.addEventListener('click', textContentClickHandler); //5
})

document.addEventListener('dblclick', headerDblClickHandler); //6

header.addEventListener('dblclick', function(e){
        this.style.backgroundColor = 'aqua';
}) //7

header.addEventListener('drag', function(e){
    if (this.style.backgroundColor === 'aqua') {
        this.style.backgroundColor = '';
    } else {
        this.style.backgroundColor = '';
    }
}) //8

buttons.forEach(btn => {
    btn.addEventListener('click', function(e){
        //preventDefault();
        containerHome.style.display = 'none';
        header.style.display = 'none';
        footer.style.display = 'none';
        alert('womp womp :( there is no sign up');
    });
}) //9

document.addEventListener('keydown', function(e){
    if (containerHome.style.display === 'none'){
        containerHome.style.display = '';
        header.style.display = '';
        footer.style.display = '';
        alert('alas, all has been restored');
    } else {
        containerHome.style.display = '';
        header.style.display = '';
    }
}) //10

destinationHeaders.forEach(h => {
    h.addEventListener('click', function(e){
        if (this.style.color === 'crimson'){
            this.style.color = '';
        } else {
            this.style.color = 'crimson';
        }  
    })
})

footer.addEventListener('dblclick', function(e) {
    this.style.backgroundColor = 'aqua';
})