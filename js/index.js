// Your code goes here
const aTagArray = Array.from(document.querySelectorAll('a'));

// *** loop over a tags and apply color changes on specified events ***
aTagArray.map(a => {
    // *** MOUSE ENTER ***
    a.addEventListener('mouseenter', function (e) {
        e.target.style.color = "green";
    });

    // ** MOUSE LEAVE
    a.addEventListener('mouseleave', function (e) {
        e.target.style.color = "black";
    });
});

