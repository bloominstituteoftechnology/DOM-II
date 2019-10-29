// Your code goes here

//mouseOver


const navChange = document.getElementsByClassName('nav-link')[0];

const nav = document.getElementsByTagName('nav')[0];
// console.log(nav);

navChange.addEventListener('mouseover', event => {
    console.log(event);
    console.log('See this? It works.');
    console.log(nav);
    nav.style.backgroundColor = "red";
});

//keyDown




//wheel


//drag or drop


//load



//focus


//resize - Not working

// const forMobile = window.getElementsByClassName('destination');

    window.addEventListener('resize', event => {
    console.log(event);
    console.log('forMobile works!');
    // div.destination.backgroundColor = "red";
});


//scroll
// const theyAreScrolling = document.getElementsByClassName('mainContainer');

window.addEventListener('scroll', function(event){
    console.log(event + 'They\'re scrolling..');
    // alert('Click OK if you have already read everything on this page.');
});

//select

const goingToAnotherPage = document.getElementsByClassName('nav-link');

goingToAnotherPage.addEventListener('select', event => {
    console.log(event);
    console.log('Yea, she works.');
});

//dblclick

const firstSignUp = document.getElementsByClassName('btn')[0];
firstSignUp.addEventListener('dblclick', event => {
    alert('Don\'t break your mouse! 1');
});

const secondSignUp = document.getElementsByClassName('btn')[1];
secondSignUp.addEventListener('dblclick', event => {
    alert('Don\'t break your mouse! 2!');
});

const thirdSignUp = document.getElementsByClassName('btn')[2];
thirdSignUp.addEventListener('dblclick', event => {
    alert('Don\'t break your mouse! 3!');
});