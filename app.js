
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

        console.log(event.target)

    }
    else if(event.target.className == 'complied'){

        console.log(event.target)

    }
    else if(event.target.className == 'edit'){

        console.log(event.target)

    }

})



// add to click event to add btn 
// get the input value 