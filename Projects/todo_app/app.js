const todosContainer = document.querySelector(".todos-container");
const todoForm = document.querySelector("#todo-form");
const formInput = todoForm.querySelector("input");
const submitBtn = todoForm.querySelector("button");
let noTodo = null;
let count = 0;

const animateBtn = (btnToAnimate) => {
    btnToAnimate.style.fontSize = "0.7em";
    setTimeout(() => {
        btnToAnimate.style.fontSize = "0.8em";
    }, 100);
};

const createNoTodo = () => {
    const warningH1 = document.createElement("h1");
    warningH1.classList.add("err-header");
    warningH1.innerText = "No Todos Added!!";
    todosContainer.append(warningH1);
    return warningH1;
};

const rearrangeTodos = (todos) => {
    let todosLen = todos.length;
    for (let i = 0; i < todosLen; i++) {
        todos[i].querySelector(".todo-number").innerText = String(i + 1);
    }
};

const createTodo = (localCount, value) => {
    const todosWrapper = document.createElement("div");
    const deleteBtn = document.createElement("button");
    todosWrapper.classList.add("todo-wrapper");
    deleteBtn.classList.add("delete-btn");
    todosWrapper.innerHTML = `<span class='todo-number'>${localCount}</span><span class='todo'>${value}</span>`;
    deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    todosWrapper.append(deleteBtn);
    deleteBtn.addEventListener("click", () => {
        animateBtn(deleteBtn);
        deleteBtn.parentElement.remove();
        const allTodos = document.querySelectorAll(".todos div");
        rearrangeTodos(allTodos);
        const todos = document.querySelector(".todos");
        if (!todos.querySelector("div")) {
            noTodo = createNoTodo();
            count = 0;
        }
    });

    return todosWrapper;
};

if (!document.querySelector(".todos")) {
    noTodo = createNoTodo();
}

submitBtn.addEventListener("click", (evt) => {
    animateBtn(submitBtn);
});

todoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    console.log(count);
    if (!formInput.value) {
        console.log("Empty Todo!!");
    } else if (document.querySelector(".todos")) {
        count++;
        if (noTodo) {
            noTodo.remove();
        }
        document
            .querySelector(".todos")
            .append(createTodo(count, formInput.value));
        formInput.value = "";
    } else {
        count++;
        noTodo.remove();
        const todosDiv = document.createElement("div");
        todosDiv.classList.add("todos");
        const todosWrapper = createTodo(count, formInput.value);
        todosDiv.append(todosWrapper);
        todosContainer.append(todosDiv);
        formInput.value = "";
    }
});
