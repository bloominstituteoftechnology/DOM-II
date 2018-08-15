// Your code goes here
//References to Elements
let logoHeading = document.querySelector('.logo-heading');
let navElement = document.querySelectorAll('a');
let btn = document.querySelectorAll('.btn');
let headingTwo = document.querySelectorAll('h2');
let intro = document.querySelector('.intro');
let img = document.querySelectorAll('img'); 
let mainNavi = document.querySelector('.main-navigation');
let home = document.querySelector('.home');





// Event Listeners and Actions

home.addEventListener('wheel', () => { 
  mainNavi.style.backgroundColor = 'LightCyan';
});

//Make logo-heading Fun Buss tilt and change to gold
logoHeading.addEventListener('mouseover', () => { 
  console.log('logo-heading Fun Bus was mouseovered');
  logoHeading.classList.toggle('grow')
});

logoHeading.addEventListener('mouseleave', () => { 
  console.log('logo-heading Fun Bus was mouseleaved');
  logoHeading.classList.toggle('grow')
});

//Make Home aTag turn red when mousedover
navElement[0].addEventListener('mouseover', (event) => { 
  event.preventDefault();
  console.log('Home anchor tag was mouseovered');
  navElement[0].style.color = 'red';
});

//Make About Us aTag turn orange when mousedover
navElement[1].addEventListener('mouseover', (event) => { 
  event.preventDefault();
  console.log('About Us anchor tag was mouseovered');
  navElement[1].style.color = 'orange';
});

//Make Blog aTag turn gold when mousedover
navElement[2].addEventListener('mouseover', (event) => { 
  event.preventDefault();
  console.log('Blog anchor tag was mouseovered');
  navElement[2].style.color = 'gold';
});

//Make Contact aTag turn green when mousedover
navElement[3].addEventListener('mouseover', (event) => { 
  event.preventDefault();
  console.log('Contact anchor tag was mouseovered');
  navElement[3].style.color = 'green';
});

intro.addEventListener('click', (event) => { 
  console.log('.intro was clicked');
});


img[3].addEventListener("dblclick", function(){
  if(img[3].src != "https://pre00.deviantart.net/b9c0/th/pre/f/2013/298/2/5/kb_party_time___by_kittyloverrr-d6rrbpj.jpg"){
    img[3].src = "https://pre00.deviantart.net/b9c0/th/pre/f/2013/298/2/5/kb_party_time___by_kittyloverrr-d6rrbpj.jpg";}
  else{
    img[3].src = "img/destination.jpg";}});

//Make all h2s blueviolet when clicked indivudually
headingTwo[0].addEventListener('click', (event) => { 
  console.log('Welcome To Fun Bus! was clicked');
  event.stopPropagation();
  headingTwo[0].style.color = 'blueviolet';
});
headingTwo[1].addEventListener('click', () => { 
  //console.log('Home anchor tag was mouseovered');
  headingTwo[1].style.color = 'blueviolet';
});
headingTwo[2].addEventListener('click', () => { 
  //console.log('Home anchor tag was mouseovered');
  headingTwo[2].style.color = 'blueviolet';
});
headingTwo[3].addEventListener('click', () => { 
  //console.log('Home anchor tag was mouseovered');
  headingTwo[3].style.color = 'blueviolet';
});




//Make btn keep tilting when mousedover
btn[0].addEventListener('mousemove', () => { 
  console.log('mouse was movedover btn');
btn[0].classList.toggle('grow')
});

btn[1].addEventListener('mousemove', () => { 
  console.log('mouse was movedover btn');
btn[1].classList.toggle('grow')
});

btn[2].addEventListener('mousemove', () => { 
  console.log('mouse was movedover btn');
btn[2].classList.toggle('grow')
});
