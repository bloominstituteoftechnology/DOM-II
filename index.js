const parent = document.querySelector(".blocks");

// ROCKETS

//parent.addEventListener("click", (event) => {
//parent.removeChild(event.target);
//parent.prepend(event.target); 
//});

// TRAVELERS
parent.addEventListener('mousedown', (event) => {
    let margin = 0;
        
    const testInterval = setInterval(() => {
        if (event.target === parent) {
                return null;
        }
            
        if (margin === 1000) {
                    endMove(testInterval);
        } 
        event.target.style.marginLeft = `${++margin}px`;
    
        }, 1);      

});

    function endMove (intervalID) {
        clearInterval(intervalID);
    }


//document.querySelector(".blocks").addEventListener("click", (event) => {
//document.querySelector(".blocks").removeChild(event.target);
//document.querySelector(".blocks").prepend(event.target); }); 