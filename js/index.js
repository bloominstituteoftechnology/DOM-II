// Your code goes here
//click Event:******************************************************************************
const allSections = document.querySelectorAll('section');

allSections.forEach((banana) => {
    return banana.addEventListener('click', function(event) {
        event.stopPropagation();
        event.target.style.backgroundColor = 'BlanchedAlmond';
    });

});
//right click, context menue event:*********************************************************
allSections.forEach((banana) => {
    return banana.addEventListener('contextmenu', function(event) {
        event.stopPropagation();
        event.target.style.backgroundColor = 'white';
    });

});



// const allPs = document.querySelectorAll('p');

//Mouse enter and leave couple events: ****************************************************************************
const allH2s = document.querySelectorAll('h2');

// console.log(allH2s[0]);

allH2s.forEach((monkey) => {
    monkey.addEventListener('mouseenter', function(event) {
        event.target.style.fontSize = "4rem";
        event.target.style.backgroundColor = "yellow";
    });
});

const allH2s1 = document.querySelectorAll('h2');

allH2s1.forEach((monkey) => {
    monkey.addEventListener('mouseleave', function(event) {
        event.target.style.fontSize = "2rem";
        event.target.style.backgroundColor = "white";

    });

});

// header manipulations:
const allHeader = document.querySelector('.main-navigation');


console.log(allHeader);
allHeader.addEventListener('dblclick', function(event) {
    event.stopPropagation();
    event.preventDefault();
    event.target.style.color = '#66391b';
    event.target.style.fontSize = '4.6rem';
    event.target.prompt();
});

//the footer becomes larger than any other text when it is "wheeled over" by the mouse scroll button.********
const footie = document.querySelector('.footer p');
footie.addEventListener('wheel', function(event) {
    event.stopPropagation();
    event.target.style.fontSize = "6.0rem";

});


//allPics. Will have a border when Double clicled.

const allPics = document.querySelectorAll('img');

allPics.forEach((monkeyb) => {
    return monkeyb.addEventListener('dragstart', function(event) {
        event.stopPropagation();
        event.target.style.borderRadius = '50px';
        //border = "2px solid teal";

    });
});

allPics.forEach((monkeyb) => {
    return monkeyb.addEventListener('dragend', function(event) {
        event.stopPropagation();
        event.target.style.borderRadius = '30px';
        //border = "2px solid teal";

    });
});

// const allPics = document.querySelectorAll('img');
const allPs = document.querySelectorAll('p');
allPs.forEach((coconut) => {
    return coconut.addEventListener('scroll', function(event) {
        event.stopPropagation();
        event.target.style.fontSize = "3.0rem";
        //border = "2px solid teal";

    });

});


allPs.forEach((coconut2) => {
    return coconut2.addEventListener('keypress', function(event) {
        event.stopPropagation();
        event.target.style.fontSize = "2.0rem";
        //border = "2px solid teal";

    });

});

//keydown;
//volumechange;


// const allSections1 = document.querySelectorAll('section');


// allPics.classlist.toggle('displayNone');

// //allPics.
// allPics.addEventListener('dblclick', function(event) {
//     event.stopPropagation();
//     event.target.style.border = "2px solid teal"

// });

// // allH2s.addEventListener('dblclick'),
// //     function(e) {

// //     });

// //make the right context menue no longer active on the site.



// //enlarge text while its being selected.



// // const myButton = document.querySelector ('.btn');


// // myButton.addEventListener('mouseleave', function (event) {
// //     prompt('where is your mouse going?');
// // });

// const allSections = document.querySelectorAll('section');

// allSections.addEventListener('click', function(event) {
//     event.stopPropagation();
//     event.target.style.backgroundColor = BlanchedAlmond;
// });

// .addEventListener('click', function(event) {
//     event.stopPropagation();
//     event.target.style.backgroundColor = BlanchedAlmond;
// });

//var c = document.body.childNodes;