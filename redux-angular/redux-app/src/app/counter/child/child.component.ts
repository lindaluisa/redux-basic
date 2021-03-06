import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {
@Input() counter: number;
@Output() changeCounter = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  multiply() {
    this.counter *= 2;
    this.changeCounter.emit(this.counter);
  }

  divide() {
    this.counter /= 2;
    this.changeCounter.emit(this.counter);
  }

  resetGrandchild( newCounter ) {
    this.counter = newCounter;
    this.changeCounter.emit(this.counter);
  }

}
