import { TodoComponent } from './components/todo/todo.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, TodoComponent],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([{ path: '', component: TodoComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
