import { Component } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';
import { MypipePipe } from '../custom/mypipe.pipe';

@Component({
  selector: 'app-pipe-sample',
  standalone: true,
  imports: [CommonModule, MypipePipe],
  templateUrl: './pipe-sample.component.html',
  styleUrl: './pipe-sample.component.css',
})
export class PipeSampleComponent {
  product!: Product;
  date!: Date;
  constructor() {
    this.date = new Date();
    this.product = new Product(1, 'ANG-001', 'Angular Book', 30);
  }
}
