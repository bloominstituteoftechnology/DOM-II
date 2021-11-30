import './less/index.less'

// Your code goes here!

const links = document.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.target.style.fontWeight = "bold";
        event.preventDefault();
    })
});

const imgs = document.querySelectorAll("img");
imgs.forEach(img => {
    img.addEventListener("mouseover", function (evt) {
        evt.target.style.border = "red 10px solid";
    })
});

const h2s = document.querySelectorAll(".h2");
h2s.forEach(h2 => {
    h2.addEventListener("dblclick", evt => {
        evt.target.style.textDecoration = "underline";
    })
});

const ps = document.querySelectorAll(".p");
ps.forEach(p => {
    p.addEventListener("keydown", event => {
        if (event.isComposing || event.keyCode === 229){
            return console.alert("Help!");
        }
    })
});

const buttons = document.querySelectorAll("btn");
buttons.forEach(btn => {
    btn.addEventListener("focusin", evt => {
        evt.target.style.background = "purple";
    })
    btn.addEventListener("focusout", evt => {
        evt.target.style.background = "";
    });
});