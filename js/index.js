// Your code goes here





/// Resize Event 

const introImage = document.querySelector("img")
console.log(introImage)
window.addEventListener("resize",()=>{
    introImage.src = "https://source.unsplash.com/Hocabc1DCTM"
  })



  /// Double Click Event
  const images = document.querySelectorAll("img")
 images.forEach(el=>{
     el.addEventListener("dblclick",()=>{
         el.classList.toggle("large")
     })
 })





//// Mouse Over Event with SetTimeout 
 const titles = document.querySelectorAll("h2")
 titles.forEach(el=>{
     el.addEventListener("mouseover",(event)=>{
event.target.style.color = "orange"
setTimeout(()=>{
    event.target.style.color=""
},500)
     })
 },false)



/// Focus and Blur Event
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