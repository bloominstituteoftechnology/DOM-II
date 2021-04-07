// Your code goes here
document.body.style.backgroundColor = "blue";
document.querySelector("header").style.backgroundColor = "white";

const funBusPic = document.querySelector("#funbus");
const para = document.querySelector("p");
const contentPic = document.querySelector("img");

const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button2text = document.querySelector(".content-destination");
const button3 = document.querySelector("#btn3");


funBusPic.addEventListener("mouseover", function (event) {
    if (document.body.style.backgroundColor === "blue") {
    document.body.style.backgroundColor = "red"; 
    }
    else {
        document.body.style.backgroundColor = "blue";
    }
  });

  para.addEventListener("mouseover", function (event) {
      document.body.style.color = "white";
      document.querySelector("h1").style.color = "green";
  })

  para.addEventListener("mouseout", function (event) {
    document.body.style.color = "black";
    document.querySelector("h1").style.color = "black";
})

document.querySelector("#btn3").addEventListener("click", function (event) {
    if (document.querySelector("header").style.backgroundColor === "white") {
    document.querySelector("header").style.backgroundColor = "yellow";
    }
    else if (document.querySelector("header").style.backgroundColor === "yellow") {
        document.querySelector("header").style.backgroundColor = "white";
    }
})

document.querySelector("#btn2").addEventListener("dblclick", function (event) {
    if (document.querySelector("header").style.backgroundColor === "white") {
        document.querySelector("header").style.backgroundColor = "yellow";
        }
        else if (document.querySelector("header").style.backgroundColor === "yellow") {
            document.querySelector("header").style.backgroundColor = "white";
        }
})

document.querySelector("#btn1").addEventListener("auxclick", function (event) {
    if (document.querySelector("header").style.backgroundColor === "white") {
        document.querySelector("header").style.backgroundColor = "yellow";
        }
        else if (document.querySelector("header").style.backgroundColor === "yellow") {
            document.querySelector("header").style.backgroundColor = "white";
        }
})


document.body.addEventListener("keydown", function (event) {
    if (document.querySelector("header").style.backgroundColor === "white") {
        document.querySelector("header").style.backgroundColor = "brown";
        }
        else if (document.querySelector("header").style.backgroundColor === "brown" || document.querySelector("header").style.backgroundColor === "yellow" ) {
            document.querySelector("header").style.backgroundColor = "white";
        }
})

document.body.addEventListener("keyup", function (event) {
    document.body.style.backgroundColor = "crimson";
})

document.body.addEventListener("wheel", function (event) {
    document.body.style.backgroundColor = "violet";

})

document.body.addEventListener("mousemove", function (event) {
    document.body.style.backgroundColor = "white";
})

document.body.addEventListener("paste", function (event) {
    document.querySelector("header").style.backgroundColor = "black";
})

