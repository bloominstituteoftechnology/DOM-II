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

const container = document.querySelector(".home");
document.body.addEventListener("mouseenter", () => {
    container.style.maxWidth = "70%";
    document.querySelectorAll("img").forEach(value => {
        value.style.margin = "0 auto";
        value.style.width = "100%";
    });
    document.querySelectorAll("p").forEach(value => {
        value.style.fontSize = "2.2rem";
        value.style.lineHeight = "200%";
    });
    document.querySelectorAll("h2").forEach(value => {
        value.style.fontSize = "5rem";
    });
    document.querySelector(".container").style.maxWidth = "70%";
});
