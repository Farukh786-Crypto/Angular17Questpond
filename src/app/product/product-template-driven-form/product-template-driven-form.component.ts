import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-template-driven-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-template-driven-form.component.html',
  styleUrl: './product-template-driven-form.component.css',
})
export class ProductTemplateDrivenFormComponent {
  product: Product = new Product(); // Declare and initialize the property here
  constructor() {}

  onSubmit(form: NgForm) {
    // Mark all controls as touched
    Object.keys(form.controls).forEach((controlName) => {
      form.controls[controlName].markAsTouched();
    });
    console.log('Form Submitted!', form);
    // Here you can handle the form submission, e.g., send it to a server
  }
}
