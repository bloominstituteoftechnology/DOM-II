// Your code goes here
let logo = document.querySelector('.logo-heading');

let black = logo.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor ='gray';
    
});


let removeBlack = logo.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor ='white';
    TweenLite.from(logo, 2, {x: '-=200px', autoAlpha: 0});
});
/////////////////////

let nav= document.querySelectorAll('nav a')[0];
console.log(nav);
nav.addEventListener('keydown', (event) => {
    event.target.style.backgroundColor ='green';
});
nav.addEventListener('keyup', (event) => {
    event.target.style.backgroundColor ='white';
});

//////////////////////

let scale = 1;
let nav1 = document.querySelectorAll('nav a')[1];
nav1.addEventListener('wheel', function zoom (event) {
      event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  nav1.style.transform = `scale(${scale})`;

});

/////////////
document.addEventListener("dragstart", function(event) {
    // The dataTransfer.setData() method sets the data type and the value of the dragged data
    event.dataTransfer.setData("Text", event.target.id);
  
    // Output some text when starting to drag the p element
    document.getElementById("demo").innerHTML = "Started to drag the h element.";
  
    // Change the opacity of the draggable element
    event.target.style.opacity = "0.4";
  });
  
  // While dragging the p element, change the color of the output text
  document.addEventListener("drag", function(event) {
    document.getElementById("demo").style.color = "red";
  });
  
  // Output some text when finished dragging the p element and reset the opacity
  document.addEventListener("dragend", function(event) {
    document.getElementById("demo").innerHTML = "Finished dragging the h element.";
    event.target.style.opacity = "1";
  });
  
  
  /* ----------------- Events fired on the drop target ----------------- */
  
  // When the draggable p element enters the droptarget, change the DIVS's border style
  document.addEventListener("dragenter", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "10px dotted black";
    }
  });
  
  // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  // When the draggable p element leaves the droptarget, reset the DIVS's border style
  document.addEventListener("dragleave", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "";
    }
  });
  
  /* On drop - Prevent the browser default handling of the data (default is open as link on drop)
  Reset the color of the output text and DIV's border color
  Get the dragged data with the dataTransfer.getData() method
  The dragged data is the id of the dragged element ("drag1")
  Append the dragged element into the drop element
  */
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
      document.getElementById("demo").style.color = "";
      event.target.style.border = "";
      var data = event.dataTransfer.getData("Text");
      event.target.appendChild(document.getElementById(data));
    }
  });

//////////////////

window.addEventListener('load', (event) => {
    logo.style.fontSize = '50px';
  });

  /////////////

  let nav2= document.querySelectorAll('nav a')[2];
  nav2.addEventListener('focus', (event) => {
    event.target.style.background = 'green';    
  });
  
  nav2.addEventListener('blur', (event) => {
    event.target.style.background = '';    
  });
  nav2.addEventListener('focusin', (event) => {
    event.target.style.background = 'pink';    
  });
  
  nav2.addEventListener('focusout', (event) => {
    event.target.style.background = '';    
  });
//////////
let nav3 = document.querySelectorAll('nav a')[3];
function sayWhatSize() {
    nav3.textContent = `${window.innerHeight} = Height , ${window.innerWidth} = Width` ;
  }
window.addEventListener('resize', sayWhatSize );

//////////


window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          logo.style.backgroundColor = "yellow"
        } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
            logo.style.backgroundColor = "white"; }
});

/////////
let body = document.querySelector('body');
body.addEventListener('dblclick', function(event){
    event.target.style.backgroundColor = "black";
});

/////////////
let pDest = document.querySelector('.destination p');
console.log(pDest);
pDest.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor ='orange';
    event.stopPropagation();
});

 pDest.addEventListener('click', (event) => {
    event.target.style.backgroundColor ='white';
    
});

let divDes = document.querySelector ('.destination'); 
    divDes.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor ='yellow';
        event.stopPropagation();
    });
    divDes.addEventListener('click', (event) => {
        event.target.style.backgroundColor ='white';
        event.stopPropagation();
    });


///////////////////////
let header = document.querySelector
let navigation = document.querySelectorAll("nav a");
navigation.forEach((element)=> {
    element.addEventListener('click', function(event){
        event.preventDefault();
    })
})


/////

