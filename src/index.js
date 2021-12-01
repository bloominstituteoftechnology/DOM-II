import './less/index.less'

// mouseover
const menu = document.querySelector(".main-navigation");
menu.addEventListener("mouseover", (event) =>{
    menu.style.backgroundColor = 'pink';
})

//click
const introImage = document.querySelector(".intro img")
introImage.addEventListener("click", (event) =>{
    event.target.style.filter = "blur(7px)";
})

//dblclick
introImage.addEventListener("dblclick", (event) =>{
    introImage.style.filter = "blur(0px)";
})

//keydown
document.addEventListener("keydown", (event) =>{
    //console.log(event);
    if(event.key === "x"){     
        menu.style.borderColor = "red";
        }
})

//resize
const image1 = document.querySelector(".img-content img")
window.addEventListener('resize', (event) =>{
    image1.style.filter = "grayscale(100%)";    
});

//scroll
const image2 = document.querySelector('.img-fluid')
window.addEventListener('scroll', (event) =>{
    image2.style.filter = "grayscale(100%)";     
});

//mousenter
image1.addEventListener('mouseenter', (event) => { 
    image1.style.filter = "grayscale(0%)";  
  });

//mouseleave
image1.addEventListener('mouseleave', (event) => { 
    image1.style.filter = "blur(2px)";  
  });

//wheel
menu.addEventListener('wheel', (event) =>{
    console.log(event);
    menu.style.backgroundColor = 'red'; 
});

//prevent default
const links = document.querySelectorAll("a");
links.forEach (link =>{
    link.addEventListener("click", function(event){
        event.preventDefault();  // prevents default behavior
    })
})



