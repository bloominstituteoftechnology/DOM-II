// // Your code goes here
document.addEventListener("wheel", () => {
    let backBody = document.querySelector("body");
    backBody.style.backgroundColor = "lightpink";
    console.log('my body is pink!');
});

document.addEventListener('keydown',logKey);
function logKey(a,b,c) {
    let funBus = document.querySelector('h1');
    funBus.style.color = 'green';
    console.log('I know my abcs!');
  };

document.querySelectorAll("a").forEach (link => {
    link.addEventListener ("mouseover", () => {
      link.style.color = "pink";
      link.style.border = '2px solid black';
      console.log('pink links!');
      event.preventDefault(); 
    });
    link.addEventListener ("mouseout", () => {
      link.style.color= "red";
    });
});

  
document.querySelector(".intro img").addEventListener("drag",() => {
    console.log('dont touch me.');
});
document.querySelector(".intro img").addEventListener("dblclick", () => {
    alert("I am a bus.");
});

window.addEventListener('load', () => {
    console.log('The page is all here!');
});

let imgSize = document.querySelector(".img-content img");

function reportWindowSize() {
    imgSize.style.border= "2px solid black";
    console.log('Image was resized!!!!');
  };
window.onresize = reportWindowSize;

let headerSelect = document.querySelector('h4');
headerSelect.addEventListener('copy',(event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});

document.querySelectorAll(".btn").forEach (btn => {
    btn.addEventListener ("click", () => {
        console.log('I have been clicked');
        btn.style.backgroundColor = 'orange';

    });
});