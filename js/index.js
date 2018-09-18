// Your code goes here
i=0;
const bus = document.querySelector("img")
const page = document.querySelector("html")
const image = document.querySelectorAll("img")
const btn = document.querySelectorAll(".btn")
const all = document.querySelector("html")
const nav = document.querySelectorAll("nav")

//click image to make it vanish
bus.addEventListener('click', ()=> {
    bus.style.visibility = "hidden"
})



//scroll to make bus visible
page.addEventListener("wheel", () => {
    bus.style.visibility = "visible"
})

//add fun to Fun Bus
page.addEventListener("keydown", () => {
  i++;
  if (i === 1) {
    page.style.color = "red"
} else if (i === 2) {
    page.style.color = "orange"
} else if (i === 3) {
    page.style.color = 'Yellow'
} else if (i === 4) {
    page.style.color = "green"
} else if (i === 5) {
    page.style.color = "blue" 
} else if (i === 6) {
    page.style.color = "indigo"
} else if (i===7) {
    page.style.color= "violet"
} else {
    i = 0
}
})

//make image disapear
image[1].addEventListener("drag", ()=>{
    image[1].style.visibility = "hidden"
})

image[2].addEventListener("drag", ()=>{
    image[2].style.visibility = "hidden"
})

image[3].addEventListener("drag", ()=>{
    image[3].style.visibility = "hidden"
})

//gets your images back 
btn[0].addEventListener("click", ()=> {
    event.stopPropagation();
    for(i=0; i<image.length; i++) {
        image[i].style.visibility = "visible"
    }
})


//changes text to black and resets rainbow
all.addEventListener('click', ()=> {
  all.style.color = "black"
  i=0
})

//changes links so they dont refresh page
for(i=0; i<nav.length; i++) {
    nav[i].addEventListener('click',() => {
        event.preventDefault();
        
    })
}