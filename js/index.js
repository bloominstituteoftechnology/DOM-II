// Your code goes here

// 1. "dblclick"

document.querySelectorAll("h2").forEach((header) => {
    header.addEventListener("dblclick", () => {
        header.style.color = "rebeccapurple";
    })
})

// 2. "mouseenter"

document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.5s";
    });
});

// 3. "mouseleave"

document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    })
})


// 4. "click" and stopPropagation

document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        alert("Are you ready to go?");
        event.stopPropagation();
    })
})

document.querySelectorAll(".destination").forEach((div) => {
    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "dodgerblue";
    })
})

// 5. "resize"

const body = document.getElementsByTagName("body");

window.addEventListener("resize", () => {
    body[0].style.backgroundColor = "#FFEBCD";
});


// 6. "keypress"

document.querySelectorAll("img").forEach((img) => {
    document.addEventListener("keypress", () => {
        img.style.borderStyle = "solid";
        img.style.borderColor = "#17A2B8";
        img.style.borderWidth = "5px";
    })
})

// 7. "load"

const myVacation = document.createElement("input");
myVacation.value = "What is your dream vacation?";
myVacation.type = "text";

document.querySelector(".content-destination").appendChild(myVacation);



// 8. "focus"

myVacation.addEventListener("focus", () => {
    myVacation.style.backgroundColor = "turquoise";
});

// 9. "blur"

myVacation.addEventListener("blur", () => {
    myVacation.style.backgroundColor = "white";
})

// 10. "select"

myVacation.addEventListener("select", () => {
    myVacation.style.color = "red";
})

// Prevent nav links from refreshing page

const stopRefresh = document.querySelectorAll(".nav-link");

stopRefresh.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("Stopped refresh");
    });
});