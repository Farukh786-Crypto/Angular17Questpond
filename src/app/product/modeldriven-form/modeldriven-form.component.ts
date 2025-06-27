import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-modeldriven-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './modeldriven-form.component.html',
  styleUrl: './modeldriven-form.component.css',
})
export class ModeldrivenFormComponent {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }
  initializeForm() {
    // this.productForm = new FormGroup({
    // productid: new FormControl(''),});

    this.productForm = this.fb.group({
      productid: this.fb.control('', [Validators.required]),
      productcode: this.fb.control('', [Validators.required]),
      productname: this.fb.control('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]+$'),
      ]),
      productprice: this.fb.control('', [Validators.required]),
    });
  }

  onFormControl(controlName: string) {
    return (
      this.productForm.controls[controlName]?.invalid &&
      (this.productForm.controls[controlName]?.touched ||
        this.productForm.controls[controlName]?.dirty)
    );
  }

  onFormControlRequired(controlName: string, isRequired: string) {
    return this.productForm.controls[controlName]?.errors?.[isRequired];
  }

  // Used to check for specific validation errors like 'required', 'pattern', etc.
  hasError(controlName: string, errorType: string): boolean {
    return (
      this.productForm.controls[controlName]?.errors?.[errorType] &&
      (this.productForm.controls[controlName]?.touched ||
        this.productForm.controls[controlName]?.dirty)
    );
  }

  onSubmit(productForm: FormGroup) {
    // Mark all controls as touched
    Object.keys(productForm.controls).forEach((controlName) => {
      productForm.controls[controlName].markAsTouched();
    });

    if (productForm.valid) {
      console.log('Form Submitted!', productForm);
      console.log('Product:', productForm.value);
      this.productForm.reset(); // Reset the form after submission
    }
  }
}
