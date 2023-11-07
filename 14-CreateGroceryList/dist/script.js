const addForm = document.querySelector(".add");
let List = [];

// adding eventlistener
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputText = addForm.add.value;
  addTask(inputText);
  addForm.add.value = "";
});

// addTask
function addTask(text) {
  if (text) {
    List.push({
      id: Math.random(),
      text: text,
      isComplete: false
    });
    showData();
  }

}
// updateTask
function updateTask(id, text) {
  if (text) {
    const updatedTask = [...List].map((item) => {
      if (item.id === id) {
        return { ...item, text: text };
      } else {
        return item;
      }
    });

    List.splice(0, List.length);
    List.push(...updatedTask);
    showData();
  }

}

// deleteTask
function deleteTask(id) {
  const updatedTask = [...List].filter((item) => item.id != id);
  List.splice(0, List.length);
  List.push(...updatedTask);
  showData();
}

// completeTask
function completeTask(id) {
  const updatedTask = [...List].map(item => {
    if (item.id === id) {
      return { ...item, isComplete: !item.isComplete }
    } else {
      return item;
    }
  })

  List.splice(0, List.length)
  List.push(...updatedTask)
  showData();
}


// show data
function showData() {
  document.querySelector(".list-wrapper").innerHTML = "";
  List.map((item) => {
    CreateList(item);
  });
}

// create list and storing to array
function CreateList(item) {
  const listWrapper = document.querySelector(".list-wrapper");

  // list content
  const listContent = document.createElement("div");
  listContent.setAttribute('class',
    `${item.isComplete ? 'bg-green-800' : 'bg-zinc-700'} w-full md:w-[50%] px-2 py-1 items-center justify-between gap-4 rounded-lg flex`)


  // checkbox and title
  const checkboxTitle = document.createElement("div");
  checkboxTitle.setAttribute('class', 'flex w-[70%] items-center justify-start gap-2')

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  item.isComplete ? checkbox.setAttribute('checked', true) : '';
  checkbox.addEventListener('change', () => completeTask(item.id))

  // title
  const taskText = document.createElement("input");
  taskText.setAttribute(
    "class",
    `"taskText text-white w-[90%] bg-zinc-500 px-4 rounded-lg py-1 font-bold outline-none`
  );
  taskText.setAttribute("type", "text");
  taskText.setAttribute("value", item.text);
  taskText.addEventListener('change', (e) => updateTask(item.id, e.target.value))


  // append child (checkbox and title)
  checkboxTitle.appendChild(checkbox);
  checkboxTitle.appendChild(taskText);

  // button and  controls
  const buttonControls = document.createElement("div");
  buttonControls.setAttribute(
    "class",
    "flex w-[30%] items-center justify-end gap-2"
  );

  // delete button
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute(
    "class",
    "deleteButton bg-red-500 px-4 py-1 rounded-lg font-bold text-white"
  );
  deleteButton.innerHTML = "Delete";

  deleteButton.addEventListener("click", () => deleteTask(item.id));

  // append child button and controls
  buttonControls.appendChild(deleteButton);

  // append child list content
  listContent.appendChild(checkboxTitle);
  listContent.appendChild(buttonControls);

  // append child list
  listWrapper.appendChild(listContent);
}
