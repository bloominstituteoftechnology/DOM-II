var logoz = document.querySelector('.logo-heading');
const travelz = document.getElementById('traveling');
const learnButton = document.getElementById('learnMore');
console.log(learnButton);




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

// #5

// #6

// #7

// #8

// #9

// #10

//Extras

