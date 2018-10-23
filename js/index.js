// Your code goes here

const navLinks = document.querySelectorAll('.nav a');
const btnList = document.querySelectorAll('.btn');
const imgList = document.querySelectorAll('img');
const pTags = document.querySelectorAll('p');

window.addEventListener('load', event => {

  TweenMax.from('html', 5, {css:{rotation: 360, scale: 0}, ease:Power2.easeInOut});

});

window.addEventListener('focus', event => {

  TweenMax.to('body', 1, {css:{backgroundColor: 'purple'}});

});

window.addEventListener('blur', event => {

  TweenMax.to('body', 1, {css:{backgroundColor: 'white'}});

});

navLinks.forEach(item => {

  item.addEventListener('mouseover', event => {

    TweenMax.to(event.target, 1, {css:{scale: 1.5, color: 'blue', fontWeight: 'bold'}, ease:Power2.easeInOut});

  });

  item.addEventListener('mouseout', event => {

    TweenMax.to(event.target, 1, {css:{scale: 1.0, color: 'green', fontWeight: 'normal'}, ease:Power2.easeInOut});

  });

});

btnList.forEach(item => {

  item.addEventListener('click', event => {

    TweenMax.to('*', 8, {css:{scale: 0}, ease:Power2.easeInOut});
    TweenMax.to('html', 8, {css: {rotation: 360}, ease:Power2.easeInOut});

  });

  item.addEventListener('mouseover', event => {

    TweenMax.to(event.target, 1, {css:{scale: 1.3, backgroundColor: 'white'}, ease:Power2.easeInOut});

  });

  item.addEventListener('mouseout', event => {

    TweenMax.to(event.target, 1, {css:{scale: 1, backgroundColor: '#17A2B8'}, ease:Power2.easeInOut});

  });

});

let altKeyPressed = false;

window.addEventListener('keydown', function(event) {

  if (event.key == "Alt") {
    altKeyPressed = true;
    console.log("WE GOOD");
  }

});

window.addEventListener('keyup', function(event) {

  if (event.key == "Alt") {
    altKeyPressed = false;
    window.onscroll = function(){};
  }

});

imgList.forEach(item => {

  // Scale images with wheel when holding down alt

  item.addEventListener('wheel', function(event) {

    if (this.scale == null)
      this.scale = 1;

      console.log("strolling");

    if (altKeyPressed) {

      let x = window.scrollX;
      let y = window.scrollY;
      window.onscroll=function(){window.scrollTo(x, y);};

      console.log("GOING");

      if (event.deltaY < 0)
        this.scale += 0.1;

      else
        this.scale -= 0.1;

      event.target.style.transform = `scale(${this.scale})`;

    }

  });

});

pTags.forEach(item => {

  // Cut text you don't like off the site

  item.addEventListener('cut', event => {

    let text = event.target.textContent;
    let selection = window.getSelection();
    let cutText = text.substring(selection.anchorOffset, selection.focusOffset);

    let newText = text.replace(cutText, "");

    event.target.textContent = newText;

  });

})
