// Your code goes here

//1 Mouseover <h1> yellow up
const headerH1 = document.querySelector('h1');
console.log(headerH1
    );
    headerH1.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = 'yellow'; 
    });
    headerH1.addEventListener('mouseleave', event => {
        event.target.style.backgroundColor = 'white';
    });

//2 Keydown 
//