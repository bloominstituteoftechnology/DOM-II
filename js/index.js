//Call back function for applying code to each of a tag/class.
function tags(type, callback) {
    eachNode(document.getElementsByTagName(type), (node) => { callback(node); })
}
function classes(type, callback) {
    eachNode(document.getElementsByClassName(type), (node) => { callback(node); })
}

//Takes a list of nodes and callsback the function
function eachNode(nodeList, callback){
    for(let i=0; i < nodeList.length; i++){ callback(nodeList[i]); }
}

tags("a", (node)=>{
    node.addEventListener('click', (e)=>{
        e.preventDefault();
        node.setAttribute("style", "color:white;");
    });
    node.addEventListener('mouseover', (e)=>{
        node.setAttribute("style", "color:blue;font-weight:bold;");
    });
    node.addEventListener('mouseleave', (e)=>{
        node.setAttribute("style", "color:black;font-weight:normal;");
    });
});

tags('img', (node)=>{
    node.addEventListener('load', (e) =>{
        node.setAttribute("style", "padding:10px;");
    });
});

classes("destination", (node)=>{
    node.addEventListener('mouseover', (e)=>{
        classes("btn", (n) => { n.setAttribute("style", "font-size:2rem;font-weight:900;"); });
    });
    node.addEventListener('mouseleave', (e)=>{
        classes("btn", (n) => { n.setAttribute("style", "font-size:1.8rem;font-weight:normal;"); });
    });
    node.addEventListener('click', (e)=>{
        alert("You should sign up!");
    });
});


tags("h2", (node)=>{
    node.addEventListener('mouseover', (e)=>{
        node.setAttribute("style", "font-weight:900;");
    });
    node.addEventListener('mouseleave', (e)=>{
        node.setAttribute("style", "font-weight:normal;");
    });
});

classes("btn", (node)=>{
    node.addEventListener('click', (e)=>{
        alert("You are now signed up!");
        e.stopPropagation();
    });
});