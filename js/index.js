// Your code goes here
function taskLog(taskID, input, color = "#007AAF") {
  console.log(`%cTask ${taskID}`, `color: ${color}`);
  console.log(input);
}
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => link.classList.add("zoom"));
  link.addEventListener("mouseout", () => link.classList.remove("zoom"));
});

const images = document.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("click", () => {
      if(document.fullscreenElement){
          document.exitFullscreen();
      } else {
          image.requestFullscreen();
      }
  });
});
