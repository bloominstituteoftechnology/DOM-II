// Your code goes here

const busImg = document.querySelector('img')
busImg.addEventListener('click', () => {
    busImg.style.transform = "scale(0)"
    busImg.style.transition = "transform 1s";
})

const notFun = document.querySelector('h2')
notFun.addEventListener('dblclick', () => {
    notFun.textContent = "Welcome to the not so Fun Bus! Don't put your mouse on the map!"
})

const map = document.querySelector('.img-content')
map.addEventListener('mouseover', () => {
    map.style.transform ="scale(3)";
    map.style.transition = "transform 1s";
})

map.addEventListener('click', () => {
    map.style.transform = "scale(0)"
    map.style.transition = "transform 1s";
})

const foot = document.querySelector('footer')
foot.addEventListener('click', () =>{
    foot.style.backgroundColor = "pink"
})

const body = document.querySelector('body')
window.addEventListener('resize', () =>{
    body.style.transform = "scale(0)";
} )

