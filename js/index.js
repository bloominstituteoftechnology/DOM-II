// Your code goes here
const funBusImg = document.querySelector('.intro img');
const adventureImg = document.querySelector(".img-content img");
const funImg = document.querySelector(".rounded");
const destinationImg = document.querySelector(".content-destination");
const footerBar = document.querySelector(".footer");
const navBar = document.querySelector(".nav");
const btnStuff = document.querySelectorAll(".btn");

funBusImg.addEventListener("mouseenter", () => {
    funBusImg.style.transform = "scale(1.2)";
    funBusImg.style.transition = "transform 0.3s"
  })
  funBusImg.addEventListener("mouseleave", () => {
    funBusImg.style.transform = "scale(1)"
  })

  adventureImg.addEventListener("mouseenter", () => {
    adventureImg.style.transform = "scale(1.2)";
    adventureImg.style.transition = "transform 0.3s"
  })
  adventureImg.addEventListener("mouseleave", () => {
    adventureImg.style.transform = "scale(1)"
  })

  funImg.addEventListener("mouseenter", () => {
    funImg.style.transform = "scale(1.2)";
    funImg.style.transition = "transform 0.3s"
  })
  funImg.addEventListener("mouseleave", () => {
    funImg.style.transform = "scale(1)"
  })

  destinationImg.addEventListener("mouseenter", () => {
    destinationImg.style.transform = "scale(1.2)";
    destinationImg.style.transition = "transform 0.3s"
  })
  destinationImg.addEventListener("mouseleave", () => {
    destinationImg.style.transform = "scale(1)"
  })

  footerBar.addEventListener("mouseenter", () => {
    footerBar.style.transform = "scale(1.2)";
    footerBar.style.transition = "transform 0.3s"
  })
  footerBar.addEventListener("mouseleave", () => {
    footerBar.style.transform = "scale(1)"
  })

  document.querySelectorAll(".btn").forEach(btnStuff => {
    btnStuff.addEventListener("click", function() {
      btnStuff.style.color= "hotpink";
    })
  })

  const body = document.querySelector('body');
    body.addEventListener("click", () => {
        body.style.backgroundColor="lightblue";
        // console.log("me last!")
})

const cardGroup = document.querySelector(".nav");
cardGroup.addEventListener('click', () => {
  cardGroup.style.backgroundColor= "olive";
//   console.log("me second!");
  event.stopPropagation();
})

const card = document.querySelector(".intro");
card.addEventListener('click', (event) => {
  card.style.backgroundColor="pink"
})
