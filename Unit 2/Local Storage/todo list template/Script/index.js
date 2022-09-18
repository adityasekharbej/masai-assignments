document.querySelector("#form").addEventListener("submit", formSubmit);
var todoArr = JSON.parse(localStorage.getItem("todoList")) || [];


function formSubmit(event) {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var qty = document.querySelector("#qty").value;
  var priority = document.querySelector("#priority").value;

  var todoObj = {
    todoName: name,
    todoQty: qty,
    todoPrio: priority,
  };
  
  todoArr.push(todoObj);
  localStorage.setItem("todoList", JSON.stringify(todoArr));
  document.querySelector("#name").value = "";
  document.querySelector("#qty").value = "";
  document.querySelector("#priority").value = "";
}