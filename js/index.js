// Your code goes here

// Nav Bar

const navBtn = document.querySelectorAll('a');

navBtn[1].addEventListener("click", function(event) {
  event.preventDefault();
});

// Scroll and Wheel for container

const mainPage = document.querySelectorAll(".content-section");
mainPage[0].addEventListener("wheel", function(event) {
    event.target.style.background = "pink";
});
mainPage[1].addEventListener("wheel", function(event) {
    event.target.style.background = "pink";
});

const mainParas = document.querySelectorAll(".text-content");
mainParas[0].addEventListener("wheel", function(event){
    event.stopPropagation();
    event.target.style.background = "lightblue";
});


// Button Events

buttonAnim = Array.from(document.querySelectorAll(".btn"));

buttonAnim[0].addEventListener("mouseover", function(event){
    event.target.textContent = "Click For Fun!";
    event.target.style.textAlign = "center";  
  });

buttonAnim[0].addEventListener("mouseout", function(event){
    event.target.textContent = "Sign Me Up!";
  })

buttonAnim[1].addEventListener("mouseover", function(event){
    event.target.textContent = "Click For Fun!";
    event.target.style.textAlign = "center";  
  });

buttonAnim[1].addEventListener("mouseout", function(event){
    event.target.textContent = "Sign Me Up!";
  })

buttonAnim[2].addEventListener("mouseover", function(event){
    event.target.textContent = "Click For Fun!";
    event.target.style.textAlign = "center";  
  });

buttonAnim[2].addEventListener("mouseout", function(event){
    event.target.textContent = "Sign Me Up!";
  })

  // H2 Color Change

const headerTwos = Array.from(document.querySelectorAll("h2"));
headerTwos[0].addEventListener("click", function(event){
    event.target.style.color = "red";
});
headerTwos[1].addEventListener("click", function(event){
    event.target.style.color = "red";
});
headerTwos[2].addEventListener("click", function(event){
    event.target.style.color = "red";
});
headerTwos[3].addEventListener("click", function(event){
    event.target.style.color = "red";
});

headerTwos[0].addEventListener("dblclick", function(event){
    event.target.style.color = "black";
});
headerTwos[1].addEventListener("dblclick", function(event){
    event.target.style.color = "black";
});
headerTwos[2].addEventListener("dblclick", function(event){
    event.target.style.color = "black";
});
headerTwos[3].addEventListener("dblclick", function(event){
    event.target.style.color = "black";
});

// Footer Input Form

const inputForm = document.createElement('form');
inputForm.textContent = "Enter Your Email For Travel Updates!";
inputForm.style.textAlign = "center";
inputForm.style.fontSize = "1.4rem";
inputForm.style.paddingBottom = "1.2rem";

const footerForm = document.querySelector("footer");
footerForm.appendChild(inputForm);

const inputData = document.createElement('input');
inputForm.appendChild(inputData);
inputData.style.marginLeft = "1rem";

inputForm.addEventListener("focus", function(event) {
  event.target.style.background = "lightblue";   
}, true);

inputForm.addEventListener("blur", function(event) {
  event.target.style.background = "white";    
}, true);

inputData.addEventListener("mousedown", function(event) {
    event.target.textContent = "Press enter to submit";
})

// const formButton = document.createElement('button');
// inputForm.appendChild(formButton);
// formButton.style.marginLeft = "1rem";
// formButton.style.padding = "1.2rem 3rem .8rem 3rem";
// formButton.style.innerHTML = "Click to Submit";