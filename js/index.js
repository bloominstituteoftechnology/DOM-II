// Your code goes here
const titleOfPage = document.querySelector('h1')
// console.log('titleOfPage')
titleOfPage.addEventListener('mouseover', function (event) {
    event.target.style.color = 'orange'

    setTimeout(function() {
        event.target.style.color = "";
      }, 1000)
}, false)
const body = document.querySelector('body')
// console.log(body)
document.body.addEventListener('keydown', function (event) {
    // console.log('inside of event')
    if (event.key === 'c'){
    body.style.background = 'skyblue'
    }
    // console.log('after if statement')
})
function zoom(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    mainImage.style.transform = `scale(${scale})`;
}
let scale = 1
const mainImage = document.querySelector('.intro img')
mainImage.addEventListener('wheel', zoom)
const nav = document.querySelector('nav')
// console.log(nav)
let dragged;
document.addEventListener("drag", function(event) {

}, false);