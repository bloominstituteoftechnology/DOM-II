// Your code goes here

//1. turns logo yellow on hover
const logoHead = document.querySelector(".logo-heading");

logoHead.addEventListener("mouseover", function() {
    logoHead.style.color = "yellow";
});

//2. turns logo black after hover
logoHead.addEventListener("mouseout", function() {
  logoHead.style.color = "black";
});


//3. fixes nav to top of window when scrolling
const body = document.querySelector("body");
const nav = document.querySelector(".main-navigation");
body.addEventListener("keydown", function() {
    nav.style.position = "absolute";
});


//4. changes background color to grey on click
const backgroundColor = document.querySelector('body');
backgroundColor.addEventListener('click', (e) => {
  backgroundColor.style.background ="grey";
   console.log(`event bubbled up again`);
 })

 //5. returns background to white 
 backgroundColor.addEventListener('dblclick', (e) => {
   backgroundColor.style.background ="White";
    console.log(`event bubbled up again`);
  })


//6. - Image scale
const imgScale = document.querySelector(".content-destination");

imgScale.addEventListener("mouseover", e => {
  console.log(`,mouseover happened!!`);
imgScale.style.transfrom = 'scale(1.1)';
imgScale.style.transition = 'transform 0.5s';
});

//7. right click secret message

    window.addEventListener("contextmenu", function(x) {
    alert("boo!");
    });


  
//8. zoom text-content

function zoom(event) {
    event.preventDefault();
    
    scale += event.deltaY * -0.01;
    
    scale = Math.min(Math.max(.125, scale), 4);
    
    el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelectorAll(".text-content");
el.onwheel = zoom;

//use .forEach push click method to each class
    

 
//9. pop up when page loads
window.addEventListener("load", function() {
    window.prompt("Have you ridden a bus before?");
});


//10. zooms adventure awaits and let's go img

let imgZoom = document.querySelectorAll(".img-content img");

imgZoom.forEach(item => {
    item.addEventListener("dblclick", e => {
        item.style.transform = 'scale(1.3)';
        item.style.transition = ' transform 0.5s';
    })
})

let imgZoomOut = document.querySelectorAll(".img-content img");

imgZoomOut.forEach(item => {
    item.addEventListener("click", e => {
        item.style.transform = 'scale(1)';
        item.style.transition = ' transform 0.5s';
    })
})