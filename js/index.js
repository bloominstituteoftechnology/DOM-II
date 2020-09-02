// Your code goes here
const navLink = document.querySelector('nav')
const searchBar = document.querySelector('#searchbar')
const password = document.querySelector('#password')
const reset = document.querySelector('#reset')
const body = document.querySelector('body')
const image = document.querySelectorAll ('img')




navLink.addEventListener('mouseover', function (event){
    event.target.style.color = 'blue'
    setTimeout(function(){
        event.target.style.color = ''
    }, 400)
},false)

document.addEventListener('keydown',function(event){
    if (event.key === 'z'){
        console.log ('you pressed z')
    }
})

searchBar.addEventListener('focus', function(event){
    event.target.style.background = 'yellow'
})

password.addEventListener('blur', function(event){
    event.target.style.background = ''
})

window.addEventListener('load', function(event){
    console.log('page is fully loaded')
})

window.addEventListener('resize', function(reportWindowSize){
    console.log(`Height ${window.innerHeight}`)
    console.log(`Width ${window.innerWidth}`)
})

reset.addEventListener('reset', function(logReset){
    
})

body.addEventListener('contextmenu', function (e){
    e.preventDefault();
})


image[0].addEventListener('dblclick', function(e){
    console.log ('you clicked an image');
})
image[1].addEventListener('dblclick', function(e){
    console.log ('you clicked an image');
})
image[2].addEventListener('dblclick', function(e){
    console.log ('you clicked an image');
})
image[3].addEventListener('dblclick', function(e){
    console.log ('you clicked an image');
})
