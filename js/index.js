// Your code goes here
//References to Elements
let logoHeading = document.querySelector('.logo-heading');
let navElement = document.querySelectorAll('a');
let btn = document.querySelectorAll('.btn');
let headingTwo = document.querySelectorAll('h2');



// Event Listeners and Actions

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
navElement[0].addEventListener('mouseover', () => { 
  console.log('Home anchor tag was mouseovered');
navElement[0].style.color = 'red';
});

//Make About Us aTag turn orange when mousedover
navElement[1].addEventListener('mouseover', () => { 
  console.log('About Us anchor tag was mouseovered');
navElement[1].style.color = 'orange';
});

//Make Blog aTag turn gold when mousedover
navElement[2].addEventListener('mouseover', () => { 
  console.log('Blog anchor tag was mouseovered');
navElement[2].style.color = 'gold';
});

//Make Contact aTag turn green when mousedover
navElement[3].addEventListener('mouseover', () => { 
  console.log('Contact anchor tag was mouseovered');
navElement[3].style.color = 'green';
});

//Make all h2s blueviolet when clicked indivudually
headingTwo[0].addEventListener('click', () => { 
  //console.log('Home anchor tag was mouseovered');
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
