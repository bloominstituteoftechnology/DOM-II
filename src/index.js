import './less/index.less'

// Your code goes here!
const letsGo = document.querySelector('.content-section .text-content h2')
const adventureAwaits = document.querySelector('.inverse-content .text-content h2')
const pickDestination = document.querySelector('.content-destination h2')

letsGo.addEventListener("click", evt => {
    letsGo.style.color = "blue";
    letsGo.style.fontSize = '80px'
})

adventureAwaits.addEventListener("mouseover", evt => {
    adventureAwaits.style.color = "yellow";
    adventureAwaits.style.fontSize = '80px'
})

pickDestination.addEventListener("dblclick", evt => {
pickDestination.style.color = "green";
pickDestination.style.fontSize = "80px";
})