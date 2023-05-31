import './less/index.less'

// Your code goes here!
const header = document.querySelector('.logo-heading');
const headerImg = document.querySelector('.home img');

function imgChange (evt) {
    headerImg.src = 'https://cdn4.onpurpose.org/media/images/flying_bus.2e16d0ba.fill-1200x630.png';
}

function imgReturn (evt) {
    headerImg.src = 'http://localhost:9000/img/fun-bus.jpg'
}

function spaceKey(evt) {
    if (evt.key === 'Escape') {
        header.textContent = 'Fun Bus';
    }
}

document.addEventListener('keydown', spaceKey);

headerImg.addEventListener('mouseenter', imgChange);
headerImg.addEventListener('mouseleave', imgReturn);

function headerFun(evt){
    header.textContent = 'Super Fun!'
}

header.addEventListener('click', headerFun);
