// Your code goes here


let signUpButton = document.querySelectorAll('.destination > .btn');
console.log(signUpButton);

let bottomImage = document.querySelector('.content-destination > img');
console.log(bottomImage);

//changes images towards bottom when clicked 1

signUpButton[0].addEventListener('click', () => {
	bottomImage.src =
		'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&h=350';
});

signUpButton[1].addEventListener('click', () => {
	bottomImage.src =
		'https://www.worldatlas.com/r/w728-h425-c728x425/upload/66/14/d8/kangchenjunga.jpg';
});

signUpButton[2].addEventListener('click', () => {
	bottomImage.src =
		'https://www.islands.com/sites/islands.com/files/styles/1000_1x_/public/images/2018/07/remote-caribbean-islands-01-bequia-shutterstock.jpg?itok=ZGzw-tYu&fc=50,50';
});

//when a button at the bottom is double click creates alert 2
for (var i = 0; i < signUpButton.length; i++) {
	signUpButton[i].addEventListener('dblclick', () => {
		alert('Please click only once');
	});
}

let bottomH4 = document.querySelectorAll('div.destination > h4');

//changes color to bottom h4's when moused over 3

bottomH4[0].addEventListener('mouseover', () => {
	bottomH4[0].style.color = 'orange';
});

bottomH4[1].addEventListener('mouseover', () => {
	bottomH4[1].style.color = 'red';
});

bottomH4[2].addEventListener('mouseover', () => {
	bottomH4[2].style.color = 'blue';
});

// changes the color of the h1 when the mouse exits 4

let headline = document.querySelector('div.container > h1');

headline.addEventListener('mouseleave', () => {
    headline.style.color = 'yellow';
    headline.style.fontSize = '48px';
});

//send a message when anything within the body is copied 5
let bodySelector = document.querySelector('body');
console.log(bodySelector);

bodySelector.addEventListener('copy', () => {
	alert(
		'Would you like us to email you more information? Click contact so we can email you'
	);
});
//changes background color on wheel scroll 6
bodySelector.addEventListener('wheel', () => {
    bodySelector.style.backgroundColor = 'lightblue'})


//plays bus sound when img is right clicked 7
let firstImage= document.querySelector('div.container img');

let audio = document.getElementById('sound');

console.log(audio);

console.log(firstImage)


let sound = () => {
audio.play();
}
firstImage.addEventListener('contextmenu', sound );


// changes background picture on header when bus is dragged 8 
let headerBG= document.querySelector('header')
let dragBus = () =>{
headerBG.style.backgroundImage = "url('https://www.telegraph.co.uk/content/dam/Travel/2017/February/europe-beaches-Playa%20de%20Muro%20Beach-AP.jpg')";
headerBG.style.color= "yellow";

}
firstImage.addEventListener('drag',dragBus);


let navItems= document.querySelectorAll(".nav-link");

//changes color of home link when mouse down 9 
let changeLinkColor = (event) =>{
event.preventDefault();
navItems[0].style.color = 'red' ;
}

navItems[0].addEventListener('mousedown', changeLinkColor);













// anime({
//     targets:".logo-heading",
//     translateX: 300,
//     duration: 2000,
//     loop: 1, // Play the animation 3 times
//     direction: 'reverse', // Play the animation in reverse
//     autoplay: false// Animation paused by default
//   });

 
// headline.addEventListener("click",function(e){
//      anime.play();
//  }); 






