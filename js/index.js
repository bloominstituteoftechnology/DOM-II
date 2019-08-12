// Your code goes here
document.body.style.backgroundColor = "lightblue";
// const buttons = document.getElementsByClassName('.btn');
// document.buttons.addEventListener('click', () => {
//     buttons.style.color = 'aqua'
// })

// const event1 = document.querySelectorAll('logo-heading');
// document.addEventListener('click', () => {
//     document.event1.style.backgroundColor = 'red';
// })
  


  //1. On Click Event 
  const nav = document.querySelector('.nav');
  const navLink = document.querySelectorAll('.nav-link');
  
  nav.addEventListener('click', onClick);
  
  function onClick(e) {
    e.target.style.color = 'blue';
  
    e.preventDefault();
  }
  
  navLink.forEach(link => {
    link.addEventListener('click', function(e) {
      e.stopPropagation();
      alert('link clicked');
    });
  });
  
  // 2. On Load Event 
  const Img = document
    .querySelector('.intro img')
    .addEventListener('load', onLoad);
  
  function onLoad(e) {
    alert('The page has loaded');
  }
  
  // 3. Mouse Up event 
  const logo = document
    .querySelector('.logo-heading')
    .addEventListener('mouseup', onMouseUp);
  
  function onMouseUp(e) {
    e.body.style.backgroundColor = 'blue';
  }
  
  //4. Mouse Over event
  const images = document.querySelectorAll('img');
  
  images.forEach(image => {
    image.addEventListener('mouseover', onMouseOver);
  });
  
  function onMouseOver(e) {
    e.target.style.border = 'solid 2px red';
    e.target.style.opacity = 0.8;
  }
  
  //5. Mouse Move event 
  const offset = document.createElement('a');
  
  offset.textContent = 'Offset';
  
  console.log(nav);
  
  nav.appendChild(offset);
  
  const body = document.querySelector('body');
  
  body.addEventListener('mousemove', e => {
    offset.textContent = `X: ${e.offsetX} Y: ${e.offsetY}`;
  });
  
  //6. On Focus Event 
  
  navLink.forEach(link => {
    link.addEventListener('focus', onFocus);
  });
  
  function onFocus(e) {
    console.log(`${e.target.innerText} link is in focus`);
  }
  
  // 7. On Scroll Event 
  const doc = document.documentElement;
  window.addEventListener('scroll', onScroll);
  
  function onScroll(e) {
    console.log('You are scrolling!')
  }
  
  // 8. Keydown Event 
  const destination = document.querySelectorAll('.destination');
  
  destination.forEach(dest => {
    dest.addEventListener('keydown', keyDown);
  });
  
  function keyDown(e) {
    e.target.style.border = 'solid 2px white';
  }
  
  //9. Double Click Event
  document.body.addEventListener('dblclick', dblClick);
  
  function dblClick(e) {
    alert('You double clicked!');
  
    e.preventDefault();
  }
  
  //10. Select Event 
  const selectElement = document.querySelector('.options');

  selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('.result');
    result.textContent = `You said ${event.target.value}`;
  });