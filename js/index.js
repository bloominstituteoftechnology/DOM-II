// Your code goes here

let mouseOver = document.querySelector('.nav');

mouseOver.addEventListener('mouseover', (ele) => {

    ele.target.style.fontSize = '20px';
})

let key = document.querySelector('body')

key.addEventListener('keydown', (ele) => {

    alert('Busted');
})



let wheel = document.querySelector('body')

wheel.addEventListener('wheel', (ele) => {

    ele.target.style.backgroundColor = 'yellow';
})


