// nav resize mobile //
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

const navDiv = document.getElementById('myLinks');
  window.addEventListener('resize', () => {
    if(window.innerWidth > 500) {
        navDiv.style.display = 'flex';
    } else {
      navDiv.style.display = 'none';
    }
});
//end nav resize//

//mouseenter and mouseleave//
const funImage = document.querySelector(".img-content")

funImage.addEventListener("mouseenter", () => {
  funImage.style.transform = "scale(1.2)";
  funImage.style.transition = "transform 1s";
})
funImage.addEventListener("mouseleave", () => {
  funImage.style.transform = "scale(1)";
})
//end mouseenter and mouseleave//

//click event//
document.querySelectorAll(".intro h2").forEach(el => {
    el.addEventListener("click", function() {
      el.style.color= "royalblue";
      el.style.fontWeight= "bolder";
    })
})
//end click//

//mousedown//
let button = document.querySelector(".intro h2");

button.addEventListener("mousedown", event => {
if (event.button == 0) {
    button.style.color= "red";
} else if (event.button == 1) {
    button.style.color= "green";
} else if (event.button == 2) {
    button.style.color= "purple";
}
});
//end mousedown//

//scroll event//
let bar = document.querySelector("#myLinks");

window.addEventListener("scroll", () => {
let max = document.body.scrollHeight - innerHeight;
bar.style.width = `${(pageYOffset / max) * 100}%`;
});
//end scroll//

//double click//
const changelogo = document.querySelector('.intro img');

changelogo.addEventListener("dblclick", () => {
  changelogo.src="img/poo.png";
})

//end double click//


//click event stop prop//
const body = document.querySelector('body');

body.addEventListener('click', () => {
  body.style.backgroundColor="gray";
  console.log("Me last!")
})

const cardGroup = document.querySelector(".home");
cardGroup.addEventListener('click', (event) => {
  cardGroup.style.backgroundColor = "silver";
  event.stopPropagation();
  console.log("me second!");
  
})

const card = document.querySelector(".destination");
card.addEventListener('click', (event) => {
  card.style.backgroundColor="slategray";
  event.stopPropagation();
})
//end prop//

//wheel//
// el.addEventListener('wheel', zoom);

// let wheel = document.querySelector(".content-destination img");

// wheel.addEventListener(('wheel', zoom) => {
// let max = document.body.scrollHeight - innerHeight;
// bar.style.width = `${(pageYOffset / max) * 100}%`;
// });

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
}
  
let scale = 1;
const el = document.querySelector('.content-destination img');
el.onwheel = zoom;

//end wheel
