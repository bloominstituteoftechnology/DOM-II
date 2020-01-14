// Your code goes here

//1.
// const imgSize = document.querySelector("intro img")
// imgSize.style.transform = "scale(1.2)";


//2. change logo color
const funLogo = document.querySelector('.logo-heading');
funLogo.addEventListener("click", () => {
funLogo.style.color = "red";
})

//3. change intro color
const intro = document.querySelector('.intro p');
intro.addEventListener('mouseenter', () => {
  intro.style.color = 'blue';
})

//4. change bus image
const images = document.querySelector('.intro img');
 images.addEventListener('mouseover', () => {
   images.src ="img/destination.jpg";
 })

 //5. changes to original bus image
 const origImg = document.querySelector('.intro img');
 origImg.addEventListener('dblclick', () => {
     origImg.src = "img/fun-bus.jpg"
 })

 //6. changes text on scroll NOT WORKING
 const scrollText = document.querySelector('.text-content p');
 scrollText.addEventListener('scroll', () => {
scrollText.textContent = 'Wow, this is so cool!'
 })


 //7. resize image
 const map = document.querySelector(".btn")
map.addEventListener("mousedown", () => {
map.style.backgroundColor = "purple"
} )