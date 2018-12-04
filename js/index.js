// Your code goes here
const aTag =
document.querySelectorAll('a');

const heading = 
document.querySelector('h1');

const container = 
document.querySelector('body');

const intro = 
document.querySelector('.intro h2');

const contentHeading = 
document.querySelector('.content-section h2');

const desBttns =
document.querySelectorAll('.destination .btn');

const funBusImg = 
document.querySelector('.intro img')

// const mainTop = 
// document.querySelector('.intro p');

heading.addEventListener('mouseenter', function(e) {
    e.target.style.color = 'red';
    console.log('Oh, there once was a hero named Ragnar the Red');
});
heading.addEventListener('mouseleave', function(e) {
    e.target.style.color = 'black';
    console.log('Who came riding to Whiterun from ole Rorikstead');
});

aTag[0].addEventListener('click', function(e) {
    e.preventDefault();
    e.target.style.color = 'red';
    console.log('And the braggart did swagger and brandish his blade')
});

aTag[1].addEventListener('click', function(e) {
    e.preventDefault();
    e.target.style.color = 'orange';
    console.log('As he told of bold battles and gold he had made')
});

aTag[2].addEventListener('click', function(e) {
    e.preventDefault();
    e.target.style.color = 'yellow';
    console.log('But then he went quiet, did Ragnar the Red')
});

aTag[3].addEventListener('click', function(e) {
    e.preventDefault();
    e.target.style.color = 'green';
    console.log('When he met the shieldmaiden, Matilda, who said:')
});

funBusImg.addEventListener('mouseover', function(e) {
    e.target.style.display = 'none';
    console.log(`"Oh you talk, and you lie, and you drink all our mead`);
});

container.addEventListener('keydown', function(e) {
    e.target.style.backgroundColor = 'lightBlue';
});

container.addEventListener('keyup', function(e) {
    e.preventDefault();
    e.target.style.backgroundColor = 'white';
});

intro.addEventListener('dblclick', function(e) {
    e.target.style.color = 'purple';
    console.log(`Now I think it's high time that you lie down and bleed"`);
});

contentHeading.addEventListener('mousedown', function(e) {
    e.target.style.fontSize = '100px';
    e.target.style.color = 'pink';
    console.log(`And so then came clashing and slashing of steel`);
});

contentHeading.addEventListener('mouseup', function(e) {
    e.target.style.fontSize = '32px';
    console.log(`As the brave lass Matilda charged in full of zeal`);
});

desBttns[0].addEventListener('contextmenu', function(e){
    e.target.style.backgroundColor = 'red';
    console.log(`And the braggart named Ragnar was boastful no more`);
});

desBttns[1].addEventListener('contextmenu', function(e){
    e.target.style.backgroundColor = 'orange';
    console.log(`When his ugly red head rolled around on the floor!`);
});

desBttns[2].addEventListener('contextmenu', function(e){
    e.target.style.backgroundColor = 'yellow';
});


// desBttns[0].addEventListener('contextmenu', function(e){
//     e.target.style.backgroundColor = 'red';
// })