
//==== Event 1: change to halloween picture on dblclick to document====


document.addEventListener('dblclick', () => {
  // console.log('I put a spell on you, and now you're mine!)
  window.open('https://cdn.pixabay.com/photo/2018/10/16/10/15/halloween-3751095_1280.jpg');
})  


//====Event 2: Randomize background color on nav ====

function getRandomColor() {
  const colors = [];
  for (let i = 0; i < 3; i++) {
    const randomColor = Math.floor(Math.random() * 256);
    colors.push(randomColor);
  }
  return `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
}

 let navBar = document.querySelector('.nav');
  navBar.addEventListener('click', (event) => {
  event.target.style.backgroundColor = getRandomColor();
  event.stopPropagation();
});  


//====Event 3: Change sign-up btns to read 'Hi Ash!'====

let btnText = document.querySelectorAll('.content-pick .btn');
btnText.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    btn.innerText = 'Hi Ash!';
  });
}); 

//====Event 4: Wheel over document changes text and pageColor-colors====

document.addEventListener('wheel', (event) => {
  
    console.log('is this working?');
    event.target.style.color = "blue";
    event.target.style.backgroundColor= "yellow";
  });  

//====Event 5: Add random color on mouse-over, return to normal on mouse-out====


let allLinks = document.querySelectorAll('.main-navigation .container nav a');
allLinks.forEach((link) => {
  link.addEventListener('mouseover', (event) => {
    event.target.style.color = `${getRandomColor()}`;
    event.target.style.fontWeight = 'bolder';
    event.preventDefault();
  });
  link.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
    event.target.style.fontWeight = 'normal';
  });
}); 

//====Event 6: Change text on selection====

let fbText = document.querySelector('.logo-heading');
fbText.addEventListener(
    "mouseover",
        event => {
            event.target.style.color = "purple";
        setTimeout(function() {
            event.target.style.color = "";
        }, 700);
    },
    false
    ); 


 //====Event 7: Add no copying event listener====

 document.addEventListener('copy',nope);

function nope(){
    alert("Swiper no swiping!!");
} 


  //====Event 8: Add picture drag to main image====

 let topPic = document.querySelector('.intro img')
console.log(topPic)

topPic.addEventListener("dragleave",dropIt)

function dropIt(event){
    alert("Snoop says, 'Drop it like it's hot!")
    event.stopPropagation();
}  

//====Event 9: Add pageColor color red to all sections====

let destination = document.querySelectorAll('.destination');

destination.forEach((redRum) => {
    return redRum.addEventListener('click', function(event) {
        event.stopPropagation();
        event.target.style.backgroundColor = 'red';
    });
   
});


//====Event 10: Change nav to green text and increase size on dbl click====

let header1 = document.querySelector('.main-navigation');


console.log(header1);
header1.addEventListener('dblclick', function(event) {
    event.stopPropagation();
    event.preventDefault();
    event.target.style.color = 'green';
    event.target.style.fontSize = '4.6rem';
   // event.target.prompt();
}); 

