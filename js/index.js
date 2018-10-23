(function() {
  console.log('JavaScript is running');

  const headerImg = document.querySelector('img');
  window.addEventListener('load', function(e) {
    TweenLite.to(headerImg, 2, {rotation:360, ease: Power4.easeInOut,transformOrigin:"500px 50px"});
  });
})();
