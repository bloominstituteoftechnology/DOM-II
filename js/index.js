// Your code goes here


//------ 1. HEADER (NAVIGATION)- turn navigation to different colors by clicking Fun Bus------- //
const logo = document.querySelector('.logo-heading');
const navItems = document.querySelectorAll('a');

logo.addEventListener('click', function(e) {
    navItems.forEach(item => item.style.color = getColor());
});

function getColor() {
    const letters = '0123456789ABCDEF';
let color = '#';
for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;    
};

//----------------- 2. KEYDOWN ----------------------------------------------------------//

const keyPressed = document.querySelector(".fullscreen");
const container = document.querySelector(".home");

document.addEventListener("keydown", event => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  const keyName = event.key;
  container.style.opacity = 0;
  keyPressed.style.fontSize = "50px";
  keyPressed.textContent = keyName;
  setTimeout(() => {
    container.style.opacity = 1;
    keyPressed.textContent = "";
  }, 2000);
});

//-------------------------- 3. DRAG/DROP ----------------------------------//
const img1 = document.querySelector('img');
img1.addEventListener('drag', () => {
    console.log("So, do you want to get sued?")
})


//--------------------------3. KEYPRESS ------------------------------------//
window.addEventListener('keypress', () => {
    alert("YO, HANDS OFF. STOP TOUCHING STUFF!")
})
  
//----------------- 4. SCROLL ----------------------------------------------------//

  window.addEventListener("scroll", e => {
    document.body.style.opacity = "0.5";
    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 700);
  });

  //-------------- 5-6.DOUBLE CLICK ----------------------------------------//
  let letsGo = document.querySelector(".img-content img");
  letsGo.addEventListener("dblclick", (event) => {
      event.preventDefault();
      alert("YAY, FUN BUS ADVENTURE!!! YOU COMING?!");
    });

    let imgRemove = document.querySelector('.img-content img');
 

    imgRemove.addEventListener('dblclick', event)
   
    imgRemove.addEventListener('dblclick', event => {
        imgRemove.style.display = 'none'
   })

   const myButton = document.querySelectorAll('.btn');

myButton[0].addEventListener('dblclick', function(e) {  
  console.log("Sign Me UP!");
  e.target.style.color = 'teal';
});

  //-------------- 7-8-9. MOUSEOVER ------------------------------------------//

  let buttons = document.querySelectorAll(".btn");
buttons[0].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "purple";
});
buttons[1].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor ="green" ;
});
buttons[2].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "red";
});

const foot = document.querySelector('footer');

foot.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'red';
})

const para = document.querySelector('p');

para.addEventListener('mouseover', function(event) {
event.target.style.color = 'blue';
})

//------------------- 10. MOUSELEAVE - NAVIGATION BAR ---------------------------//

const headerNew = document.querySelector('.main-navigation');

headerNew.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = 'gray';
})

//----------------------------- PREVENT -------------------------------// 

