// Your code goes here
alert('Welcome To The Fun Bus');

// navigation title
let title = document.getElementsByClassName('logo-heading');
for (let i = 0; i < title.length; i++){
  // # Event 1 and 2
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
  // # Event 3 and 4
  links[i].addEventListener('mouseover', changeLinks);
  links[i].addEventListener('mouseout', originalNav);
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
// # Event 5
mainTitle.addEventListener('mousemove', newTitle);
let mainText = document.querySelector('.home .intro p');
mainText.addEventListener('mousemove', newTitle);

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

// bottom textContent
let bottomHeader = document.querySelector('.content-destination h2');
let bottomText = document.querySelector('.content-destination p');
console.log(bottomHeader)
//# Event 6 and 7
bottomHeader.addEventListener('mousedown', changeBottomHeader);
bottomText.addEventListener('mouseup', bottomTextChanged);

function changeBottomHeader(){
  bottomHeader.innerHTML = 'Thor is the best';
}

function bottomTextChanged(){
  bottomText.innerHTML = 'Thor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
}


let bottomImage = document.querySelector('.content-destination a img');
console.log(bottomImage);
// # Event 8
bottomImage.addEventListener('click', bottomImageBanner);

function bottomImageBanner(){
  bottomImage.src = '../img/thor-thunder.jpeg';
}

let destination = document.querySelector('.content-pick .destination');
//# Event 9
destination.addEventListener('dblclick', destinationContent);
let destinationHeader = document.querySelectorAll('.content-pick .destination h4');
let destinationText = document.querySelectorAll('.content-pick .destination p');

function destinationContent(){
  destinationHeader[0].innerHTML = 'Avenger Near You';
  destinationHeader[1].innerHTML = 'Mighty Thor';
  destinationHeader[2].innerHTML='And More Thor';

  destinationText[0].innerHTML = 'Thor lorem thor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.';

  destinationText[1].innerHTML ='Thor lorem thor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.';

  destinationText[2].innerHTML = 'Thor lorem thor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.';

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
