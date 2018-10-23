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
  destButtons.forEach(e => e.addEventListener('dblclick', function(e) {
    this.classList.add('lowOp');
  }));
})();
