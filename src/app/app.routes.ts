import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveSampleComponent } from './directive-sample/directive-sample.component';

export const routes: Routes = [
  { path: '', redirectTo: '/databinding', pathMatch: 'full' },
  { path: 'databinding', component: DatabindingComponent },
  { path: 'dir/:id', component: DirectiveSampleComponent },
  {
    path: 'pipesample',
    loadComponent: () =>
      import('./pipe-sample/pipe-sample.component').then(
        (m) => m.PipeSampleComponent
      ),
  },
  { path: '**', redirectTo: '/databinding' }, // Wildcard route for a 404 page
];
