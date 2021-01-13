// Your code goes here
let headings = document.querySelectorAll('h2, h4');
Array.from(headings).forEach(function(head)
{
    head.addEventListener('mouseover', function(event){
        head.style.color = "red";
        })
    head.addEventListener('mouseout', function(event){
            head.style.color = "black";
            })
}
)
