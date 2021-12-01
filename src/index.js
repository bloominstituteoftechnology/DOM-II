import './less/index.less'


// Your code goes here!

const logoHead = document.querySelector('.logo-heading');

const mousePink = () => {
    logoHead.style.backgroundColor = 'pink';
}

logoHead.addEventListener('mouseover', mousePink)

const mouseOut = () => {
    logoHead.style.backgroundColor = '';
}

logoHead.addEventListener('mouseout', mouseOut);

//secret message
const mapPhoto = document.querySelector('.img-content');
mapPhoto.addEventListener('click', displayMessage)

function displayMessage() {
    alert ("Congratulations! Secret Found!")
}




//wheel
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('img');
el.onwheel = zoom;

//load

el.addEventListener('load', function(){
    alert('Page is loaded loaded')
})

const images =  document.querySelectorAll('.img-content img')

const bigger = (event,img) => {
    img.style.width = '60%';
}

images.forEach(img => {
    img.addEventListener('dblclick', (event) => bigger(event,img))
});

const footer = document.querySelector('footer');



