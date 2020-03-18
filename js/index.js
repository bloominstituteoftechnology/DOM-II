// Your code goes here

//Logo color change on mouseclick
const logoColor = document.querySelector('.logo-heading')
logoColor.addEventListener('click', () => {
    logoColor.style.color = "blue";
})
logoColor.addEventListener('auxclick', () => {
    logoColor.style.color = "black";
})
    
    //Map picture border on mouse down
const mapPic = document.querySelector('.content-section img')
mapPic.addEventListener('mousedown', () => {
    mapPic.style.border = "solid black 5px";
})
mapPic.addEventListener('mouseup', () => {
    mapPic.style.border = "0";
})

//Bus picture border on mouse over
const busPic = document.querySelector('.intro img')
busPic.addEventListener('mouseover', () => {
busPic.style.border = "dashed purple 2px";
})
busPic.addEventListener('mouseout', () => {
    busPic.style.border = "0";
})

// Change intro using event.target to green
// Toggle colors based on current color of target
const intro = document.querySelector('.intro')
intro.addEventListener('click', (event) => {
    event.target.style.color = event.target.style.color === "green" ? "black" : "green"
})
