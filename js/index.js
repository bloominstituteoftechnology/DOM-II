// Your code goes here
let highlight = document.querySelector('destination');
highlight.addEventListener('hover', (event) => {event.target.style.backgroundColor = "green"; })



let button = document.querySelector('.content-section');
 button.addEventListener('mouseenter', (event) => {
     event.target.style.backgroundColor = 'lightBlue'; });




     const body = document.querySelector('body')
     body.addEventListener("mouseenter", (event) => {
         event.target.style.backgroundColor = "green"
 })



 const busPicture = document.querySelectorAll('img')[2]
 busPicture.addEventListener("mouseover", event =>{
     event.target.style.transform = "skewy(360deg)";
     event.target.style.transition = "transform 0.5s";
 })



const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'green';
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';
});



const submitButton = document.querySelector('button');
submitButton.addEventListener('click', (event) =>{
  alert("wooooah, mondo thanks bromosapien!!")
})



const navigation = document.querySelector('.nav')
 navigation.addEventListener('mouseover', (event) => {
     if(event.target.style.color === "green"){
         event.target.style.color = "black"
     }else {
         event.target.style.color = "green";
     }
 })



document.addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Welcome To Fun Bus!";
  });



document.addEventListener("click", function(){
    document.body.style.backgroundColor = "lavender";
  });


  function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;


    scale = Math.min(Math.max(.125, scale), 4);


    busImg.style.transform = `scale(${scale})`;
  }

  let scale = 1;
  const busImg = document.querySelector('.intro img');
  busImg.onwheel = zoom;



 const keyPusher = document.querySelector('body')
    keyPusher.addEventListener('keydown', function(event) {
    event.target.style.color = 'orange'
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);