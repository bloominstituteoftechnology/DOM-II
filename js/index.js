// Your code goes here

const highlight = document.querySelector('.nav')

highlight.addEventListener('mouseover',function(event)
{
    event.target.style.color = 'red'
})
highlight.addEventListener('mouseout',function(event)
{
    event.target.style.color = 'black'
})
