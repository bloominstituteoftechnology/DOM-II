//mouseover

const funBus = document.querySelector('.logo-heading')
funBus.addEventListener("mouseover", (event) => {
    event.target.style.color = "orange"

    setTimeout(() => {
        event.target.style.color = ""
    }, 500)
}, false)

const boatImg = document.querySelectorAll('.img-content img')[1]
 boatImg.addEventListener("mouseover", event =>{
     event.target.style.transform = "skewy(360deg)";
     event.target.style.transition = "transform 0.5s";
 })

//click

const navClick = document.querySelector('.nav a')
navClick.addEventListener("click", (event) => {
     console.log('404 Page Not Found.')
})

const signUp = document.querySelector(".btn")
signUp.addEventListener("click", (event) => {
    console.log('404 Page Not Found.');
})
//wheel

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    
    scale = Math.min(Math.max(.125, scale), 4);
  
    
    busImg.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const busImg = document.querySelector('.intro img');
  busImg.onwheel = zoom;



//dblclick

const introChange = document.querySelector('.intro')
introChange.addEventListener('dblclick', (event) => {
    introChange.style.backgroundColor = "orange"
})

const contentSection = document.querySelector('.content-section')
contentSection.addEventListener('dblclick', (event) => {
    contentSection.style.backgroundColor = "blue"
})

const inverseContent = document.querySelector('.content-section-inverse-content')
inverseContent.addEventListener('dblclick', (event) => {
    inverseContent.style.color = "pink"
})

const pickDestination = document.querySelector('.content-destination')
pickDestination.addEventListener('dblclick', (event) => {
    pickDestination.style.color = "white"
})

const copyright = document.querySelector('.footer')
copyright.addEventListener('dblclick', (event) => {
    copyright.style.color = "white"
    copyright.style.backgroundColor = "purple"
})



