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
})();
