// Your code goes here


// mouseenter
// mouseout
// dragleave
// drag
// dblclick
// click
// copy
// auxclick
// resize - NOT YET
// keydown
// scroll


const d = document

// ******************
// NAV BAR
// ******************
const header = d.getElementsByClassName("main-navigation")[0];
const nav = d.getElementsByClassName("nav")[0]
console.log(nav);
console.log(nav.children.length);

for (let i=0; i<nav.children.length; i++){

  nav.children[i].addEventListener ('mouseenter', (event) => {
    event.preventDefault()
    event.target.style = "visibility:hidden;"
  })

nav.children[i].addEventListener ('mouseout', (event) => {
  event.target.style = "visibility:visisble;"
})

}




// ******************
// HEADER IMAGE
// ******************

const intro_img = d.getElementsByClassName("intro-img")[0]

intro_img.addEventListener ('drag', (event) => {
  event.target.style= "transform: scale(2)";
})

intro_img.addEventListener ('dragleave', (event) => {
  event.target.style= "transform: scale(1)";
})




// ******************
// IMAGES
// ******************
const img_stack = d.getElementsByTagName('img')


for (let i=0; i<img_stack.length; i++){
  img_stack[i].addEventListener ('click', (event) => {
    event.target.style = "transform: scale(1.5)"
  })
  for (let i=0; i<img_stack.length; i++){
    img_stack[i].addEventListener ('dblclick', (event) => {
      event.target.style = "transform: scale(1)"
    })
  }
}




// ******************
// TITLES
// ******************
const h2s = d.getElementsByTagName('h2')
const h4s = d.getElementsByTagName('h4')

for (let i=0; i<h2s.length; i++){
  h2s[i].addEventListener ('copy', (event) => {
    event.target.style = "transform: scale(1.5)"
  })
}

for (let i=0; i<h4s.length; i++){
  h4s[i].addEventListener ('auxclick', (event) => {
    event.target.style = "transform: scale(1.5)"
  })
}

// ******************
// PROPAGATION
// ******************
const buttons = d.getElementsByClassName('btn');
const destinations = d.getElementsByClassName('destination');
for (let i=0; i<buttons.length; i++){
  buttons[i].addEventListener ('click', (event) => {
    event.stopPropagation()
    buttons[i].innerHTML = "You sure?"

    for (let i=0; i<destinations.length; i++){
      destinations[i].addEventListener ('click', () =>{

        destinations[i].style.color = 'green';
      })
    }

  }
  )
}




// ******************
// WINDOW & DOCUMENT
// ******************

function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
}
return color;
}



window.addEventListener('resize', () => {
  console.log('resizing');
});


window.addEventListener('scroll', () => {
header.style.backgroundColor = getRandomColor()
});

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  alert('keydown event\n\n' + 'key: ' + keyName);
});
