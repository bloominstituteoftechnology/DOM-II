// Your code goes here
//************************click  */
let navList = document.querySelectorAll("nav");
let navOne = document.querySelector("nav .nav-link");

navOne.addEventListener("click", function (e) {
    //event propagation + click event
    e.stopPropagation();
    navList.forEach(function (element) {
        element.style.textDecoration = "line-through"
        element.style.backgroundColor = "#b3b3ff";
    })
})

//************************** mouseover*/
let intro = document.querySelector(".intro");
intro.addEventListener("mouseover", function () {
    intro.classList.toggle("display-class");
})

// *************************dblclick change pic after clicking on the first pic.

let listOfPic = ["img/fun-bus.jpg", "https://images.unsplash.com/photo-1543866135-aa3ccacf96ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1543854780-63b9f4909f6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1543849877-00bfa44a8af6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
]

let imgOne = document.querySelector(".intro img");
imgOne.addEventListener("dblclick", function () {
    let img = document.querySelectorAll("img");
    for (let i = 0; i < img.length; i++) {
        img[i].src = listOfPic[i];
    }
})
//************************** wheel*/
let firstP = document.querySelector(".intro h2+p");
firstP.addEventListener("wheel", function () {
    this.style.fontSize = "3rem";
    firstP.textContent = 'This example uses the addEventListener() method to attach a "wheel"event to a DIV element. Roll the mouse wheel over me - either up or down!';
})

//************************* select */
let paragrpaph = document.querySelector("h2");
paragrpaph.addEventListener("select",function(){
    alert("You just selected " + paragrpaph );
})

//************************** load */
window.addEventListener("load", function(event) {
    alert("Load event ......!");
  });

  /*************************keydown */

  let input = document.querySelector("input");
  input.addEventListener("keydown",function(){
      alert("keydown event");
  })

  //*************************resize */
  window.addEventListener("resize", myFunction);
var x = 0;
function myFunction() {
    let txt = x += 1;
    document.getElementById("demo").innerText = "The value of resizing the window " +  txt;
}

//***************************Focus */
document.getElementById("focus").addEventListener("focus", myFunction);

function myFunction() {
    document.getElementById("focus").style.backgroundColor = "red";
}

//***************************submit */
document.getElementById("myForm").addEventListener("submit", myother);

function myother() {
    alert("The form was submitted");
}
//*********************************stop propagation() */
let home = document.querySelector('.home');
let myButton = document.querySelector('.btn');
home.addEventListener("click",function(){
    console.log("home clicked");
})
myButton.addEventListener("click", function(e){
    e.stopPropagation();
    console.log("Button was clicked!");
})


//********************************prevent default */

const tags = document.querySelectorAll('a');

tags[0].addEventListener('click', function(e) { 
  // Don't do the default behavior in HTML
  e.preventDefault();
  console.log("a tag was clicked!")
});
