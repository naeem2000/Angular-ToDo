import { TodoComponent } from './components/todo/todo.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
