// Your code goes here
const busImage = document.querySelector('.intro img')
  busImage.addEventListener('mouseenter',() =>{
  catImage.style.transform = "scale(1.2)"
  catImage.style.transition = "all 0,3s"
});
  busImg.addEventListener('mouseleave', (event) => {
  busImg.style.transform = "scale(1.0)";
  busImg.style.transition = "all 0.3s";
  });