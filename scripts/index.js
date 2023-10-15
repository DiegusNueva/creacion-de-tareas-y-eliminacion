/**
 * Autor: Diego Alonso Molina (Full Stack Developer)
 * GitHub: https://github.com/DiegusNueva/creacion-de-tareas-y-eliminacion.git
 */

// Agrega un evento al botón en JavaScript
const taskBtn = document.getElementById("taskBtn"); // Reemplaza "taskBtn" con el ID de tu botón.
taskBtn.addEventListener("click", addTask);

// Agrega un evento al botón "Limpiar Tareas" en JavaScript
const clearBtn = document.getElementById("clearTasks"); // Reemplaza "clearTasks" con el ID de tu botón.
clearBtn.addEventListener("click", clearAllTasks);

// Agrega un evento para detectar la tecla "Enter" en el campo de entrada
taskInput.addEventListener("keyup", function (event) {
    (event.key === "Enter") ? addTask() : null;
});

function addTask() {
    // Obtiene el valor del campo de entrada y lo elimina de espacios en blanco al principio y al final
    const taskText = taskInput.value.trim();

    // Verifica si el campo de entrada está vacío
    if (taskText === "") {
        // Si está vacío, muestra una alerta al usuario y detiene la ejecución de la función
        alert("Por favor, ingrese una tarea válida.");
        return;
    }

    // Crea un nuevo elemento de lista (<li>) en el documento
    const li = document.createElement("li");

    // Crea un elemento de entrada de tipo "checkbox"
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // Establece el tipo de entrada como "checkbox"
    checkbox.className = "checkbox"; // Asigna una clase para estilizarlo

    // Crea un elemento de etiqueta (<label>) para mostrar el texto de la tarea
    const taskLabel = document.createElement("label");
    taskLabel.textContent = taskText; // Establece el contenido de la etiqueta como el texto de la tarea

    // Agrega un evento para cambiar el estado de completado cuando se marca o desmarca el checkbox
    checkbox.addEventListener("change", () => {
        taskLabel.classList.toggle("completed", checkbox.checked);
    });

    // Agrega el elemento de entrada de tipo "checkbox" y la etiqueta a la lista (<li>)
    li.appendChild(checkbox);
    li.appendChild(taskLabel);

    // Agrega el elemento <li> a la lista de tareas (taskList)
    taskList.appendChild(li);

    // Limpia el campo de entrada (borra el texto) y establece el foco en él para una nueva entrada
    taskInput.value = "";
    taskInput.focus();
}

function clearAllTasks() {
    // Obtén todas las tareas
    const tasks = document.querySelectorAll("li");

    // Recorre todas las tareas y elimínalas
    for (let i = 0; i < tasks.length; i++) {
        taskList.removeChild(tasks[i]);
    }
}



