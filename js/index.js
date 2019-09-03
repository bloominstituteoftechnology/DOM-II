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
            case 'dblclick':
                // Change to new color
                return element.style.background = 'orange'; 
                break;
            case 'mouseup':
                // Change to new color
                return console.log('MOUSE HAS BEEN LIFTED'); 
                break;
            default:
                break;
        }

        // If else statements for expressions
        if (e.type === 'load') {
            // Change specific element's text color
            document.querySelectorAll('div').forEach(index => {
                index.style.color = color[random];
            })
            document.querySelectorAll('a').forEach(index => {
                index.style.color = color[random];
            })
            document.querySelectorAll('p').forEach(index => {
                index.style.color = color[random];
            })
        } else if (e.type === 'dragend') {
            // Print alert upon copy over a time frame
            return e.target.hidden = true;
        } else if (e.type === 'copy') {
            // Change text amongst copying text
            element.innerText = "COPIED!";
        } else if (e.type === 'dragstart') {
            // start of drag console log
            console.log("dragstart!");
        }
    }

    // Event listeners
    index.addEventListener('mouseover', action);
    index.addEventListener('mouseout', action);
    index.addEventListener('click', action);
    index.addEventListener('keydown', action);
    index.addEventListener('load', action);
    index.addEventListener('dragend', action);
    index.addEventListener('copy', action);
    index.addEventListener('dblclick', action);
    index.addEventListener('dragstart', action);
    index.addEventListener('mouseup', action);
})