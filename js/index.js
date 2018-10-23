// Your code goes here
const noThankYou = document.querySelector('.footer');
const funButton = document.querySelector('.btn');
const conDesTealBack = document.querySelector('.content-destination')
const introTealBack = document.querySelector('.intro');
const destTealBack = document.querySelectorAll('.destination')
const textConTealBack = document.querySelectorAll('.text-content');
// console.log('text-content', textConTealBack[0].children[0])
for (let i = 0; i < textConTealBack.length; i++) {
    console.log(textConTealBack[i].children[i]);
}

funButton.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log(event.timeStamp);
});
conDesTealBack.addEventListener('mouseenter', function (event) {
    event.target.style.backgroundColor = 'teal';
});

conDesTealBack.addEventListener('mouseleave', function (event) {
    event.target.style.backgroundColor = 'white';
    console.log("is this working?")
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
        console.log("is this working?")
    });
}    






// noThankYou.addEventListener('dblclick', function (event) {
//     event.target.style.display = 'none';
//     console.log("double click working?")
// })