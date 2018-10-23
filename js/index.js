// Your code goes here
const introImg = document.querySelector('#intro-img');
const logoHeading = document.querySelector('.intro-heading');
const contentImg = document.querySelector('.content-img');
const paragraph = document.querySelector('#test');
const funImage = document.querySelector('.img-fluid');

// 1 - mouseover
introImg.addEventListener('mouseover', (event) => {
    TweenMax.to(introImg, 2, {
        scale: 1.05,
        ease: Elastic.easeOut.config(1, 0.3), 
        x: 100 
    });
});

// 2 - double click 
introImg.addEventListener('dblclick', (event) => {
    TweenMax.to(introImg, 2, {
        scale: 1,
        ease: Bounce.easeOut, 
        x: 0 
    });
});


// 3 wheel
logoHeading.addEventListener('wheel', (event) => {
    TweenMax.to(logoHeading, 4, {
        // ease: SlowMo.ease.config(0.7, 0.7,  false),
        left: 300,
        backgroundColor: '#FFD800',
        padding: 20,
        borderColor: '#FF0000',
        borderRadius: 10,
        marginBottom: 10
    })
});


// 4 Mouseleave
contentImg.addEventListener('mouseleave', (event) => {
    TweenMax.to(contentImg, 2, {
        ease: Power4.easeOut, 
        padding: 10,
        borderColor: '#FF0000',
        borderWidth: 10,
        borderStyle: 'solid',
        marginBottom: 10
    })
});


// 5 MouseOut 
paragraph.addEventListener('mouseout', (event) => {
    event.target.style.color = "red";
});

// 6 Click 
funImage.addEventListener('click', (event) => {
    TweenLite.to(funImage, 2.5, { ease: Circ.easeOut, x: -50 });
});



// TweenMax.from(".logo", 0.5, {
//     opacity: 0,
//     scale: 0,
//     ease:Bounce.easeOut



// 7 focus
// 5 drag / drop
// 6 load

// 8 resize
// 9 scroll
// 10 select

// 11 keydown