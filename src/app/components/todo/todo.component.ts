import { Component } from '@angular/core';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  todos!: ToDo[];
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { content: 'first content', completed: true },
      { content: 'second content', completed: true },
    ];
  }
}
