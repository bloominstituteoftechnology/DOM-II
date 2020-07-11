// Your code goes here
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = Math.ceil(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.body.style.color = "#" + randomColor2;
    // color.innerHTML = "#" + randomColor;
  }

  
let title1 = document.querySelector('.logo-heading')
title1.addEventListener("mouseenter", event => {
    event.target.textContent = "Bus Fun!!!!!";
    title1.style.color = setBg();
    title1.style.backgroundColor = setBg();
  });
  title1.addEventListener("mouseleave", event => {
    event.target.style.color = "black";
    event.target.textContent = "Fun Bus";
    title1.style.backgroundColor = "white"
    title1.style.color = "black"
  });


let allStuff = document.querySelector('p')
allStuff.addEventListener("mouseenter", event => {
    allStuff.style.color = setBg();
  });


//
console.log("mouse enter event");
const busImage = document.querySelector("img")
busImage.addEventListener('mouseenter', () => {
    busImage.style.transform = "scale(1.05)"

})
//
console.log("mouse leave event")
busImage.addEventListener('mouseleave', () => {
    busImage.style.transform = "scale(1)"
  
})


//
const mapPic = document.querySelector('.img-content img')
mapPic.addEventListener('dblclick', () => {
    mapPic.src = "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1608&q=80"
})

//
mapPic.addEventListener('click', () => {
    mapPic.src = 'https://images.unsplash.com/photo-1536685712909-6ac3633e0812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80'
})
//

let textColor = document.querySelector('html')
textColor.addEventListener('dblclick', (event) => {
    event.target.style.color = "green"
})
//
textColor.addEventListener('click', (event) => {
    event.target.style.color = "black"
})
//
const mouseOver = document.querySelector('footer')
mouseOver.addEventListener('mouseenter', () => {
   mouseOver.stlye.color = "white"
})
//
window.addEventListener("load", event => {
    window.alert(
      "WELCOMEEEEEE BACKKK!!! PLEASE CLICK,DOUBLE-CLICK, TRIPLE-CLICK, QUADRUPLE-CLICK, OH AND SCROLL "
    );
  });
  //

let buttons = document.querySelector(".btn")
buttons.addEventListener("click", () => {
    alert("STOPP PRESSING BUTTONS!!!")
})
let buttons1 = document.querySelector(".btn1")
buttons1.addEventListener("click", () => {
    alert("YOU REALLY DON'T LISTEN!!! I DARE YOU RO PRESS THE NEXT BUTTON")
})










//
  let footerParagraph = document.querySelector("footer p");

footerParagraph.addEventListener("mouseenter", event => {
  event.target.textContent = "2020 Bus Fun Copyright";
  event.target.style.color = "crimson";
});
footerParagraph.addEventListener("mouseleave", event => {
  event.target.style.color = "black";
  event.target.textContent = "Copyright Fun Bus 2020";

});
//
