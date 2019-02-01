// Your code goes here

let welcome = document.querySelectorAll('h2');
welcome.forEach((index, i) => welcome[i].addEventListener('click', (event =>
    alert (`You clicked an h2`)))
)


