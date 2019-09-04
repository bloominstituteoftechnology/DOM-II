// Your code goes here

//mouse over and ckick some invisible items first before scrolling down document for optimal results!

//footer consoles command
const foot = document.querySelector(".footer p");

foot.addEventListener('mouseover', e => {
    console.log("Moused over!")
});

// mouse over Welcome! change color
const funBush2 = document.querySelector(".container .intro h2");

funBush2.addEventListener('mouseover', e => {
    funBush2.style.color = "blue";
})


//mouseover Lets Go! change color
const letsGo = document.querySelector(".container .content-section .text-content h2");

letsGo.addEventListener("mouseover", e => {
    letsGo.style.color = "red";
})

//click top logo to change size and color
const logo = document.querySelector(".main-navigation .container .logo-heading");

logo.addEventListener("click", e => {
    logo.style.height = "5rem";
    logo.style.width = "5rem";
    logo.style.color = "orange";
})

//adds alert when bottom of page reached--from a youtube video
window.addEventListener('scroll', e => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scroll1 = window.scrollY;

    if (Math.ceil(scroll1) === scrollable){
        alert("You\'ve reached the bottom!");
    }
    //console.log(scrollable)
})

//scroll change bg to photo and body text color
window.addEventListener('scroll', e => {
    e.target.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1487925876428-ebd8a23ee1d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1429&q=80')";

    e.target.body.style.backgroundRepeat = "no-repeat";

    e.target.body.style.backgroundPosition = "center";

    e.target.body.style.backgroundSize = "cover";

    e.target.body.style.color = "cyan";

    // mouse over Welcome! change color from orig color
const funBush3 = document.querySelector(".container .intro h2");

funBush3.addEventListener('mouseover', e => {
    funBush3.style.color = "red";
})}); 

//added a for each
const destinationFor = document.querySelectorAll('.destination p');
destinationFor.forEach( element => {
    element.style.color = "green";
})

//mouseover Home
const navItem = document.querySelectorAll('.main-navigation .container .nav a');
    navItem.forEach( element => {
    element.addEventListener('mouseover', e => {
        element.style.color = "red"
    })
    })


//Diana code
/*
window.addEventListener("scroll", (e) => {
    e.target.body.style.opacity = "0.3";
    setTimeout(() => {
        e.target.body.style.opacity = "1";
    }, 1000);
}); 
*/

//const funBusH1 = document.querySelector('h1');

//funBusH1.addEventListener('mouseover', e => {
//    funBusH1.style.color = 'rgb(153, 186, 221)';
//})


//const paragraphs = document.querySelectorAll('p');
//paragraphs.forEach((elementP) => {
//    elementP.addEventListener("click", (e) => {
//        e.target.style.color = "green";
//    });
//});

