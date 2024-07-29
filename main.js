let taskClass = JSON.parse(localStorage.getItem("Tasks")) || [];

let now = new Date();
let date = now.toLocaleDateString();
let time = now.toLocaleTimeString();


//dark mode
let darkLightIcon = document.getElementById("light-dark-btn")
let spanIcon = document.getElementById("spanDL")
let choseBtn = document.getElementsByClassName("set-btn")
darkLightIcon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        spanIcon.innerHTML = 'light_mode'
        darkLightIcon.style.backgroundColor = "white"
        spanIcon.style.color = "black"

        for (let i = 0; i < 3;i++){
            choseBtn[i].style.backgroundColor = "gainsboro"
            choseBtn[i].style.color = "black"
            choseBtn[i].addEventListener("mouseout", function(){
                choseBtn[i].style.backgroundColor = "gainsboro"
                choseBtn[i].style.color = "black"
            })
            choseBtn[i].addEventListener("mouseover", function(){
                choseBtn[i].style.backgroundColor = "rgb(46, 165, 76)"
                choseBtn[i].style.color = "black"
            })
        }
    } else {
        spanIcon.innerHTML = 'dark_mode'
        darkLightIcon.style.backgroundColor = "rgb(70, 69, 69)"
        spanIcon.style.color = "white"

        for (let i = 0; i < 3;i++){
            choseBtn[i].style.backgroundColor = "white"
            choseBtn[i].style.color = "black"
            choseBtn[i].addEventListener("mouseout", function(){
                choseBtn[i].style.backgroundColor = "white"
            })
            choseBtn[i].addEventListener("mouseover", function(){
                choseBtn[i].style.backgroundColor = "rgb(46, 165, 76)"
            })
        }
    }
}

function taskDatefunOut() {
    let now = new Date();
    let date = now.toLocaleDateString();
    let time1 = now.toLocaleTimeString();
    let finalTime = `${date} | ${time1}`;
    return finalTime
}
//j 
document.getElementById("add-btn").addEventListener('click', function() {
    let inputList = prompt("Enter the name of your task");
    function taskDatefun() {
        let now = new Date();
        let date = now.toLocaleDateString();
        let time1 = now.toLocaleTimeString();
        let finalTime = `${date} | ${time1}`;
        return finalTime
    }
    taskClass.push({
        taskTitle: inputList,
        isDone: false,
        taskDate: taskDatefun()

    });
    renderTasks();
    localStorage.setItem("Tasks", JSON.stringify(taskClass))
});

function doneTrue(){
    checkBtn.style.backgroundColor = 'greenyellow'
    iconCheckSpan.appendChild(iconContentCheck);
    checkBtn.appendChild(iconCheckSpan);
    divInfo.style.backgroundColor = "green"
    divInfo.style.color = 'white'
    divInfo.addEventListener("mouseover", function(){
        divInfo.style.backgroundColor = "green"
        divInfo.style.color = "white"
    
    
    })
    divInfo.addEventListener("mouseout", function(){
        divInfo.style.backgroundColor = "green"
        divInfo.style.color = "white"
    })
    divInfo.style.boxShadow = "none"
}

function doneFalse(){
    checkBtn.style.backgroundColor = 'white'
    iconCheckSpan.remove();
    checkBtn.remove;
    divInfo.style.backgroundColor = "gainsboro"
    divInfo.style.color = 'black'
    divInfo.addEventListener("mouseover", function(){
        divInfo.style.backgroundColor = "rgb(110, 107, 107)"
        divInfo.style.color = "white"
    })
    divInfo.addEventListener("mouseout", function(){
        divInfo.style.backgroundColor = "gainsboro"
        divInfo.style.color = "black"
    })
    divInfo.style.boxShadow = "-5px 6px 20px 0px"
}

function renderTasks() {
    const tasksBar = document.getElementById("tasks-bar");
    tasksBar.innerHTML = ''; // Clear the existing tasks

    taskClass.forEach((task, index) => {
        let divInfo = document.createElement("div");
        divInfo.className = 'div-info';
        let divElement = document.createElement("div");
        divElement.className = 'task-div';
        let h1Element = document.createElement("h2");
        let textContent = document.createTextNode(task.taskTitle);
        let pDateTime = document.createElement('p');
        pDateTime.className = 'date-time-p';
        let timeContent = document.createTextNode(task.taskDate);

        // Append each other
        pDateTime.appendChild(timeContent);
        h1Element.appendChild(textContent);
        divElement.appendChild(h1Element);
        divElement.appendChild(pDateTime);
        divInfo.appendChild(divElement);

        // General
        let divTaskButtons = document.createElement("div");
        divTaskButtons.className = "task-buttons";

        // Edit
        let editBtn = document.createElement('button');
        editBtn.className = "edit";
        let iconspan = document.createElement('span');
        iconspan.className = "material-symbols-outlined";
        let iconContent = document.createTextNode('edit');
        iconspan.appendChild(iconContent);
        editBtn.appendChild(iconspan);
        divTaskButtons.appendChild(editBtn);

        // Remove
        let removeBtn = document.createElement('button');
        removeBtn.className = "remove";
        let iconRemoveSpan = document.createElement('span');
        iconRemoveSpan.className = "material-symbols-outlined";
        let iconContentRemove = document.createTextNode('delete');
        iconRemoveSpan.appendChild(iconContentRemove);
        removeBtn.appendChild(iconRemoveSpan);
        divTaskButtons.appendChild(removeBtn);

        // CheckBox
        let checkBtn = document.createElement('button');
        checkBtn.id = "check";
        let iconCheckSpan = document.createElement('span');
        iconCheckSpan.className = "material-symbols-outlined";
        let iconContentCheck = document.createTextNode('check');
        
        
        divTaskButtons.appendChild(checkBtn);
        //if render isDone true false

        if (task.isDone == true){
            doneTrue()
        } else {
            doneFalse()
        }

        // Append the task buttons to divInfo
        divInfo.appendChild(divTaskButtons);
        tasksBar.appendChild(divInfo);

        // Attach event listener to the remove button
        removeBtn.addEventListener('click', () => {
            alert("Are you sure you want to remove the task?")
            taskClass.splice(index, 1); // Remove the task from the array
            renderTasks(); // Re-render the task list
            localStorage.setItem("Tasks", JSON.stringify(taskClass))
        });

        function doneTrue(){
            checkBtn.style.backgroundColor = 'greenyellow'
            iconCheckSpan.appendChild(iconContentCheck);
            checkBtn.appendChild(iconCheckSpan);
            divInfo.style.backgroundColor = "green"
            divInfo.style.color = 'white'
            divInfo.addEventListener("mouseover", function(){
                divInfo.style.backgroundColor = "green"
                divInfo.style.color = "white"
            
            
            })
            divInfo.addEventListener("mouseout", function(){
                divInfo.style.backgroundColor = "green"
                divInfo.style.color = "white"
            })
            divInfo.style.boxShadow = "none"
        }
        function doneFalse(){
            checkBtn.style.backgroundColor = 'white'
            iconCheckSpan.remove();
            checkBtn.remove;
            divInfo.style.backgroundColor = "gainsboro"
            divInfo.style.color = 'black'
            divInfo.addEventListener("mouseover", function(){
                divInfo.style.backgroundColor = "rgb(50, 28, 160)"
                divInfo.style.color = "white"
            })
            divInfo.addEventListener("mouseout", function(){
                divInfo.style.backgroundColor = "gainsboro"
                divInfo.style.color = "black"
            })
            divInfo.style.boxShadow = "-5px 6px 20px 0px"
        }

        //Atach event listener to the check button
        checkBtn.addEventListener("click", function(){
            
            task.isDone = true
            doneTrue()
            divInfo.style.order = 1
            localStorage.setItem("Tasks", JSON.stringify(taskClass))
        })

        checkBtn.addEventListener("dblclick", function(){
            
            task.isDone = false
            doneFalse()
            divInfo.style.order = -1
            localStorage.setItem("Tasks", JSON.stringify(taskClass))
        })

        editBtn.addEventListener("click", function(){
            let newTitle = prompt("Enter new task title", task.taskTitle);
            if (newTitle !== null && newTitle.trim() !== "") {
                task.taskTitle = newTitle;
                renderTasks();
            }
            localStorage.setItem("Tasks", JSON.stringify(taskClass))
        })

        // choices event listener

        let all = document.getElementById("all")
        let completed = document.getElementById("completed")
        let uncompleted = document.getElementById("uncompleted")

        all.addEventListener("click", function(){
            if (task.isDone == true || task.isDone == false){
                divInfo.style.display = "flex"
            }

            Array.from(choseBtn).forEach(chose => {
                chose.classList.remove("blue")
            })
            this.classList.add("blue")
        })
        

        completed.addEventListener("click", function(){
            if (task.isDone == false){
                divInfo.style.display = "none"
            } else {
                divInfo.style.display = "flex"
            }
            Array.from(choseBtn).forEach(chose => {
                chose.classList.remove("blue")
            })
            this.classList.add("blue")
        })

        uncompleted.addEventListener("click", function(){
            if (task.isDone == true){
                divInfo.style.display = "none"
            } else {
                divInfo.style.display = "flex"
            }
            Array.from(choseBtn).forEach(chose => {
                chose.classList.remove("blue")
            })
            this.classList.add("blue")
        })

    });
}

// Initial render
renderTasks();
