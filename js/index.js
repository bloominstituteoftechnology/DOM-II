// Your code goes here

const header = document.querySelectorAll(".nav a");

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


  
  function changeColor(color) {
      document
        .querySelector('body')
        .style
        .backgroundColor = color;
  }