// Your code goes here
// 1 KEY DOWN
document.addEventListener('keydown', function(event) {
    window.alert("The page is fully loaded! Enter at your own risk....");
});

// 2 CLICK COUNTER
const clickEvent = document.querySelector('.btn');

clickEvent.addEventListener('click', event => {
    clickEvent.innerHTML = `Click count: ${event.detail}`;
});

// 3 MOUSEENTER/LEAVE FUN BUS
const logoHeader = document.querySelector('.logo-heading');
logoHeader.addEventListener('mouseenter', function() {
    logoHeader.style.color = "#ed246a";
    logoHeader.addEventListener('mouseleave', function() {
        logoHeader.style.color = "black";
    });
});