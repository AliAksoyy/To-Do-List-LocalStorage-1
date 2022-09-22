window.addEventListener("load", ()=> {
    todos = JSON.parse(localStorage.getItem("todos")) || []
    const nameInput = document.querySelector("#name")
    const newTodoForm = document.querySelector("#new-todo-form")

    const username = JSON.parse(localStorage.getItem("username")) || []

    nameInput.value = username

    nameInput.addEventListener("change", (e)=> {
       localStorage.setItem("username", e.target.value)
    })

    newTodoForm.addEventListener("submit", function (e) {
        e.preventDefault()
        console.log(e.target)
        
         const todo = {
           content: e.target.elements.content.value,
           category: e.target.elements.category.value,
           done: false,
           createdAt: new Date().getTime(),
         };

         todos.push(todo);

         localStorage.setItem("todos", JSON.stringify(todos));

         
         e.target.reset()

         displayTodos()
    })
   displayTodos();
})

function displayTodos() {
    const todoList = document.querySelector("#todo-list")

    todoList.innerHTML= ``
    
    todos.forEach((todo) => {
        const todoItem = document.createElement("div")
        todoItem.classList.add("todo-item")
        const label = document.querySelector("label")
        const input = doc.querySelector("input")
        const span = doc.querySelector("span")
        const content = document.querySelector("content")
        const actions = document.querySelector("actions")
        const edit = document.querySelector("edit")
        const deleteButton = document.querySelector("delete")

        input.type = "checkbox"
        input.checked = todo.done
        span.classList.add("bubble")

        if(todo.category =="personal") {
            span.classList.add("personal")
        }else {
            span.classList.add("business")
        }
        content.classList.add("todo-content")
        actions.classList.add("todo-actions")
    });

}

