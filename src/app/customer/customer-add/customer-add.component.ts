import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerListComponent } from '../customer-list/customer-list.component';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomerListComponent],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css',
})
export class CustomerAddComponent {
  customerName!: string;
  customers: string[] = [];
  // take control of this component by using ViewChildren
  // This allows us to access the CustomerListComponent instance
  // and call its methods or access its properties if neededs
  @ViewChild(CustomerListComponent) custList!: CustomerListComponent;

  @ViewChild('divmessage') div: ElementRef | undefined;

  addCustomer(): void {
    //this.customers.push(this.customerName);

    this.custList.customerList.push(this.customerName);
    // Clear the input field after adding the customer

    if (this.div) {
      this.div.nativeElement.innerText = 'Customer added successfully!';
      setTimeout(() => {
        this.div!.nativeElement.innerText = '';
      }, 2000);
    }
    this.customerName = '';
  }

  onSelectCustomer(event: string) {
    this.customerName = event;
  }
}
