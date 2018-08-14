// Your code goes here
const destination = document.querySelectorAll('.destination');
const mainNav = document.querySelector('.main-navigation');
const welcome = document.querySelectorAll('h2')[0];
const welcomeP = document.querySelectorAll('p')[0];
const letsGoP = document.querySelectorAll('p')[1];
const adventureP = document.querySelectorAll('p')[3];
const destination1 = document.querySelectorAll('.destination')[0];
const destinationP = document.querySelectorAll('p')[5];
const btn1 = document.querySelectorAll('.btn')[0];
let elem = document.documentElement;
const destination2 = document.querySelectorAll('.destination')[1];
const mountainP = document.querySelectorAll('p')[7];
const navA = document.querySelectorAll('.nav a');
const container = document.querySelector('.container');
const keyDown = document.querySelector('#keyDown');


//mouse over event to all destination class holders
for (let i = 0; i < destination.length; i++){
	destination[i].addEventListener('mouseover', () => {
		destination[i].style.border = "solid black 1px";
		destination[i].style.padding = "1%";
	})
}

//mouse out event to all destination class holders
for (let i = 0; i < destination.length; i++){
	destination[i].addEventListener('mouseout', () => {
		destination[i].style.border = "none";
		destination[i].style.padding = "0";
	})
}


window.addEventListener("resize", () => {
	mainNav.style.backgroundColor = 'blue';
});

welcome.addEventListener("dblclick", () => {
	welcome.style.fontSize = "6rem";
})

welcome.addEventListener('change', () => {
	welcomeP.style.color = 'blue';
})

welcomeP.addEventListener('copy', () => {
	alert("Your such a copy cat!")
});

letsGoP.addEventListener('contextmenu', () => {
	alert("right clicking huh. Ok I see what you did there");
});

adventureP.addEventListener('mousemove', (e) => {
	var x = e.clientX;
  var y = e.clientY;
  var coor = "Coordinates: (" + x + "," + y + ")";
  adventureP.innerHTML = coor;
})

adventureP.addEventListener('mouseout', () => {
	adventureP.innerHTML = "<p>Adventure webdesign pretty design design, excursion cute WordPress blogger design webdesign adventure. Pretty simple traveling fun WordPress wanderlust darn simple organized.</p>";
});


    
btn1.addEventListener("click", () => {
	if (elem.webkitRequestFullscreen){
		elem.webkitRequestFullscreen();
	}
})

document.addEventListener('webkitfullscreenchange', () => {
	destinationP.innerHTML = "";
});

destination2.addEventListener('click', (e) => {
	welcome.style.backgroundColor = 'red';
})

mountainP.addEventListener('click', (e) => {
	welcomeP.style.backgroundColor = "yellow";
	e.stopPropagation();
});

for(let i = 0; i < navA.length; i++){
	navA[i].addEventListener('click', (e) => {
		e.preventDefault();
	})
}

keyDown.addEventListener('keydown', () => {
	keyDown.style.backgroundColor = 'red';
})

keyDown.addEventListener('blur', () => {
	keyDown.style.backgroundColor = 'white';
})



