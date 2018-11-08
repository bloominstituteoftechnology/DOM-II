// Your code goes here

//`dblclick`

let dblclickEvent = document.querySelector(".btn")
    dblclickEvent.addEventListener('dblclick', function(event){
        event.stopPropagation()
        event.target.style.color = "green"
        console.log(event.target)
    })
    
// mouseover 

    let mouseoverEvent = document.querySelector(".intro")
    mouseoverEvent.addEventListener('mouseover', function(event){
        event.stopPropagation()
        event.target.style.color = "red"
        console.log(event.target)
    })

// keydown 

let keydownEvent = document.getElementsByClassName("text-content")[0]
keydownEvent.addEventListener('keydown', function (event){
    event.stopPropagation()
    event.currentTarget.style.backgroundColor = "green"
    console.log(event.currentTarget)
})

// wheel

let containerHome = document.getElementsByClassName("container home")[0]
let fontsize = 6
containerHome.addEventListener('wheel', function (event){
    if (event.deltaY < 0 ){
        fontsize++
    }
    else{
        fontsize--;
    }
    event.currentTarget.style.fontsize = `${fontsize}px`
})

// `load`
window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
  });

// nesting two events

let myClass = document.getElementsByClassName("content-destination")[0]
myClass.getElementsByTagName("h2")[0].addEventListener('click', function(event){
    event.stopPropagation()
    event.currentTarget.style.backgroundColor = "grey"
})

// preventDefault()

const navItems = document.querySelectorAll(".nav-link")
navItems.forEach(function(item){
    item.addEventListener('click',(event) =>{
        event.preventDefault()
    })
})

// green sock 
const cHome = document.querySelector("header")
cHome.addEventListener('mouseover', () => {
    TweenMax.to(".intro", 2, {
        marginLeft:400,
        ease: Power4.easeOut
       
    })
})
