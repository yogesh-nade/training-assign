import { Component } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promise-observable',
  imports: [CommonModule],
  templateUrl: './promise-observable.html',
  styleUrl: './promise-observable.css',
})
export class PromiseObservable {
  promiseValue: number | null = null;
  observableValue: string | null = null;

  async getPromise(): Promise<number> {
    // Simulate async operation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 1000));
      }, 1000);
    });
  }

  getObservable(): Observable<string> {
    // Return observable with delayed emission
    return of('Hello from Observable!').pipe(delay(1000));
  }

  async handleButtonClick(): Promise<void> {
    // Handle Promise using then
    this.getPromise().then((value) => {
      this.promiseValue = value;
    });

    // Handle Observable using subscribe
    this.getObservable().subscribe((value) => {
      this.observableValue = value;
    });
  }
}
