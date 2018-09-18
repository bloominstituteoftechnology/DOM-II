// mouseover
let bColor = document.querySelector( ".container" );
bColor.addEventListener( "mouseover", function( event ){
    event.stopPropagation();
    event.target.style.backgroundColor = "gray";
    
    setTimeout( function(){
        event.target.style.backgroundColor = "";
    }, 200 )
});

// keydown
let keyDown = document.querySelector( "img" );
document.addEventListener( "keydown", function( event ){
    if( event.key == 'f' )
    {
        alert( "key down event");
    }
});

// wheel
document.addEventListener( "wheel", function( event ){
    alert( "wheel event" );
})

// load

