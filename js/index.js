// 10 Different Listener Events:

//1. Mouse Event
const busPic = document.querySelector(".intro")

busPic.addEventListener('mouseenter', () => {
    busPic.style.transform = "scale(1.2)";
    busPic.style.transition = "transform 0.3s"
});

busPic.addEventListener('mouseleave', () => {
    busPic.style.transform = "scale(1)"
});

//2.  Double Click Event
const changeColor =
    document.querySelector("h1");
    changeColor.addEventListener('dblclick', () => {
        h1.style.color = "blue"
});

//3.  Resize Event
const contentSectionOne = 
    document.getElementsByClassName("content-section");
    window.addEventListener("resize", (e) => {
    contentSectionOne[0].style.border = "hotpink 10px dotted";
});

//4.  Keydown Event 
const textChange =
     document.getElementsByTagName("text-content");
     document.addEventListener("keydown", (event) => {
     if (event.key === "a") {
     return;
  }
    destination[1].style.color= "purple"
    destination[1].style.fontSize = '10rem'
});


//5.  Keyup Event
const destination = 
    document.getElementsByTagName('h4');
    window.addEventListener('keyup', event => {
    if(event.code === 1){
    return;
  }
  destination[0].style.color= 'green'
  destination[0].style.fontSize = '10rem'
});

//6.  Scroll Event
const headerImg = 
    document.getElementsByTagName("img");
    window.addEventListener("scroll", () => {
    headerImg[0].style.border = "yellow solid 10px";
    });

//7.  Load Event
window.addEventListener("load", () => {
    alert("Welcome To Our Website :(");
});

//8.  Double Click Event
const changeColorTwo =
    document.getElementsByTagName("h4");
    changeColor.addEventListener('dblclick', () => {
         h4.style.color = "hotpink";
});


    

//9.  Focus Event
const aFocus = 
    document.getElementsByTagName("a");
    aFocus[1].addEventListener("focus", (event) => {
    event.target.style.color = "white";
});


//10. Drag & Drop Event



//Nest two similar events; prevent propagation

const eventOne = 
    document.querySelector('.content-section');
    eventOne.addEventListener("click", () => {
    eventOne.style.border = "blue 10px dotted";
});

const eventTwo =
    document.querySelector(".text-content");
    eventTwo.addEventListener ("click", (event) => {
    eventTwo.style.color = "orange";
    event.stopPropagation();
});


//Use preventDefault
const nav = 
    document.getElementsByClassName('.nav');
    nav.addEventListener('click', (event) => {
    event.preventDefault();
    });