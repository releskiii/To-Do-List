const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addtask(){
    if(inputBox.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //cross icon to delete a particylar task //
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();  //whenever you add a task thee saved data is called
}

//clicking checked or not
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);  //whatever is in the container is saved so that when you reload the browser the text is saved
}

//when you open the browser again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();