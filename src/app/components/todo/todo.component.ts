import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/types/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  todos!: ToDo[];
  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  addTodo() {
    if (this.inputTodo === '') {
      console.log('naah');
    } else {
      this.todos.push({
        id: this.todos.length + 1,
        content: this.inputTodo,
        completed: false,
      });
      this.inputTodo = '';
      this.saveTodos();
    }
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
    this.saveTodos();
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
    this.saveTodos();
  }

  saveTodos(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
