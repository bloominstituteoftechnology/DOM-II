// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [x] `dblclick`

// Your code goes here

const changeImage = document.querySelector(".intro img");
Console.log(changeImage);

changeImage.addEventListener("dblclick", () => {
    changeImage.src = "img/gray-olkswagen.jpg"
});