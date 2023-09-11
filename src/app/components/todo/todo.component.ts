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
  inputTime: string = '';

  constructor() {}

  ngOnInit(): void {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    this.inputTime = `${hours}:${minutes}`;
  }

  addTodo() {
    if (this.inputTodo === '') {
      console.log('naah');
    } else {
      this.todos.push({
        id: this.todos.length + 1,
        content: this.inputTodo,
        completed: false,
        time: this.inputTime,
      });
      this.inputTodo = '';
      const currentTime = new Date();
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      this.inputTime = `${hours}:${minutes}`;
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
