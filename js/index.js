// Your code goes here

const logo = document.querySelector('.logo-heading');
const mainNav = document.querySelector('.main-navigation');
const navBar = document.querySelectorAll('.nav-link');
const footer = document.querySelector('.footer');
const footer1 = document.querySelector(".footer p");
const footBack= document.querySelectorAll("footer p");
const imgs = document.querySelectorAll("img");
const body = document.querySelector("body");
const btns = document.querySelectorAll('.btn');
const btn = document.querySelector(".btn");
const nav = document.querySelectorAll('a');
const para = document.querySelectorAll('p');
const h1 = document.querySelector('h1');
const h2 = document.querySelectorAll('h2');
const h4 = document.querySelectorAll('h4');




// nav 

window.addEventListener('scroll', function(e) {
    mainNav.style.backgroundColor = '';

    setTimeout(function(e) {
        mainNav.style.backgroundColor = '#C8C9D6';
    }, 1000);
});

mainNav.addEventListener('mousedown', function(e){
    mainNav.style.backgroundColor = '';
    logo.style.fontSize = '3em';
    navBar.forEach(navBar => navBar.style.fontSize = '2em');;
});

mainNav.addEventListener('mouseup', function(e){
    mainNav.style.backgroundColor = '';
    logo.style.fontSize = '4em';
    navBar.forEach(navBar => navBar.style.fontSize = '');;

});
// logo click
logo.addEventListener("click", e => {
    document.querySelector("html").style.background = "#BCBEE7";
    document.querySelector("header").style.background = "";
    document.querySelector("html").style.color = "#E7995B";
    document.querySelector("html").style.transitionDuration = "1s";
    document.querySelector("header").style.transitionDuration = "1s";
  

  
    logo.textContent = "Fun Bus!";
    
  
    for (i = 0; i < nav.length; i++) {
      nav[i].style.color = "white";
    }
  //footer changes

    footer.querySelector("p").style.color = "black";
  })
  footer.addEventListener('mouseover', function(e){
    console.log(`WOOOHOOO!!`); 
    e.stopPropagation();
   });

   footer.addEventListener('wheel', function(e){
    console.log(`OOPS I DID IT AGAIN :) ${e}`); 
    e.stopPropagation();
   });
  
//copy
  window.addEventListener('copy', function() {
    alert("YAY YOU JUST COPIED!!")
})

//paste
addEventListener("paste", e => {
  window.alert("PASTE was a sucsess!");
});
// cut 
ddEventListener("cut", e => {
  window.alert("DONE!");
});
