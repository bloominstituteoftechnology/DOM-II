// Your code goes here

//mouseover
const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener("mouseover", (e) => e.target.style.transform = "scale(1.5)");
logoHeading.addEventListener("mouseout", (e) => e.target.style.transform = "scale(1)")


//keydown

//wheel
const wheelDestination = document.querySelector('.destination p')
wheelDestination.addEventListener("wheel", (e) => {e.style.fontSize = "35px";
})


//
const signUpBtn = document.querySelector('.btn');
signUpBtn.addEventListener('dblclick', () => {
	
});


window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
})


const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});