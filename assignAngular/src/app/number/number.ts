import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-number',
  imports: [CommonModule],
  templateUrl: './number.html',
  styleUrl: './number.css',
})
export class Number {
  numbers: number[] = [10, 25, 30, 45, 50, 67, 89, 100, 123, 456];

  showNumber(num: number): void {
    alert(`Number: ${num}`);
  }
}
