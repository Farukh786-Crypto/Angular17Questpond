import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';
import { PipeSampleComponent } from './pipe-sample/pipe-sample.component';
import { PersonalComponent } from './pipe-sample/personal/personal.component';
import { EducationComponent } from './pipe-sample/education/education.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';

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
  { path: '**', redirectTo: '/databinding' }, // Wildcard route for a 404 page
];
