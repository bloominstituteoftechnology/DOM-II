// Your code goes here





/// Resize 1

const introImage = document.querySelector("img")
console.log(introImage)
window.addEventListener("resize",()=>{
    introImage.src = "https://source.unsplash.com/Hocabc1DCTM"
    event.stopPropagation();
  })



  /// Double Click 2
  const images = document.querySelectorAll("img")
 images.forEach(el=>{
     el.addEventListener("dblclick",()=>{
         el.classList.toggle("large")
         event.stopPropagation();
     })
 })





//// Mouse Over Event with SetTimeout 3
 const titles = document.querySelectorAll("h2")
 titles.forEach(el=>{
     el.addEventListener("mouseover",(event)=>{
event.target.style.color = "orange"
setTimeout(()=>{
    event.target.style.color=""
},500)
     })
 },false)



/// Focus and Blur 4
const navFocus = document.querySelectorAll(".nav-link")

navFocus.forEach(el=>{
    el.addEventListener("focus",(e)=>{
e.target.style.background ="#a85e32"
    })
    navFocus.forEach(el=>{
        el.addEventListener("blur",(e)=>{
            e.target.style.background =""
        })
    })
})



// wheel 5
const bodySelect = document.querySelector('body');
bodySelect.addEventListener('wheel', () => {
    bodySelect.style.backgroundColor = 'lightblue';
    event.stopPropagation();
})




// plays bus sound when img is clicked 6
const firstImage = document.querySelector(' img');
const audio = document.getElementById('sound');
console.log(audio);
console.log(firstImage);

let sound = () => {
    audio.play();
}
firstImage.addEventListener('contextmenu', sound);

// copy (sends message when anything in the body is copied) 7
bodySelect.addEventListener('copy', () => {
    alert('Would you like us to send you more information?');
})



// drag 8
let busImage = document.querySelector('.main-navigation h1');
let dragBus = () => {
    busImage.style.backgroundImage = 'https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-pure-color-watercolor-graffiti-gradient-background-board-design-board-design-image_66713.jpg';
    busImage.style.color = 'orange';
}

// mouseenter 9
busImage.addEventListener('mouseenter', () => {
    busImage.style.fontFamily = 'Baloo';
})

busImg.addEventListener('drag', dragBus);

// stop propogation
const bodyColor = document.querySelector('body');
console.log(bodyColor)

bodyColor.addEventListener('click', (event) => {
    bodyColor.style.backgroundColor = 'yellow';
    event.stopPropagation();
})

const titleColor = document.querySelectorAll('h2');
console.log(titleColor)
titleColor.forEach(color => {
    color.addEventListener('click', (event) => {
        color.style.backgroundColor = 'blue';
        event.stopPropagation();
})
})

// dblclick 10, and
// prevent default action
const stopRefresh = document.querySelectorAll('.nav-link');
console.log(stopRefresh);
stopRefresh.forEach(navLink => {
    navLink.addEventListener('dblclick', (event) => {
    event.preventDefault();
    console.log('stop refresh');
    })
})
