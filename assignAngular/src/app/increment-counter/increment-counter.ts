import { Component } from '@angular/core';

@Component({
  selector: 'app-increment-counter',
  imports: [],
  templateUrl: './increment-counter.html',
  styleUrl: './increment-counter.css',
})
export class IncrementCounter {
  counter: number = 100;

  incrementCounter(): void {
    this.counter++;
  }
}
