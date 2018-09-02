// Your code goes here
const moveOverNav = document.querySelectorAll(".nav-link");

// doesnt work (finally figured out if statements in incorrect location)

// moveOverNav.forEach(function(element){
//     if (element.style.color === ''){
//         element.addEventListener('mouseover', function(event){
//             event.target.style.backgroundColor = 'dodgerblue';
//             event.target.style.color = 'white';
//             event.target.style.fontSize = '3.5rem';
//         })
//     } else if (element.style.color === 'white'){
//         element.addEventListener('mouseout', function(event){
//           event.target.style.backgroundColor = ''; 
//           event.target.style.color = '';
//           event.target.style.fontSize = '';
//         })
//     };
// });

//works (with if statments)
moveOverNav.forEach(function(element){
    element.addEventListener('mouseenter', function(event){
        if (this.style.color === ''){
            event.target.style.backgroundColor = '#17A2B8';
            event.target.style.color = 'white';
            event.target.style.fontSize = '3.5rem';
            event.target.style.padding = '3%';
            event.target.style.borderRadius = '15px';
            event.preventDefault();
        }
    })
    element.addEventListener('mouseleave', function(event){
        if (this.style.color === 'white'){
            event.target.style.backgroundColor = '';
            event.target.style.color = '';
            event.target.style.fontSize = '';
            event.target.style.padding = '';
            event.target.style.borderRadius = '';
            event.preventDefault();
        }
    }) 
});

//also works (w/o if statements)
// moveOverNav.forEach(function(element){
//     element.onmouseover = function(event){
//         event.target.style.backgroundColor = '#17A2B8';
//         event.target.style.color = 'white';
//         event.target.style.fontSize = '3.5rem';
//         event.target.style.padding = '3%';
//         event.target.style.borderRadius = '15px';
//     };
//     element.onmouseout = function(event){
//         event.target.style.backgroundColor = '';
//         event.target.style.color = '';
//         event.target.style.fontSize = '';
//         event.target.style.padding = '';
//         event.target.style.borderRadius = '';
//     };
// });

const wholePage = document.querySelector("body");
// wholePage.onload = function(event){
//     alert('Welcome to Fun Bus webpage! This page is currently under Beta testing, so for any additional info please contact (123)-456-7890. Sorry for any inconvenience.');
// };
const hexChars = '0123456789ABCDEF'
function randomColor() {
	let hexCode = '#';
	for(i=0; i<=5; i++) {
  	    let randomNum = Math.floor(Math.random() * 16);
        hexCode += hexChars[randomNum];
    }
  return hexCode;
};
wholePage.onkeypress = function(){
    let newHexCode = randomColor();
    wholePage.style.backgroundColor = newHexCode;
};
wholePage.onbeforeprint = function(event){
    event.target.style.backgroundColor = '';
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach(function(element){
    element.onclick = function(event){
        alert('Webpage incomplete. Please contact (123)-456-7890 for sign up information.')
    }
});

const allTextContent = document.querySelectorAll("p");
// (better way below lines 101-110)
// allTextContent.forEach(function(element){
//     element.onwheel = function(event){
//         event.target.style.fontSize = "3.5rem";
//     }
//     element.onmouseout = function(event){
//         event.target.style.fontSize = '';
//     }
// });

allTextContent.forEach(function(element){
    element.addEventListener('wheel', function(){
        if (this.style.fontSize === ''){
            this.style.fontSize = '3.5rem';
        }
        else {
            this.style.fontSize = '';
        }
    })
});

const allImages = document.querySelectorAll("img");
allImages.forEach(function(element){
   element.addEventListener('dblclick', function(event){
       if (this.style.width === '50%'){
           this.style.width = '';
       }
       else {
           this.style.width = '50%';
       }
   })
});

allImages.forEach(function(element){
    element.addEventListener('dragstart', function(event){
        alert("Sorry but images currently can't be moved. Try again once webpage is out of Beta Testing. Sorry for the inconvenience.")
    })
});

