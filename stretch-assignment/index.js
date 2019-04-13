// const myNav = document.querySelectorAll("nav a")
// myNav.forEach((nav, i)=>{
//   nav.textContent = siteContent["nav"]["nav-item-"+i]
// })

const newText = document.querySelector(".text-content p");

newText.addEventListener('click', function(event){
    newText.textContent = "new words"
})

const newColor = document.querySelector(".text-content p");
newText.addEventListener('mouseover', function(event){
    newText.style.color = "red"
})