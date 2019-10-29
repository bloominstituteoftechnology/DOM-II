// Your code goes here
const imgSrcs = [
  'https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1492515114975-b062d1a270ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1481819434877-23b892ca68ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
];

const horrorWords = ['ZOMBIE BUS', 'BLOOD', 'GUTS', 'DEATH', 'GRAVE'];

const halloweenHeadings = ['UNWELCOME TO ZOMBIE BUS', 'LET\'S DIE!', 'TORTURE AWAITS', 'PICK YOUR POISON', 'BURN IN THE SUN', 'EXCRUCIATING EXCURSION', 'ISLAND IMPALEMENT']

const evilLaugh = 'BUAHAHAHAHAHAHAHAHAHAHAHA! AHAHAHAHAHAHAHAHA! *cough* *cough* AHAHAHAHAHAHAHA!';

//Change images on click
const imgs = document.querySelectorAll('img');
imgs.forEach( (element, i) => {
  element.addEventListener( 'click', () => {
    element.src = imgSrcs[i];
  });
});

//Change nav link content on hover

const navCont = document.querySelectorAll('.logo-heading, .nav-link');
navCont.forEach( (element, i) => {
  const originalText = element.textContent;
  const originalColor = element.style.color;
  element.addEventListener( 'mouseenter', () => {
    element.textContent = horrorWords[i];
    element.style.color = 'red';
  });

  element.addEventListener( 'mouseleave', () => {
    element.textContent =  originalText;
    element.style.color = originalColor;
  })
});

//Change nav link content on focus


//Change section headings on re-size
const headings = document.querySelectorAll('h2, h3, h4');
headings.forEach( (element, i) => {
  window.addEventListener('resize', () => {
    element.textContent = halloweenHeadings[i];
    element.style.color = 'red';
  });
});

//Change background and text colors on scroll
const body = document.querySelectorAll('.main-navigation, .nav-container a, body, footer p');
body.forEach( element => {
  window.addEventListener( 'scroll', () => {
    element.style.color = 'orange';
    element.style.backgroundColor = 'black';
  });
})

//Change all <p>'s to evilLaugh on keydown
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach( element => {
  window.addEventListener( 'keydown', () => {
    element.textContent = evilLaugh;
  });
});

//Change link fonts on focus
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach( element => {
  const originalFont = element.style.fontFamily;
  element.addEventListener( 'focus', () => {
    element.style.fontFamily = 'Creepster';
  });

  element.addEventListener( 'blur', () => {
    element.style.fontFamily = originalFont;
  });
});

//Give alert on copying text in any <p>
const paragraphs2 = document.querySelectorAll('p');
paragraphs2.forEach( element => {
  element.addEventListener( 'copy', () => {
    alert('AS THOU COPIEST ME, SO I MULTIPLIETH! MUAHAHAHA!');
  });
});


