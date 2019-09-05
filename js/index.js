// Your code goes here



//#1 - Changes Logo Color to Yellow on Hover
const logoHead = document.querySelector(".logo-heading");
	
logoHead.addEventListener("mouseover", function() {
  logoHead.style.color = "yellow";
});



//#2 - Changes Logo Color back to Black after Hover
logoHead.addEventListener("mouseout", function() {
  logoHead.style.color = "black";
});



//#3 - Image scale
const imgScale = document.querySelector(".content-destination");

imgScale.addEventListener("mouseover", e => {
  console.log(`,mouseover happened!!`);
imgScale.style.transfrom = 'scale(1.1)';
imgScale.style.transition = 'transform 0.5s';
});


//#4 changing background color

const backgroundColor = document.querySelector('body');
backgroundColor.addEventListener('click', (e) => {
  backgroundColor.style.background ="black";
   console.log(`event bubbled up again`);
 })

 //#5 doule clicking turns it back to white 

 backgroundColor.addEventListener('dblclick', (e) => {
   backgroundColor.style.background ="White";
    console.log(`event bubbled up again`);
  })

  //#6 right clicking nav gives you a note

  window.addEventListener("contextmenu", function(x) {
    alert("Hi you found my secret message!");
  });


  //#7 screen load pop up

  window.addEventListener("load", function() {
    window.prompt("Welcome to page, do you like Mt.Dew?");
  });

  //#8 zoom text in Lets Go!

  function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);
  
    el.style.transform = `scale(${scale})`;
  }

  let scale = 1;
  const el = document.querySelector('.text-content');
  el.onwheel = zoom;

//#9 allows nav to scroll when you scroll

const body = document.querySelector("body");
	const nav = document.querySelector(".main-navigation");
	body.addEventListener("keydown", function() {
	  nav.style.position = "absolute";
    });
    
    //#10

    body.addEventListener("keypress", function() {
        nav.style.position = "fixed";
      });


  //preventdefault and stoprop
	const preventA = document.querySelectorAll("a");
	
	preventA.forEach(function(a) {
	  a.addEventListener("click", function(event) {
	    event.preventDefault();
	    event.stopPropagation();
	  });
	});
	
	const navTwo = document.querySelector(".main-navigation");
	
	navTwo.addEventListener("click", function(event) {
	  alert("main-nav");
	});