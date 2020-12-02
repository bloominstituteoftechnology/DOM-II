//Code
//

console.log('Hello World');
//Fun Bus title
const funBus = document.querySelector(".logo-heading")
//console.log(funBus);
funBus.addEventListener('mouseover', (event) => {
  console.log('in the function')
  funBus.style.fontSize='smaller'
})

// navLinks brown
const navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks)

// document.addEventListener('keydown', (event) => {
//   if (event.key === "z") {
//       funBus.style.color = 'blue'
//     console.log('in the function')
//   }
// })

navLinks.forEach(link => {
  document.addEventListener('keydown', (event) => {
    console.log(event)
    if (event.key === 'y') {
      link.style.color = 'brown';
      console.log('brown links');
    }
  })
})

//text contenty
const textContent = document.querySelectorAll('.text-content')
console.log(textContent);
textContent.forEach(text => {
  document.addEventListener('dblclick', (event) => {
    console.log(event)
    text.style.color = 'green';
  })
})

const destination = document.querySelectorAll('.destination')
console.log(destination)

//resize window event
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.addEventListener('resize', reportWindowSize);
// // Your code goes here
// console.log("Hello world");

// const head = document.querySelector(".main-navigation");
// //console.log(head);
// const funBus = head.querySelector("h1");
// funBus.addEventListener("mouseover", (element) => element.target.style.color = "yellow");
// const links = head.querySelector("a");
// //Array.from(links).forEach((element) => element.addEvenetListener("mouseover", (e) => e.target.style.color = "blue"));

// //webBody.addEventListener('keydown', (e) => alert('Dont touch anything'));
// const webBody = document.querySelector("body");
// console.log(webBody);
// webBody.addEventListener('keydown', (event) => {
//   if (event.key === "a") {
//     webBody.style.backgroundColor ="blue"
//   }
// });

// const funBusImg = document.querySelector(".intro img")
// funBusImg.addEventListener('wheel',function zoom(event) {
//     event.preventDefault();
//     let scale = 1;
//     scale += event.deltaY * -0.02;
  
//     // Restrict scale
//     scale = Math.min(Math.max(.125, scale), 4);
  
//     // Apply scale transform
//     funBusImg.style.transform = `scale(${scale})`;
//   });

//   const letsGo = document.querySelector(".text-content");
//   letsGo.addEventListener('click', function changeColor(element) {
//     letsGo.style.backgroundColor = "black";
//   })
//   letsGo.addEventListener('dblclick', function changeBack(element) {
//     letsGo.style.backgroundColor = "white";
//   });
  

//   const mainNav = document.querySelector(".main-navigation");
//   const logo = mainNav.querySelector("h1");
//   logo.addEventListener("click", (event) => logo.innerText = "Bus Fun");


  // const navLinks = document.querySelectorAll("a");

  // Array.from(navLinks).forEach(element => {
  //   element.addEventListener("mouseover", (event) => {
  //     event.style.backgroundColor = "green";
  //   })
  // });


// funBusImg.addEventListener('dblclick', (event) => {
  
// })













