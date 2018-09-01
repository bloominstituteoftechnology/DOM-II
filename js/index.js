// Your code goes here
alert('Welcome To The Fun Bus');

// navigation title
let title = document.getElementsByClassName('logo-heading');
for (let i = 0; i < title.length; i++){
  title[i].addEventListener('mouseenter', changeTitle);
  title[i].addEventListener('mouseleave', originalTitle);
}

function changeTitle(){
  title[0].innerHTML = 'Thor Ragnarok';
  // navigation header background color changed
  headerBackground[0].style.backgroundColor = 'rgb(31, 168, 23)';
}

function originalTitle(){
  if(title[0].innerHTML = 'Thor'){
      title[0].innerHTML = 'Fun Bus';
  }
}

// navigation links
let links = document.getElementsByClassName('nav-link');
for(let i = 0; i < links.length; i++){
  links[i].addEventListener('mouseenter', changeLinks);
  links[i].addEventListener('mouseleave', originalNav);
}

function changeLinks(){
  links[0].innerHTML = 'Thor';
  links[1].innerHTML = 'Valhalla';
  links[2].innerHTML = 'About';
  links[3].innerHTML = 'Avengers';
  title[0].innerHTML = 'Thor Ragnarok';
  // navigation width changed
  navigation[0].style.width = ('500px');
}

function originalNav(){
  links[0].innerHTML = 'Home';
  links[1].innerHTML = 'About Us';
  links[2].innerHTML = 'Blog';
  links[3].innerHTML = 'Contact';
  //navigation changed back to original width
  navigation[0].style.width = ('350px');
  title[0].innerHTML = 'Fun Bus';
}


// navigation bar
let navigation = document.getElementsByClassName('nav');
// navigation header
let headerBackground = document.getElementsByClassName('main-navigation');

// fun bus banner
let banner = document.querySelector('.container .intro img');
banner.addEventListener('mouseover', changeBanner);

function changeBanner(){
  banner.src = '../img/thor-banner.jpg';
}


// main title and paragraph
let mainTitle = document.querySelector('.home .intro h2');
mainTitle.addEventListener('mouseover', newTitle);
let mainText = document.querySelector('.home .intro p');
mainText.addEventListener('mouseover', newTitle);

function newTitle(){
  mainTitle.innerHTML = 'Odin\'s tale';
  mainText.innerHTML = 'Odin Allfather did not act without thought. Now as the sun shone over asgard and the buildings were illuminated by it’s rays, gleaming like gold, he thought long and hard. At the realms edge, the darkness of the cosmos spread out like a calm sea. Asgard was at peace, and all was ready for the momentous events to come. Standing in his chambers, Odin stared out at the realm he had ruled for so many years.';
}

// section images
let imageContent = document.querySelectorAll('.content-section .img-content img');
console.log(imageContent);
for(let i = 0; i < imageContent.length;i++){
  imageContent[i].addEventListener('mouseenter',changeImage);
}

function changeImage(){
  imageContent[0].src='../img/thor_ragnarok.jpg';
  imageContent[0].style.height = ('100%');
  imageContent[1].src='../img/thor-green-bg.jpg';
}

// section headers loop and events
let textHeaders = document.querySelectorAll('.text-content h2');
for (let i = 0; i < textHeaders.length; i++){
  textHeaders[i].addEventListener('mouseenter', mainHeaders);
}

function mainHeaders(){
  textHeaders[0].innerHTML = 'Thor';
  textHeaders[1].innerHTML = 'Avengers';
}

// section text loop and events
let sectionText = document.querySelectorAll('.text-content p');
for(let i = 0; i < sectionText.length; i++){
  sectionText[i].addEventListener('mouseenter', textContent)
}

function textContent(){
  sectionText[0].innerHTML = 'At last the great hall was filled with asgardians waiting for a glimpse of the new king. ';
  sectionText[1].innerHTML = 'Queen frigga sat at her vanity putting her jewellery on in the mirror she saw her husband turn and walk to the centre of the chamber. His blue eyes were dark with worry. ';
  sectionText[2].innerHTML = 'Labeled "Earth\'s Mightiest Heroes", the Avengers originally consisted of Ant-Man, the Hulk, Iron Man, Thor, and the Wasp. Ant-Man had become Giant-Man by issue #2. The original Captain America was discovered trapped in ice in issue #4, and joined the group after they revived him.';
  sectionText[3].innerHTML = 'Without a double Thor was a great warrior but a warror king, that was still a lesson to learn. ';
}


// function changeTitle(){
//   title[0].innerHTML = 'Thor Ragnarok';
//   headerBackground[0].style.backgroundColor = 'rgb(31, 168, 23)';
// }
//
// function originalTitle(){
//   if(title[0].innerHTML = 'Thor'){
//       title[0].innerHTML = 'Fun Bus';
//   }
// }
//
// function changeLinks(){
//   links[0].innerHTML = 'Thor Home';
//   links[1].innerHTML = 'Valhalla';
//   links[2].innerHTML = 'About Thor';
//   links[3].innerHTML = 'Contact Avengers';
//   title[0].innerHTML = 'Thor Ragnarok';
//   navigation[0].style.width = ('500px');
// }
//
// function originalNav(){
//   links[0].innerHTML = 'Home';
//   links[1].innerHTML = 'About Us';
//   links[2].innerHTML = 'Blog';
//   links[3].innerHTML = 'Contact';
//   navigation[0].style.width = ('350px');
//   title[0].innerHTML = 'Fun Bus';
// }
//
// function changeBanner(){
//   banner.src = '../img/thor-banner.jpg';
// }

// function newTitle(){
//   mainTitle.innerHTML = 'Odin\'s tale';
//   mainText.innerHTML = 'Odin Allfather did not act without thought. Now as the sun shone over asgard and the buildings were illuminated by it’s rays, gleaming like gold, he thought long and hard. At the realms edge, the darkness of the cosmos spread out like a calm sea. Asgard was at peace, and all was ready for the momentous events to come. Standing in his chambers, Odin stared out at the realm he had ruled for so many years.';
// }
