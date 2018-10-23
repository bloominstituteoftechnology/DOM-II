(function() {
  console.log('JavaScript is running');

  const headerImg = document.querySelector('img');
  window.addEventListener('load', function(e) {
    TweenLite.to(headerImg, 2, {rotation:360, ease: Power4.easeInOut,transformOrigin:"500px 50px"});
  });

  const allImg = document.querySelectorAll('img');
  allImg.forEach(e => e.addEventListener('mouseover', function(e) {
    TweenLite.to(this, .5, {autoAlpha:.5});
    TweenLite.to(this, .5, {autoAlpha:1, delay:.5});
  }));

  const navItems = document.querySelectorAll('.nav-link');
  navItems.forEach(e => {
    e.addEventListener('focus', function() {
      this.style.fontWeight = 'bold';
    });
  });
  navItems.forEach(e => {
    e.addEventListener('blur', function() {
      this.style.fontWeight = 'normal';
    });
  });

  const destButtons = document.querySelectorAll('.destination .btn');
  destButtons.forEach(e => {
    e.addEventListener('dblclick', function(e) {
      this.classList.add('lowOp');
    });
    e.addEventListener('click', function(e) {
      signUpForm.classList.toggle('hidden');
    })
    });

  //animate main navigation during scroll
  const mainNav = document.querySelector('.main-navigation');
  window.addEventListener('scroll', function() {
    TweenLite.to(mainNav, 1, {autoAlpha: .5});
    TweenLite.to(mainNav, 1, {autoAlpha: 1, delay: .5});
  });

  // animate for resize
  const htmlBody = document.querySelector('body');
  window.addEventListener('resize', function(e) {
    TweenLite.to(htmlBody, .5, {autoAlpha: .8});
    TweenLite.to(htmlBody, .5, {autoAlpha: 1, delay: .5});
    console.log('resize')
  })

  // animate for wheel
  const h1Tag = document.querySelectorAll('h1');
  const h2Tag = document.querySelectorAll('h2');
  const h4Tag = document.querySelectorAll('h4');
  window.addEventListener('wheel', function(e) {
    TweenLite.to([h1Tag, h2Tag, h4Tag, navItems], .5, {fontWeight: 'bold'});
    TweenLite.to([h1Tag, h2Tag, h4Tag, navItems], .5, {fontWeight: 'normal', delay: .5});
  })

  // animate for keyDown
  window.addEventListener('keydown', function(e) {
    TweenLite.to(allImg, 3, {bezier:{curviness:1.25, values:[{x:10, y:0}, {x:-10, y:0}, {x:10, y:0}, {x:-10, y:0}]}, ease:Power1.easeOut});
  })

  // prevent default and propagation on form
  const signUpForm = document.querySelector('.signup-form');
  signUpForm.addEventListener('click', function(e) {
    signUpForm.classList.toggle('hidden');
  });

  const formInput = document.querySelectorAll('.form__input');
  formInput.forEach(e => e.addEventListener('click', function(e) {
    e.stopPropagation();
  }))
  document.querySelector('#submitBtn').addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    signUpForm.classList.toggle('hidden')
  })

  // change input text when selected
  document.addEventListener("select", function(event) {
    event.target.value = `You're being hacked by the Cat in The Hat`;
  })

  document.addEventListener("drags", function(event) {
    //event.target.textContent = `No dragging allowed`;
    console.log(event);
  })


  let dragged;
  document.querySelectorAll('p').forEach(e => e.setAttribute('draggable', false));

  /* events fired on the draggable target */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
    dragged = event.target;
    event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
    event.target.style.opacity = "";
  }, false);

  document.addEventListener("dragover", function( event ) {
      event.preventDefault();
  }, false);

  document.querySelector('.sign-up').addEventListener("dragenter", function( event ) {
      // highlight potential drop target when the draggable element enters it
      if ( Array.from(event.target.classList).includes("dropzone") ) {
          event.target.style.backgroundColor = "yellow";
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset background of potential drop target when the draggable element leaves it
      if ( Array.from(event.target.classList).includes("dropzone") ) {
          event.target.style.background = "";
      }

  }, false);

  document.addEventListener("drop", function( event ) {
    event.preventDefault();
    // move dragged elem to the selected drop target
    if ( Array.from(event.target.classList).includes("dropzone") ) {
        event.target.value = dragged.textContent.toUpperCase();
    }
  }, false);
})();
