// Your code goes here

let linkedLinks = document.querySelectorAll('a');
let stopIt = Array.from(linkedLinks);
// console.log(linkedLinks);
linkedLinks.forEach((link) => {link.href = 'https://www.youtube.com/watch?v=7qnd-hdmgfk'});

let magicWord = document.querySelectorAll('.btn');
let magicArr = Array.from(magicWord);
// console.log(magicWord);
for (var i = 0; i < magicWord.length; i++) {
    magicWord[i].addEventListener('click', event => {
        // console.log('You clicked it, by golly.');
        window.open('http://jurassicsystems.com/theking')
    });
}

document.addEventListener('scroll', () => {
    // console.log('You scrolled, yessiry.');
    alert('Oookay. Slow down, there, Speed Racer.');
})

document.addEventListener('dblclick', () => {
    // console.log('Yeaaah, dubs that click.')
    window.open('https://media.giphy.com/media/3o6gb1PVQMDy9ySJFe/giphy.gif');
})