// Your code goes here


//even listener to see all instances of html clicks
 document.addEventListener('click', (event) => {
	console.log(event.target)
 }, false);


 const logoExpansion = document.querySelector('.logo-heading')

// mouseover event
  logoExpansion.addEventListener('mouseover', (event) => {
   // event.target.style.fontSize = '50px';
   event.target.classList.toggle('toggleIcon')
 	// console.log(logoExpansion)
 });

  const navLink = document.querySelectorAll('.nav-link')
  console.log(navLink);

  // mousemove event 
  for (let i = 0; i < navLink.length; i++){
   navLink[i].addEventListener('mouseover', (event) => {
    event.preventDefault();
    console.log("prevent default")
          event.target.classList.toggle('navEvent');

    });
  }


  const busImg = document.querySelector('#funBus')
// dblclick event with opacity
  busImg.addEventListener('dblclick', (event) => {
  		event.target.style.opacity = 0.5;
  })

  const destBtn = document.querySelectorAll('.btn')

  for (let i = 0; i <destBtn.length; i++){
  destBtn[i].addEventListener('click', (event) => {
      // event.preventDefault();
      // event.target.style.color = 'rebeccapurple';
      event.target.classList.toggle('btn-toggle');
    });
   console.log(destBtn)
   console.log(destBtn[i]);
    //  console.log(event.target)
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