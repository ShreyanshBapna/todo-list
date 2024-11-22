function addTodo(){

    const element = document.querySelector("input");
    const todo = element.value;         // get the value from input 
    
    const spanEl = document.createElement("span");;         // create a span/parentDiv
    const buttom = document.createElement("button");      // create a buttom 
    
    spanEl.innerHTML = todo;      // assign the span innerHTML
    buttom.innerHTML = "Delete";      // assign the button innerHTML = delete 
    
    const parentDiv = document.createElement("parentDiv");    // create a parentDiv 

    parentDiv.appendChild(spanEl);      // appened the span to parentDiv
    parentDiv.appendChild(buttom);    // appened the button to parentDiv

    document.querySelector("body").appendChild(parentDiv);    // appned parentDiv to body
}





