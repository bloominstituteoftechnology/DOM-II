// Your code goes here

const allNodes = document.querySelectorAll('*');
// Iterate unwanted / wanted index items
allNodes.forEach(index => {
    const action = (e) => {
        const element = e.target;
        let oldColor = "";

        // Conditionals for event types
        switch (e.type) {
            case 'mouseover':
                // Store old color
                oldColor = element.style.background

                // Change to new color
                return element.style.background = 'grey';
                break;
            case 'mouseout':
                // Change to new color
                return element.style.background = oldColor;
                break;
            case 'click':
                // Change to new color
                return element.style.background = 'blue';
                break;
            case 'keypress':
                // Change to new color
                return alert('THE FUN BUS IS COMING!'); 
                break;
        }
    }

    // Event listeners
    index.addEventListener('mouseover', action)
    index.addEventListener('mouseout', action)
    index.addEventListener('click', action)
    index.addEventListener('keypress', action)
})