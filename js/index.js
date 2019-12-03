// Your code goes here

let notificationShown = false
let dblclick = false


document.querySelector(".logo-heading").addEventListener("click", () => {
  document.querySelector(".logo-heading").style.color = "red"
});

document.querySelector(".footer p").addEventListener("copy", () => {
  alert("GET OUT OF MY SWAMP")
});

document.addEventListener("scroll", () => {
  if (notificationShown === false) {
    notificationShown = true
    alert("The fun bus wants your attention... *cwies*")
    return notificationShown
  }
});

document.querySelector(".intro img").addEventListener("touchstart", () => {
  alert("UwU that tickles OwO")
});

document.addEventListener("keydown", () => {
  document.querySelector(".intro h2").textContent = "DONT LET GO OF THE BUTTON"
  document.querySelector(".intro h2").style.color = "red"
});

document.addEventListener("keyup", () => {
  document.querySelector("body").style.backgroundColor = "red";
  alert("I WARNED YOU!")
});

document.querySelector(".intro h2").addEventListener("mouseover", () => {
  document.querySelector(".intro h2").textContent = "Fun Bus likes tickles"
});

document.querySelector(".intro h2").addEventListener("mouseout", () => {
  document.querySelector(".intro h2").textContent = "Welcome To Fun Bus!"
});

document.querySelector(".text-content h2").addEventListener("dblclick", () => {
  if (dblclick === false) {
    dblclick = true
    document.querySelector(".text-content h2").textContent = "Double click me again to change me back"
  }
  else {
    document.querySelector(".text-content h2").textContent = "Let's Go!"
  }
});


document.querySelector(".content-destination").addEventListener("click", () => {
  document.querySelector(".content-destination").style.border = "5px solid red";
})

document.querySelector(".content-destination p").addEventListener("click", () => {
  document.querySelector(".content-destination p").style.color = "blue";
  event.stopPropagation()
})
