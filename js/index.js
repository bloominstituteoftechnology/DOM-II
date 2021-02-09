// link variables
const main = document.querySelector( ".main-navigation" );
const links = document.querySelectorAll (".nav-link");
const destinations = document.querySelector(".destination");


// add Event Listerers, variables can have multiple event listeners

main.addEventListener( "mouseover", function ( evt ) {
    main.style.background = "green";
}, 500);
main.addEventListener( "mouseleave", function ( evt ) {
    main.style.background = "red";
}, 500);
links.addEventListener( "dblclick", function ( evt ) {
    main.style.background = "blue";
});