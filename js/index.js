// Your code goes here
// Random animation
let headingAnimation = document.querySelector(".logo-heading");
function colorGenerator() {
    let min = 0;
    let max = 300;

    let colorR = Math.floor(Math.random() * (max-min + 1)) + min;
    let colorG = Math.floor(Math.random() * (max-min + 1)) + min;
    let colorB = Math.floor(Math.random() * (max-min + 1)) + min;

    return `rgb(${colorR}, ${colorG}, ${colorB})`;
}

headingAnimation.addEventListener('click', () => {
    headingAnimation.style.transitionProperty = 'color';
    headingAnimation.style.transition = 'ease-in';
    headingAnimation.style.color = colorGenerator()
})

headingAnimation.addEventListener('click', () => {
    headingAnimation.style.transitionProperty = 'color';
    headingAnimation.style.transition = '5s ease-out';
    headingAnimation.style.color = colorGenerator();
})

// Mouseover
let h2Animation = document.querySelectorAll('h2');

h2Animation.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        element.style.transitionProperty = 'color';
        element.style.transition = 'ease-in';
        element.style.color = 'purple';
    });
    element.addEventListener('mouseout', (event) => {
        element.style.transitionProperty ='color';
        element.style.transition = '3s ease-out';
        element.style.color = 'black';
    });
    element.addEventListener('click', (event) => {
        event.preventDefault()
    });
});

// keydown
const newTextAdded = document.querySelector('.text-content, p');
document.addEventListener('keydown', logKey);
function logKey(e) {
    newTextAdded.textContent += ` ${e.code}`;
}

// wheel
const destinationImg = document.querySelector('.content-destination img');
function zoom(event) {
    event.preventDefault();
    destinationImg.style.transform = 'scale(3)';
}
destinationImg.addEventListener('wheel', zoom);

// drag and drop
const imageContent = document.querySelectorAll('.img-content img');
textContent = document.querySelectorAll('.text-content');
contentSectionDiv = document.querySelectorAll('.content-section div');

imageContent.forEach(img=> {
    contentSectionDiv.forEach(item => {
        function dragStart() {
            item.style.border = 'none';
        }

        function dragEnter(event) {
            event.preventDefault();
            item.style.border = '5px dashed green';
        }
        function dragOver(event) {
            event.preventDefault();
            item.style.border = '5px dashed green';
        }
        function dragLeave() {
            item.style.border = 'none';
        }
        function dragDrop() {
            item.append(img);
        }

    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
    });
});

// load
function alertLoaded(event) {
    alert('Page Loaded!');
}

window.addEventListener('load', alertLoaded);

// select
const header = document.querySelector('.main-navigation');
logoHeading = document.querySelector('.logo-heading');

function insertInput(event) {
    event.stopPropagation();
    console.log('logo heading clicked');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('value', 'FUN Bus!!!');

    header.prepend(input);

    function paragraphChange(event) {
        const paragraphs = document.querySelectorAll('p');
        selection = event.target.value.substring(
            event.target.selectionStart,
            event.target.selectionEnd
        );

        paragraphs.forEach(paragraph => {
            paragraph.textContent = selection;
        });
    }

    input.addEventListener('select', paragraphChange);
}
function checkPropPropagation() {
    console.log('Header Clicked');
}

// resize
const body = document.querySelector('body');

window.addEventListener('resize', () => {
    body.style.background = '#87CEFA';
})

// double click
const firstButton = document.querySelectorAll('.btn');
firstButton[0].addEventListener('dblclick', event => {
    event.target.style.border = '10px solid purple';

    setTimeout(function() {
        event.target.style.display = "";
    }, 300);
});

// day/night mode
const body = document.querySelector('body');
body.addEventListener('dblclick', () => {
    if (body.style.backgroundColor =='grey') {
        body.style.backgroundColor = 'white';
        nav.style.backgroundColor = 'white';
        document.querySelector('header').style.backgroundColor = 'white';
        body.style.color = 'black';
        document.querySelector('header').style.color = 'black';
    } else {
        body.style.backgroundColor = 'grey';
        nav.style.backgroundColor = 'grey';
        document.querySelector('header').style.backgroundColor = 'grey';
        body.style.color = 'white';
        document.querySelector('header').style.color = 'white';
    }
});