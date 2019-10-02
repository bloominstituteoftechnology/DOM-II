
//mouseover to change fun bus img
const bus2 = document.querySelector('.intro img' );
bus2.addEventListener('mouseover', (e) => {
    bus2.src = './img/fun-bus2.jpg';
})

//mouse wheel zoom
// function zoom(e) {
//     e.preventDefault();
//     scale += e.deltaY * -0.01;
//     //scale just so far
//     scale = Math.min(Math.max(.25, scale), 2);
//     //apply scale
//     el.style.transform = `scale(${scale})`;
// }
// let scale = 1;
// const el = document.querySelector('img-content img');
// el.onwheel = zoom;

//keydown
const keyPress = document.addEventListener('keydown',(e) => {
    alert(`You pressed the ${e.key} key`);
})

//load page
const onLoad = window.addEventListener('load', (e) => {
    alert('Do NOT double click the buttons!');
})


//focus
const navFocus = document.querySelectorAll('.nav-link');
console.log(navFocus);
navFocus[0].addEventListener('focus', (e) => {
    navFocus[0].textContent='Now What?';
})

//blur
navFocus[0].addEventListener('blur', (e) => {
navFocus[0].textContent='Home';
})

function generate() {

    var hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
    
    function populate(a) {
      for ( var i = 0; i < 6; i++ ) {
        var x = Math.round( Math.random() * 14 );
        var y = hexValues[x];
        a += y;
      }
      return a;
    }
    
    var newColor1 = populate('#')
    var newColor2 = populate('#');
    var angle = Math.round( Math.random() * 360 );
    
    var gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
    
    document.querySelector(".main-navigation").style.background = gradient;
    
  }
  
  document.onload = generate();

// const loadOpacity = document.querySelector(".main-navigation");
// loadOpacity.style.opacity = '0.8';

//Double Click
const btnDouble = document.querySelectorAll('.btn');
console.log(btnDouble)
btnDouble.forEach(e => {
    e.addEventListener('dblclick', () => {
        e.style.background='red';
        e.style.transform='scale(1.5)';
        e.textContent='Stop That!';
    })
});

const btnBlur = document.querySelectorAll('.btn');
console.log(btnBlur)
btnBlur.forEach(e => {
    e.addEventListener('click', () => {
        e.style.background='#17A2B8';
        e.style.transform='scale(1.0)';
        e.style.color='white';
        e.textContent='No More!';
    })
});

const btnover = document.querySelectorAll('.btn');
console.log(btnover)
btnover.forEach(e => {
    e.addEventListener('mouseover', () => {
        e.style.background='white';
        e.style.transform='scale(1.2)';
        e.style.color='#17A2B8';
        e.textContent='Ugh, What!?';
    })
});

const btnout = document.querySelectorAll('.btn');
console.log(btnout)
btnout.forEach(e => {
    e.addEventListener('mouseout', () => {
        e.style.background='#17A2B8';
        e.style.transform='scale(1.0)';
        e.style.color='white';
        e.textContent='Fine then...';
    })
});