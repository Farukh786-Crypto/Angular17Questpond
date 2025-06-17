import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
  productName: string = 'Angular Book';
  productcode: string = 'ANG-001';

  onClickMe() {
    //console.log('Button clicked!');
    alert(`Button clicked! Product: ${this.productName}`);
  }
}
