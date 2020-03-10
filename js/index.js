// Your code goes here
// console.log("something lese still");

// homeLink.addEventListener(
//     "click", //string with the name of the event
//     () => {
//         console.log("the link got clicked");
//     }
//     );

//     const anchorTag = document.querySelectorAll("a");
//     // anchorTag.forEach((value, index) => {
//     //     console.log(value[index]);
//     // });
// document.querySelector("nav").addEventListener("click", () => {
//     console.log("the nav got clicked");
// });

// // document
// //     .getElementsByClassName("main-navigation")
// //     .addEventListener("click", () => {
// //         console.log("The header got clicked");
// //     });
// document.querySelector("header").addEventListener("click", () => {
//     console.log("header got clicked");
// });

// document.body.addEventListener("click", stuff => {
//     console.log(stuff);
//     console.log("the body of the page got clicked");
// });
// document.addEventListener("click", stuff => {
//     console.log(stuff);
//     console.log("the documnet got clicked");
// });
// window.addEventListener("click", () => {
//     console.log("the window got clicked");
// });

// function clickEventHandler(event) {
//     event.preventDefault();
//     console.log(event.type + "!!!!!!!!!!!!!!!!!!!!!!");
//     console.log(event.target);
//     console.log(event.currentTarget);
// }
// document.querySelector("a").addEventListener("click", clickEventHandler);
// document.querySelector("a").addEventListener("click", event => {
//     event.stopPropagation();
// });
// document.querySelector("header").addEventListener("click", clickEventHandler);
// document.body.addEventListener("click", clickEventHandler);
// document.addEventListener("click", clickEventHandler);
// window.addEventListener("click", clickEventHandler);

// window.addEventListener("click", clickEventHandler);
// document.addEventListener("click", clickEventHandler);

// const busImg = document.querySelector(".intro img");
// busImg.syle.opacity = 0.1;
// busImg.addEventListener("mouseleave", () => {
//     busImg.style.opacity = 0.1;
// });
// busImg.addEventListener("mouseenter", () => {
//     busImg.style.opacity = 1;
// });
document.querySelectorAll("img").forEach(value => {
    value.style.opacity = 0.4;
    value.addEventListener("mouseleave", () => (value.style.opacity = 0.2));
    value.addEventListener("mouseenter", () => {
        value.style.opacity = 1;
    });
});

const navigationBar = document.querySelector(".container");
const container = document.querySelector(".home");
document.body.addEventListener("mouseenter", () => {
    container.style.maxWidth = "60%";
    document.querySelectorAll("img").forEach(value => {
        value.style.margin = "0 auto";
        value.style.width = "100%";
    });
    document.querySelectorAll("p").forEach(value => {
        value.style.fontSize = "1.8rem";
        value.style.lineHeight = "200%";
    });
    document.querySelectorAll("h2").forEach(value => {
        value.style.fontSize = "4rem";
    });
    navigationBar.style.maxWidth = "60%";
});
window.addEventListener("scroll", () => {
    console.log("scrolling");
    const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
    // console.log(scrollable);
    const scrolled = window.scrollY;
    // console.log(scrolled);
    // console.log(window.innerHeight);
    // console.log(window.screenY);
    // console.log(scrolled + window.innerHeight);
    if (scrolled === scrollable) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        navigationBar.style.backgroundColor = "black";
        document.querySelector(".main-navigation").style.backgroundColor =
            "black";
        document
            .querySelectorAll("a")
            .forEach(value => (value.style.color = "white"));
    } else if (scrolled === 0) {
        {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            navigationBar.style.backgroundColor = "white";
            document.querySelector(".main-navigation").style.backgroundColor =
                "white";
            document
                .querySelectorAll("a")
                .forEach(value => (value.style.color = "black"));
        }
    }
    document.querySelectorAll("p").forEach((value, index) => {
        console.log(value);
        console.log("Index:" + index);
        const topValueY = value.getBoundingClientRect().y;
        console.log(topValueY);
        if (topValueY <= window.innerHeight / 0.3) {
            value.classList.add("appear");
        }
        const scrolled = window.scrollY;
        console.log(scrolled);
        console.log(window.innerHeight);
        console.log(scrolled + window.innerHeight);
    });
});

window.addEventListener("load", () => {
    document
        .querySelectorAll("p")
        .forEach(value => value.classList.add("newTextAnimation"));
});

const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseenter", () => {
    logo.style.scale = "500%";
});
