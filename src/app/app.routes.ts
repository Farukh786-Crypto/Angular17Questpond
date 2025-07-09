import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import { PersonalComponent } from './pipe-sample/personal/personal.component';
import { EducationComponent } from './pipe-sample/education/education.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { ProductTemplateDrivenFormComponent } from './product/product-template-driven-form/product-template-driven-form.component';
import { ModeldrivenFormComponent } from './product/modeldriven-form/modeldriven-form.component';
import { ObervableSampleComponent } from './obervable-sample/obervable-sample.component';

export const routes: Routes = [
  { path: '', redirectTo: '/databinding', pathMatch: 'full' },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'dir/:id', component: DirectiveSampleComponent },
  {
    path: 'pipesample',
    component: PipeSampleComponent,
    children: [
      { path: 'personal', component: PersonalComponent },
      { path: 'education', component: EducationComponent },
    ],
  },
  { path: 'datasharing', component: CustomerAddComponent },
  { path: 'templateForm', component: ProductTemplateDrivenFormComponent },
  { path: 'modelForm', component: ModeldrivenFormComponent },
  { path: 'observable', component: ObervableSampleComponent },
  { path: '**', redirectTo: '/databinding' }, // Wildcard route for a 404 page
];
