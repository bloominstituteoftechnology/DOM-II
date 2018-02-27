const blocks = document.querySelector(".blocks");

const red = document.querySelector(".block--red");
const green = document.querySelector(".block--green");
const blue = document.querySelector(".block--blue");
const gray = document.querySelector(".block--gray");
const pink = document.querySelector(".block--pink");
const empty = document.querySelector(".empty");

red.addEventListener("mousedown", (event) => {
  // add 20px to margin-right;
  // margin-left: 20px;
  //$(this).after("<div style = 'margin-left: 20px;'></div>")
  console.log("red is pressed");
  red.style.marginLeft = "30px";
  
});


red.addEventListener("mouseup", (event) => {
  // add 20px to margin-right;
  // margin-left: 20px;
  //$(this).after("<div style = 'margin-left: 20px;'></div>")
  console.log("red is released");
  red.style.marginLeft = "10px";
});















// blocks.addEventListener("click", (event) => {
//   // console.log("it worked", event);
// 
//   if (event.target.id === "red") {
//     console.log("red");
//     empty.style.backgroundColor = "red";
//     empty.style.display = "inline-block";
//     red.style.display = "none";
// 
//     green.style.display = "inline-block";
//     blue.style.display = "inline-block";
//     gray.style.display = "inline-block";
//     pink.style.display = "inline-block";
//   }
//   if (event.target.id === "green") {
//     console.log("green");
//     empty.style.backgroundColor = "green";
//     empty.style.display = "inline-block";
//     green.style.display = "none";
// 
//     red.style.display = "inline-block";
//     blue.style.display = "inline-block";
//     gray.style.display = "inline-block";
//     pink.style.display = "inline-block";
//   }
//    if (event.target.id === "blue") {
//     console.log("blue");
//     empty.style.backgroundColor = "blue";
//     empty.style.display = "inline-block";
//     blue.style.display = "none";
// 
//     green.style.display = "inline-block";
//     red.style.display = "inline-block";
//     gray.style.display = "inline-block";
//     pink.style.display = "inline-block";
//   }
//  if (event.target.id === "gray") {
//     console.log("gray");
//     empty.style.backgroundColor = "gray";
//     empty.style.display = "inline-block";
//     gray.style.display = "none";
// 
//     green.style.display = "inline-block";
//     blue.style.display = "inline-block";
//     red.style.display = "inline-block";
//     pink.style.display = "inline-block";
//   }
//  if (event.target.id === "pink") {
//     console.log("pink");
//     empty.style.backgroundColor = "pink";
//     empty.style.display = "inline-block";
//     pink.style.display = "none";
// 
//     green.style.display = "inline-block";
//     blue.style.display = "inline-block";
//     gray.style.display = "inline-block";
//     red.style.display = "inline-block";
//   }
// 
// });



// some comment


