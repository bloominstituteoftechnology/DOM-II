let animateHeading = document.querySelector('.logo-heading');
animateHeading.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'cyan';
});
//-------------------------------------------------------------------------
let animateBTN = document.querySelectorAll('.btn');
for (let i = 0; i<animateBTN.length; i++) {
    animateBTN[i].addEventListener('click', () => {
    event.target.style.color = 'red'
 })
}
//------------------------------------------------------------------------
window.addEventListener("load", function(event) {
    alert("Prepare for Fun Bus!!!");
  });
//------------------------------------------------------------------------
let animateForm = document.querySelector('.intro')
animateForm.addEventListener("blur", function( event ) {
    event.target.style.background = "black";    
  }, true);
//------------------------------------------------------------------------
let animateHome = document.querySelectorAll('.nav-link')
 for (let x = 0; x < animateHome.length; x++) {
        animateHome[x].addEventListener('keydown', (event) => {
        alert('You clicked a non working link then clicked shift!');
      });
      animateHome[x].addEventListener('click', (event) => {
        event.preventDefault()
    })
 }
 //-----------------------------------------------------------------------
 let removeImg = document.querySelector('.firstImg')
 removeImg.addEventListener('dblclick', (event) => {
     event.target.style.visibility = 'hidden'
 })
 //----------------------------------------------------------------------
 let animateTextContent = document.querySelectorAll('.text-content')
 for (let y=0; y<animateTextContent.length; y++) {
    animateTextContent[y].addEventListener('click', (event) => {
        TweenMax.to(".text-content", 3, {
          rotationY: 360
        })
    })
    }
//-----------------------------------------------------------------------
