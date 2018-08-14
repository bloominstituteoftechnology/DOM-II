// drag / drop
// load
// focus
// resize
// scroll
// select

const mainHeader = document.querySelector("h1");
const introP = document.querySelector(".intro, p");
const imgOne = document.querySelector(".imgOne");
const imgTwo = document.querySelector(".img-fluid ");
const imgThree = document.querySelector(".imgThree");
const headerImg = document.querySelector(".headerImg");
const body = document.querySelector("body");
const welcome = document.querySelector("intro, h2");
const destination = document.querySelector(".content-destination");
const charlie = document.querySelectorAll(".charlie");
const boring = document.querySelectorAll(".boring");
const navLink = document.querySelectorAll(".nav-link")
const allImg = document.querySelectorAll("img");

navLink.forEach((element)=>{
    element.addEventListener('click', (event)=>{
        event.preventDefault();
    })
})

mainHeader.addEventListener("click", () => {
  console.log("click occurred");
  mainHeader.classList.toggle("logo-heading-clicked");
});


allImg.forEach((element)=>{
    element.addEventListener("mouseover", () => {
        element.style.border = "2px solid black";
    });
});

allImg.forEach((element)=>{
    element.addEventListener("mouseout", () => {
        element.style.border = "0px solid black";
      });   
    });

headerImg.addEventListener("dblclick", () => {
  headerImg.src = "img/betterbus.jpg";
});

welcome.addEventListener("mousedown", () => {
  welcome.innerHTML = "You are going to die on this poorly maintained bus!";
});

welcome.addEventListener("mouseup", () => {
  welcome.innerHTML = "Hahahaha just kidding. We're totally safe :D";
});

destination.addEventListener("wheel", event => {
  charlie.forEach(element => {
    element.style.display = "flex";
  });
  boring.forEach(element => {
    element.style.display = "none";
  });
  imgThree.src = "img/dayman.png";
});

introP.addEventListener("drag", () => {
  navA.forEach(element => {
    element.style.color = "red";
  });
});

body.addEventListener("click", () => {
  console.log("body was click");
});

headerImg.addEventListener("click", event => {
  console.log("header image was clicked");
  event.stopPropagation();
});
