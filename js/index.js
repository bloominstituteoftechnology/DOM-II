let highlight = document.querySelector('destination');
highlight.addEventListener('hover', (event) => {event.target.style.backgroundColor = "green"; })

// 1.turns section lightblue when hovered.

let button = document.querySelector('.content-section');
 button.addEventListener('mouseenter', (event) => {
     event.target.style.backgroundColor = 'lightBlue'; });


// 2.turns entire page green when hovered!

     const body = document.querySelector('body')
     body.addEventListener("mouseenter", (event) => {
         event.target.style.backgroundColor = "green"
 })

 // 3. double click to spin the image.

 const busPicture = document.querySelectorAll('img')[2]
 busPicture.addEventListener("mouseover", event =>{
     event.target.style.transform = "skewy(360deg)";
     event.target.style.transition = "transform 0.5s";
 })


// 4.password blur/hide feature i added in

const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'green';
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


//8. change background color on click.
document.addEventListener("click", function(){
    document.body.style.backgroundColor = "lavender";
  });

//9. zoom with mouse wheel
  function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;


    scale = Math.min(Math.max(.125, scale), 4);


    busImg.style.transform = `scale(${scale})`;
  }

  let scale = 1;
  const busImg = document.querySelector('.intro img');
  busImg.onwheel = zoom;

//keydown

 const keyPusher = document.querySelector('body')
    keyPusher.addEventListener('keydown', function(event) {
    event.target.style.color = 'orange'
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);