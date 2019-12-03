// GTFO!!
//change image size.
const keys = document.querySelector(".intro img")
keys.addEventListener("click", (event) => {
    event.target.style.transform = "scale(2)";
    event.target.style.transistion = "transform .3s"
})

//change color of h2 tags to blue.
document.querySelectorAll("h2").forEach(el => {
    el.addEventListener("click", function() {
      el.style.color= "blue";
    })
  })

//change color of p tags to purple.
  document.querySelectorAll("p").forEach(el => {
    el.addEventListener("dblclick", function() {
      el.style.color= "purple";
    })
  })
