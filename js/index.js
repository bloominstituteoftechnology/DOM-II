// Your code goes here

TweenLite.from('.busMove', 5, { rotation:360, opacity: 0});
TweenMax.from('.welcome', 5, {x: 2400, scale: 5});
// TweenMax.to(document.getElementsByClassName('.busMove'), 2 {left:600});
const noThankYou = document.querySelector('.footer');
const funButton = document.querySelector('.btn');
const conDesTealBack = document.querySelector('.content-destination');
const introTealBack = document.querySelector('.intro');
const destTealBack = document.querySelectorAll('.destination');
const textConTealBack = document.querySelectorAll('.text-content');
const wheelOnBus = document.querySelector('.container.home');
const hotelCalifornia = document.querySelectorAll('.nav-link');
const keyLogger = document.querySelector('body');
const dragKidnappedImgHelp = document.querySelectorAll('img');
// console.log('text-content', textConTealBack[0].children[0])
// for (let i = 0; i < textConTealBack.length; i++) {
//     console.log(textConTealBack[i].children[i]);
// }

funButton.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log(event.timeStamp);
});
conDesTealBack.addEventListener('mouseenter', function (event) {
    event.target.style.backgroundColor = 'teal';
});

conDesTealBack.addEventListener('mouseleave', function (event) {
    event.target.style.backgroundColor = 'white';    
});

introTealBack.addEventListener('mouseenter', function(event) {
    event.target.style.backgroundColor = 'teal';
    });

introTealBack.addEventListener('mouseleave', function (event) {
    event.target.style.backgroundColor = 'white';    
});

for (let i = 0; i < textConTealBack.length; i++) {    
    textConTealBack[i].addEventListener('mouseenter', function (event) {
        event.target.style.backgroundColor = 'teal';
    });
}

for (let i = 0; i < textConTealBack.length; i++) {   
    textConTealBack[i].addEventListener('mouseleave', function (event) {
        event.target.style.backgroundColor = 'white';
    });
}

for (let i = 0; i < destTealBack.length; i++) {
    destTealBack[i].addEventListener('mouseenter', function (event) {
        event.target.style.backgroundColor = 'teal';
    });
}    

for (let i = 0; i < destTealBack.length; i++) {
    destTealBack[i].addEventListener('mouseleave', function (event) {
        event.target.style.backgroundColor = 'white';
    });
}    

noThankYou.addEventListener('dblclick', function (event) {
    event.target.style.display = 'none';
    console.log("double click working?")
});

wheelOnBus.addEventListener('wheel', function (event){
    event.stopPropagation();
    alert("The wheels on the Fun Bus go round and round, round and round, round and round");
});

document.addEventListener('copy', () => {
    alert("Don't you dare copy me!!!");
});

for (let i = 0; i < hotelCalifornia.length; i++) {
    hotelCalifornia[i].addEventListener('click', function (event) {
        event.preventDefault();
        alert(`Welcome to the Hotel California! We are programmed to receive.
You can check out any time you like, But you can never leave!`);
    });
}

keyLogger.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log(`${keyName}`);
//    console.log('keydown event\n\n' + 'key: ' + keyName);
 });

for (let i = 0; i < hotelCalifornia.length; i++) {
    hotelCalifornia[i].addEventListener('click', function (event) {
        event.preventDefault();
        alert(`Welcome to the Hotel California! We are programmed to receive.
You can check out any time you like, But you can never leave!`);
    });
}

for (let i = 0; i < dragKidnappedImgHelp.length; i++) {
    dragKidnappedImgHelp[i].addEventListener('drag', function (event) {
        event.stopPropagation();
        console.log(`Help I am being kidnapped!!`);
    });
}

window.addEventListener("load", function (event) {
    console.log("All resources finished loading!");
});

// TweenLite.from(logo, 2, { opacity: 0, left: "300px" });
