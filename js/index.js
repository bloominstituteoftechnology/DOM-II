// Your code goes here

  //PREVENT DEFAULT
  const links = document.querySelectorAll('nav a');
  document.addEventListener('click', e => {
      e.preventDefault();
  })
 
   //MOUSEOVERs
  const logo = document.querySelector('.logo-heading');
  logo.addEventListener('mouseover', e => {
      logo.textContent = 'Party Bus ';
  });
 
   //KEYDOWN
  const navBackground = document.querySelector('.nav-container');
  document.addEventListener('keydown', e => {
      navBackground.style.background = getRandomColor();
  });
 
   function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }
 
   //WHEEL
  const topImg = document.querySelector('.intro img');
  document.addEventListener('wheel', e => {
      TweenMax.to('.intro', 1, {rotation:2})
  });
 
   //SELECT
  const input = document.querySelector('.input');
  input.addEventListener('select', e => {
      alert(e.target.value);
  })
 
   //DBLCLICK
  const mapImg = document.querySelector('.img-content img');
  mapImg.addEventListener('dblclick', e => {
      TweenMax.to('.img-content', 1, {scaleY:1.1, scaleX:1.1});
  });
 
   //LOAD
  const introText = document.querySelector('.intro p');
  window.addEventListener('load', e => {
      introText.style.color = 'red';
  });
 
   //CLICK
  const btn = document.querySelectorAll('.btn');
  btn.forEach(button => {
      button.addEventListener('click', e => {
          let random = getRandomColor();
          button.style.background = random;
      })
  })
 
  
   //RESIZE
  const letsGoSection = document.querySelector('.content-section');
  window.addEventListener('resize', e => {
      letsGoSection.style.background = 'gray';
      setTimeout(() => {
          letsGoSection.style.background = '';
      }, 2000)
  })
 
   //SCROLL
  window.addEventListener('scroll', e => {
      TweenMax.to('.content-section', 1, {rotation:-2})
  })
 
   //COPY
  const destination = document.querySelector('.content-destination h2');
  destination.addEventListener('copy', e => {
      e.stopPropagation();
      destination.style.color = getRandomColor();
  })
 
   // Drag / drop 
  function dragstart_handler(ev) {
      // Add the target element's id to the data transfer object
      ev.dataTransfer.setData("text/plain", ev.target.id);
      ev.dropEffect = "move";
  }
 
   function dragover_handler(ev) {
      ev.preventDefault();
      // Set the dropEffect to move
      ev.dataTransfer.dropEffect = "move"
  }
 
   function drop_handler(ev) {
      ev.preventDefault();
      // Get the id of the target and add the moved element to the target's DOM
      var data = ev.dataTransfer.getData("text/plain");
      ev.target.appendChild(document.getElementById(data));
  }