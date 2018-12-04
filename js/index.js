// Your code goes here

// Button Animations

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

  // Header Color Change

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