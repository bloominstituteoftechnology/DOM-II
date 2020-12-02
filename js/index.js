// Your code goes here

const navElement = document.querySelector('nav');
const logoHeading = document.querySelector('.logo-heading');

navElement.addEventListener('click', function (event) {
    navElement.style.backgroundColor = "red";
})

logoHeading.addEventListener('mouseover', function(event) {
    logoHeading.style.backgroundColor = "seagreen";
})

// add event listener to undo changes once i leave page


// CANT GET KEYDOWN ESCAPE TO CHANGE IMAGE
const funBusImgs = document.querySelectorAll('img');
funBusImgs[0].addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        funBusImgs[0].src = "https://images.pexels.com/photos/1091470/pexels-photo-1091470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
   
})

