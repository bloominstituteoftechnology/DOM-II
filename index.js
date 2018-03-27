
    const blocks = document.querySelector('.blocks');
    

    const ourFunction = (event) => {
        event.stopPropagation();
        let parent = event.target.parentNode;
        parent.removeChild(event.target);
        parent.prepend(event.target);
    };
    
    for (i = 0; i < blocks.children.length; i++) {
    blocks.children[i].addEventListener('click', ourFunction);
    }


// const blocks = document.querySelector('.blocks');

// const ourFunction = (event) => {
//      event.stopPropagation();
//     event.target.style.position = "absolute";
//     event.target.style.right = x_pos+='20px';
//     };


// for (i = 0; i < blocks.children.length; i++) {
//      blocks.children[i].addEventListener('click', ourFunction);
//      }