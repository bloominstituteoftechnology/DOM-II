// Your code goes here


//1st event, change color of nav links
const highlight = document.querySelector('.nav')

highlight.addEventListener('mouseover',function(event)
{
    event.target.style.color = 'red'
})
highlight.addEventListener('mouseout',function(event)
{
    event.target.style.color = 'black'
})


//2nd event, rotate logo
const turnAround = document.querySelector('.logo-heading')

turnAround.addEventListener('dblclick',clockWise,false)

function clockWise(event){
    event.target.style.transform = 'rotate(20deg)'
}

