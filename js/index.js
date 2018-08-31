// Your code goes here
    // * [ ] `mouseover`
	// * [ ] `keydown`
	// * [ ] `wheel`
	// * [ ] `drag / drop`
	// * [ ] `load`
	// * [ ] `focus`
	// * [ ] `resize`
	// * [ ] `scroll`
	// * [ ] `select`
    // * [x] `dblclick`
    
    //selectors
    const doubleFun = document.querySelector('.logo-heading');
    const wheelie = document.querySelectorAll('h2');
    
    
    
    //addEventListeners
    doubleFun.addEventListener('dblclick', (event) => {
        this.style.color = 'purple';
    });//1

    
    