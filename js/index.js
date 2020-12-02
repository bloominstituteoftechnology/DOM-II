// const mouseEnter = document.querySelector('h4');
// mouseEnter.addEventListener('mouseenter', (event) => {
//     event.target.style.color = 'green';
// })

const headerEvent = document.querySelector(".main-navigation")
headerEvent.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'orange';
});
headerEvent.addEventListener('click', (event) => {
    event.target.style.fontSize = '4rem';
});

const headerTitle = document.querySelector(".logo-heading");
headerTitle.addEventListener("mouseleave", (event) => {
        
        event.target.style.color='blue';
    });

const navButtons = document.querySelectorAll(".nav-link");
navButtons.forEach((element) => {
    element.addEventListener("mousedown", (event) => {
        event.target.style.color = "red";
    });
});
    navButtons.forEach((element) => {
        element.addEventListener('mouseover', (event) => {
            event.target.style.fontSize = ".6rem";
        })
    });

const pEvent = document.querySelectorAll("p");

pEvent.forEach((element) => {
        pEvent.addEventListener('select', (event) => {
        event.target.style.backgroundColor = "yellow";
        // console.log(pEvent("occurence6"))
    });
});
pEvent.forEach((element) => {
    pEvent.addEventListener('copy', (event) => {
        event.target.style.fontSize = "4rem";
        // console.log("occurrence7")
    });
});
pEvent.forEach((element) => {
    pEvent.addEventListener('keydown', (event) => {
        event.target.style.color = "grey";
        // console.log("occurrence8")    
    });

});

const buttonSelect = document.querySelectorAll(".content-pick .destination .btn")
buttonSelect.forEach((element) => {
    buttonSelect.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = "black";
        // console.log("occurrence9");
    });
});
buttonSelect.forEach((element) => {
    buttonSelect.addEventListener('resize', (event) => {
        event.target.style.fontSize = "10rem";
        // console.log("occurrence10")
    });
});


// const homeLink.querySelector("a .nav-link")
    
// homeLink.addEventListener('click', (event) => {
//     event.preventDefault();
// });