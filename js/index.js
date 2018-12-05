// buttons - hinge animation

const destBtn = document.querySelectorAll('.destination .btn');

for (let i = 0; i < destBtn.length; i++) {
    destBtn[i].addEventListener('mousedown', (event) => {
        event.target.style.animation = 'hinge 1s ease-in-out 0s 1 alternate';
    });
}

// Navigation Links - Hover Color - No refresh

const navLinks = document.querySelectorAll('a');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('mouseover', (event) => {
        event.target.style.color = 'green';
        event.target.preventDefault;
    });
}

// Page images on load flip in

const imgapp = document.querySelectorAll('img');

for (let i = 0; i < imgapp.length; i++) {
    imgapp[i].addEventListener('load', (event) => {
        event.target.style.animation = 'flipInX 1s linear 0s 1 alternate';
    });
}

// h2 font size manipulation

// const h2fun = document.querySelectorAll('p');

// for (let i = 0; i < h2fun.length; i++){

//     h2fun[i].addEventListener('mouseover', (event) => {
//         event.target.fontSize = '3em';
//     });

//     h2fun[i].addEventListener('mouseleave', (event) => {
//         event.target.fontSize = '1.2em';
//     });
// }


// Changes LogoText to Courier and say it's "serious"

const funText = document.querySelector('.logo-heading');

funText.addEventListener('dblclick', (event) => {
    event.target.innerHTML = 'Serious Bus';
    event.target.style.fontFamily = 'Courier';
});

// Scrolling

document.addEventListener("scroll", function () {

    console.log("Now we are scrolling!");

});

// Drag

const dragFun = document.querySelector("#slide");

dragFun.addEventListener("drag", function () {

    console.log("What a drag");

});

//Top image replace with LEAVES

const headimg = document.querySelector('.intro img');


headimg.addEventListener("dblclick", (event) => {

    event.target.src = 'img/leaves.jpg';

})

// Footer text replace

const mainp = document.querySelector('footer');

mainp.addEventListener("click", (event) => {
    event.target.innerHTML = "Blah blah blah blah blah"
})

// Destination div coloring (experimentation)

const destdiv = document.querySelectorAll('.destination');

for (let i = 0; i < destdiv.length; i++) {
    destdiv[i].addEventListener('mouseover', (event) => {
        event.target.style.animation = 'destcolor .3s linear 0s 1 forwards';
    });
}

// Easter Egg

const h2go = document.getElementById("h2go");

h2go.addEventListener("click", (event) => {
    event.target.style.fontSize = "13em";
    h2go.addEventListener("dblclick", (event) => {
        event.target.style.fontSize = "3em";
        document.addEventListener("scroll", function () {
            mainp.addEventListener("click", (event) => {
                event.target.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            })

        });

    })
})