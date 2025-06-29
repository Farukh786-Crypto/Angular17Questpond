import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
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
  skills!: FormArray;

  constructor(private fb: FormBuilder) {
    this.initializeForm();
  }
  initializeForm() {
    // this.productForm = new FormGroup({
    // productid: new FormControl(''),});

    this.productForm = this.fb.group({
      productid: this.fb.control('', [Validators.required]),
      // updateOn: 'blur': Specifies that the control's value and
      //  validation  status should only update when the control loses focus.
      productcode: this.fb.control('', {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      productname: this.fb.control('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]+$'),
      ]),
      productprice: this.fb.control('', [Validators.required]),
      skills: this.fb.array([]), // Initialize FormArray for skills
      description: this.fb.group({
        productshortdesc: this.fb.control('', [Validators.required]),
        productlongdesc: this.fb.control('', [Validators.required]),
      }),
    });

    // this.productForm.valueChanges.subscribe((value) => {
    //   console.log('Form Value Changed:', value);
    // });

    this.skills = this.productForm.get('skills') as FormArray;

    this.productForm.get('productcode')?.valueChanges.subscribe((data) => {
      // perform any action based on product code change if
      // we type p then productprice is required else not required
      console.log('Product Code Changed:', data);
      let priceCtrl = this.productForm.get('productprice');
      if (priceCtrl) {
        priceCtrl?.clearValidators();
      }
      if (data != null && data.indexOf('p') != -1) {
        priceCtrl?.addValidators([Validators.required]);
      }

      priceCtrl?.updateValueAndValidity();
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

  AddSkill() {
    const skillgrp = new FormGroup({
      level: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
    });

    this.skills.push(skillgrp);
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSkillInvalid(index: number) {
    const grp = this.skills.at(index) as FormGroup;
    return grp.invalid && (grp.touched || grp.dirty);
  }

  onSubmit() {
    // Mark all controls as touched
    Object.keys(this.productForm.controls).forEach((controlName) => {
      this.productForm.controls[controlName].markAsTouched();
    });

    if (this.productForm.valid) {
      console.log('Form Submitted!', this.productForm);
      console.log('Product:', this.productForm.value);
      let data = JSON.stringify(this.productForm.value);
      alert(`Form Submitted! Data: ${data}`);
      //this.productForm.reset(); // Reset the form after submission
    }
  }

  disabledValidation() {
    // find the element
    let productctrl = this.productForm.get('productname');
    // clear the control
    if (productctrl) {
      productctrl.clearValidators();
      productctrl.updateValueAndValidity();
    }
  }

  Reset() {
    this.productForm.reset();
  }

  UpdateForm() {
    // this.productForm.get('productid')?.setValue('P001');

    this.productForm.patchValue({
      productid: 'P001',
      productcode: 'ANG-001',
      productname: 'Angular Book',
      productprice: 30,
      description: {
        productshortdesc: 'Short description of Angular Book',
        productlongdesc: 'Long description of Angular Book',
      },
    });
  }
}
