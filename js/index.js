//mouseover//
const busImage = document.querySelector('.intro > img');
busImage.addEventListener("mouseenter", () => {
    busImage.style.transform = "scale(1.8)";
    busImage.style.transition = 'all 0.3s'
  });
  busImage.addEventListener('mouseleave', () => {
    busImage.style.transform = 'scale(1)'
  });

  const mapImage = document.querySelector('.img-content > img');
busImage.addEventListener("mouseenter", () => {
    mapImage.style.transform = "scale(1.3)";
    mapImage.style.transition = 'all 0.3s'
  });
  mapImage.addEventListener('mouseleave', () => {
    mapImage.style.transform = 'scale(1)'
  });

  //keydown//
  let keyDown = document.addEventListener('keydown', () => {
      document.body.style.backgroundColor='black';
  });
 
  //wheel//
  let flasher = true;
  const wheel = document.addEventListener('wheel', () => {
      if (flasher === true) {
         document.body.style.backgroundColor='yellow'; 
         flasher = false;
      } else {
        document.body.style.backgroundColor='blue';
        flasher = true;
      }
  });

  //drag and drop//


  //load//
  const loaded = window.addEventListener('load', () => {
      console.log('this page has loaded')
  });

  //focus//


  //prevent links from loading//
  nav.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('clicked a link');
  })