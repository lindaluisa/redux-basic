import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  counter: number;

  constructor() {
    this.counter = 10;
  }

  increment() {
    return this.counter ++;
  }

  decrement() {
    return this.counter --;
  }
}


