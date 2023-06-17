document.addEventListener('DOMContentLoaded', function() {
    var addButton = document.getElementById('add-button');
    var taskInput = document.getElementById('task-input');
    var taskList = document.getElementById('task-list');
  
    addButton.addEventListener('click', function() {
      var taskText = taskInput.value.trim();
      if (taskText !== '') {
        var taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = '<span>' + taskText + '</span><button class="delete-button">Delete</button>';
        taskList.appendChild(taskItem);
        taskInput.value = '';
  
        var deleteButtons = document.getElementsByClassName('delete-button');
        for (var i = 0; i < deleteButtons.length; i++) {
          deleteButtons[i].addEventListener('click', function() {
            this.parentNode.remove();
          });
        }
      }
    });
  });
  