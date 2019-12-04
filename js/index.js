// Your code goes here
const busImage = document.querySelector('.intro img')
console.log(busImage)

busImage.addEventListener("mouseenter", () => {
  busImage.style.transform = "scale(1.2)";
  busImage.style.transition = "transform 0.3s"
})
busImage.addEventListener("mouseleave", () => {
  busImage.style.transform = "scale(1)"
})

const spaceShip = document.querySelectorAll(".img-content img");
console.log(spaceShip)
window.addEventListener('resize', () => {
  spaceShip[0].setAttribute('src', "img/rocketsmoke.jpg" ) 
})

document.querySelectorAll(".intro").forEach(el => {
    el.addEventListener("click", function() {
      el.style.color= "green";
      
    })
  })

  document.querySelectorAll(".destination").forEach(el => {
    el.addEventListener("click", function() {
      el.style.color= "green";
      event.stopPropagation();
    })
  })
  


  document.querySelectorAll(".text-content").forEach(el => {
    el.addEventListener("dblclick", function() {
      el.style.color= "red";
    })
  })

//   let last_known_scroll_position = 0;
// let ticking = false;

// function doSomething(scroll_pos) {
//   // Do something with the scroll position
// }

// window.addEventListener('scroll', function(e) {
//   last_known_scroll_position = window.clientY;
//   console.log(window.clientY)
//   if(window.clientY > 25){
//       this.window.clientY = 0
//   }
//   console.log('scrolling')

  
// });

const textCon = document.querySelector('.content-section')
console.log(textCon)

textCon.addEventListener("mouseover", () => {
  textCon.style.transform = "scale(1.2)";
  textCon.style.transition = "transform 0.3s"
})
textCon.addEventListener("mouseleave", () => {
    textCon.style.transform = "scale(1)"
  })

//   window.addEventListener('offline', (event) => {
//     console.log("The network connection has been lost.");
// });

// // onoffline version
// window.onoffline = (event) => {
//   console.log("The network connection has been lost.");
// };

document.querySelector('h1').addEventListener('mousedown', mouseDown)

function mouseDown(){
    document.querySelector('h1').innerHTML = "Pressed!"
}
document.querySelector('h1').addEventListener('mouseup', mouseUp)

function mouseUp(){
    document.querySelector('h1').innerHTML = 'Fun Bus'
}

const background = document.querySelector('*');
document.addEventListener('keydown', (event) => {
    if(background.style.backgroundColor != 'black'){
        background.style.backgroundColor = 'black';
        backgroundColor.style.color = 'whitesmoke'
    }
})
document.addEventListener('keypress', (event) => {
    if(background.style.backgroundColor != 'white'){
        background.style.backgroundColor = 'white';
        background.style.color = 'black'
    }
})

const introsec = document.querySelector('.intro').addEventListener("contextmenu", (event) => {
    gsap.to('.intro', {
         duration: 1,
         rotateY: 180,
         ease: "elastic(1, 0.75)"
         

        })
        event.stopPropagation();
    }) 