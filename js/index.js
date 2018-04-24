let getStarted = document.getElementById("getStarted");
let ctaImg = document.getElementById("cta-img");
let allP = document.getElementsByTagName("p");
let middleImg = document.getElementById("middle-img");


//Click on Get Started Button
getStarted.addEventListener("click", () => {
  // TweenLite.from("#cta-img", 1.5, {scaleX:2, scaleY:2});
  // TweenLite.to(ctaImg, 1.5, { ease: Bounce.easeOut, y: 100 });
  // TweenMax.to(ctaImg, 1, {ease: Bounce.easeIn, y: 500, repeat:1, yoyo:true});
  TweenMax.to(ctaImg, 2.5, { ease: Elastic.easeOut.config(2, 0.5), y: 300, repeat:1, yoyo:true });
})


//Protects all texts inside de p tag to be copied
for(let i =0; i < allP.length ; i++) {
  allP[i].addEventListener('copy', function(e) {
      e.clipboardData.setData('text/plain', 'Sorry You are not allowed to copy our information!');
      e.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
      alert(e.clipboardData.getData("text"));
  })
};

// pointerover event handler over middle image and rotates the cta-image
middleImg.addEventListener("pointerover", () => {
  TweenMax.to(ctaImg, 2, {rotation:360, repeat:1, yoyo: true});
});