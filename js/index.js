// Your code goes here
 // "addEventListener" pointerover
const header = document.querySelector('header');
 header.addEventListener('pointerover', event => {
    event.target.style.fontWeight = '900';
})

// "addEventListener"  pointerdown
header.addEventListener('pointerdown', event => {
    event.target.style.backgroundColor = 'teal';
});
// "addEventListener"  pointerup
header.addEventListener('pointerup', event => {
    event.target.style.backgroundColor = '';
});





    // change "Fun Bus" h1. 
    // "addEventListener"  load
const funBusTitle = document.querySelector('.logo-heading');
    window.addEventListener('load', (event) => {
        funBusTitle.style.color = '#FEBE50';
        funBusTitle.style.fontSize = '6.66rem';
        funBusTitle.style.textShadow = '2px 1px 2px #000';
        funBusTitle.style.transition = '3s 300ms ease-in-out';
    });


    // change nav links 
    // "addEventListener" keydown/keyup

const links = document.querySelectorAll('.nav-link');
    function colorSmash(event){
        event.preventDefault();
        links.forEach(item => {
            item.style.color = '#FEBE50';
            item.style.backgroundColor = 'dodgerBlue';
            item.style.padding = '5%';
            item.style.borderRadius = '5px';
            item.style.transition = '1s linear';
        });
    };
    window.addEventListener('keydown', colorSmash);



    // "addEventListener" keyup

    function colorRemove(event){
        event.preventDefault();
        links.forEach(item => {
            item.style.color = '';
            item.style.backgroundColor = '';
            item.style.padding = '';
            item.style.borderRadius = '50px';
            item.style.transition = '1s linear';
        });
    };
    window.addEventListener('keyup', colorRemove);


    // change bus on beach image
    // "addEventListener" mouseover/mouseleave

const busImg = document.querySelector('.intro img');
    busImg.addEventListener('mouseover', event => {
        busImg.style.filter = 'blur(3px)';
        busImg.style.transition = '1s';
    });
    // mouseleave 
    busImg.addEventListener('mouseleave', event => {
        busImg.style.filter = '';
        busImg.style.transition = '1s';
    });

    // change h2
    // "addEventListener" wheel

const cHomeH2 = document.querySelectorAll('h2');
    function goWide(){
        cHomeH2.forEach(item => {
            item.style.color = '#FEBE50';
            item.style.textShadow = '2px 1px 2px #000';
            item.style.letterSpacing = '.7rem';
            item.style.transition = '1s 2s ease-out';
        });
    };
    document.addEventListener('wheel', goWide);

    // change intro p
    // "addEventListener" click

const introP = document.querySelector('.intro');
    introP.addEventListener('click', event => {
        event.target.style.backgroundColor = 'skyBlue';
    });


    // change img-content img 1
    // "addEventListener" dblclick

const midRightImg = document.querySelector('.img-content img:nth-of-type(1)');
    midRightImg.addEventListener('click', event => {
        event.target.style.filter = 'brightness(50%)';
        event.target.style.transition = '2s linear';
        event.stopPropagation();
    });


    // change paragraph elements
    // "addEventListener" copy
const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.addEventListener('copy', event => {
            console.log('Plagiarism is the highest form of flattery.');
        });
    }); 
    // "addEventListener" paste
    paragraphs.forEach(p => {
        p.addEventListener('paste', event => {
            console.log('I\'m just gonna put this riiiiight here...');
        });
    });

