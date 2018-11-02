// Your code goes here

document.addEventListener('copy', function (event) {
    alert('you cannot copy that');
    event.preventDefault();
    
})

const myNavLogo = document.querySelector('.logo-heading');
myNavLogo.addEventListener('click', function (event) {
    event.target.classList.toggle('active');
})

const myNavLinks = document.querySelector('.nav');
myNavLinks.addEventListener('mouseover', function (event) {
    event.target.classList.toggle('active');
})
myNavLinks.addEventListener('click', function (event) {
    event.preventDefault();
})

myNavLinks.addEventListener('mouseout', function (event) {
    event.target.classList.toggle('active');
})

const welcomeHeader = document.querySelector('.intro h2');
document.addEventListener('keydown', function (event) {
    const keyName = event.key;
    if (keyName !== 'Control') {
        welcomeHeader.classList.toggle('active'); 
    }
})

const welcomeText = document.querySelector('.intro p');
welcomeText.addEventListener('dblclick', function (event) {
   event.target.classList.toggle('active');
})

const introImg = document.querySelector('.intro img');
introImg.addEventListener('drag', function (event) {
    event.target.style.border = "solid green 3rem";
 })
 introImg.addEventListener('dblclick', function (event) {
    event.target.style.border = "none";
 })

 const destImage = document.querySelector('.content-destination img');
 destImage.addEventListener('mousedown', function (event) {
    event.target.classList.toggle('active');
 })
 destImage.addEventListener('mouseup', function (event) {
    event.target.classList.toggle('active');
 })

 const foot = document.querySelector('.footer');
 foot.addEventListener('mouseenter', function (event) {
    event.target.classList.toggle('active');
 })