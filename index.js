// const box1 = document.getElementsByClassName("block--blue");
// box1.addEventListener("click", (event) => {
//     console.log("hi");
// });

const rockets = document.getElementsByClassName("block");
Array.from(rockets).forEach(rocket => { // add an event listener to each of the elements.
    rocket.addEventListener("click", () => {
        const parent = rocket.parentNode; // this just makes up for the below code.
        // rocket.parentNode.removeChild(rocket); // removes rocket from the parent node.
        parent.removeChild(rocket);
        parent.prepend(rocket);

    });
});

// Ivan's solution