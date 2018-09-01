// Your code goes here
alert('Welcome To The Fun Bus');

let title = document.getElementsByClassName('logo-heading');
for (let i = 0; i < title.length; i++){
  title[i].addEventListener('mouseenter', changeTitle);
  title[i].addEventListener('mouseleave', originalTitle);
}

// navigation links
let links = document.getElementsByClassName('nav-link');
for(let i = 0; i < links.length; i++){
  links[i].addEventListener('mouseenter', changeLinks);
  links[i].addEventListener('mouseleave', originalNav);
}

let navigation = document.getElementsByClassName('nav');
let headerBackground = document.getElementsByClassName('main-navigation');

// fun bus banner
let banner = document.querySelector('.container .intro img');
banner.addEventListener('mouseover', changeBanner);

// main h2 and paragraph
let mainTitle = document.querySelector('.home .intro h2');
mainTitle.addEventListener('mouseover', newTitle);
let mainText = document.querySelector('.home .intro p');
mainText.addEventListener('mouseover', newTitle);

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

// section header
let textHeaders = document.querySelectorAll('.text-content h2');
for (let i = 0; i < textHeaders.length; i++){
  textHeaders[i].addEventListener('mouseenter', mainHeaders);
}

function mainHeaders(){
  textHeaders[0].innerHTML = 'Thor';
  textHeaders[1].innerHTML = 'Avengers';
}

// section text
let sectionText = document.querySelectorAll('.text-content p');
for(let i = 0; i < sectionText.length; i++){
  sectionText[i].addEventListener('mouseenter', textContent)
}

function textContent(){
  sectionText[0].innerHTML = 'At last the great hall was filled with asgardians waiting for a glimpse of the new king. ';
  sectionText[1].innerHTML = 'Queen frigga sat at her vanity putting her jewellery on in the mirror she saw her husband turn and walk to the centre of the chamber. His blue eyes were dark with worry. ';
  sectionText[2].innerHTML = 'Labeled "Earth\'s Mightiest Heroes", the Avengers originally consisted of Ant-Man, the Hulk, Iron Man, Thor, and the Wasp. Ant-Man had become Giant-Man by issue #2. The original Captain America was discovered trapped in ice in issue #4, and joined the group after they revived him.';
}


function changeTitle(){
  title[0].innerHTML = 'Thor Ragnarok';
  headerBackground[0].style.backgroundColor = 'rgb(31, 168, 23)';
}

function originalTitle(){
  if(title[0].innerHTML = 'Thor'){
      title[0].innerHTML = 'Fun Bus';
  }
}

function changeLinks(){
  links[0].innerHTML = 'Thor Home';
  links[1].innerHTML = 'Valhalla';
  links[2].innerHTML = 'About Thor';
  links[3].innerHTML = 'Contact Avengers';
  title[0].innerHTML = 'Thor Ragnarok';
  navigation[0].style.width = ('500px');
}

function originalNav(){
  links[0].innerHTML = 'Home';
  links[1].innerHTML = 'About Us';
  links[2].innerHTML = 'Blog';
  links[3].innerHTML = 'Contact';
  navigation[0].style.width = ('350px');
  title[0].innerHTML = 'Fun Bus';
}

function changeBanner(){
  banner.src = '../img/thor-banner.jpg';
}

function newTitle(){
  mainTitle.innerHTML = 'Odin\'s tale';
  mainText.innerHTML = 'Odin Allfather did not act without thought. Now as the sun shone over asgard and the buildings were illuminated by it’s rays, gleaming like gold, he thought long and hard. At the realms edge, the darkness of the cosmos spread out like a calm sea. Asgard was at peace, and all was ready for the momentous events to come. Standing in his chambers, Odin stared out at the realm he had ruled for so many years.';
}


// function banner(){}
// function bannerOriginal(){}
// title[0].innerHTML = 'Thor Ragnarok';
// let links = document.getElementsByClassName('nav-link');
// console.log(links);
// links[0].innerHTML = 'Thor Home';
// links[1].innerHTML = 'Valhalla';
// links[2].innerHTML = 'About Thor';
// links[3].innerHTML = 'Contact Avengers';

// let navigation = document.getElementsByClassName('nav');
// navigation[0].style.width = ('500px');
//
// let banner = document.querySelector('.intro img');
// banner.src = '../img/thor-banner.jpg';
//
// let mainTitle = document.querySelector('.home .intro h2');
// console.log(mainTitle);
// mainTitle.innerHTML = 'Thor Ragnarok';
// let mainText = document.querySelector('.home .intro p');
// mainText.innerHTML = 'At last the great hall was filled with asgardians waiting for a glimpse of the new king. Attendants gave out golden glasses filled with the finest wine in the realm for the amazingly dressed guest’s when the horn sounded the start of the coronation Odin on the great throne that he would soon pass down to his oldest son Thor and Queen frigga on the balcony above and that’s when it happened Thor was walking down the isle and finally it was time. Without doubt he was a great warrior but a warror king, that was still a lesson to learn.';
//
// let middleHeader= document.querySelector('.text-content h2');
// console.log(middleHeader);
// middleHeader.innerHTML = 'Odin';
// let middleText = document.querySelectorAll('.text-content p');
// console.log(middleText);
// middleText[0].innerHTML = 'Despite the beauty before him, his mind was troubled and his expression drawn with worry and tension. As Allfather, Odin had battled great beasts , invaded foreign realms , destroyed strong enemies and kept the realm of asgard safe and peaceful. He had lost his brothers and father to war. For thousands of thousands of years he had carried the burden of his crown alone. It had worried him at times, energized him at others.';
// middleText[1].innerHTML = 'When he had married his wife Frigga the burden had lifted as she was a strong partner and had a helpful ear.';
