// Your code goes here

const headerTwo = document.querySelectorAll("h2");

headerTwo[0].addEventListener("mouseover", ele => {
  ele.target.style.color = "blue";

  setTimeout(() => {
  ele.target.style.color = "";
}, 1000);

}, false);

headerTwo[1].addEventListener("mouseover", ele => {
  ele.target.style.color = "red";

  setTimeout(() => {
  ele.target.style.color = "";
}, 1000);

}, false);

headerTwo[2].addEventListener("mouseover", ele => {
  ele.target.style.color = "green";

  setTimeout(() => {
  ele.target.style.color = "";
}, 1000);

}, false);


const headerOne = document.querySelector('h1');

headerOne.addEventListener("dblclick", () => {
  headerOne.style.color = "dodgerblue"
});

const scrollPage = document.querySelector('body');

window.addEventListener('scroll', () => {
    scrollPage.style.backgroundColor = "lightblue";

    setTimeout(() => {
    scrollPage.style.backgroundColor = "";
  }, 3000);
});

const topHeader = document.querySelector(".intro p");

topHeader.addEventListener("mouseenter", () => {
  topHeader.style.transform ="scale(1.2)";
  topHeader.style.transition = "all 0.3s"
})
topHeader.addEventListener("mouseleave", () => {
  topHeader.style.transform ="scale(1)";
  topHeader.style.transition = "all 0.3s"
})

const middleParagraph = document.querySelector(".text-content p");

middleParagraph.addEventListener("mouseenter", () => {
  middleParagraph.style.transform ="scale(1.2)";
  middleParagraph.style.transition = "all 0.3s";
})
middleParagraph.addEventListener("mouseleave", () => {
  middleParagraph.style.transform ="scale(1)";
  middleParagraph.style.transition = "all 0.3s";
})

const bottom = document.querySelectorAll(".destination");

bottom.forEach(ele => ele.addEventListener("mouseenter", () => {
ele.style.transform ="scale(1.2)";
ele.style.transition = "all 0.3s";
})
)

const stop = document.querySelectorAll("a");

stop.forEach((ele) => {
  ele.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
});
