const siteContent = {
    "nav": {
      "nav-item-1": "Services",
      "nav-item-2": "Product",
      "nav-item-3": "Vision",
      "nav-item-4": "Features",
      "nav-item-5": "About",
      "nav-item-6": "Contact",
      "img-src": "img/logo.png"
    },
    "cta": {
      "h1": "DOM Is Awesome",
      "button": "Get Started",
      "img-src": "img/header-img.png"
    },
    "main-content": {
      "features-h4":"Features",
      "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "about-h4":"About",
      "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "middle-img-src": "img/mid-page-accent.jpg",
      "services-h4":"Services",
      "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "product-h4":"Product",
      "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "vision-h4":"Vision",
      "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
      "contact-h4" : "Contact",
      "address" : "123 Way 456 Street Somewhere, USA",
      "phone" : "1 (888) 888-8888",
      "email" : "sales@greatidea.io",
    },
    "footer": {
      "copyright" : "Copyright Great Idea! 2018"
    },
  };
  
  // Example: Update the img src for the logo
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])
  
  // nav
  let navMenu = document.querySelectorAll('a');
  navMenu[0].innerHTML = siteContent['nav']["nav-item-1"];
  navMenu[1].innerHTML = siteContent['nav']["nav-item-2"];
  navMenu[2].innerHTML = siteContent['nav']["nav-item-3"];
  navMenu[3].innerHTML = siteContent['nav']["nav-item-4"];
  navMenu[4].innerHTML = siteContent['nav']["nav-item-5"];
  navMenu[5].innerHTML = siteContent['nav']["nav-item-6"];
  
  // create new Nav items
  let navNew = document.querySelector('nav')
  let newMap = document.createElement('a');
  newMap.setAttribute('href', '#');
  newMap.innerHTML = 'Map'
  navNew.appendChild(newMap)
  let newPrice = document.createElement('a');
  newPrice.setAttribute('href', '#');
  newPrice.innerHTML = 'Price'
  navNew.appendChild(newPrice);
  
  // style nav
  let navAlinks = document.querySelectorAll('nav a')
  navAlinks.forEach(function(item) {
    item.style.color = 'green';
  });
  
  // navMenu.forEach(function(item, i){
  //   item.innerHTML = siteContent['nav'][i];
  // }) 
  
  // cta
  let ctaText = document.querySelector('.cta-text h1');
  let ctaBut = document.querySelector('.cta-text button');
  let ctaImg = document.querySelector('.cta img');
  
  ctaText.innerHTML = siteContent['cta']["h1"]; 
  ctaBut.innerHTML = siteContent['cta']["button"]; 
  ctaImg.setAttribute('src', siteContent['cta']["img-src"]); 
  
  // main-content  top-content
  let topContenth4 = document.querySelector('.text-content h4');
  let topContentP = document.querySelector('.text-content p');
  let topContenth4Second = document.querySelectorAll('.text-content h4')[1];
  let topContentPSecond = document.querySelectorAll('.text-content p')[1];;
  let topContentImg = document.querySelector('.middle-img');
  
  topContenth4.innerHTML = siteContent['main-content']["features-h4"]; 
  topContentP.innerHTML = siteContent['main-content']["features-content"]; 
  topContenth4Second.innerHTML = siteContent['main-content']["about-h4"]; 
  topContentPSecond.innerHTML = siteContent['main-content']['features-content']; 
  
  topContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']); 
  
  //main-content   bottom content
  let bottomContenth4 = document.querySelector('.bottom-content .text-content h4');
  let bottomContentP = document.querySelector('.bottom-content .text-content p');
  let bottomContenth4Second = document.querySelectorAll('.bottom-content .text-content h4')[1];
  let bottomContentPSecond = document.querySelectorAll('.bottom-content .text-content p')[1];;
  let bottomContenth4Third = document.querySelectorAll('.bottom-content .text-content h4')[2];
  let bottomContentPThird = document.querySelectorAll('.bottom-content .text-content p')[2];;
  
  bottomContenth4.innerHTML = siteContent['main-content']['services-h4']; 
  bottomContentP.innerHTML = siteContent['main-content']['services-content']; 
  bottomContenth4Second.innerHTML = siteContent['main-content']['product-h4']; 
  bottomContentPSecond.innerHTML = siteContent['main-content']['product-content']; 
  bottomContenth4Third.innerHTML = siteContent['main-content']['vision-h4']; 
  bottomContentPThird.innerHTML = siteContent['main-content']['vision-content']; 
  
  //contact
  let contacth4 = document.querySelector('.contact h4');
  let contactContentP1 = document.querySelectorAll('.contact p')[0];
  let contactContentP2 = document.querySelectorAll('.contact p')[1];
  let contactContentP3 = document.querySelectorAll('.contact p')[2];
  
  contacth4.innerHTML = siteContent['contact']['contact-h4']; 
  contactContentP1.innerHTML = siteContent['contact']['address'];
  contactContentP2.innerHTML = siteContent['contact']['phone'];
  contactContentP3.innerHTML = siteContent['contact']['email'];
  
  // footer
  let footer = document.querySelector('footer p');
  footer.innerHTML = siteContent['footer']['copyright']; 
  
  
  // add eventListeners
  let myButton = document.querySelector('.custom-button');
  
  // cta
  ctaBut.addEventListener('click', () => {
    ctaText.classList.toggle('resizedText', true);
  });
  ctaBut.addEventListener('dblclick', () => {
     ctaText.classList.toggle('resizedText', false);
  });
  
  ctaImg.addEventListener('mousemove', () => {
    ctaImg.classList.toggle('transform', true)
  })
  ctaImg.addEventListener('mouseout', () => {
    ctaImg.classList.toggle('transformBack', true)
  })
  
  ctaText.addEventListener('auxclick', () => {
    TweenMax.to(ctaText, 2, 
    {backgroundColor:"#ff0000", width:"50%", top:"100px", ease:Power2.easeInOut});
  })
    
  // main content
  window.addEventListener('keydown', () => {
    TweenMax.from(".middle-img", 6, {
      marginButtom:800,
      backgroundColor:"black",
      ease: SlowMo.ease.config(0.7, 0.7, false),
      rotation: 360
    });
  });
  
  topContentP.addEventListener('mouseenter', () => {
    TweenLite.to(topContentP, 2, {rotationX:45, scaleX:1.2, z:-200});
  })
  topContentPSecond.addEventListener('mouseleave', () => {
    TweenLite.to(topContentPSecond, 2, {rotation:360, transformOrigin:"left top"});
  })
  
  window.addEventListener('keyup', () => {
    TweenLite.to(".middle-img", 2, 
      {rotation:"-170_short", rotationX:"-=30_cw", rotationY:"1.5rad_ccw"});
  });
  
  document.addEventListener('scroll', () => {
    TweenMax.to([bottomContentP, bottomContentPSecond, bottomContentPThird, logo], 1,
       {opacity:1.5, rotation:720});
  })
