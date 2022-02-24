// select all item 
// add to click event to add btn 
// get the input value 

function getById(id){
    return document.getElementById(id);
}

const addBtn = getById('addNewBtn');
const inputField = getById('newTaskInput')
const taskList = getById('task_list')

addBtn.addEventListener('click', function(e){
    let newTaskName = inputField.value;
   
    if(!newTaskName){
        alert('Please input a new task')
        return
    }
    inputField.value = '';
    addNewItem(newTaskName)
    
})

function addNewItem(text){
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `<li>${text}</li>
    <button class="edit"><i class="fas fa-pen"></i></button>
    <button class="complied"><i class="fas fa-check"></i></button>
    <button class="delete"><i class="fas fa-trash-can"></i></button>
    `;
    console.log(item)
    console.dir(item)

    taskList.appendChild(item);
}

taskList.addEventListener('click',function(event){

    if(event.target.className == 'delete'){

        deleteItem(event)

    }
    else if(event.target.className == 'complied'){

        CompleteTask(event)

    }
    else if(event.target.className == 'edit'){

        editTaskName(event)

    }

})

// function for delete item 

function deleteItem(event){
    event.target.parentElement.remove()
}

// function for completed task  

function CompleteTask(event){
   const li = event.target.parentElement.firstElementChild;
  li.classList.toggle('complied_task')
}
//  function for edit task name 

function editTaskName(event){
   const li = event.target.parentElement.firstElementChild 
    const previousText = li.innerHTML;
    li.innerHTML = ''

    const input = document.createElement('input');
    input.type = 'text'
    input.value = previousText;
    input.addEventListener('keypress', function(e){

        if(e.key == "Enter"){
            const modifyName = e.target.value;
                li.innerHTML = ''
                li.innerText = modifyName;
                event.target.style.display = '' 
        }
      
    })
    li.appendChild(input)
    event.target.style.display = 'none'

}
