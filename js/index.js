// Your code goes here
let isOn = false;
let scrollY = 0;

let nav = document.querySelector('nav');
nav.addEventListener('mouseover', function(){
    nav.style["background-color"] = "green";
})

nav.addEventListener('click', function(){
    alert("nav-clicked");
  })

let anchors = document.querySelectorAll('a');
anchors.forEach(function(item){
    item.addEventListener('click', function(e){
        alert("Anchor");
        e.stopPropagation();
    });
})


let funBus = document.querySelector('.logo-heading');
document.addEventListener('keydown', function(e){
    if(e.keyCode == 89 ){
        funBus.style.color = "yellow";
    }

})

let container = document.querySelector('.container');

window.addEventListener('resize', function () {
  container.style['background-color'] = 'red';
});


let imgs = document.querySelectorAll('img');

for(let i = 0; i < imgs.length; i++){
    imgs[i].addEventListener('dblclick', function(){
        imgs[i].style.display = "none";
    });
}


scrollY = window.scrollY;
    
let div = document.createElement('div');
document.body.append(div);
div.id = "boxx";
div.style.padding = "10px";
div.style.color = "white";
div.style.textAlign = "center";
div.style.background = "blue"
div.innerHTML = "^";
div.style.borderRadius = '10px';
div.style.position = "fixed";
div.style.right = "100px";
div.style.bottom = " 100px";



window.addEventListener('scroll', function(){
    scrollY = window.scrollY;

    if(scrollY > 100){
        document.getElementById('boxx').style.display = "block";
    } else if (scrollY < 100) {
        document.getElementById('boxx').style.display = "none";
    }

  });


  div.addEventListener('click', function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })


let draggable = document.querySelector('.nav-container');
  draggable.addEventListener('drag', function(e){
      e.target.style.color = "white";
  });



function pause() {
document.body.classList.add('paused');
}

function play() {
document.body.classList.remove('paused');
}

window.addEventListener('blur', pause);
window.addEventListener('focus', play);

window.addEventListener("load", function() {
    console.log("All resources finished loading!");
  });


let wheel = document.querySelector('.home');

wheel.addEventListener('wheel', function(){
    wheel.style.backgroundColor = "pink";
});

const stay = document.querySelectorAll('a');
for(i = 0; i < stay.length; i++){
    stay[i].addEventListener('click', function(e){
        e.preventDefault();
    });
}

