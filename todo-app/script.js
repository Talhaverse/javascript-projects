const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const clear = document.querySelector(".trash");

const addTask = (e) =>{
    e.preventDefault(); //this is recommended
    const newLi = document.createElement("Li");
    const delBtn = document.createElement("button");

    delBtn.innerHTML = '<i class= " fas  fa-trash-alt "></i> ';// explanation needed

    if(input.value !== "" ){
        newLi.textContent = input.value;
        newLi.appendChild(delBtn);
        todoList.appendChild(newLi);
        input.value = "";
    }
    else {
        alert("please enter a task")
}
//input.value.length

//del function
delBtn.addEventListener('click', function(){
const del = confirm("Are you sure that you want to delete this task!!!")

if(del == true){
    const parent = this.parentNode;
    parent.remove();
}

})



}

btn.addEventListener('click' ,addTask );
clear.addEventListener('click',()=>{
    const del = confirm("Are you sure that you want to delete  all tasks!!!")

    todoList.innerHTML = "";
} )