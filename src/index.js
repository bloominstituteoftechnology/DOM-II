import './less/index.less'

// Your code goes here!

const helper = () => {
    console.log('this works!!!');
}

const busImage = document.querySelector('.intro img');
busImage.addEventListener('click', function(e){
    console.log(e);
})

document.addEventListener('keydown', function(e){
    console.log(`You pressed the ${e.key}`);
})

busImage.addEventListener('load', function(e){
    console.log(`${e.target} has been loaded`);
})

busImage.addEventListener('mouseenter', helper);

const button1 = document.querySelector('.destination1 .btn');
button1.addEventListener('dblclick', function(e){
    e.target.style['background-color'] = 'pink';

})
let scale = 1;
const headerParagraph = document.querySelector('header p');
headerParagraph.addEventListener('wheel', function(e){
    e.preventDefault();

    scale += e.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    headerParagraph.style.transform = `scale(${scale})`;

})

headerParagraph.addEventListener('copy', e => {
    navigator.clipboard.writeText("please don't copy from this paragraph");
    console.log('blocked paragraph from being copied');
})

headerParagraph.addEventListener('cut', e => {
    navigator.clipboard.writeText("please don't cut from this paragraph");
    console.log('blocked paragraph from being cut');
})


