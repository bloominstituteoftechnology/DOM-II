// Your code goes here

//1
let mainNav = document.querySelector('.nav');

mainNav.addEventListener('click', event => {
    event.target.style.color = 'red'
})


//2
let topSection = document.querySelector('.intro h2')

topSection.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'green'
})


//3 `keydown`
document.addEventListener('keydown', function (event){
    if(event.target === 'Escape');{
       topSection.style.backgroundColor = 'white'
    //    logo.style.fontSize = '5rem'
    }
});

//4 `wheel`
let logo = document.querySelector('.logo-heading');

logo.addEventListener('wheel', function (event){
    event.target.style.fontSize = '2rem'
})

//5 `mouseenter`
let img = document.querySelector('.content-section img')

img.addEventListener('mouseenter', function(event){
event.target.style.border = 'solid red .5rem'
})

let img2 = document.querySelector('.inverse-content img')

img2.addEventListener('mouseenter', function(event){
event.target.style.border = 'solid red .5rem'
})

//6 `mouseleave`
img.addEventListener('mouseleave', function (event){
    event.target.style.border = 'none'
})

img2.addEventListener('mouseleave', function (event){
    event.target.style.border = 'none'
})

//7 `dblclick`
let button= document.querySelectorAll('.btn')
console.log(button)

Array.from(button).forEach(item, (event) => {
    item.addEventListener('ondblclick', (event) => {
        event.target.style.color('red')
    })
})

// buttonClick.addEventListener('ondblclick', (event) => {
    
// })

//8


//9


//10