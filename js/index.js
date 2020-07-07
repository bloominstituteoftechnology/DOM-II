// Your code goes here




 //`mouseover`
 const NavLink = document.querySelector("nav");
 console.log(NavLink)
 NavLink.addEventListener("mouseover", function( event ) {   
    event.target.style.color = "turquoise";
    event.preventDefault()
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
 //`click`
 const header = document.querySelector('h1');
console.log(header)
header.addEventListener('click', (event) => {
  event.target.style.color = 'purple';  
  setTimeout(function() {
    event.target.style.color = "";
  }, 1000);
});

 //`wheel`
 const header2 = document.querySelector('h2');
 console.log(header2)
 header2.addEventListener("wheel", myFunction);

function myFunction() {
  this.style.fontSize = "45px";
}
 //`load`
 window.addEventListener('load', () => {
    alert('Does this bus have a bathroom???');
  });
 //`online`
 window.addEventListener('online', () => {
    console.log("Good job on finding wifi!!");
});

 //`offline`
 window.addEventListener('offline', () => {
    alert("is this 1996 or what??");
});
 //`keydown`
 document.addEventListener("keydown", event => {
  header.style.fontSize = "9rem"
  event.stopPropagation()
  });

 //`keyup`
 document.addEventListener("keyup", event => {
    header.style.fontSize = "3rem"
    event.stopPropagation()
    });
 //`dblclick`
 NavLink.addEventListener('click', (event) => {
    event.target.style.color = 'white'; 
    event.stopPropagation   
    setTimeout(function() {
      event.target.style.color = "";
    }, 1000);
  });
