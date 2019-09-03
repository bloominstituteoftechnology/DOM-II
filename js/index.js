// Your code goes here

const allNodes = document.querySelectorAll('*');
// Iterate unwanted / wanted index items
allNodes.forEach(index => {
    const action = (e) => {
        const color = ["red", "purple", "green", "blue"];
        const random = Math.ceil(Math.random() * Math.ceil(color.length) - 1)
        e.preventDefault();

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
            case 'keydown':
                // Change to new color
                return console.log('THE FUN BUS IS COMING!'); 
                break;
            default:
                break;
        }

        // If else statements for expressions
        if (e.type === 'load') {
            document.querySelectorAll('div').forEach(index => {
                index.style.color = color[random];
            })
            document.querySelectorAll('a').forEach(index => {
                index.style.color = color[random];
            })
            document.querySelectorAll('p').forEach(index => {
                index.style.color = color[random];
            })
        }
    }

    // Event listeners
    index.addEventListener('mouseover', action)
    index.addEventListener('mouseout', action)
    index.addEventListener('click', action)
    index.addEventListener('keydown', action)
    index.addEventListener('load', action)
})