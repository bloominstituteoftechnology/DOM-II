// Your code goes here


//even listener to see all instances of html clicks and the preventDefault feature for the home page
 document.addEventListener('click', (event) => {
  event.preventDefault();
	console.log(event.target)
 }, false);


const colors = ['tomato', 'orange', 'lavender', 'purple', 'black', '#FFEBCD', '#17A2B8', 'red', 'silver', 'pink', 'blue']
let h1Color = 0
const navH1 = document.querySelector('.nav-container h1')
// const navH1 = document.querySelectorAll('.nav-container h1')
  navH1.addEventListener('mouseup', () => {
  navH1.style.color = colors[h1Color]
  event.preventDefault();
})
navH1.addEventListener('mousedown', () => {
  navH1.style.color = 'black'
  h1Color = h1Color === colors.length - 1 ? 0 : h1Color + 1
   event.preventDefault();
})

 const logoExpansion = document.querySelector('.logo-heading')

// mouseover event
  logoExpansion.addEventListener('mouseover', (event) => {
   event.target.classList.toggle('toggleIcon')
   event.preventDefault();
 });

  const navLink = document.querySelectorAll('.nav-link')
  console.log(navLink);

  // mousemove event 
  for (let i = 0; i < navLink.length; i++){
   navLink[i].addEventListener('mouseover', (event) => {
          event.target.classList.toggle('navEvent');
    });
  }

  const busImg = document.querySelector('#funBus')
// mouseout event with opacity
  busImg.addEventListener('mouseout', (event) => {
      event.target.style.opacity = 0.5;
  })

  const pushedKeyOnH2 = document.querySelector('.intro h2');

  document.addEventListener("keydown", event => {
   pushedKeyOnH2.textContent = `If interested, click on sign me up!`;
   console.log(`${event.key} was pushed!`)
 });
 



  const resizeParagraph = document.querySelector('.intro p')
// wheel event 
  resizeParagraph.addEventListener('wheel', (event) => {
    event.target.style.fontSize = '20px';
    console.log(resizeParagraph)
  })

  // const colorHeader = document.querySelectorAll('h2')
  // for (let i = 0; i < colorHeader.length; i++){
  //   colorHeader[i].addEventListener('load', (event) => {
  //     setInterval(() => {event.target.style.color = ['tomato', 'orange', 'lavender', 'purple', 'black', '#FFEBCD', '#17A2B8'];
  //   }, 1000)
  // })
  // }

  // resize event listener
    window.addEventListener('resize', function (event){
    console.log(`The window has been resized!`)
  })

  const destBtn = document.querySelectorAll('.btn')
  // dblclick event
  for (let i = 0; i <destBtn.length; i++){
  destBtn[i].addEventListener('dblclick', (event) => {
    let user = prompt("Enter your name: ")
    let country = prompt("Enter a destination: ")
    let email = prompt("Enter your email!")
    alert(`Hey ${user} we will let you know once ${country} is available to travel to at your email ${email}!`)
    const curColor = event.target.style.color;
    event.target.style.color = curColor === 'pink' ? 'black' : 'pink';
      // event.target.classList.toggle('btn-toggle');
    });
   console.log(destBtn)
   console.log(destBtn[i]);
  }


  const footerElement = document.querySelector('footer');
// mouseenter event
  footerElement.addEventListener('mouseover', (event) => {
    event.target.classList.toggle('background-color');
    console.log(footerElement)
  })
  

  let allHome = document.querySelector('.home');
  console.log(allHome)
  let elements = document.querySelector('.text-content h2');


  elements.addEventListener('dblclick', () =>{
    TweenMax.fromTo('.text-content h2', 2, {x: 600, scale:0, opacity: 0}, {x: 100, rotation:360, scale:1.5, opacity: 1})
    // TweenMax.fromTo()
  })
