// Your code goes here
const navLinks = document.querySelectorAll(".nav-link");// grabs the nav links
const allH2 = document.querySelectorAll("h2");//grabs all h1, h2 etc 
const body = document .querySelector("body");//grabs the whole body
const allP = document.querySelectorAll("p");//grabs all paragraph text
const allImg = document.querySelectorAll("img");//grabs all images
const logoBox = document.querySelector(".nav-container");//grabs box logo is in 
const logo = document.querySelector(".logo-heading");//grabs logo 

for(let i = 0; i < navLinks.length; i++) {//makes navlinks turn green like a hover would
    navLinks[i].addEventListener('mouseover', () => {
        navLinks[i].style.color = "green";
    });
  
    navLinks[i].addEventListener('mouseout',() => {
        navLinks[i].style.color = "black";
    })
  }


for(let i = 0; i < navLinks.length; i++) {//makes navlinks turn red when clicked, but no default action
    navLinks[i].addEventListener('click',(event) => {
      navLinks[i].style.color = "blue";
      event.stopPropagation();
      event.preventDefault();
    });
  }


for(let i = 0; i < allH2.length; i++) {//makes "welcome to fun bus" disappear and come back
    allH2[i].addEventListener('mouseover',() => {
        allH2[i].style.opacity = "0";
    })  
    allH2[i].addEventListener('mouseout',() => {
        allH2[i].style.opacity = "1";
    })
}


document.addEventListener('wheel', () => {//changes background color on mouse wheel usage
    body.style.backgroundColor = "lightgreen";
  });

for(let i = 0; i < allP.length; i++){//changes paragraph text color on keydown  
    document.addEventListener('keydown', () => {
        allP[i].style.color = "dodgerblue";
    })
}


document.addEventListener('dblclick', () => {//makes alert window on double click
    alert("Hey, quit that, it tickles");     //also makes all h2's purple       
    for(let i = 0; i < allH2.length; i++){
    allH2[i].style.color = "purple";
    }
})


document.addEventListener('contextmenu', () => {//toggles images on/off with right click
    if (allImg[0].style.display === "none"){
        for(let i = 0; i < allImg.length; i++){
        allImg[i].style.display = "initial";
        }
    }
    else{
        for(let i = 0; i < allImg.length; i++){
        allImg[i].style.display = "none";
        }
    }
})


logo.addEventListener('mouseleave', () => {//animates the logo header
    logoBox.style.position = "relative";
    logo.style.position = "absolute";
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 400) {
            clearInterval(id);
        } else {
            pos++; 
            logo.style.left = pos + 'px'; 
        }
    }
})

allImg[0].addEventListener('mouseover', () => {//animates top img
    TweenMax.to(allImg[0], 5, {x:400});
}) 