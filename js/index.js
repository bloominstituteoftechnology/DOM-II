// nav resize mobile //
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

const navDiv = document.getElementById('myLinks');
  window.addEventListener('resize', () => {
    if(window.innerWidth > 500) {
        navDiv.style.display = 'flex';
    } else {
      navDiv.style.display = 'none';
    }
});
//end nav resize//

//mouseenter and mouseleave//
const funImage = document.querySelector(".img-content")

funImage.addEventListener("mouseenter", () => {
  funImage.style.transform = "scale(1.2)";
  funImage.style.transition = "transform 1s";
})
funImage.addEventListener("mouseleave", () => {
  funImage.style.transform = "scale(1)";
})
//end mouseenter and mouseleave//

//click event//
document.querySelectorAll(".intro h2").forEach(el => {
    el.addEventListener("click", function() {
      el.style.color= "royalblue";
      el.style.fontWeight= "bolder";
    })
})
//end click//

//mousedown//
let button = document.querySelector(".intro h2");

button.addEventListener("mousedown", event => {
if (event.button == 0) {
    button.style.color= "red";
} else if (event.button == 1) {
    button.style.color= "green";
} else if (event.button == 2) {
    button.style.color= "purple";
}
});
//end mousedown//

//scroll event//
let bar = document.querySelector("#myLinks");

window.addEventListener("scroll", () => {
let max = document.body.scrollHeight - innerHeight;
bar.style.width = `${(pageYOffset / max) * 100}%`;
});
//end scroll//

//double click//
const changeImg = document.querySelector('.logo-heading');
changeImg.addEventListener("dblclick", () => {
  changeImg.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/cat-lambda.png";
})
