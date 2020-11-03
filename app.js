//selectors 
const todoInput =document.querySelector('.todo-input') ;
const todoButton =document.querySelector('.todo-button') ;
const todoList =document.querySelector('.todo-list') ;

//event listeners 
todoButton.addEventListener('click',addTodo);



//function
function addTodo(event){
     event.preventDefault();
     console.log('hello');

}