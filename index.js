//const red = document.getElementsByClassName('block--red');
/* const blue = document.getElementsByClassName('block--blue');
const green = document.getElementsByClassName('block--green');
const pink = document.getElementsByClassName('block--pink');
const gray = document.getElementsByClassName('block--gray');*/
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const pink = document.getElementById("pink");
const gray = document.getElementById("gray");
//red.onclick = function(){myScript};
/*red.addEventListener("click", (event) => {
    console.log('You just clicked a red box for no reason.');
    //event.id = 'box2';  
    red.classList.add('clicked');
    }
);*/
red.addEventListener("click", (event) => {
  console.log('You just clicked a red box for no reason.');
  //event.id = 'box2';  
  red.id = 'clicked';
  blue.id = '';
  green.id = '';
  pink.id = '';
  gray.id = '';
}
);
pink.addEventListener("click", (event) => {
  console.log('You just clicked a pink box for no reason.');
  //event.id = 'box2';  
  pink.id = 'clicked';
  blue.id = '';
  green.id = '';
  red.id = '';
  gray.id = '';
}
);
blue.addEventListener("click", (event) => {
  console.log('You just clicked a pink box for no reason.');
  //event.id = 'box2';  
  blue.id = 'clicked';
  red.id = '';
  green.id = '';
  pink.id = '';
  gray.id = '';
}
);
green.addEventListener("click", (event) => {
  console.log('You just clicked a pink box for no reason.');
  //event.id = 'box2';  
  green.id = 'clicked';
  blue.id = '';
  pink.id = '';
  red.id = '';
  gray.id = '';
}
);
gray.addEventListener("click", (event) => {
  console.log('You just clicked a pink box for no reason.');
  //event.id = 'box2';  
  gray.id = 'clicked';
  blue.id = '';
  green.id = '';
  pink.id = '';
  red.id = '';
}
);
//document.onclick