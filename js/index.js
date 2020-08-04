// Your code goes here
// const images = document.querySelectorAll('img')
// console.log(images)

// images[0].onclick = function (event) {
// // debugger

// }
// function bigImage(event){
//     event.focusI

//Variables

const navs = document.querySelector('nav');
console.log(navs);

const images = document.querySelectorAll('img')

const title = document.querySelectorAll('*')
console.log(title)


//Changes color of nav when mouse moves over
function pinkBackground (event){
   event.target.style.color ="pink" 
} 
navs.addEventListener('mouseover',pinkBackground)

// changes color of all text to red when hotkey "l" is used
document.addEventListener('keydown', event => {
   if (event.key === 'l') {
     document.body.style.color = "red"
    
   } 
 })

// changes image when double clicked on
function comicImage (event) {
   event.target.src = "https://www.vippng.com/png/detail/112-1128954_cartoon-school-bus-school-bus-transparent-cartoon.png"
}
images[0].addEventListener("dblclick", comicImage)

window.addEventListener('load', () => {
   console.log('page is fully loaded');
 });


// dark mode (sort of)
 document.addEventListener('keydown', event => {
   if (event.key === 'z') {
     document.body.style.color = "white"
     document.body.style.backgroundColor = "black"
   
   }
 })

//  document.addEventListener("mouseenter", (event) =>{
//    document.querySelectorAll("p").style.textTransform = "capitalize";
//    document.addEventListener('mouseleave', () => {
//       document.querySelectorAll("p").style.textTransform = "capitalize";
//    })
//  })

 document.querySelectorAll(".btn").addEventListener("click", function(){
   this.style.backgroundColor = "red";
 });