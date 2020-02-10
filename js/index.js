// Your code goes here
let logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mouseover", () => {
  logoHeading.classList.add("funLogo");
});
logoHeading.addEventListener("mouseleave", () => {
  logoHeading.classList.remove("funLogo");
});

let mainImg = document.querySelector(".intro img");
mainImg.addEventListener("dblclick", () => {
  mainImg.classList.toggle("funImg");
});

let funBusTitle = document.querySelector(".intro h2");
funBusTitle.addEventListener("click", () => {
  funBusTitle.classList.toggle("runawayText");
});

let btns = document.querySelectorAll("button");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", e => {
    if (e.target === btns[0]) {
      btns[0].textContent = "WE DON'T WANT YOU";
    } else if (e.target === btns[1]) {
      btns[1].textContent = "WHAT DO YOU WANT?";
    } else {
      btns[2].textContent = "I'm just kidding, come back.";
    }
  });
}
