import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-style-class',
  imports: [CommonModule],
  templateUrl: './ng-style-class.html',
  styleUrl: './ng-style-class.css',
})
export class NgStyleClass {
  paragraphStyles = {
    'background-color': 'red',
    'font-size': '26px',
    'padding': '10px',
    'color': 'white'
  };
}
