// Your code goes here
//REFERENCES
const parentContainer = document.querySelector('.home');
const logoHeading = document.querySelector('.logo-heading');
const mainImg = document.querySelector('.main-img');
const adventureImg = document.querySelector('.adventure');
const funImg = document.querySelector('.fun-img');
const destinationImg = document.querySelector('.destination-img');
const welcome = document.querySelector('.welcome');
const adventureText = document.querySelector('.adventure-text');
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('nav');
const homeTag = document.querySelector('#home-tag');
const letsGo = document.querySelector('.letsgo');
const pickDestination = document.querySelector('.pick-destination');

homeTag.addEventListener('click', (event) => { 
  event.preventDefault();
});

// NAV ANIMATION
hamburger.addEventListener('click', () => { 
  TweenMax.to("nav", 2, {x:-20, opacity: 1});
});

//MAIN IMAGE ANIMATION ON CLICK
logoHeading.addEventListener('click', () => { 
  
  console.log("Click occurred!");
  mainImg.classList.toggle('bounce-this');
});

//DOUBLE CLICK ADVENTURE IMAGE
// Step 2: Add an Event Listener to the reference
adventureImg.addEventListener('dblclick', () => { 
// Step 3: Do something with the event
  
  console.log("Double Click occurred!");
  adventureImg.classList.toggle('bounce-this');
});


//MOUSE OVER ADVENTURE TEXT
adventureText.addEventListener('mouseover', () => { 
  
  console.log("Mouse Over Occurred!");
  adventureText.classList.toggle('grow');
});


//MOUSE LEAVE ADVENTURE TEXT
adventureText.addEventListener('mouseleave', () => { 
  console.log("Mouse Leave Occurred!");
  adventureText.classList.toggle('shrink');
});

// MOUSE ENTER IMAGE
destinationImg.addEventListener('mouseenter', () => { 
  console.log("Mouse Enter Occurred!");
  destinationImg.classList.toggle('grow');
});

//DRAG LEAVE
destinationImg.addEventListener('dragleave', () => { 
  console.log("Drag Leave Occurred!");
  destinationImg.classList.toggle('hide');
});

//MOUSE UP
funImg.addEventListener('mouseup', () => { 
  console.log("Mouse Up Occurred!");
  funImg.classList.toggle('border-color2');
});

//MOUSE DOWN
letsGo.addEventListener('mousedown', () => { 
  console.log("Mouse Down Occurred!");
  letsGo.classList.toggle('border-color');
});

//MOUSE MOVE
pickDestination.addEventListener('mousemove', () => { 
  console.log("Mouse Move Occurred!");
  pickDestination.classList.toggle('font-color');
});

//STOP PROPAGATION ON WELCOME TEXT
welcome.addEventListener('click', (event) => { 
  console.log('welcome was clicked!');
  welcome.classList.toggle('grow');
  event.stopPropagation();
});

parentContainer.addEventListener('click', (event) => { 
  
  console.log('parent container was clicked!');
  // event.target.style.color = "red";
});



//POP UP FORM
// Validating Empty Field
function check_empty() {
  if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
  alert("Fill In All Fields!");
  } else {
  document.getElementById('form').submit();
  alert("Form Submitted Successfully...");
  }
  }
  //Function To Display Popup
  function div_show() {
  document.getElementById('popupForm').style.display = "block";
  event.stopPropagation();

  }
  //Function to Hide Popup
  function div_hide(){
  document.getElementById('popupForm').style.display = "none";
  event.stopPropagation();

  }
