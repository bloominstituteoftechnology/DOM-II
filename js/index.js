// Your code goes here
const allImg = document.querySelectorAll('img')
//console.log(allImg)
allImg.forEach(item => {
    item.addEventListener('mouseover', event => {
      event.target.style.border = "solid black"
      setTimeout(function() {
        event.target.style.border = "";
      }, 1000);
    })

  })

  const NavLink = document.querySelector("nav");
 console.log(NavLink)
 NavLink.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "Red";

    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

  