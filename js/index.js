// Your code goes here

const topImg = document.querySelector('.intro img');

topImg.addEventListener('mouseenter', () => {
    topImg.style.transform ="scale(0.8)";
    topImg.style.transition = "all 0.3s"
})
topImg.addEventListener("mouseleave", () => {
    topImg.style.transform ="scale(1)";
   topImg.style.transition = "all 0.3s"
 })

 const dest = document.querySelector('.content-destination p');
 const dest2 = document.querySelector('.content-destination');
 

 dest.addEventListener('click', () => {
     dest.style.transform = "scale(1.4)";
     dest.style.color = "gold";
 })

 dest2.addEventListener('click', () => {
     dest2.style.background = "blue";
 } )



