import { Component, inject } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { MypipePipe } from '../custom/mypipe.pipe';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pipe-sample',
  standalone: true,
  imports: [CommonModule, MypipePipe, RouterModule],
  templateUrl: './pipe-sample.component.html',
  styleUrl: './pipe-sample.component.css',
})
export class PipeSampleComponent {
  product!: Product;
  date!: Date;
  router = inject(Router);

  constructor() {
    this.date = new Date();
    this.product = new Product(1, 'ANG-001', 'Angular Book', 30);
  }

  onRedirect() {
    this.router.navigate(['dir', this.product.id], {
      queryParams: { city: 'Hyderabad', country: 'India' },
    });
  }
}
