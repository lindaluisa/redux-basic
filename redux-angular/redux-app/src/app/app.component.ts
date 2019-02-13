import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  counter: number;

  constructor( private store: Store<AppState>) {
  //  this.counter = 10;
    this.store.subscribe( state => {
      this.counter = state.counter;
    });
  }

  increment() {
  //  return this.counter ++;
    const action: Action = {
      type: 'INCREMENT'
    };
    this.store.dispatch( action );
  }

  decrement() {
  //  return this.counter --;
    const action: Action = {
      type: 'DECREMENT'
    };

    this.store.dispatch( action );
  }


/*   curlyFn(x: number) {
    if (x > 0 ) this.increment();
  } */
  // curlyFn(1);
}



