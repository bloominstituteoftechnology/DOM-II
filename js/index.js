// Your code goes here

const busImage = document.querySelector(".intro img")
busImage.addEventListener("mouseenter",() =>{
  busImage.style.transform = "scale(1.2)";
  busImage.style.transition = "all 0,30s";
});
const busImg = document.querySelector(".intro img") 
busImage.addEventListener('mouseleave', () => {
  busImg.style.transform = "scale(0.9)";
  busImg.style.transition = "all 0.3s";
});

document.querySelectorAll('h2').forEach(el => {
    el.addEventListener('click',function(){
        el.style.color = "red";
    })
})
 

const destinationImg = document.querySelector(".content-destination img")
destinationImg.addEventListener("mouseenter",() =>{
    destinationImg.style.transform = "scale(1.2)";
    destinationImg.transition = "all 0,30s";
});
const destination = document.querySelector(".content-destination img") 
destination.addEventListener('mouseleave', () => {
    destination.style.transform = "scale(0.9)";
    destination.style.transition = "all 0.3s";
});









document.querySelectorAll(".img-content img").forEach(images => {
    images.addEventListener("mouseenter",function(){
    Image.style.transform = "scale(1.2)";
    Image.style.transition = "all 0,30s";

    })
})

