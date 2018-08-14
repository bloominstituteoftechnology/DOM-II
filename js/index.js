// Your code goes here

function select(selector) {
    return document.querySelector(selector);
}

function selects(selector) {
    return Array.from(document.querySelectorAll(selector));
}

const aTagArray = Array.from(document.querySelectorAll('a'));

// *** loop over a tags and apply color changes on specified events ***
aTagArray.map(a => {
    // *** MOUSE ENTER ***
    a.addEventListener('mouseenter', function (e) {
        e.target.style.color = "green";
    });

    // *** MOUSE LEAVE ***
    a.addEventListener('mouseleave', function (e) {
        e.target.style.color = "black";
    });
});

const btnArray = Array.from(document.querySelectorAll('.btn'));

btnArray.map((btn, i) => {
    // *** CLICK *** first button (is actually an anchor link tag)
    if(i === 0){
        btn.addEventListener('click', function (e) {
            if(e.view.confirm("*** You are leaving the page. Please press okay to confirm!! ***")){
                btn.setAttribute('href', 'http://www.funbus.com/');
                btn.style.textDecoration = 'none';
            }

        })
    }

    // *** DOUBLE CLICK *** second button (is actually a div)
    if(i === 1){
        btn.addEventListener('dblclick', function (e) {
            const card2Title = document.querySelector('#cardTitle-2');
            const card2Text = document.querySelector('#cardText-2');
            card2Title.classList.toggle('hide');
            card2Text.classList.toggle('hide');
        })
    }
});

// *** RESIZE ***
let count = 0;
window.addEventListener('resize', function () {
    const resizeElement = select('#resizePage');
    console.log('resizing');
    let text = count += 1;
    resizeElement.innerText = "Resize event has been fired off " + text + " number of times.";
});

