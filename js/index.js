// Your code goes here

// My Variables

// Mouseenter Event
let headerImg = document.querySelector('.intro img');
headerImg.addEventListener("mouseenter", function(event) {   

    let mainHeader = document.querySelector('.intro h2').textContent;

    let colors = ["red", "orange", "green", "blue", "pink"];

    let j = 0;
    let newStr = ""

    for (let i = 0; i < mainHeader.length; i++){

            if (j === colors.length){
                j = 0;
            }
            if(mainHeader.charAt(i) == " "){
                newStr += '<span>' + mainHeader.charAt(i) + '</span>';
                
            }
            else{
                newStr += '<span style="color:' + colors[j] + '">' + mainHeader.charAt(i) + '</span>';
                j++
            }

    }
let newText = document.querySelector('.intro h2');
newText.innerHTML = newStr;

    let holder = ""
    setTimeout(function() {
        for (let i = 0; i < mainHeader.length; i++){
            holder += '<span style="color: black">' + mainHeader.charAt(i) + '</span>';

        }
        newText.innerHTML = holder;

    }, 500);
}, false);


// Load Event
window.addEventListener("load", function(event) {
    let user = prompt("Hello and welcome to Fun Bus! What is your name?", "");
    let orinalText = document.querySelector('.intro h2')
    console.log(orinalText)
    if (user !== "" && user != null) {
        orinalText.innerHTML = `Hello ${user}! ${orinalText.textContent}`;
    }
});

