// Your code goes here

// * [ ] `mouseover`
// mouse over the nav links
const navigation = document.querySelectorAll(".nav-link");
navigation.forEach(el => {
    el.addEventListener('mouseover', () => {
        event.preventDefault();
        el.style.color = 'green';
    })
})


// * [ ] `mouseout`
// mouse out of the nav links
navigation.forEach(el => {
    el.addEventListener('mouseout', (event) => {
        el.style.color = 'black';
    })
})


// Stop Propagation
//changing the background color of the intro class section 
const intro = document.querySelector('.intro');
intro.addEventListener('mouseover', () => {
    intro.style.background = '#FAFAD2';
})
intro.addEventListener('mouseout', () => {
    intro.style.background = '#ffffff';
})

// then using stoppropogation to cancel the section background change 
// and zoom out only the image of .intro class when the image is moused over
const prop = document.querySelector('.intro img');
prop.addEventListener('mouseover', () => {
    event.stopPropagation();
    prop.style.transform = 'scale(0.9)'
})

prop.addEventListener('mouseout', () => {
    event.stopPropagation();
    prop.style.transform = 'scale(1)'
})

// changing the other sections
const intro2 = document.querySelector('.content-destination');
intro2.addEventListener('mouseover', () => {
    intro2.style.background = '#FAFAD2';
})
intro2.addEventListener('mouseout', () => {
    intro2.style.background = '#ffffff';
})

const intro3 = document.querySelector('.content-section');
intro3.addEventListener('mouseover', () => {
    intro3.style.background = '#FAFAD2';
})
intro3.addEventListener('mouseout', () => {
    intro3.style.background = '#ffffff';
})

const intro4 = document.querySelector('.inverse-content');
intro4.addEventListener('mouseover', () => {
    intro4.style.background = '#FAFAD2';
})
intro4.addEventListener('mouseout', () => {
    intro4.style.background = '#ffffff';
})


// * [ ] `keydown`
// on key down the backround of the page changes
document.addEventListener('keydown', (event) => {
    document.querySelector('.main-navigation').style.background ='#FFE4B5';
    document.querySelector('body').style.background = '#FFFFE0';
    event.stopPropagation();
})


// * [ ] `keyup`
// reset the background of the page on key up
const headerColor = document.querySelector('.main-navigation');
document.addEventListener('keyup', (event) => {
    headerColor.style.background ='#ffffff';
    document.querySelector('body').style.background = '#ffffff';
})


// * [ ] `wheel`
// when wheeled over the images on the content-section class
// the images will zoom out
const image = document.querySelector('.img-content');
const image2 = document.querySelector('.img-fluid');
image.addEventListener('wheel', () => {
    image.style.transform = "scale(0.9)"
    
})
image2.addEventListener('wheel', () => {
    image2.style.transform = "scale(0.9)"
    
});


// * [ ] `click`
// button will change color and background
const button = document.querySelectorAll('.btn');
button[0].addEventListener('click', (event) => {
    // button.style.fontSize ="1.5rem";
    button[0].style.color = 'red'; 
    button[0].style.background = 'gray';

});
button[1].addEventListener('click', (event) => {
    // button.style.fontSize ="1.5rem";
    button[1].style.color = 'red'; 
    button[1].style.background = 'gray';

});
button[2].addEventListener('click', (event) => {
    // button.style.fontSize ="1.5rem";
    button[2].style.color = 'red'; 
    button[2].style.background = 'gray';

});


// * [ ] `load`
//console will print a message when page is fully loaded
window.addEventListener('load', (event) => {
    console.log('Fully loaded!');
});


// * [ ] `scroll`
//the navigation bar will change the background
window.addEventListener('scroll', () => {
    headerColor.style.background = "#FFFFE0";
})


// * [ ] `dblclick`
//the titles and paragraphs on .destionaion class will change color
const content = document.querySelectorAll(".destination h4");
document.addEventListener("dblclick", () => {
    for(var cont of content){
        cont.style.color = "orange";

    };
})

const content2 = document.querySelectorAll(".destination p");
document.addEventListener("dblclick", () => {
    for(var cont of content2){
        cont.style.color = "brown";

    };
})


// * [ ] `mouseenter`
// paragraph's font size will change
content2[0].addEventListener('mouseenter', () => {
    content2[0].style.transform = "scale(0.9)";
})
content2[1].addEventListener('mouseenter', () => {
    content2[1].style.transform = "scale(0.9)";
})
content2[2].addEventListener('mouseenter', () => {
    content2[2].style.transform = "scale(0.9)";
})


// * [ ] `mouseout`
// paragraph's font size will reset
content2[0].addEventListener('mouseout', () => {
    content2[0].style.transform = "scale(1)";
})
content2[1].addEventListener('mouseout', () => {
    content2[1].style.transform = "scale(1)";
})
content2[2].addEventListener('mouseout', () => {
    content2[2].style.transform = "scale(1)";
})