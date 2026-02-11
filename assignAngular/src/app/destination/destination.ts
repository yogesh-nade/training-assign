import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-destination',
  imports: [CommonModule],
  templateUrl: './destination.html',
  styleUrl: './destination.css',
})
export class Destination implements OnInit {
  id: string = '';
  name: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
      this.email = params['email'];
    });
  }
}
