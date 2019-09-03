// Your code goes here
let pageImages = document.querySelectorAll('img');
pageImages.forEach(image => {
    image.addEventListener('mouseover', e => {
        console.log(e.target.classList.toggle('toggleImage'));
    });
});

//on keydown

document.body.addEventListener('keydown', e => {
    let keyThatGotPressed = e.key;
    let sound = new Audio('sounds/snare.mp3');
    let sound1 = new Audio('sounds/crash.mp3');
    let sound2 = new Audio('sounds/tom-1.mp3');
    let sound3 = new Audio('sounds/tom-2.mp3');
    let sound4 = new Audio('sounds/tom-3.mp3');
    let sound5 = new Audio('sounds/tom-4.mp3');
    let sound6 = new Audio('sounds/kick-bass.mp3');
    if(keyThatGotPressed === 'a'){
        sound.play();
    } 
    else if(keyThatGotPressed === 's'){
        sound6.play();
    }
    else if(keyThatGotPressed === 'd') {
        sound2.play()
    }
    else if(keyThatGotPressed === 'f') {
        sound3.play()
    }
    else if(keyThatGotPressed === 'l') {
        sound4.play()
    }
    else if(keyThatGotPressed === 'k'){
        sound5.play()
    }
    else {
        sound1.play();
    }
});