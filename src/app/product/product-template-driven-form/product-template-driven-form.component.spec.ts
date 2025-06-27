import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTemplateDrivenFormComponent } from './product-template-driven-form.component';

describe('ProductTemplateDrivenFormComponent', () => {
  let component: ProductTemplateDrivenFormComponent;
  let fixture: ComponentFixture<ProductTemplateDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTemplateDrivenFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
