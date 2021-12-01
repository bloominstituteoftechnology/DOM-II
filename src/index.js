import './less/index.less'

// Your code goes here!

//Mouseover
const introh2 = document.querySelector('.intro h2');
console.log(introh2);

introh2.addEventListener("mouseenter", function(event){
    event.target.style.color = 'yellow';
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);

//Double Click
const midImg = document.querySelector('.img-content img');
console.log(midImg);

midImg.addEventListener('dblclick', function (e) {
  midImg.style.opacity = "0.5";
  midImg.style.border = "10px dotted black";
  setTimeout(function() {
    midImg.style.opacity = "";
    midImg.style.border = "";
  }, 500);
}, false);