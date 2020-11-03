//selectors 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event listeners 
todoButton.addEventListener("click", addTodo);



//function
function addtodo2(e){
    e.preventDefault();
    console.log('hello World');
}
function addTodo(e){
     e.preventDefault();
     const todoDiv = document.createElement("div");
     todoDiv.classList.add("todo");
     const newTodo = document.createElement("li");
     newTodo.classList.add('todo-item');
     newTodo.innerText = todoInput.value;
     todoDiv.appendChild(newTodo);
     const completeButton = document.createElement('button');
     completeButton.innerHTML = "<i class= 'fas fa-check'> </i>"
     completeButton.classList.add('add-btn');
     todoDiv.appendChild(completeButton);
     const trashButton = document.createElement('button');
     trashButton.innerHTML = "<i class= 'fas fa-trash'> </i>"
     trashButton.classList.add('delete-btn');
     todoDiv.appendChild(trashButton);
     todoList.appendChild(todoDiv);
     todoInput.value = "";


}