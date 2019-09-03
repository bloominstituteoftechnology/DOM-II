// Your code goes here

const allNodes = document.querySelectorAll('*');
// Iterate unwanted / wanted index items
allNodes.forEach(index => {
    const action = (e) => {
        const element = e.target;
        let oldColor = "";

        if (e.type === 'mouseover') {
            // Store old color
            oldColor = element.style.background

            // Change to new color
            return element.style.background = 'grey';
            
        } else if (e.type === 'mouseout') {
            return element.style.background = oldColor;
        }
    }

    // Event listeners
    index.addEventListener('mouseover', action)
    index.addEventListener('mouseout', action)
})