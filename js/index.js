// Your code goes here
// MOUSEOVER & MOUSEOUT
document.querySelectorAll(".nav a").forEach(element => {
    element.addEventListener("mouseover", () => {
      element.style.color = "#17a2b8";
    });
  });
  
  document.querySelectorAll(".nav a").forEach(element => {
    element.addEventListener("mouseout", () => {
      element.style.color = "";
    });
  });

  // KEYDOWN & KEYUP

const newText = document.querySelector(".logo-heading");

window.addEventListener("keydown", () => {
  newText.textContent = "Come Join Us!";
  newText.style.color = "#c7624c";
  newText.style.fontSize = "5rem";
});

window.addEventListener("keyup", () => {
  newText.textContent = "Fun Bus";
  newText.style.color = "#212529";
  newText.style.fontSize = "4rem";
});


