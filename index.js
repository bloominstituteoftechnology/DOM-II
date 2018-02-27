const blockRed = document.getElementsByClassName("block--red")
const blockblue = document.getElementsByClassName("block--blue")
const blockgreen = document.getElementsByClassName("block--green")
const blockpink = document.getElementsByClassName("block--pink")
const blockgray = document.getElementsByClassName("block--gray")



blockRed.addEventListener("click", (event) => {
    event.color === "red"
});

blockblue.addEventListener("click", (event) => {
  event.color = "blue";
});

blockgreen.addEventListener("click", (event) => {
  event.color = "blue";
});

blockpink.addEventListener("click", (event) =>{
    event.color = "pink";
});

blockgray.addEventListener("click", (event) =>{
    event.color = "gray";
});