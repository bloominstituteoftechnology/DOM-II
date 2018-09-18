var logoz = document.querySelector('.logo-heading');
const travelz = document.getElementById('traveling');
const learnButton = document.getElementById('learnMore');
const sign = document.querySelectorAll('.btn');
const picz = document.querySelectorAll('img');
console.log(sign);

console.log(picz);

// #1


logoz.addEventListener('click', (event) => {
    event.target.innerHTML = "changed ME!";
    console.log("#1 works!");
});

// #2

// located
// body > div > header > p

learnButton.addEventListener('click', () => {
    travelz.innerHTML = "Continued......<br> You probably haven't heard of them asymmetrical chia Wes Anderson umami Williamsburg farm-to-table bitters ugh Odd Future four loko sartorial Neutra ethical yr messenger bag Tumblr salvia mlkshk";
    console.log("#2 works!");
});

// #3

// #4
sign[0].addEventListener('click', (event) => {
    event.target.innerHTML = "Signed up!";
    event.target.style.color = "white";
    event.target.style.background =  'red';
});

sign[1].addEventListener('click', (event) => {
    event.target.innerHTML = "Signed up!";
    event.target.innerHTML = "Signed up!";

    event.target.style.color = "red";
    event.target.style.background =  'White';
});

sign[2].addEventListener('click', (event) => {
    event.target.innerHTML = "Signed up!";
    event.target.style.color = "white";
    event.target.style.background =  'blue';
});

// #6



// #7

// #8

// #9

// #10

//Extras

