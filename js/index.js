// Your code goes here




 //`mouseover`
 const NavLink = document.querySelector("nav");
 console.log(NavLink)
 NavLink.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "turquoise";
  
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
 //`keydown`
 //`wheel`
 //`load`
 //`focus`
 //`resize`
 //`scroll`
 //`select`
 //`dblclick`