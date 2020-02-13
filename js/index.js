// Your code goes here
document.getElementById("nav").addEventListener("mouseover", function(e) {   
    e.target.style.color = "red";

    setTimeout(function() {
        e.target.style.color = "";
    }, 1000);
}, false);


document.addEventListener('keydown', (e) => {
    document.getElementById("keyDownP").textContent += ` ${e.code}`;
    if(e.code === 'Backspace') {
        document.getElementById("keyDownP").textContent = "";
    }
});

document.getElementById("featImg").addEventListener('dblclick', (e) => {
    e.target.classList.toggle('transform');
});