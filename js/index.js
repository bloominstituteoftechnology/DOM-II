// Your code goes here
const header = document.querySelectorAll(".nav a");
const images = document.querySelectorAll("body img");
const text = document.querySelectorAll("body p");

header.forEach(function(item){
  item.addEventListener("click", function(){
    event.preventDefault();
  });
});

header.forEach(function(item){
    item.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "#3c1361";
    event.target.style.color = "white";
    });
});

header.forEach(function(item){
    item.addEventListener("mouseout", function(event){
    event.target.style.backgroundColor = "";
    event.target.style.color = "";
    });
});
  
window.addEventListener("online", function(){
  window.alert("You are connected to the weefee");
  console.log("wifi good");
});

window.addEventListener("offline", function(){
  window.alert("You are no longer connected to the weefee");
  console.log("wifi bad");
});

function refreshPage(){
  window.location.reload(true);
}

window.addEventListener("keyup", function(event){
  switch (event.keyCode) {
    case 27: //Esc
    refreshPage();   
      break;
  }
})


function changeColor(color) {
  document.querySelector('body').style.backgroundColor = color;  
}

window.addEventListener('keydown', function(event){
    switch (event.keyCode) {
        case 49: // 1
        changeColor("#FF0000"); //Red
          break;
        case 50: // 2
        changeColor("#FF8000");//Orange
          break;
        case 51: // 3
        changeColor("#FFFF00"); //Yellow
          break;
        case 52: // 4
        changeColor("#00BA07"); //Green
          break;
        case 53: // 5
        changeColor("#0015FF"); //Blue
          break;
        case 54: // 6
          changeColor("#9B00FF"); //Purple
          break;
        case 55: // 7
          changeColor("#8937F1"); //Violet
          break;
        case 56: // 8
          changeColor("#EF19FF"); //Magenta
          break;
        case 57: // 9
          changeColor("#FF5AC2"); //Pink
          break;
        case 48: // 0
          changeColor("#FFFFFF"); //White(default)
          break;
    }
  });

images.forEach(function(item){
  item.addEventListener("click", function negative(event){
    event.target.style.filter = "invert(100%)";
  });
});

images.forEach(function(item){
  item.addEventListener("dblclick", function positive(event){
    event.target.style.filter = "invert(0%)";
  });
});

text.forEach(function(item){
  item.addEventListener("wheel", function zoom(event){
    let scale = 1;

    scale += event.deltaY * -0.005;
    scale = Math.min(Math.max(1, scale), 4);
    
    event.target.style.transform = `scale(${scale})`;
    event.onwheel = zoom;
    event.preventDefault();
    });
});