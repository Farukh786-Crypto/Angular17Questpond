import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { FavsDirective } from '../../custom/favs.directive';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [CommonModule, FavsDirective],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.css',
})
export class DatatableComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() selectedColor: string = 'Red'; // Default selected color

  ngOnInit(): void {
    // Initialization logic can go here if needed
    if (Array.isArray(this.products)) {
      console.log('Products:', this.products);
    }
  }

  addNewProductButton() {
    this.products.push({
      id: this.products.length + 1,
      code: 'Asus',
      name: 'Laptop',
      price: Math.floor(Math.random() * 100) + 1,
    });
    console.log('New product added:', this.products[this.products.length - 1]);
  }
}
