// Your code goes here
const links = document.querySelectorAll("a");
console.log(links);
links.forEach( item => {


    item.addEventListener("mouseover", e =>{
        item.style.color = "green";
    });
    item.addEventListener("mouseleave", e =>{
        item.style.color = "rebeccapurple";

    });

    item.addEventListener("click", e =>{
        e.preventDefault();
        item.style.padding = "5px";
        item.style.background = "teal";
        e.stopPropagation();

    });
}
);

const header = document.querySelector("header");
header.addEventListener("click" , e=> {
    header.style.backgroundColor = "red";
});

header.addEventListener("wheel", e=> {
    header.style.backgroundColor = "blue";
});



// interestingly, this will trigger if you tab into an element inside the header
header.addEventListener("keypress", e=> {
    header.style.backgroundColor = "blue";
});

const ps = document.querySelectorAll("p");

ps.forEach( item => {


    item.addEventListener("mouseover", e =>{
        item.style.fontSize = "18px";
        item.style.transform = ".5s";
    });
    item.addEventListener("mouseleave", e =>{
        item.style.fontSize = "16px";
        item.style.transform = ".5s";

    });

    item.addEventListener("click", e =>{
        e.preventDefault();
        item.style.padding = "5px";
        item.style.background = "silver";
        item.style.border = "2px solid black"
        item.style.borderRadius = "10%";
        item.style.margin = "5px";
        e.stopPropagation();

    });
    item.addEventListener("dblclick", e =>{
        e.preventDefault();
        item.style.padding = "0px";
        item.style.background = "white";
        item.style.border = "none"
        item.style.borderRadius = "0px";
        item.style.margin = "0px";
        e.stopPropagation();

    });
}
);

const h2s = document.querySelectorAll("h2");
h2s.forEach(item => {
    item.addEventListener("load", e =>{
        TweenMax.to(item, 0.5,{autoAlpha:1});

    });
});