import { Route } from '@angular/router';
import { SharedComponent } from '@shared';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    // pathMatch: 'full',
    component: SharedComponent,
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: SharedComponent,
  },
  // {
  //   path: '**',
  //   // pathMatch: 'full',
  //   // component: SharedComponent,
  //   redirectTo: 'home'
  // },
];
