const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container"); // Use querySelector to select by class

document.getElementById("add-btn").addEventListener("click", addTask);
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!!!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value; // Use textContent to set text
        let span = document.createElement("span");
        span.innerHTML = '<iconify-icon icon="mdi:trash"></iconify-icon>'; // Corrected iconify-icon HTML
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

// save data to LocalStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toUpperCase() === "LI") {
        e.target.classList.toggle("checked"); // Corrected classList
        saveData(); // Corrected function name
    } else if (e.target.tagName.toUpperCase() === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// fetch data from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
