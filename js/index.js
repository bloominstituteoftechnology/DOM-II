// Your code goes here

let highlight = document.querySelector('intro');
highlight.addEventListener('hover', (event) => {
  event.target.style.backgroundColor = "pink"; })



// 1.turns section lightblue colored when moused upon.

let button = document.querySelector('.content-section');
 button.addEventListener('mouseenter', (event) => {
     event.target.style.backgroundColor = 'lightBlue'; });


// 2.turns entirety of page pink colored when moused over!

     const body = document.querySelector('body')
     body.addEventListener("mouseenter", (event) => {
         event.target.style.backgroundColor = "pink"
 })

 // 3. double click to spin the image.

 const busPicture = document.querySelectorAll('img')[2]
 busPicture.addEventListener("mouseover", event =>{
     event.target.style.transform = "rotate(0.5turn);";
     event.target.style.transition = "transform 0.5s";
 })


// 4.password blur/hide feature i added in

const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'gray';
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';
});

// 5.for the button at the bottom that i added in. creates an alert

const submitButton = document.querySelector('button');
submitButton.addEventListener('click', (event) =>{
  alert("wooooah, mondo thanks bromosapien!!")
})

// 6. for the nav info, changing the colors of the links.

const navigation = document.querySelector('.nav')
 navigation.addEventListener('mouseover', (event) => {
     if(event.target.style.color === "green"){
         event.target.style.color = "black"
     }else {
         event.target.style.color = "green";
     }
 })

// 7.adds "welcome to fun bus" text

document.addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Welcome To Fun Bus!";
  });


//9. change background color on click.
document.addEventListener("click", function(){
    document.body.style.backgroundColor = "lavender";
  });