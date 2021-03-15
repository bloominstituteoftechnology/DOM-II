// Your code goes here
// var a = document.getElementsByTagName("title");
// a.addEventListener("mouseover" , ()=> {
//     a.style.color = "blue";
// })
const title = document.querySelector(".logo-heading");
title.addEventListener("mouseover",() => {
    title.style.color = "pink";
})

let page = window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
    if (key.keyCode == 65){
        alert("The 'a' letter key has been pressed!");
    }
}

function zoom(event) {
    event.preventDefault();
    
    scale += event.deltaY * -0.01;
    
    
    scale = Math.min(Math.max(.125, scale), 4);
    
    
    el.style.transform = `scale(${scale})`;
    }
    
    let scale = 1;
    const el = document.querySelector("h2");
    el.onwheel = zoom;

    window.addEventListener('load',function() {
        alert("Loaded!")
    })

    let paragraph = document.querySelector("p");
    paragraph.addEventListener('focus',(event) => {
        console.log(event.preventDefault());
    });
    
    
    
    let form = document.createElement("FORM")
    var input1 = document.createElement("INPUT")
    var input2 = document.createElement("INPUT")
    form.appendChild(input1);
    form.appendChild(input2);
    console.log(form);

    let homeContainer = document.getElementsByClassName("text-content") 
    homeContainer[1].appendChild(form)
    console.log(homeContainer[0]);
    
    
    
    let formOne = document.querySelector("FORM");
    form.addEventListener('focus', (event) => {
        event.target.style.background = 'pink';
    }, true);

    
    let divSize = document.createElement("div")
    let height = document.createElement("p");
    let width = document.createElement("p");
    divSize.appendChild(height);
    divSize.appendChild(width)
    let containerClass = document.getElementsByClassName("text-content");
    containerClass[0].appendChild(divSize);
    window.addEventListener("resize",() => {
    let h = window.innerHeight;
    let w = window.innerWidth;
    
    height.innerHTML ="h: " + h;
    width.innerHTML = "w: " + w;
    });

    let lastKnownScrollPosition = 0;
    window.addEventListener("scroll", () => {
        let scrollable = document.documentElement.scrollHeight - window.innerHeight;
        lastKnownScrollPosition = window.scrollY;
        if (Math.ceil(lastKnownScrollPosition) === scrollable){
            alert("You have reached the bottom")
        }
        console.log(scrollable)
    })
    
    input1.setAttribute("value","Select this text")
    let textY = document.createElement("p");
    textY.setAttribute("id","log")
    form.appendChild(textY)

    function logSelection(event) {
        const log = document.getElementById('log');
        const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        log.textContent = `You selected: ${selection}`;
    }
    
    const input = document.querySelector('input');
    input.addEventListener('select', logSelection);

    
    
    
    
