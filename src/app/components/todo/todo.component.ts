import { Component } from '@angular/core';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todos!: ToDo[];
  inputTodo: string = '';
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { id: 1, content: 'first content', completed: false },
      { id: 2, content: 'second content', completed: false },
      { id: 3, content: 'third content', completed: false },
    ];
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
}
