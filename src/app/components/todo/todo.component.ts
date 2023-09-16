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
  inputTimeFrom: string = '';
  inputTimeTo: string = '';
  error: boolean = false;

  constructor() {}

  ngOnInit(): void {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    } else {
      this.todos = [];
    }
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    this.inputTimeFrom = `${hours}:${minutes}`;
    this.inputTimeTo = `${hours}:${minutes}`;
  }

  addTodo() {
    if (this.inputTodo === '') {
      this.error = true;
    } else {
      this.error = false;
      this.todos.push({
        id: this.todos.length + 1,
        content: this.inputTodo,
        completed: false,
        timeFrom: this.inputTimeFrom,
        timeTo: this.inputTimeTo,
      });
      this.inputTodo = '';
      const currentTime = new Date();
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      this.inputTimeFrom = `${hours}:${minutes}`;
      this.inputTimeTo = `${hours}:${minutes}`;
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

  deleteAll() {
    localStorage.removeItem('todos');
    this.todos = [];
  }
}
