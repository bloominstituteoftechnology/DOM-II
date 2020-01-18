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

//Backround color on key down
const main = document.querySelector('.container')
main.addEventListener('keydown', () => {
    main.style.backgroundColor = "dodger-blue";
})
main.addEventListener('keyup', () => {
    main.style.backgroundColor = "white";
})