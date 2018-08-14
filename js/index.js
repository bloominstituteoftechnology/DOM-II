// Your code goes here

const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('mouseenter', () => { // 1. mouseenter
    image.classList.toggle('glow');
  })
  image.addEventListener('mouseleave', () => { // 2. mouseleave
    image.classList.toggle('glow');
  })
})

const site = document.querySelector('html');
site.addEventListener('contextmenu', () => { // 3. contextmenu
  site.style.opacity = "0.5";
  site.style.background = "gray";
})
site.addEventListener('mousemove', () => { // 4. mousemove
  site.style.opacity = "1";
  site.style.background = "white";
})

const logo = document.querySelector('.logo-heading');
logo.addEventListener('click', () => { // 5. click
  const horn = new Audio('http://soundbible.com/mp3/Ahooga%20Car%20Horn-SoundBible.com-1499602683.mp3');
  horn.play();
  
  horn.addEventListener('ended', () => { // 6. ended
    console.log(horn.currentSrc);
  })
})

window.addEventListener("resize", () => { // 7. resize
  console.log('Resized!!1!');
});

const introP = document.querySelector('#test');
introP.addEventListener('select', () => { // 8. select
  console.log('click');
})

window.addEventListener('scroll', function(e) { // 9. scroll
  console.log(e.timeStamp);
})

window.addEventListener('keydown', (e) => { // 10. keydown
  e.which === 32 ? window.open('https://www.youtube.com/watch?v=uSD4vsh1zDA', '_blank') : '';
})