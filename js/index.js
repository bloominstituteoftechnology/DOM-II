// Your code goes here

// console.log('something else');
// homeLink.addEventListener(
//     'click',() => {
//         console.log('the link got clicked');
//     }
// )
// document.querySelector('nav').addEventListener('click', () => {
//     console.log('the nav got clicked');
//   })

//   document.querySelector('header').addEventListener('click', () => {
//     console.log('the header got clicked');
//   })

//   document.body.addEventListener('click', () => {
//       console.log('the body got clicked');
//   })

function clickEventHandler(event) {
    event.preventDefault()
    console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(event.target)
    console.log(event.currentTarget);
  }
  document.querySelector('a').addEventListener('click', clickEventHandler)
  document.querySelector('nav').addEventListener('click', clickEventHandler)
  document.querySelector('header').addEventListener('click', clickEventHandler)
  document.body.addEventListener('click', clickEventHandler)
  document.addEventListener('click', clickEventHandler)
  window.addEventListener('click', clickEventHandler)


  const logoGrow = document.querySelector("h1")
  
  logoGrow.addEventListener("mouseenter", () => {
    logoGrow.style.transform = "scale(1.2)";
    logoGrow.style.transition = "transform 1s";
  })
  logoGrow.addEventListener("mouseleave", () => {
    logoGrow.style.transform = "scale(1)";
  })

  
const changeImg = document.querySelector('.Bus');
changeImg.addEventListener("click", () => {
  changeImg.src="img/realVanOnSand.jpg";
})

const body = document.querySelector('body');

body.addEventListener('click', () => {
  body.style.backgroundColor= "#C8F7EA";
})

document.querySelectorAll("h2").forEach(el => {
    el.addEventListener("click", function() {
      el.style.color= "green";
    })
  })

  const imgFlip = document.querySelector(".MapImg")
  
  imgFlip.addEventListener("mouseenter", () => {
    imgFlip.style.transform = "scaleX(-1)";
    imgFlip.style.transition = "transform 1s";
  })
  imgFlip.addEventListener("mouseleave", () => {
    imgFlip.style.transform = "scaleX(1)";
    imgFlip.style.transition = "transform 1s";
  })

// let btnChange = document.querySelectorAll(".btn");
// btnChange.addEventListener("dblclick", function() {
// btnChange.style.backgroundColor = "yellow";
// })

let btnChange = document.querySelector(".btn");
btnChange.addEventListener("dblclick", () => {
document.btnChange.style.backgroundColor = "#F99E27";
})

// const btnChange = document.querySelectorAll('.btn');
// btnChange.addEventListener("dblclick", () => {
//   btnChange.style.backgroundColor = "yellow";
// })



