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
  error: boolean = false;
  inputTimeTo: string = '';
  inputTimeFrom: string = '';
  confirmDeleteAll: boolean = false;

  constructor() {}

  getTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    return { hours, minutes };
  }

  ngOnInit(): void {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    } else {
      this.todos = [];
    }
    const { hours, minutes } = this.getTime();
    this.inputTimeFrom = `${hours}:${minutes}`;
    this.inputTimeTo = `${hours}:${minutes}`;
  }

  addTodo() {
    if (this.inputTodo === '') {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 2000);
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
      const { hours, minutes } = this.getTime();
      this.inputTimeFrom = `${hours}:${minutes}`;
      this.inputTimeTo = `${hours}:${minutes}`;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteAll() {
    if (this.todos.length > 0) {
      this.confirmDeleteAll = true;
    }
  }

  deleteEverything() {
    this.confirmDeleteAll = false;
    localStorage.removeItem('todos');
    this.todos = [];
  }
}
