import './less/index.less'

//1
const busImage = document.querySelector('.intro img')
busImage.addEventListener('mouseover', function(){
    busImage.style.height = '500px';
    busImage.style.width = '1000px';
})
//2
busImage.addEventListener('mouseout', function(){
    busImage.style.height = 'auto';
    busImage.style.width = 'auto';
})
//3
document.addEventListener('keydown', function (event) {
    if (event.key === 's') {
      document.body.style = 'color: blue; background-color: black';
    }
    if (event.key === 'r') {
      document.body.style = '';
    }
  });
//4
const mapImage = document.querySelector('.img-content img');
mapImage.addEventListener('wheel', function(){
    mapImage.src = 'https://picsum.photos/400/400'
})
//5
const otherImage = document.querySelector('.inverse-content .img-content img');
otherImage.addEventListener('dblclick', function(){
    otherImage.src = 'https://loremflickr.com/400/400/brazil,rio'
})
//6
const nav = document.querySelector('nav');
nav.addEventListener('focus', function(event){
    event.target.style.background = 'pink';
}, true);
//7
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        alert('Please Scroll Up You Reached The End')
    }
};
//8
const signUpButton = document.querySelector('.btn');
signUpButton.addEventListener('click', function(){
    alert('Website Under Construction Feature Comming Soon...')
})
//9
const travelingP = document.querySelector('p');
travelingP.addEventListener('dblclick', function(){
    travelingP.style = 'background-color: gold'
})
//10
const body = document.querySelector('body');
body.addEventListener('click', function(){
    travelingP.style = 'background-color:'
})