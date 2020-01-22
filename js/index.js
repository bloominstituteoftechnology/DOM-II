// Your code goes here

//Logo color change on mouseclick
const logoColor = document.querySelector('.logo-heading')
logoColor.addEventListener('click', () => {
    logoColor.style.color = "red";
})
logoColor.addEventListener('auxclick', () => {
    logoColor.style.color = "black";
})

//Bus picture border on mouse over
const busPic = document.querySelector('.intro img')
busPic.addEventListener('mouseover', () => {
busPic.style.border = "solid black 5px";
})
busPic.addEventListener('mouseout', () => {
    busPic.style.border = "0";
})

//Map picture border on mouse down
const mapPic = document.querySelector('.content-section img')
mapPic.addEventListener('mousedown', () => {
    mapPic.style.border = "dashed purple 2px";
})
mapPic.addEventListener('mouseup', () => {
    mapPic.style.border = "0";
})

//Text change on key down
const banner = document.querySelector('.text-content p')
document.addEventListener('keydown', () => {
    banner.textContent = ""
})
document.addEventListener('keyup', () => {
    banner.textContent = "Adventure webdesign pretty design design, excursion cute WordPress blogger design webdesign adventure. Pretty simple traveling fun WordPress wanderlust darn simple organized.";
})

const boatPic = document.querySelector('.content-destination img')
boatPic.addEventListener('dblclick', () => {
    boatPic.classList.toggle("hidden")
})