
// Your code goes here
console.log("Hello world");

const head = document.querySelector(".main-navigation");
//console.log(head);
const funBus = head.querySelector("h1");
funBus.addEventListener("mouseover", (element) => element.target.style.color = "yellow");
const links = head.querySelector("a");
//Array.from(links).forEach((element) => element.addEvenetListener("mouseover", (e) => e.target.style.color = "blue"));

const webBody = document.querySelector("body");
webBody.addEventListener('keydown', (e) => alert('Dont touch anything'));

const funBusImg = document.querySelector(".intro img")
funBusImg.addEventListener('wheel',function zoom(event) {
    event.preventDefault();
    let scale = 1;
    scale += event.deltaY * -0.02;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    funBusImg.style.transform = `scale(${scale})`;
  });

  webBody.addEventListener('load', (event) => console.log('page is fully loaded'));

  webBody.addEventListener('click', (event) => event.backgroundColor = "green");






