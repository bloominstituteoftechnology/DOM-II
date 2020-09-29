// Your code goes here
const logo = document.querySelector('h1')
const navBar = document.querySelectorAll('a')
console.log(nav)
const nav = navBar[0]
const about = navBar[1]
const blog = navBar[2]
const contact= navBar[3]


const welcome = document.querySelector('.intro')
console.log(welcome)

const home = document.querySelector('.home')
console.log(home)

const adventure = document.querySelectorAll('.text-content')
const section2 = adventure[1]
const letsGo = adventure[0]

const travel = document.querySelectorAll('.destination')
const travel1 = travel[0]
const travel2 = travel[1]
const travel3 = travel[2]

const destination = document.querySelector('.content-destination')
console.log(destination)

nav.addEventListener('keydown',function(event){
    if (event.key === 'Escape'){
    nav.style.backgroundColor = 'yellow'

}
})

function hover(event){
    return event.style.backgroundColor = 'grey',event.style.color ='red',event.style.fontSize ='5rem', event.style.borderRadius = '10px'
}
function unhover(event){
    return event.style.backgroundColor = 'unset', event.style.color ='unset', event.style.fontSize ="unset" 
}

 function backGround0(event) {
     return event.style.backgroundColor = 'yellow'
}
function backGround1(event) {
    return event.style.backgroundColor = 'red'
}
function backGround2(event) {
    return event.style.backgroundColor = 'skyblue'
}

function backGround3(event) {
    return event.style.backgroundColor = 'purple'
}

logo.addEventListener('click', ()=> backGround2(logo))

nav.addEventListener('mouseenter', ()=> hover(nav));
nav.addEventListener('mouseleave', ()=> unhover(nav));
about.addEventListener('mouseover', ()=> hover(about))
about.addEventListener('mouseleave', ()=> unhover(about))
blog.addEventListener('mouseover', ()=> hover(blog))
blog.addEventListener('mouseleave', ()=> unhover(blog))
contact.addEventListener('mouseover', ()=> hover(contact))
contact.addEventListener('mouseleave', ()=> unhover(contact))

home.addEventListener('click', ()=> backGround0(home))
welcome.addEventListener('click',()=> backGround1(welcome))
destination.addEventListener('click',()=> backGround3(destination))
letsGo.addEventListener('click',()=> backGround2(letsGo))
section2.addEventListener('click',()=> backGround2(section2))
travel1.addEventListener('click',()=> backGround1(travel1))
travel2.addEventListener('click',()=> backGround3(travel2))
travel3.addEventListener('click',()=> backGround2(travel3))
