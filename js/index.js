// Your code goes here


/* FIRST EXAMPLE */
// On-click of 'Blog' button change text from 'Blog' to 'Whoa Dude'
const GrabNav = document.getElementsByClassName("nav-link");
console.log(GrabNav);

GrabNav[2].addEventListener("click", function(){
	let WhoaDude = "Whoa Dude";
	GrabNav[2].innerHTML = WhoaDude;
	}
	,false);

/* SECOND EXAMPLE */
// On mouse scroll down change text from rainbow selection of 6 colors
// Repeat colors upon "completeing" the array
// Meant to just color more text the more you scroll
const GrabText = document.querySelectorAll("p");
console.log(GrabText);

let iter1 = 0;
GrabText[iter1].addEventListener("mousemove",function(){
	// if the last color has been reached start over
	if(iter1 == 5){iter1 = 0;}
	let Colors = ["red","yellow","orange","green","blue","purple"];

	GrabText[iter1].style.color = Colors[iter1];

	iter1++;
	console.log("test");

	}
	,false);


/* THIRD EXAMPLE */
// If you move the mouse over the h1 element give an 
// -intense eradic color change

const GrabH1 = document.getElementsByTagName("h1");
console.log(GrabH1);

let iter2 = 0;
GrabH1[0].addEventListener("mouseover",function(){
	if(iter2 == 3){iter2 = 0;}
	let Colors = ["green","blue","yellow"];
	GrabH1[0].style.color = Colors[iter2];
	iter2++;

	}
	,false);

/* FOURTH EXAMPLE */
// Double click to increase text size of first h2
const GrabH2 = document.getElementsByTagName("h2");
console.log(GrabH2);

let size = 13;
let FontSize = (size+"px");
GrabH2[0].addEventListener("dblclick",function(){
	size = size * 3;
	GrabH2[0].style["font-size"] = "120px";
	}
	,false);

/* 5TH EXAMPLE */
// Change background color of "home" when a 'right-click' is made over it

GrabNav[0].addEventListener("contextmenu",function(){
	GrabNav[0].style["background-color"] = "green";
	}
	,false);

/* SIXTH EXAMPLE */
// If the mouse leaves the 'about us' text change font-size to 40px
GrabNav[1].addEventListener("mouseleave",function(){
	GrabNav[1].style["font-size"] = "40px";
	}
	,false);


/* SEVENTH EXAMPLE */
// When the mouse is released over 'contact'
GrabNav[3].addEventListener("mouseup",function(){
	GrabNav[3].style.color = "blue";
	}
	,false);

/* EIGHTH EXAMPLE */
GrabImg = document.getElementsByTagName("img");

// Make the fun-bus image really tiny if you click over it
GrabImg[0].addEventListener("mousedown",function(){
	GrabImg[0].style.padding = "300px";
	}
	,false);


/* NINTH EXAMPLE */
// If the mouse enters the second images dimentions shrink it
GrabImg[1].addEventListener("mouseenter",function(){
	GrabImg[1].style.padding = "75px";
	// Second nesting
	GrabImg[1].addEventListener("mouseenter",function(){
		GrabImg[1].style.padding = "30px";
	}
	,false);
	}
	,false);


/* TENTH EXAMPLE */
// If the mouse wheel is scrolled over the third img shrink it
GrabImg[2].addEventListener("wheel",function(){
	GrabImg[2].style.padding = "90px";
	// First nest
	GrabImg[2].addEventListener("wheel",function(){
		GrabImg[2].style.padding = "60px";
	}
	,false);
	}
	,false);

// Prevent Default of Nav
for(let i=0;i<GrabNav.length;i++){
	GrabNav[i].addEventListener("click",function(event){
		console.log(GrabNav[i]+" PAGE NULL");
		event.preventDefault();
	}
	,false);
}


/* END OF FILE */
