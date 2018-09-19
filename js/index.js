// Your code goes here
const btns = document.querySelectorAll('.destination .btn');
btns.forEach(function (btn) {
    btn.addEventListener("mouseover", (e) => {
        e.target.style.color = "black";
        e.target.style.background = "white";
        e.target.style.borderRadius = "0px";
    });
});

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    const prize1 = (Math.random()) * 100;
    const prize = Math.round(prize1);
    alert(`You pressed ${keyName} and your prize is ${prize} % off!`);
});

document.addEventListener('keyup', (event) => {
    const keyName = event.key;
    alert(`You pressed ${keyName} and your prize is ${prize} % off!`);
});

document.addEventListener('keyleft', (event) => {
    const keyName = event.key;
    alert(`You pressed ${keyName} and your prize is ${prize} % off!`);
});

document.addEventListener('keyright', (event) => {
    const keyName = event.key;
    alert(`You pressed ${keyName} and your prize is ${prize} % off!`);
});