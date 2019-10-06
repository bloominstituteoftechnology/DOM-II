// Your code goes here
//SAVED AND CREATED Separate branch!

//mouseover
const $mainNav = document.querySelector('.nav');
$mainNav.addEventListener("mouseover", event =>{
    event.target.style.color = "white";
    event.target.style.backgroundColor = "skyblue";

    setTimeout(() => {
        event.target.style.color ="";
        event.target.style.backgroundColor = "";
    },500);
},false);


//wheel
const $pageZoom = document.querySelector('.img-content');
$pageZoom.addEventListener('wheel', event =>{
    this.style.fontSize = "35px";
})

// //KeyDown 
const $backgroundRed = document.querySelector('html');
$backgroundRed.addEventListener("keydown",event => {
    event.target.style.background = "skyblue";
        setTimeout(function() {
    event.target.style.background = "";
    }, 500);
},false);


//Double Click
const $intro = document.querySelector('footer');

$intro.addEventListener('dblclick',(event) =>{
    event.target.style.backgroundColor = "skyblue";
    event.target.style.color = "white";
    setTimeout(() =>{
        event.target.style.backgroundColor = "";
        event.target.style.color ="";
    },3000);
});

// //onClick
// const $onclickAlert = document.getElementsByTagName('body');
// $onclickAlert.addEventListener('click', event =>{
//     alert("Welcome to FunBus");
// });

// Focus
// const $focusContent = document.querySelector('btn');
// $focusContent.addEventListener('focus', (event) =>{
//     event.target.style.backgroundColor = "pink";
// })


//onLoad
window.onload =() =>{
    setTimeout(() =>{
        alert('Welcome to FunBus, Enjoy your stay!');
    },3000); 
};


