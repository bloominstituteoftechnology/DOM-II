//mouseover//
const busImage = document.querySelector('.intro > img');
busImage.addEventListener("mouseenter", () => {
    busImage.style.transform = "scale(1.8)";
    busImage.style.transition = 'all 0.3s'
    console.log('bus image enlarged under mouse')
  });
  busImage.addEventListener('mouseleave', () => {
    busImage.style.transform = 'scale(1)'
    console.log('bus image shrunk away from mouse')
  });

  const mapImage = document.querySelector('.img-content > img');
mapImage.addEventListener("mouseenter", () => {
    mapImage.style.transform = "scale(1.3)";
    mapImage.style.transition = 'all 0.3s'
    console.log('map image enlarged under mouse')
  });
  mapImage.addEventListener('mouseleave', () => {
    mapImage.style.transform = 'scale(1)'
    console.log('map image shrunk away from mouse')
  });

  //keydown//
  let keyDown = document.addEventListener('keydown', () => {
      document.body.style.backgroundColor='black';
      console.log('background goes black on key press')
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
      } console.log('background changed color on scroll')
  });

  //drag and drop//
  //const boatImg = document.querySelector('.content-destination > img');
  document.addEventListener('drag', (event) => {
      console.log(`dragged item, ${event.x}, ${event.y}`);
    // boatImg.style.width = (event.x) + 'px'
  });

  const footerBar = document.querySelector(".footer");
  footerBar.addEventListener('dragover', (event) => {
      event.preventDefault()
  })
  footerBar.addEventListener('drop', () => {
      console.log('dropped image')
  })

  //load//
  const loaded = window.addEventListener('load', () => {
      console.log('this page has loaded')
  });

  //blur////
  const riverImg = document.querySelector('.img-fluid');
  riverImg.addEventListener('click', (event) => {
      event.target.style.filter = 'blur(10px)';
      console.log('image blurred')
  });

  //resize//
  //const mainNav = document.querySelector('.container > .nav-container')
    window.addEventListener('resize', () => {
        console.log('window resized');
    });


    //double-click//
    const changeImg = document.querySelector('.intro > img');
    changeImg.addEventListener('dblclick', () => {
        changeImg.src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/cat-lambda.png'
        console.log('changed image with double click')
    })

    //stop propagation//
    const btnCard = document.querySelector('.destination');
    btnCard.addEventListener('click', () => {
        btnCard.style.backgroundColor='orange';
        console.log('change card color');
    })
    const btn = document.querySelector('.btn');
    btn.addEventListener('click', (event) => {
        btn.style.backgroundColor='olive';
        event.stopPropagation();
        console.log('change btn color only');
    })

  //prevent links from loading//
  const nav = document.querySelector('nav')
  nav.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('clicked a link prevented');
  })