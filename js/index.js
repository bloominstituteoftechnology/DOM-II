// * [x] `keydown`
// * [ ] `keyup`
// * [ ] `mouseover`
// * [ ] `mouseout`
// * [ ] `dblclick`
// * [ ] `scroll`
// * [ ] `resize`
// * [ ] `click`
// * [ ] `mouseenter`
// * [ ] `mouseleave`

// YOUR CODE GOES HERE\\

//  `keydown`
const newText = document.querySelector(".logo-heading");

window.addEventListener("keydown", () => {
    const newText = document.querySelector(".logo-heading");
    newText.textContent = "Come Travel Us!";
    newText.style.color = "#c7624c";
    newText.style.fontSize = "5rem";
  });

//  `keyup`

//  `mouseover`


//  `mouseout`


// `dblclick`
const changeImage = document.querySelector(".intro img");
Console.log(changeImage);

changeImage.addEventListener("dblclick", () => {
    changeImage.src = "img/gray-volkswagen.jpg";
});

// `scroll`


// `resize`


// `click`


//  `mouseenter`


// `mouseleave`