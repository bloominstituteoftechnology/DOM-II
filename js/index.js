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
resize.addEventListener('mouseover',sizeUp, false)
resize.addEventListener('mouseout',sizeDown, false)

const resize2 = document.querySelectorAll('img')[1]
resize2.addEventListener('mouseover',sizeUp, false)
resize2.addEventListener('mouseout',sizeDown, false)

const resize3 = document.querySelectorAll('img')[2]
resize3.addEventListener('mouseover',sizeUp, false)
resize3.addEventListener('mouseout',sizeDown, false)

const resize4 = document.querySelectorAll('img')[3]
resize4.addEventListener('mouseover',sizeUp)
resize4.addEventListener('mouseout',sizeDown)

function sizeUp(event){
event.target.style.transform = 'scale(1.1)'
}
function sizeDown(event){
    event.target.style.transform = 'scale(1)'
}


