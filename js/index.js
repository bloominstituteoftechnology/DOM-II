// Your code goes here

//1. canges text
const smallBoat = document.querySelector('.text-content p');
smallBoat.addEventListener('mouseover', () => {
smallBoat.textContent = "Wo0o0o0o0ow this works"
})

//2. changes logo color
const funLogo = document.querySelector('.logo-heading');
funLogo.addEventListener("click", () => {
funLogo.style.color = "red";
})

//3. changes intro paragraph color
const intro = document.querySelector('.intro p');
intro.addEventListener('mouseenter', () => {
  intro.style.color = 'blue';
})

//4. changes bus image
const images = document.querySelector('.intro img');
 images.addEventListener('mouseover', () => {
   images.src ="img/destination.jpg";
 })

 //5. changes to original bus image
 const origImg = document.querySelector('.intro img');
 origImg.addEventListener('dblclick', () => {
     origImg.src = "img/fun-bus.jpg"
 })

 //6. changes nav background on scroll
 const redact = document.querySelector('nav');
 window.addEventListener('scroll', () => {
     redact.style.backgroundColor = 'grey';})


 //7. changes color of buttons
 const signUp = document.querySelectorAll(".btn").forEach(stuff => {
stuff.addEventListener("mousedown", () => {
stuff.style.backgroundColor = "purple"
})
 })

 //8. changes body backgrond color
 const poop = document.querySelector('body');
poop.addEventListener("contextmenu", () => {
poop.style.backgroundColor = "rebeccapurple";
})


//9. resize bottom img
const boat = document.querySelector(".content-destination img")
boat.addEventListener("mouseenter", () => {
  boat.style.transform ="scale(1.2)";
  boat.style.transition = "transform 0.3s"
} )
boat.addEventListener("mouseleave", function() {
  boat.style.transform = "scale(1)"
  boat.style.transition = "transform 0.3s"
}) 

//10. changes button color on mouseup
const buttons = document.querySelectorAll(".btn").forEach(stuff => {
    stuff.addEventListener("mouseup", () => {
    stuff.style.backgroundColor = "orange"
    })
     })