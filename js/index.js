// Your code goes here
alert('Welcome To The Fun Bus');

let banner = document.querySelector('.intro img');
let header = document.getElementsByClassName('intro');
let headerTitle = document.querySelector('.main-navigation');

banner.addEventListener('mouseenter', change);
banner.addEventListener('mouseleave', original);
headerTitle.addEventListener('mouseover', headerBackground);

function change(){
  if(banner.src='../img/fun-bus.jpg'){
    banner.src = '../img/thor-banner.jpg';
  }
}

function original(){
  if(banner.src='../img/thor-banner.jpg'){
    banner.src = '../img/fun-bus.jpg';
  }
}

function headerBackground(){
  headerTitle.style.backgroundColor = 'rgb(48, 186, 30)';
}


function changeHeader(){}
