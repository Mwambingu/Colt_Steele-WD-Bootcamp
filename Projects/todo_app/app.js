const todosContainer = document.querySelector(".todos-container");
const todos = [];
let count = 0;

// if (todos) {
//     const warningH1 = document.createElement("h1");
//     warningH1.classList.add("err-header");
//     warningH1.innerText = "No Todos Added!!";
//     todosContainer.append(warningH1);
// }

const todoForm = document.querySelector("#todo-form");
const formInput = todoForm.querySelector("input");
const submitBtn = todoForm.querySelector("button");

console.log(formInput);
console.log(submitBtn);
todoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    count++;
    console.log(count);
    if (document.querySelector(".todos")) {
        document
            .querySelector(".todos")
            .append(createTodo(count, formInput.value));
    } else {
        const todosDiv = document.createElement("div");
        todosDiv.classList.add("todos");
        const todosWrapper = createTodo(count, formInput.value);
        todosDiv.append(todosWrapper);
        todosContainer.append(todosDiv);
        formInput.value = "";
    }
});

submitBtn.addEventListener("click", (evt) => {
    submitBtn.style.fontSize = "0.7em";
    setTimeout(() => {
        submitBtn.style.fontSize = "0.8em";
    }, 100);
});

const createTodo = (count, value) => {
    const todosWrapper = document.createElement("div");
    const deleteBtn = document.createElement("button");
    todosWrapper.classList.add("todo-wrapper");
    deleteBtn.classList.add("delete-btn");
    todosWrapper.innerHTML = `<span class='todo-number'>${count}</span><span class='todo'>${value}</span>`;
    deleteBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    todosWrapper.append(deleteBtn);

    return todosWrapper;
};
