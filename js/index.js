// Your code goes here

let mouseOver = document.querySelector('.nav');

mouseOver.addEventListener('mouseover', (ele) => {

    ele.target.style.fontSize = '20px';
})

let key = document.querySelector('body')

key.addEventListener('keydown', (ele) => {

    alert('Busted');
})



let wheel = document.querySelector('.main-navigation')

wheel.addEventListener('wheel', (ele) => {

    ele.target.style.backgroundColor = 'yellow';
    event.stopPropagation()
})


let drag = document.querySelectorAll('img');

drag.forEach( (link) => { link.addEventListener('drag', (ele) => {

    ele.target.style.border = '4px solid black';
    console.log(ele)

})})



 
let loaded = document.querySelector('img')





loaded.addEventListener('load', (ele) => {

    console.log('image is  loaded')
})



let scroll = document.querySelector('body')

wheel.addEventListener('scroll', (ele) => {

    ele.target.style.backgroundColor = 'yellow';
    event.stopPropagation()
})