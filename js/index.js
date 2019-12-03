// GTFO!!
//change image size.
const keys = document.querySelector(".intro img")
keys.addEventListener("mouseenter", (event) => {
    event.target.style.transform = "scale(2)";
    event.target.style.transistion = "transform 5s"
})
keys.addEventListener("mouseleave", () => {
    keys.style.transform = "scale(1)"
  })

//change color of h2 tags to blue.
document.querySelectorAll("h2").forEach(el => {
    el.addEventListener("click", () => {
      el.style.color= "blue";
    })
  })

// change color of p tags to purple.
  document.querySelectorAll("p").forEach(el => {
    el.addEventListener("dblclick", () => {
      el.style.color= "purple";
    })
  })

  // on keypressed, change text color to green
  const el = document.querySelector("body")
    el.addEventListener("keydown", () => {
      el.style.color= "green";
    })
//in key release, text color changes back to black
    el.addEventListener("keyup", () => {
      el.style.color= "black";
    })

    