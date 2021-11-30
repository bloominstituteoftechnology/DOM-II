import './less/index.less'

// Your code goes here!

// mouseover
const logo = document.querySelector('.logo-heading');

const mouseBlue = () => {
    logo.style.backgroundColor = 'dodgerblue';
}

logo.addEventListener('mouseover', mouseBlue)

const mouseOut = () => {
    logo.style.backgroundColor = '';
}
logo.addEventListener('mouseout', mouseOut)

// keydown

window.addEventListener('keydown',function(event){
    console.log(event.key)
    if (event.key === 'f') {
        window.scrollTo(0, document.body.scrollHeight)
    }
})

// wheel 
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('img');
el.onwheel = zoom;

// load 
el.addEventListener('load', function(){
    alert('Page is loaded')
})