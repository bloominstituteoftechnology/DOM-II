// Your code goes here


document.getElementsByClassName("logo-heading")[0].onmouseover = function() { 
    this.style.color = "red";
}; 

document.querySelectorAll('.container h2').onmouseover = function() { 
    this.style.color = "red";
};

// starts here
const h2Aqua = document.querySelectorAll('.container h2');
const h2AquaFunction = function() {
    this.style.color = "blue";
}

h2Aqua.forEach(function(element) {
    element.addEventListener('dblclick', h2AquaFunction);
})
// ends here