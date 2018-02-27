// const blockRed = document.getElementsByClassName("block--red");
// const blockblue = document.getElementsByClassName("block--blue");
// const blockgreen = document.getElementsByClassName("block--green");
// const blockpink = document.getElementsByClassName("block--pink");
// const blockgray = document.getElementsByClassName("block--gray");




// document.querySelector(".blocks").addEventListener("click", (event) => {
//     document.querySelector(".blocks").removeChild(event.target);
//     document.querySelector(".blocks").prepend(event.target);   
// });

const parent = document.querySelector(".blocks");


parent.addEventListener("click", (event) => {
parent.removeChild(event.target);
parent.prepend(event.target); 
});

// theParent = document.getElementById("theParent");
// theKid = document.createElement("div");
// theKid.innerHTML = 'Are we there yet?';

// // append theKid to the end of theParent
// theParent.appendChild(theKid);

// // prepend theKid to the beginning of theParent
// theParent.insertBefore(theKid, theParent.firstChild);



// blockblue.addEventListener("click", (event) => {
//   event.color = "blue";
// });

// blockgreen.addEventListener("click", () => {
//   parent.prepend(blockgreen);
// });

// blockpink.addEventListener("click", (event) =>{
//     event.color = "pink";
// });

// blockgray.addEventListener("click", (event) =>{
//     event.color = "gray";
// });