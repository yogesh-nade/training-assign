import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-source',
  imports: [FormsModule],
  templateUrl: './source.html',
  styleUrl: './source.css',
})
export class Source {
  id: string = '';
  name: string = '';
  email: string = '';

  constructor(private router: Router) {}

  navigateToDestination(): void {
    this.router.navigate(['/destination', this.id, this.name, this.email]);
  }
}
