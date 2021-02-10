// Your code goes here
// mouseover

let mouseover = document.getElementById("a");

mouseover.addEventListener("mouseenter", function (event) {
    event.target.style.color = "purple";
})

let w = document.getElementById("b");

w.addEventListener("wheel", function (event) {
    event.style.fontSize = "35px";
})

w.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

 w.addEventListener('click', () => {
    log.textContent ='';
    window.setTimeout(() => {
        window.location.w(true);
    }, 200);
  });

  let um = document.getElementById("c");

  um.addEventListener('focus', (event) {
      event.target.style.background = 'pink';
  })

  um.addEventListener('blur', (event) => {
    event.target.style.background = '';
  }, true);

  let last_known_scroll_position = 0;
  let ticking = false;
  
  document.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
  
    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
      });
  
      ticking = true;
    }
  });