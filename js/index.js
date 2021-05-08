//_______________ Dark Mode Toggle ________________


const buttonClick = document.querySelector('#theButton');

buttonClick.addEventListener("click", function() {
    const color = document.body.style.backgroundColor;

    if (color === 'rgb(193, 214, 226)') {
        document.body.style.backgroundColor = "grey";
    }
    else {
        document.body.style.backgroundColor = "rgb(193, 214, 226)";
    }
});


//______________________________________________________________

// _____ QSA = Nodelist of 4 ____ QS 1 whole element ____

// const navLinks = document.querySelector('nav a'); 
// console.log(navLinks); 

// navLinks.addEventListener('mouseenter', () => {
//     navLinks.style.transform ="scale(1.2)";

// });
// #################################################################
// _______________ Nav enlarge via mouse enter. ____________________


const navLinks = document.querySelectorAll('nav a'); // Nodelist of 4.

navLinks.forEach(link => {                           // Iterates over the Nodelist of 4.
    link.addEventListener('mouseenter', () => {      // Listens for a mouse enter.
        link.style.transform ="scale(1.05)";         // Does something when something is heard.
        // navLinks.style.transition = "all 0.8s"    // Have no clue why Dan used this!
        link.style.color = "blue";                   // Changes link color on hover.
    });
});


// _____________ Nav back to normal with mouse leave. _______________


navLinks.forEach(link => {                           // Iterates over the Nodelist of 4.  
    link.addEventListener('mouseleave', () => {      // Listens for a mouse enter.
        link.style.transform ="scale(1)";            // Does something when something is heard.
        link.style.color  = "black";                 // Changes link color back.  
    });
});
 

//______ Event Propagation - Background color change on click anywhere ______

// Body QS selects body.
// "event.target" targets the smallest child element. 
// Without "event.target" it would not function properly.


// const body = document.querySelector("body");            

// body.addEventListener('click', (event) => {
//     event.target.style.backgroundColor = "rgb(111, 123, 161)";
// });


//_____ Event Propagation - Background color revert on dblclick anywhere ____


// body.addEventListener('dblclick', (event) => {
//     event.target.style.backgroundColor = "rgb(164, 186, 199)";
// });


//_____________ Rounding the corners on the main image _________________


const mainImage = document.querySelector('.intro img');
// console.log(mainImage); // Image element.

mainImage.style.borderRadius = "10px";






//_________________ Sad Bus on click (header) ___________________


const sadBus = document.querySelector(".logo-heading");

// console.log(sadBus);

sadBus.addEventListener('click', () => {
    sadBus.textContent = "Sad Bus";
    sadBus.style.color = "red";
});


//______________ Main H2 text change ________________

const disfunctional = document.querySelector('.intro h2')

// console.log(disfunctional);

disfunctional.addEventListener('click', () => {
    disfunctional.textContent = "We put the fun in disfunction!";
    disfunctional.style.color = "red";
});


// ___________ 1st section text change _____________


const lost = document.querySelector('.text-content h2');

// console.log(lost);

lost.addEventListener('click', () => {
    lost.textContent = "Let's get lost";
    lost.style.color = "red";
});


//___________________ 2nd section text change. _______________


const strange = document.querySelectorAll('.text-content h2')[1];

// console.log(strange);

strange.addEventListener('click', () => {
    strange.textContent = 'Strange things await.';
    strange.style.color = 'red';
});

// _______________3rd section text change _______________


const shotOuts = document.querySelector('.content-destination h2');

// console.log(shotOuts);

shotOuts.addEventListener('click', () => {
    shotOuts.textContent = 'Shot outs to! ...'
    shotOuts.style.color = 'red';
});


//____________ Name text change ________________

const summer = document.querySelector('.destination h4');

// console.log(summer);

summer.addEventListener('click', () => {
    summer.textContent = 'Summer!';
    summer.style.color = 'red';
}); 

// Stephanie

const stephanie = document.querySelectorAll('.destination h4')[1];
stephanie.addEventListener('click', () => {
    stephanie.textContent = 'Stephanie!';
    stephanie.style.color = 'red';
}); 


// Amlak

const amlak = document.querySelectorAll('.destination h4')[2];


amlak.addEventListener('click', () => {
    amlak.textContent = 'Amlak';
    amlak.style.color = 'red';
}); 






















































