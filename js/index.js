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

//3rd event
const resize = document.querySelectorAll('img')[0];

resize.addEventListener('mouseover',function(event)
{
    event.target.style.transform = 'scale(1.1)'
})

resize.addEventListener('mouseout',function(event)
{
    event.target.style.transform = 'scale(1)'
})

//4th event
const resize2 = document.querySelectorAll('img')[1]

resize2.addEventListener('mouseover',function(event)
{
    event.target.style.transform = 'scale(1.1)'
})

resize2.addEventListener('mouseout',function(event)
{
    event.target.style.transform = 'scale(1)'
})
