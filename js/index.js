// Your code goes here


//even listener to see all instances of html clicks and the preventDefault feature for the home page
 document.addEventListener('click', (event) => {
  event.preventDefault();
	console.log(event.target)
 }, false);

 const pushedKeyOnH2 = document.querySelector('h2');

 document.addEventListener("keydown", event => {
  pushedKeyOnH2.textContent = `If interested, click on sign me up!`;
  console.log(`${event.key} was pushed!`)
});

 const logoExpansion = document.querySelector('.logo-heading')

// mouseover event
  logoExpansion.addEventListener('mouseover', (event) => {
   event.target.classList.toggle('toggleIcon')
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



  const resizeParagraph = document.querySelector('.intro p')
// wheel event 
  resizeParagraph.addEventListener('wheel', (event) => {
    event.target.style.fontSize = '20px';
    console.log(resizeParagraph)
  })

  const colorHeader = document.querySelectorAll('h2')
  for (let i = 0; i < colorHeader.length; i++){
    colorHeader[i].addEventListener('load', (event) => {
      setTimeout(() => {event.target.style.color = ['tomato', 'orange', 'lavender', 'purple', 'black', '#FFEBCD', '#17A2B8'];
    }, 1000)
  })
  }

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
  


  // let elements = document.querySelectorAll('.block')

  // const travelerEvent = (event) => {
  //   let distance = 0;

  //   const moveRight = () => {
  //     distance += 10;
  //     event.target.style.borderLeft = `${distance}px solid white`
  //   }

  //   setInterval (moveRight, 10)
  // }

  // for (let i = 0; i <elements.length; i++){
  //   elements[i].addEventListener('click', travelerEvent)
  // }