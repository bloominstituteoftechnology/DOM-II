// Your code goes here
//SAVED AND CREATED Separate branch!

//mouseover #1
const $mainNav = document.querySelector('.nav');
$mainNav.addEventListener("mouseover", event =>{
    event.target.style.color = "white";
    event.target.style.backgroundColor = "skyblue";

    setTimeout(() => {
        event.target.style.color ="";
        event.target.style.backgroundColor = "";
    },500);
},false);


//wheel #2
const $pageZoom = document.querySelector('.img-content');
$pageZoom.addEventListener('wheel', event =>{
    this.style.fontSize = "35px";
})

//KeyDown #3
const $backgroundRed = document.querySelector('html');
$backgroundRed.addEventListener("keydown",event => {
    event.target.style.background = "skyblue";
        setTimeout(function() {
    event.target.style.background = "";
    }, 500);
},false);


//Double Click #4
const $intro = document.querySelector('footer');

$intro.addEventListener('dblclick',(event) =>{
    event.target.style.backgroundColor = "skyblue";
    event.target.style.color = "white";
    setTimeout(() =>{
        event.target.style.backgroundColor = "";
        event.target.style.color ="";
    },3000);
});

//Click Event #5

const $headerImg = document.querySelector('.intro img');
$headerImg.addEventListener('click', event =>{
    $headerImg.src = "img/Bluebus.jpg";
    event.stopPropagation();
    setTimeout(() => {
        $headerImg.src = "img/fun-bus.jpg";
    },3000);
});

// const $onclickAlert = document.getElementsByTagName('body');
// $onclickAlert.addEventListener('click', event =>{
//     alert("Welcome to FunBus");
// });

//onLoad #6
window.onload =() =>{
    setTimeout(() =>{
        alert('Welcome to FunBus, Enjoy your stay!');
    },3000); 
};

//Mouse Enter #7 Mouse Leave #8
const $smallImg = document.querySelector("header img");
  $smallImg.addEventListener("mouseenter", () => {
    $smallImg.style.transform = "scale(1)";
    $smallImg.style.transition = "all 0.3s";
  });
  
  
  $smallImg.addEventListener("mouseleave", () => {
    $smallImg.style.transform = "scale(.8)";
    $smallImg.style.transition = "all 0.3s";
  });
  
//Scroll #9

const $colorChangeScroll = document.querySelector('.home', 'nav');
  window.addEventListener("scroll", () => {
    $colorChangeScroll.style.backgroundImage = "linear-gradient(skyblue, skyblue)";
  });

//Resize #10

const $resizeSectionImg = document.querySelector("section img");
/*window?*/
resizeSectionImg.addEventListener('resize', ()=>{
    $resizeSectionImg.src = "img/adventure.jpg";
    $resizeSectionImg.src = "img/fun.jpg";

})

//will not work. 
// Focus
// const $focusContent = document.querySelector('btn');
// $focusContent.addEventListener('focus', (event) =>{
//     event.target.style.backgroundColor = "pink";
// })





  
 
  
  
  
  
  