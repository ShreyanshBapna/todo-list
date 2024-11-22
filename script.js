let counter = 0;
function deleteTodo(index){
    const element = document.getElementById("todo-" + index);
    element.parentElement.removeChild(element);
}

function addTodo(){
    const element = document.querySelector("input");
    const todo = element.value;

    const newDiv = document.createElement('parentDiv');
    newDiv.setAttribute('id', "todo-" + counter);     // <parentDiv id='counter'>
    newDiv.innerHTML = "<parentDiv>" + todo + "<button onclick='deleteTodo("+ counter +")' >Delete</button></parentDiv>";
    counter++;

    document.querySelector("body").appendChild(newDiv);
}








