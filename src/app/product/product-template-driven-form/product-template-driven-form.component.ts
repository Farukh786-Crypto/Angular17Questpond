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

  onFormControl(frm: NgForm, controlName: string) {
    return (
      frm.controls[controlName]?.invalid &&
      (frm.controls[controlName]?.touched || frm.controls[controlName]?.dirty)
    );
  }

  // Used to check for specific validation errors like 'required', 'pattern', etc.
  hasError(frm: NgForm, controlName: string, errorType: string): boolean {
    return (
      frm.controls[controlName]?.errors?.[errorType] &&
      (frm.controls[controlName]?.touched || frm.controls[controlName]?.dirty)
    );
  }

  onSubmit(form: NgForm) {
    console.log(form, 'Form Submitted!');
    // Mark all controls as touched
    Object.keys(form.controls).forEach((controlName) => {
      form.controls[controlName].markAsTouched();
    });

    if (form.valid) {
      console.log('Form Submitted!', form);
      console.log('Product:', this.product);
      form.resetForm(); // Reset the form after submission
    }
  }
}
