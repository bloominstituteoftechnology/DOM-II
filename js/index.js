// Your code goes here

// bus image will get rounded corners when mouse is on it and reverts when mouse leaves
let introImg = document.querySelector('.intro img');
introImg.addEventListener('mouseenter', (event)=>{
    console.log(`Top image has mouseentered.`);
    introImg.style.borderRadius = '10px';
});
introImg.addEventListener('mouseleave', (event)=>{
    console.log('Top image has mouse leaved.');
    introImg.style.borderRadius = 0;
});

// nav a's gets mouseenter event listener > changes to be underlined
// Stop the navigation from items from refreshing the page by using `preventDefault()`
let navAnchors = document.querySelectorAll('nav a');
navAnchors.forEach(anchor =>{
    anchor.addEventListener('mouseenter', (event)=>{
        console.log(`an anchor has mouseentered`);
        anchor.style.textDecoration='underline';
        event.preventDefault();
    });
});

// page gets keydown event listener > logo-heading gets background color changed and reverts
let page = document.querySelector('body');
let logoHeading = document.querySelector('.logo-heading');
let bool = true;
page.addEventListener('keydown', (event)=>{
    console.log('keydown occurred');
    if(bool){
        logoHeading.style.backgroundColor = 'red';
        bool = false;
    }else{
        logoHeading.style.backgroundColor = 'transparent';
        bool = true;
    }
});

// page gets wheel event listener > changes underlines of anchors
let i = 0;
page.addEventListener('wheel', (event)=>{
    console.log(`navAnchors[${i}]`);
    if(navAnchors[i].style.textDecoration=='underline'){
        navAnchors[i].style.textDecoration='none';
    }else{
        navAnchors[i].style.textDecoration='underline';
    }
    i++;
    if(i==navAnchors.length){
        i = 0;
    }
});

// first image gets drag/drop event listener > border radius changes
let contentImages = document.querySelectorAll('.img-content img');
contentImages[0].style.borderRadius = 0;
contentImages[0].addEventListener('drag', (event)=>{
    console.log('Drag event occured.');
    contentImages[0].style.borderRadius = '10px';
});

// load event listener on page > logo-heading gets proper size
logoHeading.style.fontSize = '1px';
window.addEventListener('load', (event)=>{
    console.log('loaded');
    logoHeading.style.fontSize = '4rem';
});

// resize event listener on window > changes background color on intro header
let introHeader = document.querySelector('.intro h2');
let resizeFlag = true;
window.addEventListener('resize', (event)=>{
    console.log('window got resized');
    if(resizeFlag){
        introHeader.style.backgroundColor = 'teal';
        resizeFlag = false;
    }else{
        introHeader.style.backgroundColor = 'transparent';
        resizeFlag = true;
    }
});

// scroll event listener on window > changes background color on intro paragraph
let introParagraph = document.querySelector('.intro p');
introParagraph.style.backgroundColor = 'green';
window.addEventListener('scroll', (event)=>{
    console.log('window got scrolled');
    introParagraph.style.backgroundColor = 'transparent';
});

// mouseover event listener on first content-section header > fix padding
let contentSectionHeaders = document.querySelectorAll('.content-section h2');
contentSectionHeaders[0].style.paddingBottom = 0;
contentSectionHeaders[0].addEventListener('mouseover', (event)=>{
    contentSectionHeaders[0].style.paddingBottom = '10px';
    console.log('mouseover on first content-section header');
});

// select event listener on second content-section header > fix font
contentSectionHeaders[1].style.fontFamily = 'Georgia, serif';
contentSectionHeaders[1].addEventListener('dblclick', (event)=>{
    contentSectionHeaders[1].style.fontFamily = 'Indie Flower, cursive';
    console.log('second content-section header double clicked');
    event.stopPropagation();
});
// Nest two similar events somewhere in the site and prevent the event propagation properly
let inverseContent = document.querySelector('.inverse-content .text-content');
let dblclickFlag = true;
inverseContent.addEventListener('dblclick', (event)=>{
    if(dblclickFlag){
        inverseContent.style.backgroundColor = 'yellow';
        dblclickFlag = false;
    }else{
        inverseContent.style.backgroundColor = 'transparent';
        dblclickFlag = true;
    }
});
