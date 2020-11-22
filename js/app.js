function creteTodoItem(title){
		const checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.className = 'checkbox';

		const label = document.createElement('label');
		label.innerText = title;
		label.className = title;

		const editInput = document.createElement('input');
		editInput.type = 'text';
		editInput.className = 'textfiled';

		const editButton = document.createElement('button');
		editButton.innerText = 'Изменить';
		editButton.className = 'edit';

		const deleteButton = document.createElement('button');
		editButton.innerText = 'Удалить';
		editButton.className = 'delete';

		const listItem = document.createElement('li');
		listItem.className = 'todo-item';

		listItem.appendChild('checkbox');
    	listItem.appendChild('label');
    	listItem.appendChild('editInput');
		listItem.appendChild('editButton');
		listItem.appendChild('deleteButton');
    	console.log(listItem);
   	 	return listItem;

}


function addTodoItem(event){
		event.preventDefault();

		if(addInput.value === '') return alert('Необходимо ввести название задачи(You must enter the name of the task)');
		const listItem = createTodoItem(addInput.value);


}



const todoForm = document.getEltmentById('todo-form');
const addInput = document.getEltmentById('add-input');
const todoList = document.getEltmentById('todo-list');
const todoItem = document.querySelectorAll('.todo-item');

todoForm.addEventListener('submit, addTodoItem');