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

document
    .querySelectorAll("a")
    .forEach(value => value.addEventListener("click", e => e.preventDefault()));

document.querySelectorAll("img").forEach(value => {
    value.addEventListener("mouseleave", () => (value.style.opacity = 0.7));
    value.addEventListener("mouseenter", () => {
        value.style.opacity = 1;
    });
});

const navigationBar = document.querySelector(".container");
const container = document.querySelector(".home");
document.body.addEventListener("mouseenter", () => {
    container.style.transition = "1s ease-out";
    container.style.maxWidth = "70%";
    document.querySelectorAll("img").forEach(value => {
        value.style.margin = "0 auto";
        value.style.width = "100%";
    });
    document.querySelectorAll("p").forEach(value => {
        value.style.fontSize = "1.8rem";
        value.style.lineHeight = "230%";
    });
    document.querySelectorAll("h2").forEach(value => {
        value.style.fontSize = "4rem";
    });
    navigationBar.style.maxWidth = "70%";
});
window.addEventListener("scroll", () => {
    const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (scrolled === scrollable) {
        document.querySelectorAll("p").forEach(value => {
            value.textContent =
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illum atque repellat eum praesentium fuga eligendi expedita sit quod placeat itaque corporis dolores, maiores ducimus sint esse commodi doloremque nam dicta vitae aspernatur. Perspiciatis doloremque et modi repellat laborum quam autem possimus ipsa expedita at in iste dicta fugiat aut, amet voluptatem";
        });
        document.querySelector(".footer p").textContent =
            "Copyright Fun Bus 2018";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        navigationBar.style.backgroundColor = "black";
        document.querySelector(".main-navigation").style.backgroundColor =
            "black";
        document.querySelector("main-navigation").style.zIndex = 500;
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
    document.querySelectorAll("p").forEach(value => {
        const topValueY = value.getBoundingClientRect().y;
        if (topValueY <= scrolled / 1.3) {
            value.classList.add("appear");
        }
    });
    document.querySelectorAll("img").forEach(value => {
        const topValueY = value.getBoundingClientRect().y;
        if (topValueY <= scrolled) {
            value.classList.add("appear");
        }
    });
});
window.addEventListener("load", () => {
    document.querySelectorAll("img").forEach((value, i, array) => {
        {
            value.classList.add("newTextAnimation");
            array[0].classList.remove("newTextAnimation");
        }
    });
});

window.addEventListener("load", () => {
    document.querySelectorAll("p").forEach((value, i, array) => {
        {
            value.classList.add("newTextAnimation");
            array[0].classList.remove("newTextAnimation");
        }
    });
});

window.addEventListener("click", event => console.log(event));

const footer = document.querySelector(".footer");
footer.addEventListener("dblclick", e => {
    footer.style.backgroundColor =
        "rgb(50," + e.offsetX * 10 + "," + e.offsetY * 3 + ")";
});

// const logo = document.querySelector(".logo-heading");
// logo.addEventListener("mouseenter", () => {
//     logo.style.scale = "500%";
// });

// const secondHeading = document.querySelectorAll("h2");
// secondHeading.forEach((v, i, a) => {
//     a[i].addEventListener("dblclick", () => {
//         a[i].style.scale = 2;
//     });
// });
