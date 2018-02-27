// document.querySelector(".blocks").addEventListener("click", (event) => {
//     document.querySelector(".blocks").removeChild(event.target);
//     document.querySelector(".blocks").prepend(event.target);   
// });

const parent = document.querySelector(".blocks");


parent.addEventListener("click", (event) => {
parent.removeChild(event.target);
parent.prepend(event.target); 
});
