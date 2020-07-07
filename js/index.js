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
 //`click`
 const header = document.querySelector('h1');
console.log(header)
header.addEventListener('click', (event) => {
  event.target.style.color = 'purple';    
});

 //`wheel`
 const header2 = document.querySelector('h2');
 console.log(header2)
 header2.addEventListener("wheel", myFunction);

function myFunction() {
  this.style.fontSize = "45px";
}
 //`load`
 
 //`focus`
 //`resize`
 //`scroll`
 //`select`
 //`dblclick`