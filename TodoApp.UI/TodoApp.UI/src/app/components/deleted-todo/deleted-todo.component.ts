import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-deleted-todo',
  templateUrl: './deleted-todo.component.html',
  styleUrls: ['./deleted-todo.component.css']
})
export class DeletedTodoComponent implements OnInit{
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }
  ngOnInit(): void {
    this.getAllDeletedTodos();
  }

  getAllDeletedTodos(){
    this.todoService.getAllDeletedTodos()
    .subscribe({
      next: (todos) => {
        this.todos = todos;
      }
    });
  }

  undoTodo(id: string, todo: Todo){
    this.todoService.undoTodo(id, todo)
    .subscribe({
      next: (response) => {
        this.getAllDeletedTodos();
      }
    });
  }
}
