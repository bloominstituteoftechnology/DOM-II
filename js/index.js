// Your code goes here
const preventBlog = document.querySelector('nav a:nth-child(3)');
preventBlog.addEventListener('click', function(){
    event.preventDefault();
    console.log("I stopped you, MuuaHAHAHAHAHA")
});

const funBus = document.querySelector('h1');
funBus.addEventListener('mouseover', function(){
    funBus.classList.add('tenTimes');
});

funBus.addEventListener('mouseout', function(){
    funBus.classList.remove('tenTimes');
});

const mapImg = document.querySelector('.img-content');
mapImg.addEventListener('drag', function(){
    alert("HEY, you can't drag me! How rude!");
});

const welcome = document.querySelector('.intro h2');
welcome.addEventListener('click', function(){
    event.stopPropagation();
    welcome.textContent = "You are not fun. No Fun Bus for you!"
});

const welcomeDbl = document.querySelector('.intro h2');
welcomeDbl.addEventListener('dblclick', function(){
    welcomeDbl.textContent = "Welcome to Fun Bus!";
});

const copy = document.querySelector('body');
// console.log(copy);
copy.addEventListener('copy', function(){
    event.stopPropagation();
    copy.style.background = "green";
    // console.log(event);
});

const wheel = document.querySelector('body');
wheel.addEventListener('wheel', function(){
    wheel.style.background = 'hotpink';
});

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }
  
//   function setRandomColor() {
//     $("#colorpad").css("background-color", getRandomColor());
//   }

const keyPress = document.querySelector('body');
keyPress.addEventListener('keydown', function(){
    keyPress.style.background = '#fff';
});

const chaTeCo = document.querySelector('.text-content h2');
chaTeCo.addEventListener('click', function(){
    event.stopPropagation();
    chaTeCo.style.color = 'dodgerblue';
});

const stop = document.querySelector('.content-section');
stop.addEventListener('click', function(){
    stop.style.background = '#000';
});

document.addEventListener('keydown', function(){
    console.log("Hey, you are squishing me. Take your fat finger off me!")
});

document.addEventListener('keyup', function(){
    console.log("Whew, thanks.  You nearly got me stuck.")
});
