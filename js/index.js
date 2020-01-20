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



/*let scroll = document.querySelector('body')

wheel.addEventListener('scroll', (ele) => {

    ele.target.style.backgroundColor = 'yellow';
    event.stopPropagation()
})*/







window.addEventListener('resize', (event) => {

    let newSize = document.querySelector('body');
    newSize.style.backgroundColor = 'gray';
    console.log('resize')
    
})



let dClick = document.querySelectorAll('img');

dClick.forEach( (link) => { link.addEventListener('dblclick', (ele) => {

    ele.target.style.filter = 'grayscale(100%)';
    console.log(ele)

})})

let slct = document.querySelector('h2');

   slct.addEventListener('select', (ele) => {

    ele.target.style.color = 'yellow';
    console.log('selected')
})






