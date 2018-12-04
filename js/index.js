// Your code goes here

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